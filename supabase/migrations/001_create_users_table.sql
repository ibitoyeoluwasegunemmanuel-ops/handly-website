-- Create unified users table to track all users across website and app
CREATE TABLE IF NOT EXISTS public.users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  -- Identity
  email VARCHAR(255) UNIQUE,
  phone VARCHAR(20) UNIQUE,
  name VARCHAR(255),

  -- Account Status
  role VARCHAR(50) DEFAULT 'customer', -- customer, worker, business, admin
  worker_type VARCHAR(100), -- professional, casual, etc.
  is_verified BOOLEAN DEFAULT FALSE,
  is_active BOOLEAN DEFAULT TRUE,

  -- Profile
  state VARCHAR(100),
  lga VARCHAR(100),
  bio TEXT,
  services TEXT[] DEFAULT '{}', -- Array of services offered

  -- Metrics
  avg_rating DECIMAL(3,2) DEFAULT 0,
  total_jobs INTEGER DEFAULT 0,
  rank_tier VARCHAR(50) DEFAULT 'bronze', -- bronze, silver, gold, platinum
  total_earnings DECIMAL(15,2) DEFAULT 0,

  -- App Integration
  app_user_id VARCHAR(255) UNIQUE, -- Firebase UID or mobile app user ID
  website_registered BOOLEAN DEFAULT FALSE,
  app_registered BOOLEAN DEFAULT FALSE,

  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  last_active TIMESTAMPTZ,

  -- Constraints
  CONSTRAINT valid_role CHECK (role IN ('customer', 'worker', 'business', 'admin', 'both'))
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_users_email ON public.users(email);
CREATE INDEX IF NOT EXISTS idx_users_phone ON public.users(phone);
CREATE INDEX IF NOT EXISTS idx_users_app_user_id ON public.users(app_user_id);
CREATE INDEX IF NOT EXISTS idx_users_role ON public.users(role);
CREATE INDEX IF NOT EXISTS idx_users_state ON public.users(state);
