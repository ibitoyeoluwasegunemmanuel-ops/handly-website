import { Metadata } from 'next';
import { CheckCircle2, Zap, Globe, Users, TrendingUp, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Section from '@/components/Section';

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
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #158F72 0%, #0E6B55 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Our Mission
          </h1>
          <p className="text-xl text-white text-opacity-90 leading-relaxed">
            Connect workers, customers, and businesses across Africa through a platform that creates opportunity, security, and prosperity.
          </p>
        </div>
      </section>

      {/* Problem & Opportunity */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Problem */}
          <div>
            <span className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-4">Challenge</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">The Problem</h2>

            <div className="space-y-6">
              {[
                {
                  title: 'Fragmented Labor Market',
                  desc: '150M+ informal workers across Africa operate in disconnected, offline marketplaces with no visibility or security',
                },
                {
                  title: 'Trust Deficit',
                  desc: 'Customers can\'t find qualified workers. Workers can\'t find reliable customers. Both face payment and safety risks',
                },
                {
                  title: 'Economic Inefficiency',
                  desc: 'Massive mismatch between supply and demand. Workers underutilized. Customers pay premium prices for inconsistent service',
                },
                {
                  title: 'Financial Exclusion',
                  desc: 'Workers lack access to formal financial services, credit, and pathways to prosperity',
                },
              ].map((item, i) => (
                <Card key={i} variant="default" hover="lift">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Opportunity */}
          <div>
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">Solution</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">The Opportunity</h2>

            <div className="space-y-6">
              {[
                {
                  title: 'Digital-First Platform',
                  desc: 'Build the operating system that formalizes the informal economy and creates visibility into Africa\'s labor market',
                },
                {
                  title: 'Trust & Verification',
                  desc: 'Rated profiles, secure payments, verified qualifications, and accountability for all participants',
                },
                {
                  title: 'Economic Empowerment',
                  desc: 'Enable workers to earn 2-3x more by connecting directly with quality customers and eliminating middlemen',
                },
                {
                  title: 'Massive TAM',
                  desc: '$100B+ services market across Africa. First-mover advantage in digital labor marketplace',
                },
              ].map((item, i) => (
                <Card key={i} variant="default" hover="lift">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Business Model */}
      <Section light>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-handly-100 text-handly-700 rounded-full text-sm font-semibold mb-4">Business Model</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">How We Create Value</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {businessModel.map((item, index) => (
            <Card key={index} variant="default" hover="lift">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.segment}</h3>
              <p className="text-2xl font-bold text-handly-600 mb-3">{item.flow}</p>
              <p className="text-gray-600 text-sm">{item.details}</p>
            </Card>
          ))}
        </div>

        <Card variant="gradient" hover="lift">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Unit Economics</h3>
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
        </Card>
      </Section>

      {/* Values */}
      <Section>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-handly-100 text-handly-700 rounded-full text-sm font-semibold mb-4">Values</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Our Core Values</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <Card key={index} variant="default" hover="lift">
              <div className="text-handly-600 mb-4">{value.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section light>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-handly-100 text-handly-700 rounded-full text-sm font-semibold mb-4">Growth</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Our Journey</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {timeline.map((item, index) => (
            <Card key={index} variant="default" hover="lift">
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
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #158F72 0%, #0E6B55 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Learn More?</h2>
          <p className="text-xl text-white text-opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Explore our detailed investor materials and see why HANDLY is positioned to dominate the African services marketplace
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/investors"
              variant="primary"
              size="lg"
              className="!bg-white !text-handly-600 hover:!shadow-2xl"
            >
              View Investor Page
            </Button>
            <Button
              href="/roadmap"
              variant="outline"
              size="lg"
              className="!border-white !text-white hover:!bg-white hover:!bg-opacity-10"
            >
              View Roadmap
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
