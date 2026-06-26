import React, { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #158F72 0%, #0E6B55 100%)' }}>
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            {badge && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white bg-opacity-10 rounded-full border border-white border-opacity-20 mb-6 hover:shadow-lg transition-shadow">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                <span className="text-white text-sm font-semibold">{badge}</span>
              </div>
            )}

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>

            <p className="text-xl text-white opacity-90 mb-8 leading-relaxed max-w-xl">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              {ctaPrimary && (
                <Link
                  href={ctaPrimary.href}
                  className="px-8 py-4 bg-white text-handly-600 rounded-xl hover:shadow-2xl transition-all duration-300 font-semibold flex items-center justify-center gap-2 group"
                >
                  {ctaPrimary.text} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
              {ctaSecondary && (
                <Link
                  href={ctaSecondary.href}
                  className="px-8 py-4 border-2 border-white text-white rounded-xl hover:bg-white hover:bg-opacity-10 transition-all duration-300 font-semibold"
                >
                  {ctaSecondary.text}
                </Link>
              )}
            </div>

            {stats && (
              <div className="flex items-center gap-8">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <p className="text-sm text-white opacity-75 mb-1">{stat.label}</p>
                    <p className="font-semibold text-white text-lg">{stat.value}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column */}
          {rightContent && <div className="hidden lg:block">{rightContent}</div>}
        </div>
      </div>
    </section>
  );
}
