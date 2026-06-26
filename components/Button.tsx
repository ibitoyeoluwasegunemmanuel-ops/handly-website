import React from 'react';
import Link from 'next/link';
import { designTokens } from '@/lib/design-tokens';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

const variantStyles = {
  primary: {
    base: 'bg-gradient-to-r from-handly-600 to-handly-700 text-white',
    hover: 'hover:shadow-xl hover:from-handly-700 hover:to-handly-800',
    focus: 'focus:ring-2 focus:ring-offset-2 focus:ring-handly-500',
  },
  secondary: {
    base: 'bg-handly-50 text-handly-700 border-2 border-handly-200',
    hover: 'hover:bg-handly-100 hover:border-handly-300 hover:shadow-md',
    focus: 'focus:ring-2 focus:ring-offset-2 focus:ring-handly-500',
  },
  accent: {
    base: 'bg-gradient-to-r from-orange-500 to-orange-600 text-white',
    hover: 'hover:shadow-xl hover:from-orange-600 hover:to-orange-700',
    focus: 'focus:ring-2 focus:ring-offset-2 focus:ring-orange-500',
  },
  outline: {
    base: 'bg-transparent border-2 border-gray-300 text-gray-900',
    hover: 'hover:border-handly-600 hover:bg-handly-50 hover:shadow-md',
    focus: 'focus:ring-2 focus:ring-offset-2 focus:ring-handly-500',
  },
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-base gap-2',
  lg: 'px-8 py-4 text-lg gap-2.5',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className = '',
  disabled = false,
  icon,
  iconPosition = 'right',
  fullWidth = false,
}: ButtonProps) {
  const variantClass = variantStyles[variant];
  const sizeClass = sizeStyles[size];
  const widthClass = fullWidth ? 'w-full' : '';

  const buttonClassName = `
    inline-flex items-center justify-center gap-2
    rounded-lg font-semibold transition-all duration-200
    ${variantClass.base}
    ${variantClass.hover}
    ${variantClass.focus}
    ${sizeClass}
    ${widthClass}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `;

  const content = (
    <>
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={buttonClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={buttonClassName}>
      {content}
    </button>
  );
}
