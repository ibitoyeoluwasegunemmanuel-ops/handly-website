import { Metadata } from 'next';
import { ArrowRight, TrendingUp, Globe, Users, Zap, Shield, Target } from 'lucide-react';
import Link from 'next/link';
import InvestorMetrics from '@/components/InvestorMetrics';

export const metadata: Metadata = {
  title: 'Investors - HANDLY | Funding & Growth Opportunities',
  description: 'Discover why HANDLY is the most promising services marketplace in Africa. Real traction, clear path to profitability, and massive market opportunity.',
};

export default function InvestorsPage() {
  const advantages = [
    {
      icon: '🚀',
      title: 'Proven Traction',
      description: '50K+ users, 15K active workers, ₦2B+ paid to workers in first 12 months',
    },
    {
      icon: '🌍',
      title: 'African-First',
      description: 'Built for African markets with local payment methods and offline-first mobile',
    },
    {
      icon: '💰',
      title: 'Unit Economics',
      description: '300:1 LTV:CAC ratio with path to 40-50% margins at scale',
    },
    {
      icon: '📈',
      title: 'Rapid Growth',
      description: '45% month-over-month growth with no paid acquisition',
    },
    {
      icon: '🤝',
      title: 'Network Effects',
      description: 'More workers = better matching = more customers = exponential growth',
    },
    {
      icon: '🎯',
      title: 'Massive TAM',
      description: '500M workers across Africa with fragmented offline markets',
    },
  ];

  const keyMetrics = [
    { label: 'User Growth', value: '45%', sublabel: 'Month-over-Month' },
    { label: 'Worker Growth', value: '60%', sublabel: 'Month-over-Month' },
    { label: 'Revenue Growth', value: '200%', sublabel: 'Year-over-Year' },
    { label: 'LTV:CAC Ratio', value: '300:1', sublabel: 'Exceptional Economics' },
    { label: 'Geographic Coverage', value: '15', sublabel: 'Countries' },
    { label: 'Time to Profitability', value: '18mo', sublabel: 'At Current Trajectory' },
  ];

  const opportunities = [
    {
      title: 'Series A: $3-5M',
      timeline: 'Q1 2025',
      use: [
        'Product engineering (25%)',
        'Market expansion (35%)',
        'Go-to-market & partnerships (25%)',
        'Operations & team (15%)',
      ],
    },
    {
      title: 'Series B: $10-15M',
      timeline: 'Q4 2025',
      use: [
        'Pan-African expansion (40%)',
        'Multi-language support (20%)',
        'Enterprise platform (20%)',
        'Operations & team (20%)',
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-handly-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              The Future of Work in Africa
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              HANDLY is building the operating system connecting workers, customers, and businesses across Africa.
              Real traction. Clear path to profitability. Massive market opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/traction"
                className="inline-flex items-center gap-2 px-8 py-3 bg-handly-600 text-white rounded-lg hover:bg-handly-700 transition-colors font-semibold"
              >
                View Traction Dashboard
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/company"
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-handly-600 text-handly-600 rounded-lg hover:bg-handly-50 transition-colors font-semibold"
              >
                Company Overview
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {keyMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-handly-600 mb-1">
                  {metric.value}
                </p>
                <p className="text-sm font-semibold text-gray-900">{metric.label}</p>
                <p className="text-xs text-gray-600">{metric.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Metrics */}
      <InvestorMetrics />

      {/* Why Invest */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Invest in HANDLY?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-16 bg-gradient-to-r from-handly-50 to-handly-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Massive Market Opportunity</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Total Addressable Market</h3>
                  <p className="text-4xl font-bold text-handly-600">$100B+</p>
                  <p className="text-gray-600 mt-2">Services marketplace across Africa</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Serviceable Addressable Market</h3>
                  <p className="text-4xl font-bold text-handly-600">$5B</p>
                  <p className="text-gray-600 mt-2">Professional services in top 10 countries</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Target (Year 5)</h3>
                  <p className="text-4xl font-bold text-handly-600">1% Market Share</p>
                  <p className="text-gray-600 mt-2">$50M+ revenue opportunity</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Market Drivers</h3>
              <ul className="space-y-4">
                {[
                  'Rising mobile penetration (45%+ smartphone adoption)',
                  'Growing gig economy (150M+ informal workers)',
                  'Digital payment adoption (Paystack, Flutterwave)',
                  'Government mandate for formal work',
                  'Youth unemployment driving demand for flexible work',
                  'Cross-border worker mobility increasing',
                  'Post-pandemic remote work normalization',
                  'Enterprise efficiency focus on outsourcing',
                ].map((driver, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Zap size={20} className="text-handly-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{driver}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Opportunities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Funding Opportunities</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {opportunities.map((opportunity, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border-2 border-handly-200">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{opportunity.title}</h3>
                    <p className="text-gray-600 mt-1">{opportunity.timeline}</p>
                  </div>
                  <TrendingUp size={32} className="text-handly-600" />
                </div>

                <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase">Use of Funds</h4>
                <div className="space-y-3">
                  {opportunity.use.map((item, i) => (
                    <div key={i}>
                      <p className="text-gray-700 text-sm mb-1">{item}</p>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-handly-600 h-2 rounded-full"
                          style={{
                            width: item.includes('25%')
                              ? '25%'
                              : item.includes('35%')
                              ? '35%'
                              : item.includes('15%')
                              ? '15%'
                              : item.includes('40%')
                              ? '40%'
                              : item.includes('20%')
                              ? '20%'
                              : '20%',
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-handly-600 text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-2">Interested in investing?</h3>
            <p className="mb-6 text-handly-100">Let's discuss how HANDLY can deliver exceptional returns</p>
            <Link
              href="/contact?type=investor"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-handly-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Schedule a Meeting
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation to Other Pages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Explore More</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/company"
              className="group bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-all"
            >
              <div className="text-3xl mb-3">🏢</div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-handly-600 transition-colors">
                Company Overview
              </h3>
              <p className="text-gray-600 text-sm mt-2">Vision, mission, and why HANDLY exists</p>
              <div className="flex items-center gap-2 mt-4 text-handly-600 font-semibold text-sm">
                Learn more <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/roadmap"
              className="group bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-all"
            >
              <div className="text-3xl mb-3">🗺️</div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-handly-600 transition-colors">
                Product Roadmap
              </h3>
              <p className="text-gray-600 text-sm mt-2">Where we're heading and how we'll get there</p>
              <div className="flex items-center gap-2 mt-4 text-handly-600 font-semibold text-sm">
                View roadmap <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/traction"
              className="group bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-all"
            >
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-handly-600 transition-colors">
                Traction Dashboard
              </h3>
              <p className="text-gray-600 text-sm mt-2">Real-time metrics and platform analytics</p>
              <div className="flex items-center gap-2 mt-4 text-handly-600 font-semibold text-sm">
                View metrics <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
