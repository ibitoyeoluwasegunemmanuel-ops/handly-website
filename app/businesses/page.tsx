import { Metadata } from 'next';
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
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-handly-50 to-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-handly-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-handly-50 rounded-full border border-handly-200 mb-6 hover:shadow-lg transition-shadow">
                <span className="w-2 h-2 bg-handly-500 rounded-full animate-pulse"></span>
                <span className="text-handly-700 text-sm font-semibold">For Businesses & Local Companies</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Grow Your Business. Attract <span className="bg-gradient-to-r from-handly-500 to-handly-700 bg-clip-text text-transparent">Customers</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
                Create a business profile, showcase your services, and connect with thousands of customers across Africa looking for what you offer.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/waitlist"
                  className="px-8 py-4 bg-gradient-to-r from-handly-500 to-handly-600 text-white rounded-xl hover:shadow-2xl transition-all duration-300 font-semibold flex items-center justify-center gap-2 group"
                >
                  Create Business Profile <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#how-it-works"
                  className="px-8 py-4 border-2 border-gray-300 text-gray-900 rounded-xl hover:border-handly-600 hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  See How It Works
                </Link>
              </div>

              <div className="flex items-center gap-8">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Businesses Listed</p>
                  <p className="font-semibold text-gray-900">3.2K+</p>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Growth Rate</p>
                  <p className="font-semibold text-gray-900">+180% YoY</p>
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

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div key={index} className="group bg-gradient-to-br from-handly-50 to-transparent p-8 rounded-2xl border border-gray-200 hover:shadow-xl hover:border-handly-300 transition-all duration-300">
                <div className="mb-4 p-3 bg-white rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How It Works for Businesses</h2>
            <p className="text-xl text-gray-600">Get your business listed in 4 simple steps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
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
              <div key={index} className="relative group">
                <div className="bg-white p-8 rounded-2xl border border-gray-200 group-hover:shadow-xl transition-all duration-300 h-full">
                  <div className="text-6xl font-bold text-handly-100 mb-4">{step.number}</div>
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div key={index} className="bg-gradient-to-br from-handly-50 to-white p-8 rounded-2xl border border-gray-200">
                <p className="text-lg font-semibold text-handly-600 mb-1">{story.name}</p>
                <p className="text-sm text-gray-600 mb-4">{story.location}</p>
                <p className="text-gray-700 text-lg leading-relaxed">"{story.story}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-handly-600 via-handly-500 to-handly-700"></div>
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
