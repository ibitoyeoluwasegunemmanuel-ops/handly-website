'use client';

import Link from 'next/link';
import { ArrowRight, Zap, Users, TrendingUp, Shield, Clock, Globe, CheckCircle, Briefcase, Award } from 'lucide-react';
import WaitlistForm from '@/components/WaitlistForm';
import Testimonials from '@/components/Testimonials';
import StatsCounter from '@/components/StatsCounter';
import { useState, useEffect } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section - Premium Design */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-handly-50 to-white">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-handly-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-200 mb-6 hover:shadow-lg transition-shadow">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="text-emerald-700 text-sm font-semibold">Live in 15 Countries</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Find Trusted <span className="bg-gradient-to-r from-handly-500 to-handly-700 bg-clip-text text-transparent">Workers, Services & Businesses</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
                HANDLY connects customers, skilled workers, artisans, and businesses in one trusted marketplace for services, jobs, and local commerce. Get things done right, at fair prices.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/waitlist"
                  className="px-8 py-4 bg-gradient-to-r from-handly-500 to-handly-600 text-white rounded-xl hover:shadow-2xl transition-all duration-300 font-semibold flex items-center justify-center gap-2 group"
                >
                  Get Started <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/how-it-works"
                  className="px-8 py-4 border-2 border-gray-300 text-gray-900 rounded-xl hover:border-handly-600 hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  See How It Works
                </Link>
              </div>

              <div className="flex items-center gap-8">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Trusted by</p>
                  <p className="font-semibold text-gray-900">50K+ Freelancers</p>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Active on</p>
                  <p className="font-semibold text-gray-900">$2.5M+ Projects</p>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="bg-gradient-to-br from-handly-600 to-handly-700 rounded-3xl p-1 shadow-2xl">
                  <div className="bg-white rounded-3xl p-8 space-y-4">
                    <div className="h-32 bg-gradient-to-r from-handly-50 to-handly-100 rounded-xl"></div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Traction Metrics */}
      <section className="bg-gradient-to-r from-handly-50 to-handly-100 py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { label: 'Total Users', value: '50K+', icon: '👥' },
              { label: 'Active Workers', value: '15K+', icon: '💼' },
              { label: 'Businesses', value: '3.2K', icon: '🏢' },
              { label: 'Jobs Posted', value: '12.5K', icon: '📋' },
              { label: 'Countries', value: '15', icon: '🌍' },
            ].map((metric, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</p>
                <p className="text-sm text-gray-600">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition - Why Choose HANDLY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose HANDLY</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Built for Africa. Trusted by customers, workers, businesses, and service providers. Transparent pricing. Secure payments. Real results.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap size={28} className="text-handly-600" />,
                title: 'Instant Matching',
                description: 'Find trusted workers in minutes. Our smart matching connects the right person for every job.',
                color: 'from-handly-50 to-transparent'
              },
              {
                icon: <Shield size={28} className="text-handly-600" />,
                title: 'Secure & Safe',
                description: 'Escrow protection, verified identities, and dispute resolution you can trust.',
                color: 'from-handly-50 to-transparent'
              },
              {
                icon: <Clock size={28} className="text-handly-600" />,
                title: 'On-Time Delivery',
                description: 'Real-time tracking keeps projects on schedule with guaranteed accountability.',
                color: 'from-handly-50 to-transparent'
              },
              {
                icon: <Award size={28} className="text-handly-600" />,
                title: 'Verified Workers',
                description: 'Every worker verified through skills assessment, reviews, and community ratings.',
                color: 'from-handly-50 to-transparent'
              },
              {
                icon: <TrendingUp size={28} className="text-handly-600" />,
                title: 'Fair Pricing',
                description: 'Transparent rates with zero hidden fees. Competitive by design for everyone.',
                color: 'from-handly-50 to-transparent'
              },
              {
                icon: <Globe size={28} className="text-handly-600" />,
                title: 'Pan-African',
                description: 'Connect across 15 African countries. Local expertise, global standards.',
                color: 'from-handly-50 to-transparent'
              },
            ].map((feature, index) => (
              <div key={index} className={`group bg-gradient-to-br ${feature.color} p-8 rounded-2xl border border-gray-200 hover:shadow-xl hover:border-handly-300 transition-all duration-300`}>
                <div className="mb-4 p-3 bg-white rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Type Sections */}
      <section className="py-24 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* For Customers */}
            <Link href="/customers" className="group">
              <div className="h-full bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-handly-300 transition-all duration-300">
                <div className="text-5xl mb-4">👤</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-handly-600 transition-colors">For Customers</h3>
                <p className="text-gray-600 mb-6">Post jobs and hire trusted workers, artisans, and service providers. Get things done right, at fair prices.</p>
                <div className="flex items-center gap-2 text-handly-600 font-semibold group-hover:translate-x-1 transition-transform">
                  Learn More <ArrowRight size={20} />
                </div>
              </div>
            </Link>

            {/* For Workers */}
            <Link href="/workers" className="group">
              <div className="h-full bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-handly-300 transition-all duration-300">
                <div className="text-5xl mb-4">💼</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-handly-600 transition-colors">For Workers</h3>
                <p className="text-gray-600 mb-6">Get discovered by customers. Build your reputation. Earn fair rates and grow your income sustainably.</p>
                <div className="flex items-center gap-2 text-handly-600 font-semibold group-hover:translate-x-1 transition-transform">
                  Learn More <ArrowRight size={20} />
                </div>
              </div>
            </Link>

            {/* For Businesses */}
            <Link href="/businesses" className="group">
              <div className="h-full bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-handly-300 transition-all duration-300">
                <div className="text-5xl mb-4">🏢</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-handly-600 transition-colors">For Businesses</h3>
                <p className="text-gray-600 mb-6">Create a business profile. Connect with thousands of customers. Grow your business across Africa.</p>
                <div className="flex items-center gap-2 text-handly-600 font-semibold group-hover:translate-x-1 transition-transform">
                  Learn More <ArrowRight size={20} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works - Premium Design */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get Started in 3 Minutes</h2>
            <p className="text-xl text-gray-600">Simple, transparent, efficient.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                number: '01',
                title: 'Create Profile',
                description: 'Sign up as a customer, worker, business, or service provider. Tell us what you need or what you can do.',
                icon: '✍️',
              },
              {
                number: '02',
                title: 'Connect & Discover',
                description: 'Browse trusted workers or find customers. Our matching connects the right people.',
                icon: '🔍',
              },
              {
                number: '03',
                title: 'Work & Grow',
                description: 'Get the job done with secure payments, transparent pricing, and real support.',
                icon: '💰',
              },
            ].map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white p-8 rounded-2xl border border-gray-200 group-hover:shadow-xl transition-all duration-300 h-full">
                  <div className="text-6xl font-bold text-handly-100 mb-4">{step.number}</div>
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-handly-600 rounded-full flex items-center justify-center">
                      <ArrowRight size={20} className="text-white" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-handly-600 hover:text-handly-700 font-semibold group"
            >
              See Detailed Walkthrough <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials - Premium Design */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Loved by Thousands of Users</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">See what customers, workers, and business owners say about HANDLY</p>
          </div>

          <Testimonials limit={3} />

          <div className="text-center mt-16">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-handly-500 to-handly-600 text-white rounded-xl hover:shadow-xl transition-all duration-300 font-semibold group"
            >
              See More Success Stories <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Investor Section */}
      <section className="py-24 bg-gradient-to-br from-handly-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Investor-Grade Metrics</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                HANDLY is backed by real data, real growth, and real market opportunity. Our metrics prove the marketplace works.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Year-over-year growth: 250%',
                  '95% user satisfaction rate',
                  'Average transaction turnaround: 5 days',
                  'Net Retention Rate: 120%',
                  'Unit Economics: LTV:CAC > 5:1'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={24} className="text-handly-600 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/dashboard/investor"
                className="inline-flex items-center gap-2 px-8 py-3 bg-handly-600 text-white rounded-xl hover:shadow-xl transition-all duration-300 font-semibold group"
              >
                View Investor Metrics <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="bg-white rounded-3xl p-12 shadow-xl">
              <div className="space-y-8">
                <div className="border-l-4 border-handly-600 pl-6">
                  <p className="text-sm text-gray-500 mb-1">Monthly Revenue</p>
                  <p className="text-3xl font-bold text-gray-900">$250K+</p>
                </div>
                <div className="border-l-4 border-handly-600 pl-6">
                  <p className="text-sm text-gray-500 mb-1">ARR</p>
                  <p className="text-3xl font-bold text-gray-900">$3M+</p>
                </div>
                <div className="border-l-4 border-handly-600 pl-6">
                  <p className="text-sm text-gray-500 mb-1">Active Users</p>
                  <p className="text-3xl font-bold text-gray-900">50K+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Premium Design */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-handly-600 via-handly-500 to-handly-700"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Africa's Trusted Marketplace Platform</h2>
          <p className="text-xl text-white opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Get early access, exclusive perks, and be part of a movement that's transforming how Africa does business.
          </p>
          <Link
            href="/waitlist"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-handly-600 rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-lg group"
          >
            Claim Your Spot <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
