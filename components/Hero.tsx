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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-handly-700 via-handly-800 to-handly-900">
      {/* Sophisticated animated gradient blobs */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob-float" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob-float-slow" style={{ animationDelay: '-2s' }} />
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob-float" style={{ animationDelay: '-4s' }} />

      {/* Premium radial gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient via-transparent opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - Refined Typography & Micro-interactions */}
          <div className="animate-subtle-shift">
            {badge && (
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-10 hover:bg-white/15 hover:border-white/40 transition-all duration-500 group cursor-default">
                <span className="w-2.5 h-2.5 bg-white rounded-full animate-glow-pulse group-hover:scale-150 transition-transform duration-500" />
                <span className="text-white text-xs font-semibold uppercase tracking-widest">{badge}</span>
              </div>
            )}

            {/* Professional Hero Heading - Refined Typography */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-none tracking-tighter">
              {title}
            </h1>

            {/* Premium Subtitle - Enhanced Contrast & Readability */}
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl font-light tracking-wide">
              {subtitle}
            </p>

            {/* CTA Buttons - Premium Micro-interactions */}
            <div className="flex flex-col sm:flex-row gap-5 mb-20">
              {ctaPrimary && (
                <Button
                  href={ctaPrimary.href}
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight size={24} />}
                  iconPosition="right"
                  className="group shadow-2xl hover:shadow-3xl hover:shadow-handly-600/50 transform hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <span className="font-semibold tracking-wide">{ctaPrimary.text}</span>
                </Button>
              )}
              {ctaSecondary && (
                <Button
                  href={ctaSecondary.href}
                  variant="outline"
                  size="lg"
                  className="!bg-white/5 !border-white/30 !text-white hover:!bg-white/15 hover:!border-white/60 hover:!shadow-xl active:!bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  <span className="font-semibold tracking-wide">{ctaSecondary.text}</span>
                </Button>
              )}
            </div>

            {/* Stats - Refined Presentation */}
            {stats && (
              <div className="flex flex-wrap items-center gap-16 pt-12 border-t border-white/20">
                {stats.map((stat, index) => (
                  <div key={index} className="group cursor-default">
                    <p className="text-xs text-white/70 mb-3 font-semibold uppercase tracking-widest group-hover:text-white/90 transition-colors duration-300">{stat.label}</p>
                    <p className="text-4xl font-black text-white tracking-tight group-hover:text-white/95 transition-all duration-300">{stat.value}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Visual Content with Glow Effects */}
          {rightContent && (
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full">
                {/* Layered glow effect for premium feel */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl blur-2xl opacity-40" />
                <div className="absolute inset-8 bg-gradient-to-t from-handly-600/20 to-transparent rounded-2xl blur-xl opacity-30" />

                <div className="relative transform hover:scale-105 transition-transform duration-500">
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
