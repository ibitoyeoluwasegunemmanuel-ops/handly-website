// Google Analytics 4 Event Tracking
// Add your GA4 Measurement ID to .env.local: NEXT_PUBLIC_GA_MEASUREMENT_ID

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Event categories
export enum EventCategory {
  ENGAGEMENT = 'engagement',
  CONVERSION = 'conversion',
  DOWNLOAD = 'download',
  SIGNUP = 'signup',
  NAVIGATION = 'navigation',
  ERROR = 'error',
}

// Event names
export enum EventName {
  // Conversion events
  WAITLIST_SIGNUP = 'waitlist_signup',
  NEWSLETTER_SIGNUP = 'newsletter_signup',
  DOWNLOAD_APP = 'download_app',
  CONTACT_FORM = 'contact_form_submit',
  INVESTOR_INQUIRY = 'investor_inquiry',

  // Community events
  COMMUNITY_JOIN = 'community_join',
  REFERRAL_CODE = 'referral_code_used',

  // Navigation events
  PAGE_VIEW = 'page_view',
  LINK_CLICK = 'link_click',
  SCROLL = 'scroll',

  // Engagement events
  VIDEO_PLAY = 'video_play',
  BUTTON_CLICK = 'button_click',
  FORM_START = 'form_start',
  FORM_ERROR = 'form_error',

  // User profile events
  SIGN_UP = 'sign_up',
  LOGIN = 'login',
  USER_TYPE_SELECT = 'user_type_select',
}

interface EventParams {
  [key: string]: string | number | boolean | string[] | number[];
}

/**
 * Track event in Google Analytics 4
 */
export function trackEvent(
  category: EventCategory | string,
  eventName: EventName | string,
  params?: EventParams
) {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') {
    console.log('GA not configured or not in browser');
    return;
  }

  const eventParams = {
    category,
    ...params,
    timestamp: new Date().toISOString(),
  };

  if (window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
}

export function trackWaitlistSignup(
  email: string,
  userType: 'customer' | 'worker' | 'business',
  location?: string
) {
  trackEvent(EventCategory.CONVERSION, EventName.WAITLIST_SIGNUP, {
    email,
    user_type: userType,
    location: location || 'unknown',
  });
}

export function trackAppDownload(platform: 'ios' | 'android' | 'web') {
  trackEvent(EventCategory.DOWNLOAD, EventName.DOWNLOAD_APP, {
    platform,
  });
}

export function trackDownloadClick(platform: 'app_store' | 'google_play' | 'web') {
  const platformMap = {
    app_store: 'ios' as const,
    google_play: 'android' as const,
    web: 'web' as const,
  };

  trackAppDownload(platformMap[platform]);
}

export function trackContactForm(email: string, subject?: string) {
  trackEvent(EventCategory.CONVERSION, EventName.CONTACT_FORM, {
    email,
    subject: subject || 'general',
  });
}

export function trackInvestorInquiry(email?: string, fundingType?: string) {
  trackEvent(EventCategory.CONVERSION, EventName.INVESTOR_INQUIRY, {
    email: email || 'unknown',
    funding_type: fundingType || 'unknown',
  });
}

export function trackCommunityJoin(community: string, email?: string) {
  trackEvent(EventCategory.CONVERSION, EventName.COMMUNITY_JOIN, {
    community_name: community,
    email: email || 'unknown',
  });
}

export function trackButtonClick(buttonName: string, location?: string) {
  trackEvent(EventCategory.ENGAGEMENT, EventName.BUTTON_CLICK, {
    button_name: buttonName,
    location: location || 'unknown',
  });
}

export function trackFormStart(formName: string) {
  trackEvent(EventCategory.ENGAGEMENT, EventName.FORM_START, {
    form_name: formName,
  });
}

export function trackUserTypeSelect(userType: string) {
  trackEvent(EventCategory.ENGAGEMENT, EventName.USER_TYPE_SELECT, {
    user_type: userType,
  });
}

/**
 * Data fetching functions for analytics dashboard
 */

export async function getDailySignups(
  startDate: Date,
  endDate: Date
): Promise<Array<{ date: string; signups: number }>> {
  // This would fetch from database in production
  // For now, return empty array (dashboard will show no data)
  return [];
}

export async function getDownloadStats(
  startDate: Date,
  endDate: Date
): Promise<{
  total: number;
  app_store: number;
  google_play: number;
  conversion_rate: string;
}> {
  // This would fetch from database/analytics in production
  return {
    total: 0,
    app_store: 0,
    google_play: 0,
    conversion_rate: '0',
  };
}

export async function getAnalyticsMetrics(
  startDate: Date,
  endDate: Date
): Promise<{
  total_page_views: number;
  unique_visitors: number;
  device_breakdown: {
    desktop: number;
    mobile: number;
    tablet: number;
  };
}> {
  // This would fetch from Google Analytics in production
  return {
    total_page_views: 0,
    unique_visitors: 0,
    device_breakdown: {
      desktop: 0,
      mobile: 0,
      tablet: 0,
    },
  };
}
