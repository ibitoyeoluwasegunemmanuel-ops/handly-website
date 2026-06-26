'use client';

import Link from 'next/link';
import { ArrowRight, Zap, Users, TrendingUp, Shield, Clock, Globe, CheckCircle, Briefcase, Award, Home as HomeIcon, Wrench, Sparkles, Zap as Lightning, Droplets, Scissors, Car, Grid3x3 } from 'lucide-react';
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
      {/* Hero Section - PREMIUM REDESIGN */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white via-handly-50 to-white pt-20">
        {/* Animated background orbs */}
        <div className="absolute top-10 right-0 w-96 h-96 bg-handly-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"></div>
        <div className="absolute -bottom-40 left-0 w-96 h-96 bg-handly-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" style={{animationDelay: '2s'}}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-handly-100 rounded-full border border-handly-300 mb-8 hover:shadow-lg transition-all">
                <span className="w-2 h-2 bg-handly-600 rounded-full animate-pulse"></span>
                <span className="text-handly-700 text-sm font-semibold">🚀 Live in 15 Countries</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-6xl md:text-7xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
                Find Trusted <br />
                <span className="bg-gradient-to-r from-handly-600 to-handly-700 bg-clip-text text-transparent">Workers, Services & Businesses.</span>
              </h1>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed max-w-xl font-medium">
                HANDLY connects customers, skilled workers, artisans, and local businesses in one trusted marketplace. Get things done right, at fair prices.
              </p>

              {/* Primary CTA Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                <Link
                  href="/waitlist"
                  className="px-6 py-4 bg-gradient-to-r from-handly-600 to-handly-700 text-white rounded-2xl hover:shadow-2xl transition-all duration-300 font-bold flex items-center justify-center gap-2 group text-center"
                >
                  <Briefcase size={20} />
                  Post a Job
                </Link>
                <Link
                  href="/workers"
                  className="px-6 py-4 bg-white border-2 border-handly-600 text-handly-700 rounded-2xl hover:shadow-xl hover:bg-handly-50 transition-all duration-300 font-bold flex items-center justify-center gap-2 group text-center"
                >
                  <Users size={20} />
                  Find Work
                </Link>
                <Link
                  href="/businesses"
                  className="px-6 py-4 bg-handly-100 border-2 border-handly-300 text-handly-700 rounded-2xl hover:shadow-xl hover:bg-handly-200 transition-all duration-300 font-bold flex items-center justify-center gap-2 group text-center"
                >
                  <Grid3x3 size={20} />
                  List Business
                </Link>
              </div>

              {/* App Download Badges */}
              <div className="flex flex-col sm:flex-row gap-3 mb-12">
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 bg-black text-white rounded-xl hover:shadow-lg transition-all">
                  <span className="text-2xl">🍎</span>
                  <div className="text-left">
                    <p className="text-xs text-gray-400">Download on</p>
                    <p className="font-bold text-sm">App Store</p>
                  </div>
                </a>
                <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 bg-black text-white rounded-xl hover:shadow-lg transition-all">
                  <span className="text-2xl">▶️</span>
                  <div className="text-left">
                    <p className="text-xs text-gray-400">Get it on</p>
                    <p className="font-bold text-sm">Google Play</p>
                  </div>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-8 pt-8 border-t border-gray-200">
                <div>
                  <p className="text-2xl font-bold text-handly-600">4.8★</p>
                  <p className="text-sm text-gray-600">Average Rating</p>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">50K+</p>
                  <p className="text-sm text-gray-600">Happy Users</p>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">15K+</p>
                  <p className="text-sm text-gray-600">Skilled Workers</p>
                </div>
              </div>
            </div>

            {/* Right Column - App Screenshot & Floating Cards */}
            <div className="hidden lg:block">
              <div className="relative h-full">
                {/* Main Phone Screenshot */}
                <div className="relative mx-auto w-72 h-screen max-h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-handly-600 to-handly-700 rounded-3xl p-2 shadow-2xl">
                    <div className="bg-white rounded-3xl h-full flex flex-col overflow-hidden">
                      {/* Phone Header */}
                      <div className="bg-gradient-to-r from-handly-600 to-handly-700 text-white p-4 text-center text-sm font-bold">
                        12:41 • 📶 📡
                      </div>
                      {/* Phone Content */}
                      <div className="flex-1 p-4 overflow-y-auto">
                        <h2 className="text-lg font-bold text-gray-900 mb-2">Capas, Nigeria</h2>
                        <p className="text-sm text-gray-600 mb-4">Good morning 👋</p>

                        <div className="grid grid-cols-3 gap-2 mb-6">
                          <div className="bg-handly-50 p-3 rounded-lg text-center">
                            <p className="text-xs text-gray-600">Book</p>
                            <p className="text-xs text-handly-700 font-bold">Service</p>
                          </div>
                          <div className="bg-handly-50 p-3 rounded-lg text-center">
                            <p className="text-xs text-gray-600">Post</p>
                            <p className="text-xs text-handly-700 font-bold">Job</p>
                          </div>
                          <div className="bg-handly-50 p-3 rounded-lg text-center">
                            <p className="text-xs text-gray-600">Browse</p>
                            <p className="text-xs text-handly-700 font-bold">Biz</p>
                          </div>
                        </div>

                        <p className="text-xs text-gray-500 font-semibold mb-2">Popular Categories</p>
                        <div className="grid grid-cols-4 gap-2">
                          {[
                            { icon: '🏠', label: 'Home' },
                            { icon: '🔧', label: 'Fix' },
                            { icon: '✨', label: 'Clean' },
                            { icon: '⚡', label: 'Electric' },
                          ].map((cat, i) => (
                            <div key={i} className="text-center">
                              <p className="text-lg">{cat.icon}</p>
                              <p className="text-xs text-gray-600 font-semibold">{cat.label}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Stats Cards */}
                <div className="absolute -top-12 -right-8 w-56 bg-white rounded-2xl p-5 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-handly-100 rounded-full flex items-center justify-center text-lg">👥</div>
                    <div>
                      <p className="text-xs text-gray-500">50K+</p>
                      <p className="text-sm font-bold text-gray-900">Happy Customers</p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-32 -right-12 w-56 bg-white rounded-2xl p-5 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-handly-100 rounded-full flex items-center justify-center text-lg">💼</div>
                    <div>
                      <p className="text-xs text-gray-500">15K+</p>
                      <p className="text-sm font-bold text-gray-900">Skilled Workers</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-24 -right-8 w-56 bg-white rounded-2xl p-5 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-handly-100 rounded-full flex items-center justify-center text-lg">🏢</div>
                    <div>
                      <p className="text-xs text-gray-500">3.2K+</p>
                      <p className="text-sm font-bold text-gray-900">Verified Businesses</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Stats Section with Cards */}
      <section className="bg-gradient-to-b from-handly-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              { label: 'Customers', value: '50K+', icon: '👥', color: 'bg-blue-50' },
              { label: 'Workers', value: '15K+', icon: '💼', color: 'bg-green-50' },
              { label: 'Businesses', value: '3.2K', icon: '🏢', color: 'bg-purple-50' },
              { label: 'Jobs Done', value: '120K+', icon: '✅', color: 'bg-yellow-50' },
              { label: 'Paid Out', value: '₦480M+', icon: '💰', color: 'bg-pink-50' },
              { label: 'Countries', value: '15', icon: '🌍', color: 'bg-cyan-50' },
              { label: 'Cities', value: '200+', icon: '🏙️', color: 'bg-indigo-50' },
              { label: 'Rating', value: '4.8★', icon: '⭐', color: 'bg-orange-50' },
            ].map((metric, i) => (
              <div key={i} className={`${metric.color} rounded-2xl p-4 text-center hover:shadow-lg transition-all`}>
                <p className="text-2xl mb-1">{metric.icon}</p>
                <p className="text-xs font-bold text-gray-900 mb-0.5">{metric.value}</p>
                <p className="text-xs text-gray-600">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-2">Popular Services</h2>
              <p className="text-lg text-gray-600">Find the right service for your needs</p>
            </div>
            <Link href="/services" className="text-handly-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
              View All <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              { icon: <HomeIcon size={32} className="text-handly-600" />, label: 'Home Services' },
              { icon: <Wrench size={32} className="text-handly-600" />, label: 'Construction' },
              { icon: <Sparkles size={32} className="text-handly-600" />, label: 'Cleaning' },
              { icon: <Lightning size={32} className="text-handly-600" />, label: 'Electrical' },
              { icon: <Droplets size={32} className="text-handly-600" />, label: 'Plumbing' },
              { icon: <Scissors size={32} className="text-handly-600" />, label: 'Beauty & Spa' },
              { icon: <Car size={32} className="text-handly-600" />, label: 'Automotive' },
              { icon: <Grid3x3 size={32} className="text-handly-600" />, label: 'More' },
            ].map((service, i) => (
              <div key={i} className="bg-gradient-to-br from-white to-handly-50 border border-handly-100 rounded-2xl p-6 text-center hover:shadow-xl hover:border-handly-300 transition-all cursor-pointer group">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <p className="font-bold text-sm text-gray-900">{service.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition - Why Choose HANDLY */}
      <section className="py-24 bg-gradient-to-b from-handly-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Why Choose HANDLY</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Built for Africa. Trusted by millions. Transparent pricing. Secure payments. Real results.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap size={32} className="text-handly-600" />,
                title: 'Instant Matching',
                description: 'Find trusted workers in minutes. Our smart matching connects the right person for every job.',
              },
              {
                icon: <Shield size={32} className="text-handly-600" />,
                title: 'Secure & Safe',
                description: 'Escrow protection, verified identities, and dispute resolution you can trust.',
              },
              {
                icon: <Clock size={32} className="text-handly-600" />,
                title: 'On-Time Delivery',
                description: 'Real-time tracking keeps projects on schedule with guaranteed accountability.',
              },
              {
                icon: <Award size={32} className="text-handly-600" />,
                title: 'Verified Workers',
                description: 'Every worker verified through skills assessment, reviews, and community ratings.',
              },
              {
                icon: <TrendingUp size={32} className="text-handly-600" />,
                title: 'Fair Pricing',
                description: 'Transparent rates with zero hidden fees. Competitive by design for everyone.',
              },
              {
                icon: <Globe size={32} className="text-handly-600" />,
                title: 'Pan-African',
                description: 'Connect across 15 African countries. Local expertise, global standards.',
              },
            ].map((feature, index) => (
              <div key={index} className={`group bg-gradient-to-br from-white to-handly-50 p-8 rounded-2xl border border-handly-100 hover:shadow-xl hover:border-handly-300 transition-all duration-300`}>
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">How HANDLY Works</h2>
            <p className="text-xl text-gray-600">Simple. Fast. Secure. Get it done in 3 minutes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                number: '1',
                title: 'Sign Up',
                description: 'Create your profile in seconds. Tell us who you are and what you need.',
                icon: '📝',
                color: 'bg-blue-100 text-blue-700'
              },
              {
                number: '2',
                title: 'Find or Post',
                description: 'Find trusted workers or post a job. Our smart matching does the heavy lifting.',
                icon: '🔍',
                color: 'bg-green-100 text-green-700'
              },
              {
                number: '3',
                title: 'Get It Done',
                description: 'Secure payments, real-time tracking, and support every step of the way.',
                icon: '✅',
                color: 'bg-purple-100 text-purple-700'
              },
            ].map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-gradient-to-br from-white to-handly-50 p-8 rounded-2xl border border-handly-100 group-hover:shadow-xl group-hover:border-handly-300 transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl ${step.color} font-bold`}>
                      {step.number}
                    </div>
                    <div className="text-3xl">{step.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-10 h-10 bg-gradient-to-r from-handly-600 to-handly-700 rounded-full flex items-center justify-center shadow-lg">
                      <ArrowRight size={24} className="text-white" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 px-8 py-3 bg-handly-100 text-handly-700 rounded-xl hover:bg-handly-200 hover:shadow-lg transition-all font-bold group"
            >
              Learn More <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials - Premium Design */}
      <section className="py-24 bg-gradient-to-b from-white to-handly-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Loved by 50K+ Users</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Real success stories from customers, workers, and businesses transforming their lives with HANDLY</p>
          </div>

          <Testimonials limit={3} />

          <div className="text-center mt-16">
            <Link
              href="/success-stories"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-handly-600 to-handly-700 text-white rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-lg group"
            >
              Read More Success Stories <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Investor Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Investor-Grade Metrics</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                HANDLY is backed by real data, explosive growth, and massive market opportunity. Join the revolution transforming Africa's economy.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  { icon: '📈', text: '45% month-over-month growth' },
                  { icon: '⭐', text: '4.8/5 average user rating' },
                  { icon: '⚡', text: '3-day payback period' },
                  { icon: '💯', text: '300:1 LTV:CAC ratio (market leading)' },
                  { icon: '🚀', text: '18-month path to profitability' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 bg-handly-50 rounded-lg">
                    <span className="text-3xl flex-shrink-0">{item.icon}</span>
                    <span className="text-lg font-medium text-gray-800">{item.text}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/investors"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-handly-600 to-handly-700 text-white rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-lg group"
              >
                View Full Investor Materials <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-handly-50 to-white rounded-3xl p-12 border-2 border-handly-200 shadow-xl">
              <div className="space-y-8">
                <div>
                  <p className="text-sm text-gray-500 font-semibold mb-2">Monthly Revenue</p>
                  <p className="text-5xl font-black text-handly-600">₦480M+</p>
                  <p className="text-sm text-gray-600 mt-2">Platform commission: 20-30%</p>
                </div>
                <div className="border-t-2 border-handly-100 pt-8">
                  <p className="text-sm text-gray-500 font-semibold mb-2">Total Paid to Workers</p>
                  <p className="text-5xl font-black text-gray-900">₦2B+</p>
                  <p className="text-sm text-gray-600 mt-2">Worker retention: 85%+</p>
                </div>
                <div className="border-t-2 border-handly-100 pt-8 bg-handly-100 -m-6 p-6 rounded-2xl">
                  <p className="text-sm text-handly-700 font-semibold mb-2">Active Users</p>
                  <p className="text-4xl font-black text-handly-700">50K+ 👥</p>
                  <p className="text-sm text-handly-600 mt-2">+45% MoM growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Premium Design */}
      <section className="relative py-32 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-handly-600 via-handly-500 to-handly-700"></div>

        {/* Animated Background Blobs */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">Get It Done Today</h2>
          <p className="text-xl md:text-2xl text-white opacity-95 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Join 50K+ customers and workers who are already getting things done on HANDLY. Build your reputation. Grow your income. Transform your business.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/waitlist"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-handly-600 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-lg group"
            >
              Join Now <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white bg-opacity-20 border-2 border-white text-white rounded-2xl hover:bg-opacity-30 transition-all duration-300 font-bold text-lg group"
            >
              Download App
            </a>
          </div>

          <p className="text-white opacity-75 text-sm">✨ No credit card required. Start for free.</p>
        </div>
      </section>
    </div>
  );
}
