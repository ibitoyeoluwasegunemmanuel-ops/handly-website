'use client';

import Link from 'next/link';
import { ArrowRight, Star, Users, Briefcase, Home as HomeIcon, Wrench, Sparkles, Droplets, Scissors, Car, CheckCircle, TrendingUp, Shield, Clock, Globe, Award, Zap } from 'lucide-react';
import Testimonials from '@/components/Testimonials';
import { useState, useEffect } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="bg-white">
      {/* SECTION 1: HERO - Bold Gradient Background */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Bold gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-handly-600 via-handly-500 to-handly-700"></div>

        {/* Animated accent elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-20 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-white">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white bg-opacity-15 backdrop-blur-sm rounded-full border border-white border-opacity-30 mb-8">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold">Live in 15 Countries</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
                Find Trusted Workers, Services & Businesses.
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-white text-opacity-90 mb-12 leading-relaxed max-w-lg font-medium">
                Book skilled artisans, hire professionals, discover local businesses, and get things done anywhere.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/waitlist"
                  className="px-8 py-4 bg-white text-handly-600 rounded-2xl hover:shadow-2xl transition-all duration-300 font-bold text-lg flex items-center justify-center gap-2 group"
                >
                  Post a Job <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/workers"
                  className="px-8 py-4 bg-white bg-opacity-20 border-2 border-white text-white rounded-2xl hover:bg-opacity-30 transition-all duration-300 font-bold text-lg flex items-center justify-center gap-2"
                >
                  Find Workers
                </Link>
                <Link
                  href="/businesses"
                  className="px-8 py-4 bg-white bg-opacity-20 border-2 border-white text-white rounded-2xl hover:bg-opacity-30 transition-all duration-300 font-bold text-lg flex items-center justify-center gap-2"
                >
                  List Your Business
                </Link>
              </div>

              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://apps.apple.com/us/app/handly-app/id6778122913"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-white bg-opacity-15 backdrop-blur-sm text-white rounded-xl hover:bg-opacity-25 transition-all border border-white border-opacity-30"
                >
                  <span className="text-2xl">🍎</span>
                  <div className="text-left">
                    <p className="text-xs opacity-90">Download on</p>
                    <p className="font-bold">App Store</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 px-6 py-3 bg-white bg-opacity-15 backdrop-blur-sm text-white rounded-xl border border-white border-opacity-30 cursor-not-allowed opacity-75">
                  <span className="text-2xl">▶️</span>
                  <div className="text-left">
                    <p className="text-xs opacity-90">Get it on</p>
                    <p className="font-bold">Google Play</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: iPhone Mockup with Floating Cards */}
            <div className="hidden lg:flex justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* iPhone Mockup */}
                <div className="relative w-72">
                  {/* Phone Border */}
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-2.5 shadow-2xl">
                    {/* Screen */}
                    <div className="bg-white rounded-3xl h-full overflow-hidden flex flex-col">
                      {/* Status Bar */}
                      <div className="bg-gradient-to-r from-handly-600 to-handly-700 text-white px-6 py-3 flex justify-between items-center text-xs font-semibold">
                        <span>9:41</span>
                        <span>📶 📡</span>
                      </div>
                      {/* Phone Content */}
                      <div className="flex-1 bg-gray-50 p-4 flex flex-col">
                        <h2 className="font-bold text-gray-900 mb-1">Lagos, Nigeria</h2>
                        <p className="text-sm text-gray-600 mb-4">What do you need?</p>

                        <div className="grid grid-cols-3 gap-2 mb-6">
                          <div className="bg-handly-50 p-3 rounded-lg text-center hover:bg-handly-100 transition">
                            <p className="text-xs text-gray-700 font-bold">Post</p>
                            <p className="text-xs text-handly-700">Job</p>
                          </div>
                          <div className="bg-handly-50 p-3 rounded-lg text-center hover:bg-handly-100 transition">
                            <p className="text-xs text-gray-700 font-bold">Find</p>
                            <p className="text-xs text-handly-700">Workers</p>
                          </div>
                          <div className="bg-handly-50 p-3 rounded-lg text-center hover:bg-handly-100 transition">
                            <p className="text-xs text-gray-700 font-bold">Browse</p>
                            <p className="text-xs text-handly-700">Services</p>
                          </div>
                        </div>

                        <p className="text-xs font-semibold text-gray-600 mb-2">Popular</p>
                        <div className="grid grid-cols-4 gap-2">
                          {['🏠', '🔧', '✨', '⚡'].map((icon, i) => (
                            <div key={i} className="text-center">
                              <p className="text-2xl mb-1">{icon}</p>
                              <p className="text-xs text-gray-600 font-semibold">
                                {['Home', 'Fix', 'Clean', 'Electric'][i]}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Stats Cards */}
                  <div className="absolute -top-12 -right-12 w-56 bg-white rounded-2xl p-5 shadow-2xl border border-gray-200 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-handly-100 to-handly-50 rounded-full flex items-center justify-center text-lg">👥</div>
                      <div>
                        <p className="text-xs text-gray-500 font-semibold">50K+ Customers</p>
                        <p className="text-sm font-bold text-gray-900">Active Users</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-32 -right-16 w-56 bg-white rounded-2xl p-5 shadow-2xl border border-gray-200 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-handly-100 to-handly-50 rounded-full flex items-center justify-center text-lg">💼</div>
                      <div>
                        <p className="text-xs text-gray-500 font-semibold">15K+ Workers</p>
                        <p className="text-sm font-bold text-gray-900">Verified</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-32 -right-12 w-56 bg-white rounded-2xl p-5 shadow-2xl border border-gray-200 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-handly-100 to-handly-50 rounded-full flex items-center justify-center text-lg">⭐</div>
                      <div>
                        <p className="text-xs text-gray-500 font-semibold">4.8★ Rating</p>
                        <p className="text-sm font-bold text-gray-900">Trusted</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Trust Indicators */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
            {[
              { value: '120K+', label: 'Jobs Completed' },
              { value: '3.2K', label: 'Businesses' },
              { value: '15', label: 'Countries' },
              { value: '₦2B+', label: 'Paid Out' },
            ].map((stat, i) => (
              <div key={i} className="p-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl border border-white border-opacity-20">
                <p className="text-3xl md:text-4xl font-black">{stat.value}</p>
                <p className="text-sm text-white text-opacity-80 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Popular Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900">Popular Services</h2>
              <p className="text-lg text-gray-600 mt-2">Find exactly what you need</p>
            </div>
            <Link href="/services" className="text-handly-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
              View All <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              { icon: '🏠', label: 'Home Services' },
              { icon: '🔧', label: 'Repairs' },
              { icon: '✨', label: 'Cleaning' },
              { icon: '⚡', label: 'Electrical' },
              { icon: '💧', label: 'Plumbing' },
              { icon: '✂️', label: 'Beauty' },
              { icon: '🚗', label: 'Transport' },
              { icon: '📦', label: 'More' },
            ].map((service, i) => (
              <div key={i} className="group bg-gradient-to-br from-handly-50 to-white border-2 border-handly-100 rounded-2xl p-6 text-center hover:shadow-xl hover:border-handly-300 transition-all cursor-pointer">
                <p className="text-4xl mb-3 group-hover:scale-110 transition-transform">{service.icon}</p>
                <p className="font-bold text-sm text-gray-900">{service.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: How It Works */}
      <section className="py-24 bg-gradient-to-b from-handly-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">How HANDLY Works</h2>
            <p className="text-xl text-gray-600 mt-4">Get things done in 3 simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: '1',
                title: 'Post or Search',
                description: 'Post a job or find trusted workers and services in seconds',
                icon: '📝',
              },
              {
                number: '2',
                title: 'Connect & Hire',
                description: 'Review profiles, hire the best match, and start collaborating',
                icon: '🤝',
              },
              {
                number: '3',
                title: 'Get It Done',
                description: 'Secure payments, real-time tracking, and guaranteed satisfaction',
                icon: '✅',
              },
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="bg-white border-2 border-handly-100 rounded-2xl p-8 hover:shadow-xl hover:border-handly-300 transition-all h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-handly-100 to-handly-50 rounded-full flex items-center justify-center text-3xl font-bold text-handly-700">
                      {step.number}
                    </div>
                    <div className="text-4xl">{step.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-10 h-10 bg-gradient-to-r from-handly-600 to-handly-700 rounded-full flex items-center justify-center shadow-lg">
                      <ArrowRight size={24} className="text-white" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: For Customers */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">For Customers</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Post a job, find trusted workers, and get your projects done by verified professionals who care about quality.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Post unlimited jobs',
                  'Get instant quotes',
                  'Secure payments',
                  'Track progress in real-time',
                  'Rate and review workers',
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle size={24} className="text-handly-600 flex-shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/customers"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-handly-600 to-handly-700 text-white rounded-2xl hover:shadow-2xl transition-all font-bold text-lg group"
              >
                Start Hiring Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-handly-100 to-handly-50 rounded-3xl p-12 h-96 flex items-center justify-center border-2 border-handly-200">
              <div className="text-center">
                <div className="text-6xl mb-4">👤</div>
                <p className="text-lg font-semibold text-handly-700">Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: For Workers */}
      <section className="py-24 bg-gradient-to-b from-handly-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-handly-100 to-handly-50 rounded-3xl p-12 h-96 flex items-center justify-center border-2 border-handly-200">
              <div className="text-center">
                <div className="text-6xl mb-4">💼</div>
                <p className="text-lg font-semibold text-handly-700">Workers</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">For Workers</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Get discovered by customers, build your reputation, and earn fair rates on your terms.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Unlimited job opportunities',
                  'Set your own rates',
                  'Build your profile & reputation',
                  'Instant payments',
                  'Work on your schedule',
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle size={24} className="text-handly-600 flex-shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/workers"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-handly-600 to-handly-700 text-white rounded-2xl hover:shadow-2xl transition-all font-bold text-lg group"
              >
                Start Earning Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: For Businesses */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">For Businesses</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Create a business profile, connect with customers across Africa, and scale your business effortlessly.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Free business listing',
                  'Reach thousands of customers',
                  'Professional portfolio',
                  'Bulk job management',
                  'Business analytics',
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle size={24} className="text-handly-600 flex-shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/businesses"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-handly-600 to-handly-700 text-white rounded-2xl hover:shadow-2xl transition-all font-bold text-lg group"
              >
                List Your Business <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-handly-100 to-handly-50 rounded-3xl p-12 h-96 flex items-center justify-center border-2 border-handly-200">
              <div className="text-center">
                <div className="text-6xl mb-4">🏢</div>
                <p className="text-lg font-semibold text-handly-700">Businesses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Success Stories */}
      <section className="py-24 bg-gradient-to-b from-handly-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">Success Stories</h2>
            <p className="text-xl text-gray-600 mt-4">Real results from real people</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Adekunle',
                role: 'Plumber',
                story: 'Went from 2 jobs/month to 20+ with HANDLY. Now earning ₦500K+/month',
                avatar: '👨‍🔧',
              },
              {
                name: 'Folake',
                role: 'Home Cleaner',
                story: 'Built a team of 5 cleaners. HANDLY helped me scale from solo to business owner',
                avatar: '👩‍💼',
              },
              {
                name: 'Lagos Tech Startup',
                role: 'Business',
                story: 'Hired 50+ freelancers through HANDLY. Saved 40% on hiring costs',
                avatar: '🏢',
              },
            ].map((story, i) => (
              <div key={i} className="bg-white border-2 border-handly-100 rounded-2xl p-8 hover:shadow-xl hover:border-handly-300 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-handly-100 to-handly-50 rounded-full flex items-center justify-center text-3xl">
                    {story.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{story.name}</p>
                    <p className="text-sm text-gray-600">{story.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">"{story.story}"</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/success-stories"
              className="inline-flex items-center gap-2 px-8 py-4 bg-handly-100 text-handly-700 rounded-2xl hover:shadow-lg hover:bg-handly-200 transition-all font-bold text-lg group"
            >
              Read More Stories <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8: Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">Loved by 50K+ Users</h2>
            <p className="text-xl text-gray-600 mt-4">See what customers, workers, and businesses are saying</p>
          </div>

          <Testimonials limit={3} />

          <div className="text-center mt-12">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-handly-600 to-handly-700 text-white rounded-2xl hover:shadow-2xl transition-all font-bold text-lg group"
            >
              View All Reviews <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 9: Download App CTA */}
      <section className="py-24 bg-gradient-to-br from-handly-600 to-handly-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Download the App</h2>
          <p className="text-xl md:text-2xl text-white text-opacity-90 mb-12 leading-relaxed font-medium">
            Get access to thousands of jobs and services, manage your profile, and track projects on the go.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.apple.com/us/app/handly-app/id6778122913"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-handly-600 rounded-2xl hover:shadow-2xl transition-all font-bold text-lg flex items-center justify-center gap-2 group"
            >
              <span>🍎</span> Download on App Store
            </a>
            <div className="px-8 py-4 bg-white bg-opacity-20 border-2 border-white text-white rounded-2xl cursor-not-allowed opacity-75 font-bold text-lg flex items-center justify-center gap-2">
              <span>▶️</span> Coming Soon on Google Play
            </div>
          </div>

          <p className="text-white text-opacity-75 mt-8 text-sm">✨ Free to download. Start earning or finding workers today.</p>
        </div>
      </section>

      {/* SECTION 10: Investor Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">Investor-Grade Metrics</h2>
            <p className="text-xl text-gray-600 mt-4">Built on real data and explosive growth</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                { icon: '📈', metric: '45% MoM Growth', desc: 'Month-over-month user growth' },
                { icon: '⭐', metric: '4.8★ Rating', desc: 'Average platform rating' },
                { icon: '⚡', metric: '3-Day Payback', desc: 'Customer acquisition payback period' },
                { icon: '💯', metric: '₦2B+ Paid', desc: 'Total paid to workers & professionals' },
                { icon: '🚀', metric: '15 Countries', desc: 'Live in Africa' },
                { icon: '💰', metric: '₦480M+', desc: 'Monthly platform revenue' },
              ].map((stat, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-handly-50 rounded-xl border border-handly-200">
                  <div className="text-4xl flex-shrink-0">{stat.icon}</div>
                  <div>
                    <p className="font-black text-2xl text-gray-900">{stat.metric}</p>
                    <p className="text-gray-600 text-sm mt-1">{stat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-handly-100 to-handly-50 rounded-3xl p-12 border-2 border-handly-200">
              <div className="space-y-8">
                <div>
                  <p className="text-sm text-gray-600 font-semibold mb-2">Active Users</p>
                  <p className="text-5xl font-black text-handly-700">50K+</p>
                </div>
                <div className="border-t-2 border-handly-200 pt-8">
                  <p className="text-sm text-gray-600 font-semibold mb-2">Active Workers</p>
                  <p className="text-5xl font-black text-gray-900">15K+</p>
                </div>
                <div className="border-t-2 border-handly-200 pt-8">
                  <p className="text-sm text-gray-600 font-semibold mb-2">Verified Businesses</p>
                  <p className="text-5xl font-black text-gray-900">3.2K+</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/investors"
              className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-handly-600 to-handly-700 text-white rounded-2xl hover:shadow-2xl transition-all font-bold text-lg group"
            >
              View Investor Materials <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Community Section - Bonus */}
      <section className="py-24 bg-gradient-to-b from-handly-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">Join Our Community</h2>
            <p className="text-xl text-gray-600 mt-4">Connect with thousands of workers, customers, and businesses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { platform: 'WhatsApp', icon: '💬', url: '#' },
              { platform: 'Telegram', icon: '📱', url: '#' },
              { platform: 'Twitter', icon: '𝕏', url: '#' },
              { platform: 'LinkedIn', icon: '🔗', url: '#' },
            ].map((community, i) => (
              <a
                key={i}
                href={community.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border-2 border-handly-100 rounded-2xl p-8 text-center hover:shadow-xl hover:border-handly-300 transition-all"
              >
                <p className="text-5xl mb-4 group-hover:scale-110 transition-transform">{community.icon}</p>
                <p className="font-bold text-lg text-gray-900 group-hover:text-handly-600 transition-colors">{community.platform}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Get Started Today</h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed font-medium">
            Whether you want to find workers, offer your skills, or grow your business — HANDLY is where opportunities meet.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/waitlist"
              className="px-10 py-5 bg-gradient-to-r from-handly-600 to-handly-700 text-white rounded-2xl hover:shadow-2xl transition-all font-bold text-lg flex items-center justify-center gap-2 group"
            >
              Join Now <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://apps.apple.com/us/app/handly-app/id6778122913"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-handly-100 text-handly-700 rounded-2xl hover:shadow-xl hover:bg-handly-200 transition-all font-bold text-lg flex items-center justify-center gap-2 group"
            >
              Download App <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
