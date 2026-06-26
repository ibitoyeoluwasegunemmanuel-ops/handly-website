import { Metadata } from 'next';
import { ArrowUpRight, Users, TrendingUp, Globe, DollarSign, Zap } from 'lucide-react';
import Card from '@/components/Card';
import Section from '@/components/Section';
import InvestorMetrics from '@/components/InvestorMetrics';

export const metadata: Metadata = {
  title: 'Traction Dashboard - HANDLY | Real-Time Metrics',
  description: 'HANDLY\'s real-time traction dashboard showing user growth, revenue, and platform metrics.',
};

export default function TractionPage() {
  const growthHighlights = [
    {
      icon: <Users className="w-8 h-8" />,
      metric: '50K+',
      label: 'Total Users',
      change: '+45%',
      period: 'Month-over-Month',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      metric: '15K+',
      label: 'Active Workers',
      change: '+60%',
      period: 'Month-over-Month',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      metric: '3.2K',
      label: 'Businesses',
      change: '+35%',
      period: 'Month-over-Month',
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      metric: '$480K',
      label: 'Monthly Revenue',
      change: '+200%',
      period: 'Year-over-Year',
    },
  ];

  const detailedMetrics = [
    {
      category: 'Users',
      metrics: [
        { name: 'Total Users', value: '50K+', benchmark: '40K', status: 'exceeding' },
        { name: 'Customers', value: '30K+', benchmark: '25K', status: 'exceeding' },
        { name: 'Workers', value: '15K+', benchmark: '12K', status: 'exceeding' },
        { name: 'Businesses', value: '3.2K', benchmark: '2.5K', status: 'exceeding' },
      ],
    },
    {
      category: 'Activity',
      metrics: [
        { name: 'Jobs Posted', value: '12.5K', benchmark: '10K', status: 'exceeding' },
        { name: 'Jobs Completed', value: '10K+', benchmark: '8K', status: 'exceeding' },
        { name: 'Active Jobs', value: '2.5K', benchmark: '2K', status: 'exceeding' },
        { name: 'Avg. Rating', value: '4.6/5', benchmark: '4.2/5', status: 'exceeding' },
      ],
    },
    {
      category: 'Financial',
      metrics: [
        { name: 'Monthly Revenue', value: '$480K', benchmark: '$300K', status: 'exceeding' },
        { name: 'Worker Earnings', value: '₦2B+', benchmark: '₦1.2B', status: 'exceeding' },
        { name: 'Avg. Transaction', value: '₦15K', benchmark: '₦12K', status: 'exceeding' },
        { name: 'Platform Take', value: '20-30%', benchmark: '15-20%', status: 'exceeding' },
      ],
    },
    {
      category: 'Geographic',
      metrics: [
        { name: 'States Covered', value: '15', benchmark: '12', status: 'exceeding' },
        { name: 'Top State', value: 'Lagos', benchmark: 'Lagos', status: 'stable' },
        { name: 'Countries', value: '1', benchmark: '1', status: 'planned' },
        { name: 'Cities', value: '200+', benchmark: '150', status: 'exceeding' },
      ],
    },
  ];

  const costMetrics = [
    { metric: 'CAC (Customer Acquisition Cost)', value: '$0.50', efficiency: 'Exceptional' },
    { metric: 'LTV (Lifetime Value)', value: '$150', efficiency: 'Strong' },
    { metric: 'LTV:CAC Ratio', value: '300:1', efficiency: 'Market Leading' },
    { metric: 'Payback Period', value: '3 days', efficiency: 'Instant' },
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
            Traction Dashboard
          </h1>
          <p className="text-xl text-white text-opacity-90 leading-relaxed">
            Real-time metrics showing HANDLY's market-leading growth and unit economics
          </p>
        </div>
      </section>

      {/* Key Growth Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {growthHighlights.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-handly-100 rounded-lg text-handly-600">
                    {item.icon}
                  </div>
                  <div className="flex items-center gap-1 text-green-600">
                    <ArrowUpRight size={20} />
                    <span className="font-bold">{item.change}</span>
                  </div>
                </div>

                <p className="text-4xl font-bold text-gray-900 mb-1">{item.metric}</p>
                <p className="text-gray-600 text-sm mb-2">{item.label}</p>
                <p className="text-xs text-gray-500">{item.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Metrics Component */}
      <InvestorMetrics />

      {/* Detailed Metrics Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Detailed Performance</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {detailedMetrics.map((section, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{section.category}</h3>

                <div className="space-y-3">
                  {section.metrics.map((m, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{m.name}</p>
                        <p className="text-xs text-gray-500">Benchmark: {m.benchmark}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-gray-900">{m.value}</p>
                        <span
                          className={`text-xs font-semibold ${
                            m.status === 'exceeding'
                              ? 'text-green-600'
                              : m.status === 'stable'
                              ? 'text-blue-600'
                              : 'text-gray-600'
                          }`}
                        >
                          {m.status === 'exceeding' && '✓ Exceeding'}
                          {m.status === 'stable' && '→ Stable'}
                          {m.status === 'planned' && '◎ Planned'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unit Economics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Unit Economics</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {costMetrics.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-handly-50 to-white p-6 rounded-lg border-2 border-handly-200">
                <p className="text-gray-600 text-sm mb-2">{item.metric}</p>
                <p className="text-3xl font-bold text-gray-900 mb-1">{item.value}</p>
                <p className="text-sm font-semibold text-green-600">{item.efficiency}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-lg border-l-4 border-green-500">
            <h3 className="text-lg font-bold text-gray-900 mb-4">What This Means</h3>
            <p className="text-gray-700 mb-4">
              HANDLY has achieved exceptional unit economics that demonstrate market-product fit and sustainable growth:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>300:1 LTV:CAC ratio</strong> is extraordinary (SaaS benchmark: 3:1)</li>
              <li>• <strong>3-day payback period</strong> means we recoup customer acquisition costs almost immediately</li>
              <li>• <strong>40-50% target margins</strong> at scale are highly profitable</li>
              <li>• <strong>No paid acquisition needed</strong> - viral growth from satisfied users</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Growth Trajectory */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Growth Trajectory</h2>

          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="text-gray-600 text-sm mb-1">Q2 2024</p>
                <p className="text-2xl font-bold text-gray-900">5K</p>
                <p className="text-xs text-gray-600">Users</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">Q3 2024</p>
                <p className="text-2xl font-bold text-gray-900">25K</p>
                <p className="text-xs text-gray-600">Users</p>
                <p className="text-xs text-green-600 font-semibold mt-1">5x growth</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">Q4 2024</p>
                <p className="text-2xl font-bold text-gray-900">50K</p>
                <p className="text-xs text-gray-600">Users</p>
                <p className="text-xs text-green-600 font-semibold mt-1">2x growth</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">Q1 2025</p>
                <p className="text-2xl font-bold text-handly-600">100K</p>
                <p className="text-xs text-gray-600">Users (Projected)</p>
                <p className="text-xs text-blue-600 font-semibold mt-1">2x growth</p>
              </div>
            </div>

            <p className="text-gray-700 mt-8 text-sm">
              Consistent 2x quarter-over-quarter growth demonstrates strong product-market fit. This trajectory puts us at 1M+ users by end of 2025.
            </p>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Insights</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
              <h3 className="text-lg font-bold text-gray-900 mb-2">🚀 Viral Growth</h3>
              <p className="text-gray-700">
                45% month-over-month growth with minimal marketing spend demonstrates strong product-market fit and user satisfaction
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
              <h3 className="text-lg font-bold text-gray-900 mb-2">💰 Profitability Path</h3>
              <p className="text-gray-700">
                Projected to reach profitability in 18 months with current growth trajectory and unit economics
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded">
              <h3 className="text-lg font-bold text-gray-900 mb-2">🌍 Geographic Expansion Ready</h3>
              <p className="text-gray-700">
                Success in Nigeria with 15 states covered provides template for rapid expansion to Ghana, Kenya, and beyond
              </p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded">
              <h3 className="text-lg font-bold text-gray-900 mb-2">🤝 Network Effects</h3>
              <p className="text-gray-700">
                More workers attract more customers who attract more workers. Classic flywheel is accelerating exponentially
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
