// Database Type Definitions for Authentication & Metrics

export type UserRole = 'customer' | 'worker' | 'business' | 'admin' | 'both';
export type RankTier = 'bronze' | 'silver' | 'gold' | 'platinum';
export type MatchStatus = 'pending' | 'matched' | 'confirmed';

export interface User {
  id: string;
  email?: string;
  phone?: string;
  name?: string;
  role: UserRole;
  worker_type?: string;
  is_verified: boolean;
  is_active: boolean;
  state?: string;
  lga?: string;
  bio?: string;
  services: string[];
  avg_rating: number;
  total_jobs: number;
  rank_tier: RankTier;
  total_earnings: number;
  app_user_id?: string;
  website_registered: boolean;
  app_registered: boolean;
  created_at: string;
  updated_at: string;
  last_active?: string;
}

export interface Metrics {
  id: string;
  metric_date: string;
  total_users: number;
  total_customers: number;
  total_workers: number;
  total_businesses: number;
  jobs_posted: number;
  jobs_completed: number;
  total_jobs: number;
  active_jobs: number;
  countries_covered: number;
  states_covered: number;
  cities_covered: number;
  total_downloads: number;
  app_downloads: number;
  website_visits: number;
  total_revenue: number;
  platform_revenue: number;
  worker_earnings: number;
  community_members: number;
  avg_rating: number;
  active_workers: number;
  created_at: string;
  updated_at: string;
}

export interface WaitlistToUsers {
  id: string;
  waitlist_id: string;
  user_id: string;
  status: MatchStatus;
  matched_at?: string;
  confirmed_at?: string;
  created_at: string;
  updated_at: string;
}

export interface Waitlist {
  id: string;
  email: string;
  phone: string;
  type: 'customer' | 'worker' | 'business';
  state?: string;
  city?: string;
  referred_by?: string;
  created_at: string;
}
