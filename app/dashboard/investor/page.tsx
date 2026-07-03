'use client';

import { useState, useEffect } from 'react';
import { TrendingUp, Users, Download, Globe, BarChart3, DollarSign } from 'lucide-react';
import { GrowthChart } from '@/components/Charts';
import { getWaitlistStats, getTopStates } from '@/lib/supabase';
import { format } from 'date-fns';

// Mock growth projection data
const generateProjections = () => {
  const data = [];
  const today = new Date();

  for (let i = 0; i < 90; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() + i);

    // Aggressive growth projection
    const baseVisitors = 1000;
    const baseSigns = 50;
    const baseDownloads = 20;

    data.push({
      date: format(date, 'MMM dd'),
      visitors: Math.round(baseVisitors + baseVisitors * (i * 0.05)),
      signups: Math.round(baseSigns + baseSigns * (i * 0.08)),
      downloads: Math.round(baseDownloads + baseDownloads * (i * 0.1)),
      active_users: Math.round(baseVisitors * 0.6 + baseVisitors * 0.6 * (i * 0.05)),
    });
  }

  return data;
};

export default function InvestorDashboard() {
  const [stats, setStats] = useState<any>(null);
  const [topStates, setTopStates] = useState<any[]>([]);
  const [projections] = useState(generateProjections());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [waitlistStats, states] = await Promise.all([
          getWaitlistStats(),
          getTopStates(),
        ]);

        setStats(waitlistStats);
        setTopStates(states);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const kpis = [
    {
      icon: Users,
      label: 'Total Users Engaged',
      value: stats?.total || 0,
      change: '+45%',
      changeColor: 'text-green-600',
    },
    {
      icon: Download,
      label: 'Expected Downloads (3mo)',
      value: '~2,400',
      change: '+120%',
      changeColor: 'text-green-600',
    },
    {
      icon: Globe,
      label: 'Active Countries',
      value: topStates ? topStates.length : 0,
      change: '+5 new',
      changeColor: 'text-handly-600',
    },
    {
      icon: DollarSign,
      label: 'Estimated Revenue (3mo)',
      value: '$15K-30K',
      change: '+200% YoY',
      changeColor: 'text-green-600',
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-handly-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Investor Dashboard</h1>
          <p className="text-gray-600 mt-2">HANDLY Growth Metrics & Traction Report</p>
        </div>

        {/* Executive Summary */}
        <div className="bg-gradient-to-r from-handly-500 to-handly-700 text-white p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Executive Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="opacity-90 mb-2">Current Waitlist</p>
              <p className="text-4xl font-bold">{stats?.total || 0}+ Users</p>
              <p className="opacity-75 text-sm mt-2">Engaged pre-launch community</p>
            </div>
            <div>
              <p className="opacity-90 mb-2">3-Month Projection</p>
              <p className="text-4xl font-bold">5,000+</p>
              <p className="opacity-75 text-sm mt-2">Expected active users at launch</p>
            </div>
          </div>
        </div>

        {/* KPIs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <Icon size={24} className="text-handly-600" />
                  <span className={`text-sm font-semibold ${kpi.changeColor}`}>
                    {kpi.change}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-2">{kpi.label}</p>
                <p className="text-3xl font-bold text-gray-900">{kpi.value}</p>
              </div>
            );
          })}
        </div>

        {/* Growth Projection */}
        <div className="mb-8">
          <GrowthChart data={projections} title="90-Day Growth Projection" />
        </div>

        {/* Market Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* User Segmentation */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">User Segmentation</h3>
            <div className="space-y-4">
              {[
                { type: 'Customers', value: stats?.customers || 0, percentage: stats?.total ? ((stats.customers / stats.total) * 100).toFixed(1) : 0 },
                { type: 'Workers & Artisans', value: stats?.workers || 0, percentage: stats?.total ? ((stats.workers / stats.total) * 100).toFixed(1) : 0 },
                { type: 'Businesses', value: stats?.businesses || 0, percentage: stats?.total ? ((stats.businesses / stats.total) * 100).toFixed(1) : 0 },
              ].map((segment, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-900 font-medium">{segment.type}</span>
                    <span className="text-handly-600 font-bold">{segment.value.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-handly-600 h-2 rounded-full"
                      style={{ width: `${segment.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{segment.percentage}% of user base</p>
                </div>
              ))}
            </div>
          </div>

          {/* Geographic Reach */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Geographic Reach</h3>
            <div className="space-y-3">
              {topStates.slice(0, 5).map((state, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-gray-900">{state.state}</span>
                  <span className="text-handly-600 font-bold">{state.count}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Coverage: {topStates.length} states across Africa
            </p>
          </div>

          {/* Financial Metrics */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Financial Metrics</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600 text-sm mb-1">CAC (est.)</p>
                <p className="text-2xl font-bold text-gray-900">$0.50</p>
                <p className="text-xs text-gray-500">Cost per acquisition</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">LTV (est.)</p>
                <p className="text-2xl font-bold text-gray-900">$150</p>
                <p className="text-xs text-gray-500">Lifetime value per user</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">LTV:CAC Ratio</p>
                <p className="text-2xl font-bold text-green-600">300:1</p>
                <p className="text-xs text-gray-500">Exceptional unit economics</p>
              </div>
            </div>
          </div>
        </div>

        {/* Competitive Advantages */}
        <div className="bg-white p-8 rounded-lg border border-gray-200 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Competitive Advantages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🌍',
                title: 'African-First',
                description: 'Built for African market with local payment methods',
              },
              {
                icon: '⚡',
                title: 'Speed to Market',
                description: 'Fast deployment with MVP in 3 months',
              },
              {
                icon: '💰',
                title: 'Unit Economics',
                description: 'Profitable at scale with 40-50% margins',
              },
              {
                icon: '🚀',
                title: 'Network Effects',
                description: 'More workers = better matching = more customers',
              },
            ].map((advantage, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl mb-3">{advantage.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{advantage.title}</h4>
                <p className="text-sm text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones */}
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Growth Milestones</h3>
          <div className="space-y-4">
            {[
              { milestone: 'MVP Launch', date: 'Q3 2024', status: 'In Progress' },
              { milestone: 'Beta with 50 Freelancers', date: 'Q4 2024', status: 'Planned' },
              { milestone: '500 Active Users', date: 'Q1 2025', status: 'Planned' },
              { milestone: 'Series A Fundraise', date: 'Q2 2025', status: 'Planned' },
              { milestone: '5,000 Active Users', date: 'Q4 2025', status: 'Planned' },
              { milestone: 'Pan-African Expansion', date: '2026', status: 'Planned' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 pb-4 border-b border-gray-200 last:border-b-0">
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{item.milestone}</p>
                  <p className="text-sm text-gray-600">{item.date}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.status === 'In Progress'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
