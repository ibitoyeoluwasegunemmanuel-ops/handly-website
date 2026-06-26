-- HANDLY Founder Command Center Database Schema
-- Additional tables for app analytics and marketplace metrics

-- ===== APP ANALYTICS TABLE =====
CREATE TABLE IF NOT EXISTS app_analytics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  platform VARCHAR(50) NOT NULL CHECK (platform IN ('ios', 'android', 'web')),
  app_version VARCHAR(20),
  total_downloads INTEGER DEFAULT 0,
  active_users INTEGER DEFAULT 0,
  dau INTEGER DEFAULT 0,
  mau INTEGER DEFAULT 0,
  retention_day_1 DECIMAL(4,3) DEFAULT 0,
  retention_day_7 DECIMAL(4,3) DEFAULT 0,
  retention_day_30 DECIMAL(4,3) DEFAULT 0,
  uninstalls INTEGER DEFAULT 0,
  crash_rate DECIMAL(5,4) DEFAULT 0,
  avg_session_duration DECIMAL(5,2) DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

CREATE INDEX idx_app_analytics_platform ON app_analytics(platform);
CREATE INDEX idx_app_analytics_updated_at ON app_analytics(updated_at);

-- ===== APP EVENTS TABLE =====
CREATE TABLE IF NOT EXISTS app_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  platform VARCHAR(50) NOT NULL,
  app_version VARCHAR(20),
  event_type VARCHAR(100),
  user_id UUID,
  session_id VARCHAR(255),
  event_properties JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

CREATE INDEX idx_app_events_platform ON app_events(platform);
CREATE INDEX idx_app_events_event_type ON app_events(event_type);
CREATE INDEX idx_app_events_created_at ON app_events(created_at);
CREATE INDEX idx_app_events_user_id ON app_events(user_id);

-- ===== JOBS TABLE =====
CREATE TABLE IF NOT EXISTS jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  posted_by UUID NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  category VARCHAR(100),
  budget DECIMAL(12,2) NOT NULL,
  status VARCHAR(50) CHECK (status IN ('posted', 'in_progress', 'completed', 'cancelled')),
  assigned_worker UUID,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  completed_at TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

CREATE INDEX idx_jobs_status ON jobs(status);
CREATE INDEX idx_jobs_category ON jobs(category);
CREATE INDEX idx_jobs_posted_by ON jobs(posted_by);
CREATE INDEX idx_jobs_assigned_worker ON jobs(assigned_worker);
CREATE INDEX idx_jobs_created_at ON jobs(created_at);

-- ===== TRANSACTIONS TABLE =====
CREATE TABLE IF NOT EXISTS transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id UUID NOT NULL REFERENCES jobs(id),
  amount DECIMAL(12,2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'USD',
  status VARCHAR(50),
  transaction_type VARCHAR(50),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

CREATE INDEX idx_transactions_job_id ON transactions(job_id);
CREATE INDEX idx_transactions_status ON transactions(status);
CREATE INDEX idx_transactions_created_at ON transactions(created_at);

-- ===== USER RATINGS TABLE =====
CREATE TABLE IF NOT EXISTS user_ratings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  rater_id UUID NOT NULL,
  ratee_id UUID NOT NULL,
  job_id UUID REFERENCES jobs(id),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  review TEXT,
  category VARCHAR(50),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

CREATE INDEX idx_user_ratings_ratee_id ON user_ratings(ratee_id);
CREATE INDEX idx_user_ratings_rater_id ON user_ratings(rater_id);
CREATE INDEX idx_user_ratings_created_at ON user_ratings(created_at);

-- ===== MATERIALIZED VIEW FOR MARKETPLACE METRICS =====
CREATE MATERIALIZED VIEW marketplace_metrics AS
SELECT
  (SELECT COUNT(*) FROM waitlist WHERE type = 'customer') as total_customers,
  (SELECT COUNT(*) FROM waitlist WHERE type = 'worker') as total_workers,
  (SELECT COUNT(*) FROM waitlist WHERE type = 'business') as total_businesses,
  (SELECT COUNT(*) FROM jobs WHERE status = 'posted') as active_jobs,
  (SELECT COUNT(*) FROM jobs WHERE status = 'completed') as jobs_completed,
  (SELECT COUNT(*) FROM transactions) as total_transactions,
  (SELECT COALESCE(SUM(amount), 0) FROM transactions) as gross_revenue,
  (SELECT COALESCE(SUM(amount * 0.3), 0) FROM transactions) as platform_revenue,
  (SELECT COALESCE(AVG(budget), 0) FROM jobs) as avg_job_value,
  (SELECT COALESCE(AVG(rating), 0) FROM user_ratings WHERE category = 'worker') as worker_satisfaction,
  (SELECT COALESCE(AVG(rating), 0) FROM user_ratings WHERE category = 'customer') as customer_satisfaction,
  NOW() as updated_at;

CREATE UNIQUE INDEX idx_marketplace_metrics ON marketplace_metrics((updated_at IS NOT NULL));

-- ===== DAILY METRICS VIEW =====
CREATE OR REPLACE VIEW daily_metrics AS
SELECT
  DATE(created_at) as day,
  COUNT(DISTINCT posted_by) as job_posters,
  COUNT(*) as jobs_posted,
  (SELECT COUNT(DISTINCT assigned_worker) FROM jobs WHERE DATE(completed_at) = DATE(created_at) AND status = 'completed') as jobs_completed_today,
  (SELECT COUNT(*) FROM transactions WHERE DATE(created_at) = DATE(jobs.created_at)) as transactions_today,
  (SELECT COALESCE(SUM(amount), 0) FROM transactions WHERE DATE(created_at) = DATE(jobs.created_at)) as revenue_today
FROM jobs
GROUP BY DATE(created_at)
ORDER BY day DESC;

-- ===== RETENTION COHORT VIEW =====
CREATE OR REPLACE VIEW retention_cohorts AS
SELECT
  DATE(ae.created_at) as cohort_date,
  DATE(CURRENT_DATE) - DATE(ae.created_at) as days_since_install,
  COUNT(DISTINCT ae.user_id) as active_users
FROM app_events ae
WHERE ae.event_type IN ('app_open', 'session_start')
GROUP BY DATE(ae.created_at), days_since_install
ORDER BY cohort_date DESC, days_since_install ASC;

-- ===== ENABLE RLS =====
ALTER TABLE app_analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE app_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_ratings ENABLE ROW LEVEL SECURITY;

-- ===== RLS POLICIES =====

-- App Events: Public can insert (for mobile apps)
CREATE POLICY "Allow public to insert app events" ON app_events
  FOR INSERT
  WITH CHECK (true);

-- Jobs: Public can insert
CREATE POLICY "Allow public to post jobs" ON jobs
  FOR INSERT
  WITH CHECK (true);

-- Transactions: Public can insert
CREATE POLICY "Allow public to create transactions" ON transactions
  FOR INSERT
  WITH CHECK (true);

-- Ratings: Public can insert
CREATE POLICY "Allow public to rate" ON user_ratings
  FOR INSERT
  WITH CHECK (true);

-- Admin can read all
CREATE POLICY "Allow authenticated to read" ON app_analytics
  FOR SELECT
  USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated to read app_events" ON app_events
  FOR SELECT
  USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated to read jobs" ON jobs
  FOR SELECT
  USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated to read transactions" ON transactions
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- ===== TRIGGERS =====
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = timezone('utc'::text, now());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER app_analytics_updated_at_trigger
BEFORE UPDATE ON app_analytics
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER jobs_updated_at_trigger
BEFORE UPDATE ON jobs
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER transactions_updated_at_trigger
BEFORE UPDATE ON transactions
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- ===== REFRESH MATERIALIZED VIEW FUNCTION =====
CREATE OR REPLACE FUNCTION refresh_marketplace_metrics()
RETURNS void AS $$
BEGIN
  REFRESH MATERIALIZED VIEW CONCURRENTLY marketplace_metrics;
END;
$$ LANGUAGE plpgsql;

-- Schedule to refresh every hour (requires pg_cron extension)
-- SELECT cron.schedule('refresh_marketplace_metrics', '0 * * * *', 'SELECT refresh_marketplace_metrics()');
