'use client';

import Link from 'next/link';
import { ArrowRight, Zap, Users, TrendingUp, Shield, Clock, Globe } from 'lucide-react';
import WaitlistForm from '@/components/WaitlistForm';
import Testimonials from '@/components/Testimonials';
import StatsCounter from '@/components/StatsCounter';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 via-white to-white pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1 bg-blue-100 rounded-full">
              <span className="text-blue-700 text-sm font-medium">🚀 Coming Soon to Africa</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Hire Talent. <span className="text-blue-600">Get Work Done.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              HANDLY connects businesses with Africa's most skilled freelancers. Find the perfect match, collaborate seamlessly, and scale your team without limits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/waitlist"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2"
              >
                Join Waitlist <ArrowRight size={20} />
              </Link>
              <Link
                href="/how-it-works"
                className="px-8 py-3 border-2 border-gray-300 text-gray-900 rounded-lg hover:border-blue-600 transition-colors font-medium"
              >
                Learn How It Works
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16">
            <StatsCounter />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose HANDLY?</h2>
            <p className="text-lg text-gray-600">Everything you need to succeed as a freelancer or business</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap size={24} className="text-blue-600" />,
                title: 'Instant Matching',
                description: 'Our smart algorithm matches you with the perfect freelancer in minutes.',
              },
              {
                icon: <Shield size={24} className="text-blue-600" />,
                title: 'Secure Payments',
                description: 'Escrow-protected payments ensure both freelancers and clients are safe.',
              },
              {
                icon: <Clock size={24} className="text-blue-600" />,
                title: 'On-Time Delivery',
                description: 'Real-time tracking and accountability keep projects on schedule.',
              },
              {
                icon: <Users size={24} className="text-blue-600" />,
                title: 'Vetted Professionals',
                description: 'All freelancers are verified and reviewed by the community.',
              },
              {
                icon: <TrendingUp size={24} className="text-blue-600" />,
                title: 'Fair Pricing',
                description: 'Transparent pricing with no hidden fees. Earn what you deserve.',
              },
              {
                icon: <Globe size={24} className="text-blue-600" />,
                title: 'Pan-African',
                description: 'Connect with talent and opportunities across the entire African continent.',
              },
            ].map((feature, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple 3-Step Process</h2>
            <p className="text-lg text-gray-600">Get started in minutes, not days</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: '1',
                title: 'Sign Up',
                description: 'Create your profile and tell us what you\'re looking for (or what you offer).',
                icon: '📝',
              },
              {
                number: '2',
                title: 'Connect',
                description: 'Browse profiles, message directly, and find your perfect match.',
                icon: '🤝',
              },
              {
                number: '3',
                title: 'Collaborate',
                description: 'Work together with secure payments, tracking, and support.',
                icon: '🚀',
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-5xl font-bold text-blue-100 mb-2">{step.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight size={24} className="text-blue-600" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/how-it-works"
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center gap-2"
            >
              See Detailed Guide <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Community Says</h2>
            <p className="text-lg text-gray-600">Join thousands who are already succeeding with HANDLY</p>
          </div>

          <Testimonials limit={3} />

          <div className="text-center mt-12">
            <Link
              href="/testimonials"
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center gap-2"
            >
              Read More Stories <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90">Join our waitlist and be among the first to experience HANDLY</p>
          <Link
            href="/waitlist"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            Join Our Waitlist Now
          </Link>
        </div>
      </section>
    </div>
  );
}
