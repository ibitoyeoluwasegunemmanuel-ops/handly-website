import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Link from 'next/link';
import { ArrowRight, Zap, Shield, Clock, Users, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'For Customers - Hire Trusted Workers | HANDLY',
  description: 'Post jobs and hire trusted workers, artisans, and service providers across Nigeria. Get work done right, at fair prices.',
};

export default function CustomersPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero
        badge="For Customers & Organizations"
        title={
          <>
            Post Jobs. Hire <span className="text-white">Trusted Workers</span>
          </>
        }
        subtitle="Find verified artisans, service providers, and skilled workers. Post your job, review proposals, and get quality work done—all in one platform."
        ctaPrimary={{ text: 'Post Your First Job', href: '/waitlist' }}
        ctaSecondary={{ text: 'See How It Works', href: '#how-it-works' }}
        stats={[
          { label: 'Jobs Posted', value: '12.5K+' },
          { label: 'Completed Successfully', value: '95%' },
        ]}
        rightContent={
          <div className="relative">
            <div className="bg-white bg-opacity-10 rounded-3xl p-1">
              <div className="bg-white rounded-3xl p-8 space-y-4">
                <div className="h-32 bg-handly-50 rounded-xl"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        }
      />

      {/* Benefits Section */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Customers Choose HANDLY</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Get work done right, safely, and affordably.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap size={28} className="text-handly-600" />,
              title: 'Find Workers Fast',
              description: 'Post your job and receive proposals from verified workers within minutes.',
            },
            {
              icon: <Shield size={28} className="text-handly-600" />,
              title: 'Safe & Secure',
              description: 'Escrow payments protect your money. Only pay when work is complete.',
            },
            {
              icon: <Clock size={28} className="text-handly-600" />,
              title: 'On-Time Delivery',
              description: 'Real-time tracking and accountability keep projects on schedule.',
            },
            {
              icon: <Users size={28} className="text-handly-600" />,
              title: 'Verified Professionals',
              description: 'All workers are verified and rated. See their reviews and portfolios.',
            },
            {
              icon: <CheckCircle size={28} className="text-handly-600" />,
              title: 'Fair Pricing',
              description: 'Transparent rates with no hidden fees. Competitive by design.',
            },
            {
              icon: <Users size={28} className="text-handly-600" />,
              title: 'Local Support',
              description: 'Get help in your language, timezone. Support when you need it.',
            },
          ].map((benefit, index) => (
            <Card key={index} light>
              <div className="mb-4 p-3 bg-white rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section light id="how-it-works">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How It Works for Customers</h2>
          <p className="text-xl text-gray-600">Get the job done in 4 simple steps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              number: '01',
              title: 'Post Your Job',
              description: 'Tell us what you need. Describe the work, timeline, and budget.',
              icon: '📝',
            },
            {
              number: '02',
              title: 'Receive Proposals',
              description: 'Get proposals from verified workers with ratings and portfolios.',
              icon: '📊',
            },
            {
              number: '03',
              title: 'Collaborate & Track',
              description: 'Communicate with your worker and track progress in real-time.',
              icon: '👥',
            },
            {
              number: '04',
              title: 'Pay & Rate',
              description: 'Release payment securely and rate your worker.',
              icon: '⭐',
            },
          ].map((step, index) => (
            <Card key={index} light={false}>
              <div className="text-6xl font-bold text-handly-100 mb-4">{step.number}</div>
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Success Stories */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Customer Success Stories</h2>
          <p className="text-xl text-gray-600">See how customers are getting things done on HANDLY.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Lagos Bank',
              role: 'Hiring Manager',
              story: 'Found a qualified plumber in 30 minutes. Fixed our office issue within the day.',
              rating: 5,
            },
            {
              name: 'Small Restaurant',
              role: 'Business Owner',
              story: 'Hired a graphic designer to redesign our menu. Quality work at fair prices.',
              rating: 5,
            },
            {
              name: 'Tech Startup',
              role: 'Operations Manager',
              story: 'Use HANDLY regularly for freelance developers and designers. Always reliable.',
              rating: 5,
            },
          ].map((story, index) => (
            <Card key={index} light>
              <div className="flex gap-1 mb-4">
                {[...Array(story.rating)].map((_, i) => (
                  <span key={i} className="text-2xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">"{story.story}"</p>
              <div>
                <p className="font-semibold text-gray-900">{story.name}</p>
                <p className="text-sm text-gray-600">{story.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #158F72 0%, #0E6B55 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Work Done?</h2>
          <p className="text-xl text-white opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Post your first job today and discover the HANDLY difference.
          </p>
          <Link
            href="/waitlist"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-handly-600 rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-lg group"
          >
            Post Your Job <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
