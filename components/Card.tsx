import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'gradient' | 'minimal';
  interactive?: boolean;
  hover?: 'lift' | 'glow' | 'shine' | 'none';
  light?: boolean;
}

export default function Card({
  children,
  className = '',
  variant,
  interactive = true,
  hover = 'lift',
  light,
}: CardProps) {
  // Support legacy 'light' prop for backward compatibility
  let finalVariant = variant;
  if (variant === undefined && light !== undefined) {
    finalVariant = light ? 'default' : 'default';
  }
  finalVariant = finalVariant || 'default';
  const variantStyles = {
    default: `bg-white border border-gray-150 shadow-md shadow-gray-950/5 hover:border-gray-200`,
    glass: `bg-white/8 backdrop-blur-xl border border-white/20 shadow-xl shadow-black/10`,
    gradient: `bg-gradient-to-br from-white/95 via-white to-gray-50/80 border border-gray-100 shadow-lg shadow-gray-950/8`,
    minimal: `bg-transparent border-0 shadow-none`,
  };

  const hoverStyles = {
    lift: `${interactive ? 'hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-950/10 hover:border-gray-300' : ''}`,
    glow: `${interactive ? 'hover:shadow-2xl hover:shadow-handly-600/25 hover:border-handly-300 hover:-translate-y-1' : ''}`,
    shine: `${interactive ? 'hover:shadow-2xl hover:shadow-handly-600/30 hover:scale-102 hover:-translate-y-1' : ''}`,
    none: ``,
  };

  const transitionClass = interactive ? 'transition-all duration-300 ease-out' : '';

  return (
    <div
      className={`
        p-8 rounded-xl
        ${variantStyles[finalVariant]}
        ${hoverStyles[hover]}
        ${transitionClass}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
