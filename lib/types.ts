export type WaitlistType = 'customer' | 'worker' | 'business';
export type EventType = 'page_view' | 'waitlist_signup' | 'app_download' | 'community_join' | 'testimonial_submit' | 'contact_submit';
export type DeviceType = 'desktop' | 'mobile' | 'tablet';
export type DownloadType = 'app_store' | 'google_play';
export type Platform = 'ios' | 'android' | 'web';
export type JobStatus = 'posted' | 'in_progress' | 'completed' | 'cancelled';

export interface WaitlistEntry {
  id: string;
  email: string;
  phone: string;
  type: WaitlistType;
  state: string;
  city: string;
  referral_code?: string;
  referred_by?: string;
  created_at: string;
}

export interface WaitlistStats {
  total: number;
  customers: number;
  workers: number;
  businesses: number;
  topStates: Array<{ state: string; count: number }>;
}

// App Analytics
export interface AppAnalytics {
  platform: Platform;
  total_downloads: number;
  active_users: number;
  dau: number; // Daily Active Users
  mau: number; // Monthly Active Users
  retention_day_1: number;
  retention_day_7: number;
  retention_day_30: number;
  uninstalls: number;
  crash_rate: number;
  avg_session_duration: number;
  updated_at: string;
}

export interface AppEvent {
  id: string;
  platform: Platform;
  app_version: string;
  event_type: string;
  user_id: string;
  session_id: string;
  created_at: string;
}

// Marketplace Analytics
export interface MarketplaceMetrics {
  total_customers: number;
  total_workers: number;
  total_businesses: number;
  active_jobs: number;
  jobs_completed: number;
  total_transactions: number;
  gross_revenue: number;
  platform_revenue: number;
  avg_job_value: number;
  worker_satisfaction: number;
  customer_satisfaction: number;
  updated_at: string;
}

export interface Job {
  id: string;
  posted_by: string; // customer_id
  title: string;
  description: string;
  category: string;
  budget: number;
  status: JobStatus;
  assigned_worker?: string;
  created_at: string;
  completed_at?: string;
}

export interface Transaction {
  id: string;
  job_id: string;
  amount: number;
  currency: string;
  status: string;
  created_at: string;
}

// Analytics Event
export interface AnalyticsEvent {
  id: string;
  event_type: EventType;
  user_id?: string;
  session_id: string;
  page_path: string;
  referrer?: string;
  country?: string;
  city?: string;
  device_type: DeviceType;
  device_os?: string;
  browser?: string;
  ip_address?: string;
  created_at: string;
}

export interface DownloadEvent {
  id: string;
  download_type: DownloadType;
  referrer?: string;
  user_country?: string;
  device_type: DeviceType;
  created_at: string;
}

export interface CommunityStats {
  whatsapp_members: number;
  telegram_members: number;
  newsletter_subscribers: number;
  testimonials_count: number;
  updated_at: string;
}

export interface AnalyticsMetrics {
  total_visitors: number;
  unique_visitors: number;
  total_page_views: number;
  avg_session_duration: number;
  bounce_rate: number;
  top_countries: Array<{ country: string; count: number }>;
  top_cities: Array<{ city: string; count: number }>;
  device_breakdown: { desktop: number; mobile: number; tablet: number };
  traffic_sources: Array<{ source: string; count: number }>;
}

export interface DailySignupData {
  date: string;
  total: number;
  customers: number;
  workers: number;
  businesses: number;
}

export interface TrajectoryData {
  date: string;
  visitors: number;
  signups: number;
  downloads: number;
  active_users: number;
}

// Founder Command Center KPIs
export interface CompanyKPIs {
  gmv: number; // Gross Merchandise Value
  revenue: number;
  net_retention: number;
  burn_rate: number;
  runway_months: number;
  mrr: number; // Monthly Recurring Revenue
  arr: number; // Annual Recurring Revenue
  cac: number;
  ltv: number;
  ltv_cac_ratio: number;
  payback_period_months: number;
}

export interface FounderDashboardData {
  kpis: CompanyKPIs;
  app_analytics: AppAnalytics[];
  marketplace: MarketplaceMetrics;
  web_analytics: AnalyticsMetrics;
  growth_rate: number;
  top_cities: Array<{ city: string; users: number; revenue: number }>;
  top_categories: Array<{ category: string; jobs: number; revenue: number }>;
  daily_data: Array<{
    date: string;
    users: number;
    revenue: number;
    jobs: number;
    transactions: number;
  }>;
}

// Report Types
export interface Report {
  id: string;
  type: 'daily' | 'weekly' | 'monthly' | 'investor';
  period_start: string;
  period_end: string;
  data: FounderDashboardData;
  generated_at: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  avatar?: string;
  type: WaitlistType;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'customer' | 'worker' | 'business';
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  published_at: string;
  image?: string;
  category: string;
}

export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  published_at: string;
}
