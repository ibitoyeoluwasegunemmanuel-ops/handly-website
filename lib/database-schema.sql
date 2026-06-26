-- HANDLY Analytics Database Schema
-- Run this SQL in your Supabase project to set up all required tables

-- ===== WAITLIST TABLE =====
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) NOT NULL UNIQUE,
  phone VARCHAR(20) NOT NULL,
  type VARCHAR(50) NOT NULL CHECK (type IN ('customer', 'worker', 'business')),
  state VARCHAR(100),
  city VARCHAR(100),
  referral_code VARCHAR(50),
  referred_by VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

CREATE INDEX idx_waitlist_email ON waitlist(email);
CREATE INDEX idx_waitlist_type ON waitlist(type);
CREATE INDEX idx_waitlist_state ON waitlist(state);
CREATE INDEX idx_waitlist_created_at ON waitlist(created_at);

-- ===== ANALYTICS EVENTS TABLE =====
CREATE TABLE IF NOT EXISTS analytics_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type VARCHAR(50) NOT NULL,
  user_id UUID,
  session_id VARCHAR(255) NOT NULL,
  page_path VARCHAR(500),
  referrer VARCHAR(500),
  country VARCHAR(100),
  city VARCHAR(100),
  device_type VARCHAR(50),
  device_os VARCHAR(100),
  browser VARCHAR(100),
  ip_address VARCHAR(45),
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

CREATE INDEX idx_analytics_event_type ON analytics_events(event_type);
CREATE INDEX idx_analytics_session_id ON analytics_events(session_id);
CREATE INDEX idx_analytics_created_at ON analytics_events(created_at);
CREATE INDEX idx_analytics_page_path ON analytics_events(page_path);
CREATE INDEX idx_analytics_device_type ON analytics_events(device_type);

-- ===== DOWNLOAD EVENTS TABLE =====
CREATE TABLE IF NOT EXISTS download_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  download_type VARCHAR(50) NOT NULL CHECK (download_type IN ('app_store', 'google_play')),
  referrer VARCHAR(500),
  user_country VARCHAR(100),
  device_type VARCHAR(50),
  device_os VARCHAR(100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

CREATE INDEX idx_download_type ON download_events(download_type);
CREATE INDEX idx_download_created_at ON download_events(created_at);

-- ===== COMMUNITY STATS TABLE =====
CREATE TABLE IF NOT EXISTS community_stats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  whatsapp_members INTEGER DEFAULT 0,
  telegram_members INTEGER DEFAULT 0,
  newsletter_subscribers INTEGER DEFAULT 0,
  testimonials_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- ===== TESTIMONIALS TABLE =====
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  role VARCHAR(255),
  company VARCHAR(255),
  content TEXT NOT NULL,
  avatar_url VARCHAR(500),
  type VARCHAR(50) NOT NULL CHECK (type IN ('customer', 'worker')),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

CREATE INDEX idx_testimonials_verified ON testimonials(verified);
CREATE INDEX idx_testimonials_type ON testimonials(type);

-- ===== CONTACT SUBMISSIONS TABLE =====
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(500),
  message TEXT NOT NULL,
  country VARCHAR(100),
  device_type VARCHAR(50),
  read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

CREATE INDEX idx_contact_email ON contact_submissions(email);
CREATE INDEX idx_contact_created_at ON contact_submissions(created_at);

-- ===== MONTHLY METRICS VIEW =====
CREATE OR REPLACE VIEW monthly_metrics AS
SELECT
  DATE_TRUNC('month', created_at) AS month,
  COUNT(*) AS total_signups,
  SUM(CASE WHEN type = 'customer' THEN 1 ELSE 0 END) AS customers,
  SUM(CASE WHEN type = 'worker' THEN 1 ELSE 0 END) AS workers,
  SUM(CASE WHEN type = 'business' THEN 1 ELSE 0 END) AS businesses
FROM waitlist
GROUP BY DATE_TRUNC('month', created_at)
ORDER BY month DESC;

-- ===== DAILY ANALYTICS VIEW =====
CREATE OR REPLACE VIEW daily_analytics AS
SELECT
  DATE(created_at) AS day,
  event_type,
  COUNT(*) AS event_count,
  COUNT(DISTINCT session_id) AS unique_sessions,
  COUNT(DISTINCT device_type) AS unique_devices
FROM analytics_events
GROUP BY DATE(created_at), event_type
ORDER BY day DESC;

-- ===== ENABLE ROW LEVEL SECURITY (RLS) =====
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE download_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE community_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- ===== RLS POLICIES (Anonymous Insert Only) =====

-- Waitlist: Public can insert
CREATE POLICY "Allow public to insert waitlist" ON waitlist
  FOR INSERT
  WITH CHECK (true);

-- Analytics: Public can insert
CREATE POLICY "Allow public to insert analytics" ON analytics_events
  FOR INSERT
  WITH CHECK (true);

-- Downloads: Public can insert
CREATE POLICY "Allow public to insert downloads" ON download_events
  FOR INSERT
  WITH CHECK (true);

-- Testimonials: Public can insert (unverified)
CREATE POLICY "Allow public to submit testimonials" ON testimonials
  FOR INSERT
  WITH CHECK (true);

-- Contact: Public can insert
CREATE POLICY "Allow public to submit contact" ON contact_submissions
  FOR INSERT
  WITH CHECK (true);

-- Admin can read all tables
CREATE POLICY "Allow authenticated users to read" ON waitlist
  FOR SELECT
  USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated to read analytics" ON analytics_events
  FOR SELECT
  USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated to read downloads" ON download_events
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- ===== TRIGGERS FOR UPDATED_AT =====
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = timezone('utc'::text, now());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER waitlist_updated_at_trigger
BEFORE UPDATE ON waitlist
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER testimonials_updated_at_trigger
BEFORE UPDATE ON testimonials
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER community_stats_updated_at_trigger
BEFORE UPDATE ON community_stats
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();
