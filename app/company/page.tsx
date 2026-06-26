import { Metadata } from 'next';
import { CheckCircle2, Zap, Globe, Users, TrendingUp, Shield } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Company - HANDLY | Vision & Mission',
  description: 'Learn about HANDLY\'s mission to connect workers and customers across Africa. Our vision, values, and the problem we\'re solving.',
};

export default function CompanyPage() {
  const values = [
    {
      icon: <Users size={32} />,
      title: 'People First',
      description: 'We prioritize the success and dignity of workers, customers, and entrepreneurs',
    },
    {
      icon: <Globe size={32} />,
      title: 'African-Centric',
      description: 'Built in Africa, for Africa, with deep understanding of local contexts',
    },
    {
      icon: <Zap size={32} />,
      title: 'Speed & Simplicity',
      description: 'Make complex things simple. Fast execution beats perfect planning',
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Sustainable Growth',
      description: 'Profitable from day one. Growth that creates real value for all stakeholders',
    },
    {
      icon: <Shield size={32} />,
      title: 'Trust & Security',
      description: 'Safety and reliability are non-negotiable. Secure payments and verified workers',
    },
  ];

  const businessModel = [
    {
      segment: 'Workers',
      flow: '70-80% of earnings',
      details: 'Instant payouts, flexible scheduling, verified customers',
    },
    {
      segment: 'Customers',
      flow: 'Pay per transaction',
      details: 'Search, hire, pay - all on one platform',
    },
    {
      segment: 'Businesses',
      flow: 'Monthly subscription',
      details: 'Directory, customer discovery, managed workforce',
    },
    {
      segment: 'HANDLY',
      flow: '20-30% platform fee',
      details: 'Infrastructure, payments, support, growth',
    },
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Foundation',
      highlights: [
        'MVP launch with live video calling',
        '50+ interpreters onboarded',
        'Payment integration (Stripe & Paystack)',
        '5K users pre-launch',
      ],
    },
    {
      year: '2024-2025',
      title: 'Product-Market Fit',
      highlights: [
        'Mobile app launch (iOS & Android)',
        'Enterprise customer acquisition',
        'Geographic expansion',
        'Revenue growth to $100K+/month',
      ],
    },
    {
      year: '2025',
      title: 'Scale Phase 1',
      highlights: [
        'Series A funding ($3-5M)',
        'Multi-country expansion',
        'Enterprise platform',
        '$200K+/month revenue',
      ],
    },
    {
      year: '2025-2026',
      title: 'Pan-African Leader',
      highlights: [
        'Geographic expansion to 10+ countries',
        'Multi-language support',
        'Series B funding ($10-15M)',
        'Profitability milestone',
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-handly-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Mission
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            Connect workers, customers, and businesses across Africa through a platform that creates opportunity, security, and prosperity.
          </p>
        </div>
      </section>

      {/* Problem & Opportunity */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Problem */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Problem</h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Fragmented Labor Market</h3>
                  <p className="text-gray-700">
                    150M+ informal workers across Africa operate in disconnected, offline marketplaces with no visibility or security
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Trust Deficit</h3>
                  <p className="text-gray-700">
                    Customers can't find qualified workers. Workers can't find reliable customers. Both face payment and safety risks
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Economic Inefficiency</h3>
                  <p className="text-gray-700">
                    Massive mismatch between supply and demand. Workers underutilized. Customers pay premium prices for inconsistent service
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Financial Exclusion</h3>
                  <p className="text-gray-700">
                    Workers lack access to formal financial services, credit, and pathways to prosperity
                  </p>
                </div>
              </div>
            </div>

            {/* Opportunity */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Opportunity</h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Digital-First Platform</h3>
                  <p className="text-gray-700">
                    Build the operating system that formalizes the informal economy and creates visibility into Africa's labor market
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Trust & Verification</h3>
                  <p className="text-gray-700">
                    Rated profiles, secure payments, verified qualifications, and accountability for all participants
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Economic Empowerment</h3>
                  <p className="text-gray-700">
                    Enable workers to earn 2-3x more by connecting directly with quality customers and eliminating middlemen
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Massive TAM</h3>
                  <p className="text-gray-700">
                    $100B+ services market across Africa. First-mover advantage in digital labor marketplace
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-16 bg-gradient-to-r from-handly-50 to-handly-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Business Model</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessModel.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border-2 border-handly-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.segment}</h3>
                <p className="text-2xl font-bold text-handly-600 mb-3">{item.flow}</p>
                <p className="text-gray-600 text-sm">{item.details}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg border border-handly-300">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Unit Economics</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <p className="text-gray-600 text-sm mb-1">Customer Acquisition Cost</p>
                <p className="text-2xl font-bold text-gray-900">$0.50</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">Lifetime Value</p>
                <p className="text-2xl font-bold text-handly-600">$150</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">LTV:CAC Ratio</p>
                <p className="text-2xl font-bold text-green-600">300:1</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">Path to Profitability</p>
                <p className="text-2xl font-bold text-gray-900">18 months</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-handly-600 mb-4">{value.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Journey</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-sm font-semibold text-handly-600 uppercase mb-2">{item.year}</h3>
                <h4 className="text-lg font-bold text-gray-900 mb-4">{item.title}</h4>
                <ul className="space-y-2">
                  {item.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 size={16} className="text-handly-600 flex-shrink-0 mt-1" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-handly-600 to-handly-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Learn More?</h2>
          <p className="text-handly-100 mb-8 text-lg">
            Explore our detailed investor materials and see why HANDLY is positioned to dominate the African services marketplace
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/investors"
              className="inline-block px-8 py-3 bg-white text-handly-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              View Investor Page
            </Link>
            <Link
              href="/roadmap"
              className="inline-block px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-handly-600 transition-colors font-semibold"
            >
              View Roadmap
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
