import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Zap, TrendingUp, Users, Award, Globe, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: 'For Workers & Artisans - Earn on HANDLY | Africa',
  description: 'Get discovered by customers. Grow your income. Build your reputation on HANDLY—Africa\'s trusted marketplace for workers and artisans.',
};

export default function WorkersPage() {
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
                <span className="text-handly-700 text-sm font-semibold">For Workers, Artisans & Service Providers</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Get Discovered. Build Your <span className="bg-gradient-to-r from-handly-500 to-handly-700 bg-clip-text text-transparent">Income</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
                Showcase your skills to thousands of customers. Earn fair rates, build your reputation, and grow your business on Africa's most trusted marketplace.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/waitlist"
                  className="px-8 py-4 bg-gradient-to-r from-handly-500 to-handly-600 text-white rounded-xl hover:shadow-2xl transition-all duration-300 font-semibold flex items-center justify-center gap-2 group"
                >
                  Get Started Free <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#how-it-works"
                  className="px-8 py-4 border-2 border-gray-300 text-gray-900 rounded-xl hover:border-handly-600 hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Learn More
                </Link>
              </div>

              <div className="flex items-center gap-8">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Active Workers</p>
                  <p className="font-semibold text-gray-900">15K+</p>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Avg. Earnings</p>
                  <p className="font-semibold text-gray-900">₦50K+/month</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Workers Choose HANDLY</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Earn fair rates, build your reputation, grow sustainably.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap size={28} className="text-handly-600" />,
                title: 'Get Discovered Fast',
                description: 'Build your profile once, get discovered by thousands of customers.',
              },
              {
                icon: <TrendingUp size={28} className="text-handly-600" />,
                title: 'Earn Fair Rates',
                description: 'Set your own rates. No middleman. Transparent pricing.',
              },
              {
                icon: <Award size={28} className="text-handly-600" />,
                title: 'Build Reputation',
                description: 'Grow your ratings and unlock premium opportunities.',
              },
              {
                icon: <Globe size={28} className="text-handly-600" />,
                title: 'Pan-African Market',
                description: 'Access customers across 15+ African countries.',
              },
              {
                icon: <Users size={28} className="text-handly-600" />,
                title: 'Community Support',
                description: 'Connect with other workers. Learn, share, grow together.',
              },
              {
                icon: <Briefcase size={28} className="text-handly-600" />,
                title: 'Secure Payments',
                description: 'Get paid safely. Fast payouts to your bank account.',
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How It Works for Workers</h2>
            <p className="text-xl text-gray-600">Start earning in 4 simple steps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {[
              {
                number: '01',
                title: 'Build Your Profile',
                description: 'Add your skills, experience, and portfolio. Show what you can do.',
                icon: '👤',
              },
              {
                number: '02',
                title: 'Browse Jobs',
                description: 'Find jobs that match your skills. Read details and apply.',
                icon: '🔍',
              },
              {
                number: '03',
                title: 'Get Hired & Work',
                description: 'Customers choose you. Collaborate and deliver quality work.',
                icon: '💼',
              },
              {
                number: '04',
                title: 'Get Paid & Grow',
                description: 'Receive payment securely. Ratings unlock new opportunities.',
                icon: '🏆',
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Worker Success Stories</h2>
            <p className="text-xl text-gray-600">Real workers, real earnings, real growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Chinedu (Electrician)',
                earnings: '₦150K+/month',
                story: 'Started with small jobs. Now get repeat customers. HANDLY changed my business.',
              },
              {
                name: 'Ama (Graphic Designer)',
                earnings: '₦200K+/month',
                story: 'Found my first client on HANDLY. Now book jobs weeks in advance.',
              },
              {
                name: 'James (Plumber)',
                earnings: '₦120K+/month',
                story: 'Building my reputation. 4.9 rating from 50+ completed jobs.',
              },
            ].map((story, index) => (
              <div key={index} className="bg-gradient-to-br from-handly-50 to-white p-8 rounded-2xl border border-gray-200">
                <p className="text-2xl font-bold text-handly-600 mb-2">{story.earnings}</p>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">"{story.story}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{story.name}</p>
                </div>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Earning?</h2>
          <p className="text-xl text-white opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of workers building sustainable incomes on HANDLY.
          </p>
          <Link
            href="/waitlist"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-handly-600 rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-lg group"
          >
            Join as a Worker <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
