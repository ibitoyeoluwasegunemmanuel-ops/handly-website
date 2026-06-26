export type WaitlistType = 'customer' | 'worker' | 'business';
export type EventType = 'page_view' | 'waitlist_signup' | 'app_download' | 'community_join' | 'testimonial_submit' | 'contact_submit';
export type DeviceType = 'desktop' | 'mobile' | 'tablet';
export type DownloadType = 'app_store' | 'google_play';

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
