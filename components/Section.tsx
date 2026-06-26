import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  light?: boolean;
  className?: string;
  id?: string;
}

export default function Section({
  children,
  light = false,
  className = '',
  id,
}: SectionProps) {
  const bgClass = light ? 'bg-handly-50' : 'bg-white';

  return (
    <section id={id} className={`py-24 ${bgClass} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
