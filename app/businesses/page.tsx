import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Link from 'next/link';
import { ArrowRight, Zap, Users, TrendingUp, BarChart, Globe, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'For Businesses - Grow Your Business | HANDLY',
  description: 'Create a business profile, connect with customers, and grow your business on HANDLY\'s trusted marketplace.',
};

export default function BusinessesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero
        badge="For Businesses & Local Companies"
        title={
          <>
            Grow Your Business. Attract <span className="text-white">Customers</span>
          </>
        }
        subtitle="Create a business profile, showcase your services, and connect with thousands of customers across Africa looking for what you offer."
        ctaPrimary={{ text: 'Create Business Profile', href: '/waitlist' }}
        ctaSecondary={{ text: 'See How It Works', href: '#how-it-works' }}
        stats={[
          { label: 'Businesses Listed', value: '3.2K+' },
          { label: 'Growth Rate', value: '+180% YoY' },
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Businesses Choose HANDLY</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Reach customers, manage your business, grow sustainably.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Users size={28} className="text-handly-600" />,
              title: 'Reach Local Customers',
              description: 'Get discovered by customers in your area actively looking for your services.',
            },
            {
              icon: <BarChart size={28} className="text-handly-600" />,
              title: 'Manage Orders',
              description: 'Accept orders, manage inventory, and track customer requests from one dashboard.',
            },
            {
              icon: <TrendingUp size={28} className="text-handly-600" />,
              title: 'Grow Your Sales',
              description: 'Increase revenue through the largest customer network in Africa.',
            },
            {
              icon: <Shield size={28} className="text-handly-600" />,
              title: 'Secure Payments',
              description: 'Get paid safely through multiple methods. Keep more of what you earn.',
            },
            {
              icon: <Globe size={28} className="text-handly-600" />,
              title: 'Expand Beyond Your City',
              description: 'Grow from local shop to regional business across 15+ African countries.',
            },
            {
              icon: <Zap size={28} className="text-handly-600" />,
              title: 'Easy Setup',
              description: 'Create a professional business profile in minutes. No technical skills needed.',
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How It Works for Businesses</h2>
          <p className="text-xl text-gray-600">Get your business listed in 4 simple steps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              number: '01',
              title: 'Create Profile',
              description: 'Add business info, photos, services, and pricing.',
              icon: '🏢',
            },
            {
              number: '02',
              title: 'Get Discovered',
              description: 'Customers find you through search and map view.',
              icon: '📍',
            },
            {
              number: '03',
              title: 'Receive Orders',
              description: 'Customers place orders. Manage through dashboard.',
              icon: '📋',
            },
            {
              number: '04',
              title: 'Get Paid & Grow',
              description: 'Receive secure payments. Build your reputation.',
              icon: '💰',
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Business Success Stories</h2>
          <p className="text-xl text-gray-600">See how businesses are growing on HANDLY.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'ABC Restaurant',
              location: 'Lagos',
              story: 'Got 50+ orders in first month. Now getting repeat customers every week.',
            },
            {
              name: 'Smart Plumbing',
              location: 'Accra',
              story: 'Expanded from one shop to serving 3 neighborhoods. HANDLY made it possible.',
            },
            {
              name: 'Digital Services Hub',
              location: 'Kigali',
              story: 'Increased revenue by 3x in 6 months. Customers from 5 countries now.',
            },
          ].map((story, index) => (
            <Card key={index} light>
              <p className="text-lg font-semibold text-handly-600 mb-1">{story.name}</p>
              <p className="text-sm text-gray-600 mb-4">{story.location}</p>
              <p className="text-gray-700 text-lg leading-relaxed">"{story.story}"</p>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl text-white opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Get your business profile live today and start connecting with customers.
          </p>
          <Link
            href="/waitlist"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-handly-600 rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-lg group"
          >
            Get Started as a Business <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
