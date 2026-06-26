export type WaitlistType = 'customer' | 'worker' | 'business';

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
