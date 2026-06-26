import { EventType, DeviceType, DownloadType } from './types';
import { supabase } from './supabase';

// Google Analytics 4 integration
export const initGoogleAnalytics = (measurementId: string) => {
  if (typeof window === 'undefined') return;

  // Load GA script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', measurementId);
};

// Detect device type
export const getDeviceType = (): DeviceType => {
  if (typeof window === 'undefined') return 'desktop';

  const ua = navigator.userAgent.toLowerCase();
  if (/android/.test(ua)) return 'mobile';
  if (/iphone|ipod/.test(ua)) return 'mobile';
  if (/ipad/.test(ua)) return 'tablet';
  if (/windows phone/.test(ua)) return 'mobile';

  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};

// Track page view
export const trackPageView = async (pagePath: string) => {
  if (typeof window === 'undefined') return;

  // Google Analytics
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: document.title,
    });
  }

  // Supabase tracking (if configured)
  if (supabase) {
    const sessionId = getSessionId();
    const deviceType = getDeviceType();

    try {
      await supabase.from('analytics_events').insert([
        {
          event_type: 'page_view' as EventType,
          session_id: sessionId,
          page_path: pagePath,
          device_type: deviceType,
          referrer: document.referrer || null,
        },
      ]);
    } catch (error) {
      console.error('Failed to track page view:', error);
    }
  }
};

// Track waitlist signup
export const trackWaitlistSignup = async (type: string, state: string) => {
  if (typeof window === 'undefined') return;

  // Google Analytics
  if (window.gtag) {
    window.gtag('event', 'sign_up', {
      method: 'waitlist',
      user_type: type,
      state: state,
    });
  }

  // Supabase tracking
  if (supabase) {
    const sessionId = getSessionId();
    const deviceType = getDeviceType();

    try {
      await supabase.from('analytics_events').insert([
        {
          event_type: 'waitlist_signup' as EventType,
          session_id: sessionId,
          page_path: '/waitlist',
          device_type: deviceType,
          metadata: { type, state },
        },
      ]);
    } catch (error) {
      console.error('Failed to track signup:', error);
    }
  }
};

// Track app download click
export const trackDownloadClick = async (downloadType: DownloadType) => {
  if (typeof window === 'undefined') return;

  // Google Analytics
  if (window.gtag) {
    window.gtag('event', 'file_download', {
      file_name: downloadType === 'app_store' ? 'ios_app' : 'android_app',
      link_url: downloadType === 'app_store'
        ? 'https://apps.apple.com/app/handly'
        : 'https://play.google.com/store/apps/details?id=com.handly',
    });
  }

  // Supabase tracking
  if (supabase) {
    const deviceType = getDeviceType();

    try {
      await supabase.from('download_events').insert([
        {
          download_type: downloadType,
          device_type: deviceType,
          referrer: document.referrer || null,
        },
      ]);
    } catch (error) {
      console.error('Failed to track download:', error);
    }
  }
};

// Track community join
export const trackCommunityJoin = async (platform: 'whatsapp' | 'telegram') => {
  if (typeof window === 'undefined') return;

  // Google Analytics
  if (window.gtag) {
    window.gtag('event', 'join_community', {
      platform: platform,
    });
  }

  // Supabase tracking
  if (supabase) {
    const sessionId = getSessionId();
    const deviceType = getDeviceType();

    try {
      await supabase.from('analytics_events').insert([
        {
          event_type: 'community_join' as EventType,
          session_id: sessionId,
          page_path: '/community',
          device_type: deviceType,
          metadata: { platform },
        },
      ]);
    } catch (error) {
      console.error('Failed to track community join:', error);
    }
  }
};

// Get or create session ID
export const getSessionId = (): string => {
  if (typeof window === 'undefined') return '';

  let sessionId = sessionStorage.getItem('handly_session_id');
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('handly_session_id', sessionId);
  }
  return sessionId;
};

// Analytics data queries
export async function getAnalyticsMetrics(startDate: Date, endDate: Date) {
  if (!supabase) return null;

  const startIso = startDate.toISOString();
  const endIso = endDate.toISOString();

  try {
    // Total page views
    const { count: pageViews } = await supabase
      .from('analytics_events')
      .select('*', { count: 'exact', head: true })
      .eq('event_type', 'page_view')
      .gte('created_at', startIso)
      .lte('created_at', endIso);

    // Unique visitors (sessions)
    const { data: uniqueData } = await supabase
      .from('analytics_events')
      .select('session_id')
      .eq('event_type', 'page_view')
      .gte('created_at', startIso)
      .lte('created_at', endIso);

    const uniqueVisitors = new Set(uniqueData?.map(d => d.session_id) || []).size;

    // Device breakdown
    const { data: deviceData } = await supabase
      .from('analytics_events')
      .select('device_type')
      .gte('created_at', startIso)
      .lte('created_at', endIso);

    const deviceBreakdown = {
      desktop: deviceData?.filter(d => d.device_type === 'desktop').length || 0,
      mobile: deviceData?.filter(d => d.device_type === 'mobile').length || 0,
      tablet: deviceData?.filter(d => d.device_type === 'tablet').length || 0,
    };

    return {
      total_page_views: pageViews || 0,
      unique_visitors: uniqueVisitors,
      device_breakdown: deviceBreakdown,
    };
  } catch (error) {
    console.error('Failed to get analytics metrics:', error);
    return null;
  }
}

export async function getDailySignups(startDate: Date, endDate: Date) {
  if (!supabase) return [];

  const startIso = startDate.toISOString();
  const endIso = endDate.toISOString();

  try {
    const { data } = await supabase
      .from('waitlist')
      .select('created_at, type')
      .gte('created_at', startIso)
      .lte('created_at', endIso)
      .order('created_at');

    if (!data) return [];

    // Group by date
    const grouped: Record<string, { total: number; customers: number; workers: number; businesses: number }> = {};

    data.forEach(entry => {
      const date = new Date(entry.created_at).toISOString().split('T')[0];
      if (!grouped[date]) {
        grouped[date] = { total: 0, customers: 0, workers: 0, businesses: 0 };
      }
      grouped[date].total++;
      grouped[date][entry.type as 'customers' | 'workers' | 'businesses']++;
    });

    return Object.entries(grouped).map(([date, data]) => ({
      date,
      ...data,
    }));
  } catch (error) {
    console.error('Failed to get daily signups:', error);
    return [];
  }
}

export async function getDownloadStats(startDate: Date, endDate: Date) {
  if (!supabase) return { app_store: 0, google_play: 0, conversion_rate: 0 };

  const startIso = startDate.toISOString();
  const endIso = endDate.toISOString();

  try {
    const { count: appStore } = await supabase
      .from('download_events')
      .select('*', { count: 'exact', head: true })
      .eq('download_type', 'app_store')
      .gte('created_at', startIso)
      .lte('created_at', endIso);

    const { count: googlePlay } = await supabase
      .from('download_events')
      .select('*', { count: 'exact', head: true })
      .eq('download_type', 'google_play')
      .gte('created_at', startIso)
      .lte('created_at', endIso);

    const { count: totalVisitors } = await supabase
      .from('analytics_events')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', startIso)
      .lte('created_at', endIso);

    const totalDownloads = (appStore || 0) + (googlePlay || 0);
    const conversionRate = totalVisitors ? (totalDownloads / totalVisitors) * 100 : 0;

    return {
      app_store: appStore || 0,
      google_play: googlePlay || 0,
      total: totalDownloads,
      conversion_rate: conversionRate.toFixed(2),
    };
  } catch (error) {
    console.error('Failed to get download stats:', error);
    return { app_store: 0, google_play: 0, total: 0, conversion_rate: '0' };
  }
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
