'use client';

import { trackButtonClick } from '@/lib/analytics';

interface TrackableButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  trackingLabel?: string;
  children: React.ReactNode;
}

export default function TrackableButton({
  trackingLabel,
  onClick,
  children,
  ...props
}: TrackableButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    trackButtonClick(trackingLabel || children?.toString());

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button {...props} onClick={handleClick}>
      {children}
    </button>
  );
}
