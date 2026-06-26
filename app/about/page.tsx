import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About HANDLY - Empowering Africa\'s Talent',
  description: 'Discover HANDLY\'s mission to transform how Africa works. Join thousands of freelancers and businesses building the future of work.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transforming How <span className="bg-gradient-to-r from-handly-500 to-handly-700 bg-clip-text text-transparent">Africa Does Business</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed mb-8">
            HANDLY is building Africa's most trusted marketplace for connecting customers, skilled workers, artisans, service providers, and businesses. We're empowering people to earn sustainably and helping businesses grow without limits.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  HANDLY was founded on a simple truth: <strong>Africa has incredible talent and untapped potential, but systems that don't work for them.</strong>
                </p>
                <p>
                  We watched skilled workers, artisans, service providers, and small businesses struggle to connect with customers at fair prices, while customers couldn't find trustworthy help. The gap was costing Africa billions in opportunity.
                </p>
                <p>
                  So we built HANDLY—a marketplace designed specifically for African realities: instant connections, secure payments in local currencies, verified workers, and a community that celebrates excellence.
                </p>
                <p>
                  Today, 50K+ users and thousands of businesses trust HANDLY. And we're just getting started.
                </p>
              </div>
              <Link
                href="/waitlist"
                className="inline-flex items-center gap-2 mt-8 px-8 py-3 bg-handly-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 font-semibold group"
              >
                Join the Movement <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-handly-50 to-white rounded-3xl p-12 border border-gray-200">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🌍</div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Pan-African Reach</p>
                      <p className="font-semibold text-gray-900">15+ Countries</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">👥</div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Global Talent Pool</p>
                      <p className="font-semibold text-gray-900">50K+ Freelancers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">💼</div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Business Partners</p>
                      <p className="font-semibold text-gray-900">3.2K+ Companies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To empower Africa's talent by building a world-class platform that connects exceptional freelancers with high-impact opportunities, enabling sustainable income and business growth across the continent.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                A world where geographic location doesn't limit opportunity, where African talent is recognized globally, and where freelancers and businesses can thrive together on a platform built for them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">These principles guide every decision we make</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🤝',
                title: 'Community First',
                description: 'We build for our community, not just from them. Your success is our success.',
              },
              {
                icon: '✨',
                title: 'Excellence',
                description: 'We maintain the highest standards in every interaction, transaction, and innovation.',
              },
              {
                icon: '🔒',
                title: 'Trust & Transparency',
                description: 'Clear communication and secure transactions are non-negotiable. No hidden fees.',
              },
              {
                icon: '📈',
                title: 'Empowerment',
                description: 'We give you tools, resources, and support to take control of your future.',
              },
              {
                icon: '🌍',
                title: 'African-First',
                description: 'Built for Africa\'s unique challenges, opportunities, and strengths.',
              },
              {
                icon: '💡',
                title: 'Innovation',
                description: 'We continuously evolve to serve you better with cutting-edge solutions.',
              },
            ].map((value, index) => (
              <div key={index} className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why HANDLY */}
      <section className="py-24 bg-gradient-to-br from-handly-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose HANDLY?</h2>
            <p className="text-xl text-gray-600">We're different because we're built for Africa</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Local payment methods and currency support',
              'Offline-friendly interface for unreliable connections',
              'African-focused customer support (African timezones)',
              'Verification system designed for African context',
              'Competitive rates—no middleman fees',
              'Thriving community of African workers and entrepreneurs',
              'Security tailored to local needs',
              'Growth opportunities across 15+ countries',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white p-6 rounded-xl border border-gray-200">
                <CheckCircle size={24} className="text-handly-600 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Be Part of the Story?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of users, workers, and businesses already transforming how Africa does business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/waitlist"
              className="px-8 py-4 bg-gradient-to-r from-handly-500 to-handly-600 text-white rounded-xl hover:shadow-xl transition-all duration-300 font-semibold"
            >
              Join Waitlist
            </Link>
            <Link
              href="/how-it-works"
              className="px-8 py-4 border-2 border-gray-300 text-gray-900 rounded-xl hover:border-handly-600 transition-all duration-300 font-semibold"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
