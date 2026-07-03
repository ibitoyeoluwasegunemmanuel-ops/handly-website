-- Create mapping table to link waitlist entries with registered users
CREATE TABLE IF NOT EXISTS public.waitlist_to_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- References
  waitlist_id UUID REFERENCES public.waitlist(id) ON DELETE CASCADE,
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,

  -- Status
  status VARCHAR(50) DEFAULT 'pending', -- pending, matched, confirmed
  matched_at TIMESTAMPTZ,
  confirmed_at TIMESTAMPTZ,

  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),

  CONSTRAINT unique_waitlist_user UNIQUE (waitlist_id, user_id)
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_waitlist_to_users_waitlist_id ON public.waitlist_to_users(waitlist_id);
CREATE INDEX IF NOT EXISTS idx_waitlist_to_users_user_id ON public.waitlist_to_users(user_id);
CREATE INDEX IF NOT EXISTS idx_waitlist_to_users_status ON public.waitlist_to_users(status);
