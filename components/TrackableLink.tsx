'use client';

import Link from 'next/link';
import { trackEvent, EventCategory, EventName } from '@/lib/analytics';

interface TrackableLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  trackingLabel?: string;
  onClick?: () => void;
}

export default function TrackableLink({
  href,
  children,
  className,
  trackingLabel,
  onClick,
}: TrackableLinkProps) {
  const handleClick = () => {
    trackEvent(EventCategory.NAVIGATION, EventName.LINK_CLICK, {
      href,
      label: trackingLabel || children?.toString(),
    });

    if (onClick) {
      onClick();
    }
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
