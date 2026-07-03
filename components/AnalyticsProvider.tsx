'use client';

import { useEffect } from 'react';
import { trackEvent, EventCategory, EventName } from '@/lib/analytics';

export default function AnalyticsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const handleRouteChange = () => {
      trackEvent(EventCategory.NAVIGATION, EventName.PAGE_VIEW, {
        path: window.location.pathname,
        title: document.title,
      });
    };

    window.addEventListener('load', handleRouteChange);

    return () => {
      window.removeEventListener('load', handleRouteChange);
    };
  }, []);

  return <>{children}</>;
}
