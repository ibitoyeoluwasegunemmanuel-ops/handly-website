import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = supabaseUrl && supabaseKey
  ? createClient(supabaseUrl, supabaseKey)
  : null;

export async function addToWaitlist(data: {
  email: string;
  phone: string;
  type: 'customer' | 'worker' | 'business';
  state: string;
  city: string;
  referredBy?: string;
}) {
  if (!supabase) throw new Error('Supabase not configured');

  const { data: result, error } = await supabase
    .from('waitlist')
    .insert([
      {
        email: data.email,
        phone: data.phone,
        type: data.type,
        state: data.state,
        city: data.city,
        referred_by: data.referredBy,
      },
    ])
    .select('*')
    .single();

  if (error) throw error;
  return result;
}

export async function getWaitlistStats() {
  if (!supabase) return { total: 0, customers: 0, workers: 0, businesses: 0 };

  const { count: total } = await supabase
    .from('waitlist')
    .select('*', { count: 'exact', head: true });

  const { count: customers } = await supabase
    .from('waitlist')
    .select('*', { count: 'exact', head: true })
    .eq('type', 'customer');

  const { count: workers } = await supabase
    .from('waitlist')
    .select('*', { count: 'exact', head: true })
    .eq('type', 'worker');

  const { count: businesses } = await supabase
    .from('waitlist')
    .select('*', { count: 'exact', head: true })
    .eq('type', 'business');

  return {
    total: total || 0,
    customers: customers || 0,
    workers: workers || 0,
    businesses: businesses || 0,
  };
}

export async function getTopStates() {
  if (!supabase) return [];

  const { data } = await supabase
    .from('waitlist')
    .select('state')
    .not('state', 'is', null);

  if (!data) return [];

  const counts: Record<string, number> = {};
  data.forEach((item) => {
    counts[item.state] = (counts[item.state] || 0) + 1;
  });

  return Object.entries(counts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)
    .map(([state, count]) => ({ state, count }));
}

export async function checkEmailExists(email: string) {
  if (!supabase) return false;

  const { data } = await supabase
    .from('waitlist')
    .select('id')
    .eq('email', email)
    .single();

  return !!data;
}

export async function generateReferralCode(email: string) {
  // Generate a simple referral code from email
  const code = email.split('@')[0].toUpperCase().substring(0, 6) + Math.random().toString(36).substring(2, 6).toUpperCase();
  return code;
}
