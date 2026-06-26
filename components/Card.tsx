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
    default: `bg-white border border-gray-200 shadow-md`,
    glass: `bg-white/10 backdrop-blur-md border border-white/20 shadow-lg`,
    gradient: `bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-lg`,
    minimal: `bg-transparent border-0 shadow-none`,
  };

  const hoverStyles = {
    lift: `${interactive ? 'hover:-translate-y-1 hover:shadow-2xl hover:border-handly-300' : ''}`,
    glow: `${interactive ? 'hover:shadow-xl hover:shadow-handly-600/20 hover:border-handly-400' : ''}`,
    shine: `${interactive ? 'hover:shadow-xl group-hover:scale-105' : ''}`,
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
