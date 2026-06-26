import React, { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Button from './Button';

interface HeroProps {
  badge?: string;
  title: string | ReactNode;
  subtitle: string;
  ctaPrimary?: { text: string; href: string };
  ctaSecondary?: { text: string; href: string };
  stats?: Array<{ label: string; value: string }>;
  rightContent?: ReactNode;
}

export default function Hero({
  badge,
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  stats,
  rightContent,
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-handly-600 via-handly-700 to-handly-800" />

      {/* Animated gradient blobs - premium effect */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Premium Typography */}
          <div>
            {badge && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white bg-opacity-15 backdrop-blur-md rounded-full border border-white border-opacity-30 mb-8 hover:bg-opacity-20 transition-all duration-300 group">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse group-hover:scale-125 transition-transform" />
                <span className="text-white text-sm font-semibold">{badge}</span>
              </div>
            )}

            {/* Premium Heading - Bold, Clear, Impactful */}
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
              {title}
            </h1>

            {/* Subtitle - Optimized contrast and readability */}
            <p className="text-lg md:text-xl text-white text-opacity-95 mb-12 leading-relaxed max-w-xl font-medium">
              {subtitle}
            </p>

            {/* CTA Buttons - Premium styling */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              {ctaPrimary && (
                <Button
                  href={ctaPrimary.href}
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight size={22} />}
                  iconPosition="right"
                  className="group"
                >
                  <span>{ctaPrimary.text}</span>
                </Button>
              )}
              {ctaSecondary && (
                <Button
                  href={ctaSecondary.href}
                  variant="outline"
                  size="lg"
                  className="!bg-white !bg-opacity-10 !border-white !text-white hover:!bg-opacity-20 hover:!shadow-xl"
                >
                  {ctaSecondary.text}
                </Button>
              )}
            </div>

            {/* Stats - Premium presentation */}
            {stats && (
              <div className="flex flex-wrap items-center gap-12 pt-8 border-t border-white border-opacity-20">
                {stats.map((stat, index) => (
                  <div key={index} className="group">
                    <p className="text-sm text-white text-opacity-80 mb-2 font-medium uppercase tracking-wider">{stat.label}</p>
                    <p className="text-3xl font-black text-white group-hover:text-opacity-80 transition-all">{stat.value}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Visual Content */}
          {rightContent && (
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                {/* Premium card container with glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 rounded-2xl blur-xl opacity-20" />
                <div className="relative">
                  {rightContent}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
