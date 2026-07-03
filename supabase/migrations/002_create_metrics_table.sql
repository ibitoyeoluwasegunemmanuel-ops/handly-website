-- Create metrics table to track platform-wide statistics
CREATE TABLE IF NOT EXISTS public.metrics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Date tracking
  metric_date DATE DEFAULT CURRENT_DATE,

  -- User Metrics
  total_users INTEGER DEFAULT 0,
  total_customers INTEGER DEFAULT 0,
  total_workers INTEGER DEFAULT 0,
  total_businesses INTEGER DEFAULT 0,

  -- Activity Metrics
  jobs_posted INTEGER DEFAULT 0,
  jobs_completed INTEGER DEFAULT 0,
  total_jobs INTEGER DEFAULT 0,
  active_jobs INTEGER DEFAULT 0,

  -- Geographic Metrics
  countries_covered INTEGER DEFAULT 0,
  states_covered INTEGER DEFAULT 0,
  cities_covered INTEGER DEFAULT 0,

  -- Download & Engagement
  total_downloads INTEGER DEFAULT 0,
  app_downloads INTEGER DEFAULT 0,
  website_visits INTEGER DEFAULT 0,

  -- Revenue Metrics
  total_revenue DECIMAL(15,2) DEFAULT 0,
  platform_revenue DECIMAL(15,2) DEFAULT 0,
  worker_earnings DECIMAL(15,2) DEFAULT 0,

  -- Community Metrics
  community_members INTEGER DEFAULT 0,
  avg_rating DECIMAL(3,2) DEFAULT 0,
  active_workers INTEGER DEFAULT 0,

  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),

  CONSTRAINT unique_metric_date UNIQUE (metric_date)
);

-- Create index for date lookups
CREATE INDEX IF NOT EXISTS idx_metrics_date ON public.metrics(metric_date DESC);

-- Create a view for the latest metrics (convenience view)
CREATE OR REPLACE VIEW public.latest_metrics AS
SELECT * FROM public.metrics
ORDER BY metric_date DESC
LIMIT 1;
