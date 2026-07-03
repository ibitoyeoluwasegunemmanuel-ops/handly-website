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
  type?: 'button' | 'submit' | 'reset';
}

const variantStyles = {
  primary: {
    base: 'bg-gradient-to-br from-handly-600 via-handly-650 to-handly-700 text-white shadow-lg shadow-handly-600/30',
    hover: 'hover:shadow-2xl hover:shadow-handly-600/40 hover:scale-105 hover:from-handly-700 hover:via-handly-750 hover:to-handly-800',
    focus: 'focus:ring-2 focus:ring-offset-2 focus:ring-handly-500',
    active: 'active:scale-95 active:shadow-lg',
  },
  secondary: {
    base: 'bg-gradient-to-br from-handly-50 to-handly-100 text-handly-700 border-2 border-handly-200 shadow-sm',
    hover: 'hover:bg-gradient-to-br hover:from-handly-100 hover:to-handly-200 hover:border-handly-300 hover:shadow-md hover:scale-105',
    focus: 'focus:ring-2 focus:ring-offset-2 focus:ring-handly-500',
    active: 'active:scale-95',
  },
  accent: {
    base: 'bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30',
    hover: 'hover:shadow-2xl hover:shadow-orange-500/40 hover:scale-105 hover:from-orange-600 hover:to-orange-700',
    focus: 'focus:ring-2 focus:ring-offset-2 focus:ring-orange-500',
    active: 'active:scale-95 active:shadow-lg',
  },
  outline: {
    base: 'bg-transparent border-2 border-gray-300 text-gray-900 hover:border-handly-600',
    hover: 'hover:bg-handly-50 hover:shadow-md hover:scale-105 hover:border-handly-600',
    focus: 'focus:ring-2 focus:ring-offset-2 focus:ring-handly-500',
    active: 'active:scale-95',
  },
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm gap-1.5 rounded-md',
  md: 'px-6 py-3 text-base gap-2 rounded-lg',
  lg: 'px-8 py-4 text-lg gap-2.5 rounded-xl',
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
  type = 'button',
}: ButtonProps) {
  const variantClass = variantStyles[variant];
  const sizeClass = sizeStyles[size];
  const widthClass = fullWidth ? 'w-full' : '';

  const buttonClassName = `
    inline-flex items-center justify-center
    font-semibold tracking-wide transition-all duration-300 ease-out
    ${variantClass.base}
    ${variantClass.hover}
    ${variantClass.focus}
    ${variantClass.active}
    ${sizeClass}
    ${widthClass}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer active:shadow-none'}
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
    <button type={type} onClick={onClick} disabled={disabled} className={buttonClassName}>
      {content}
    </button>
  );
}
