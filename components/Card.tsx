import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  light?: boolean;
  interactive?: boolean;
}

export default function Card({
  children,
  className = '',
  light = true,
  interactive = true,
}: CardProps) {
  const lightClass = light ? 'bg-handly-50' : 'bg-white border border-gray-200';
  const interactiveClass = interactive ? 'group hover:shadow-xl hover:border-handly-300 transition-all duration-300' : '';

  return (
    <div className={`p-8 rounded-2xl ${lightClass} ${interactiveClass} ${className}`}>
      {children}
    </div>
  );
}
