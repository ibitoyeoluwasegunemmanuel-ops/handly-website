import { Metadata } from 'next';
import { ArrowRight, TrendingUp, Globe, Users, Zap, Shield, Target } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Section from '@/components/Section';
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
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #158F72 0%, #0E6B55 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block px-4 py-2 bg-white bg-opacity-10 backdrop-blur-md text-white rounded-full text-sm font-semibold mb-6">For Investors</span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            The Future of Work in Africa
          </h1>
          <p className="text-xl text-white text-opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
            HANDLY is building the operating system connecting workers, customers, and businesses across Africa.
            Real traction. Clear path to profitability. Massive market opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/traction"
              variant="primary"
              size="lg"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
              className="!bg-white !text-handly-600 hover:!shadow-2xl"
            >
              View Traction Dashboard
            </Button>
            <Button
              href="/company"
              variant="outline"
              size="lg"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
              className="!border-white !text-white hover:!bg-white hover:!bg-opacity-10"
            >
              Company Overview
            </Button>
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
      <Section light>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-handly-100 text-handly-700 rounded-full text-sm font-semibold mb-4">Investment Thesis</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Why Invest in HANDLY?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} variant="default" hover="lift">
              <div className="text-4xl mb-4">{advantage.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Market Opportunity */}
      <Section light>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-handly-100 text-handly-700 rounded-full text-sm font-semibold mb-4">Market</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Massive Market Opportunity</h2>

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

            <Card variant="default" hover="lift">
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
            </Card>
        </div>
      </Section>

      {/* Funding Opportunities */}
      <Section>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-handly-100 text-handly-700 rounded-full text-sm font-semibold mb-4">Funding</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Funding Opportunities</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {opportunities.map((opportunity, index) => (
            <Card key={index} variant="gradient" hover="lift">
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
            </Card>
          ))}
        </div>

        <div className="relative py-12 overflow-hidden rounded-xl" style={{ background: 'linear-gradient(135deg, #158F72 0%, #0E6B55 100%)' }}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>
          <div className="text-center relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2">Interested in investing?</h3>
            <p className="mb-6 text-white text-opacity-90">Let's discuss how HANDLY can deliver exceptional returns</p>
            <Button
              href="/contact?type=investor"
              variant="primary"
              size="lg"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
              className="!bg-white !text-handly-600 hover:!shadow-2xl"
            >
              Schedule a Meeting
            </Button>
          </div>
        </div>
      </Section>

      {/* Navigation to Other Pages */}
      <Section light>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900">Explore More</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/company" className="group">
            <Card variant="default" hover="lift">
              <div className="text-3xl mb-3">🏢</div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-handly-600 transition-colors">
                Company Overview
              </h3>
              <p className="text-gray-600 text-sm mt-2">Vision, mission, and why HANDLY exists</p>
              <div className="flex items-center gap-2 mt-4 text-handly-600 font-semibold text-sm">
                Learn more <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          </Link>

          <Link href="/roadmap" className="group">
            <Card variant="default" hover="lift">
              <div className="text-3xl mb-3">🗺️</div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-handly-600 transition-colors">
                Product Roadmap
              </h3>
              <p className="text-gray-600 text-sm mt-2">Where we're heading and how we'll get there</p>
              <div className="flex items-center gap-2 mt-4 text-handly-600 font-semibold text-sm">
                View roadmap <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          </Link>

          <Link href="/traction" className="group">
            <Card variant="default" hover="lift">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-handly-600 transition-colors">
                Traction Dashboard
              </h3>
              <p className="text-gray-600 text-sm mt-2">Real-time metrics and platform analytics</p>
              <div className="flex items-center gap-2 mt-4 text-handly-600 font-semibold text-sm">
                View metrics <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          </Link>
        </div>
      </Section>
    </div>
  );
}
