'use client';

import { useState, useEffect } from 'react';
import { getWaitlistStats, getTopStates } from '@/lib/supabase';
import { BarChart3, Users, TrendingUp, Map } from 'lucide-react';

export default function AdminPage() {
  const [stats, setStats] = useState({
    total: 0,
    customers: 0,
    workers: 0,
    businesses: 0,
  });
  const [topStates, setTopStates] = useState<Array<{ state: string; count: number }>>([]);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check - in production, use proper authentication
    if (password === 'handly2024') {
      setAuthenticated(true);
      fetchStats();
    } else {
      alert('Incorrect password');
    }
  };

  const fetchStats = async () => {
    try {
      setLoading(true);
      const data = await getWaitlistStats();
      const states = await getTopStates();
      setStats(data);
      setTopStates(states);
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>
          <form onSubmit={handleAuth} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter admin password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Waitlist Analytics & Statistics</p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="text-gray-600 mt-4">Loading statistics...</p>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  label: 'Total Signups',
                  value: stats.total,
                  icon: Users,
                  color: 'blue',
                },
                {
                  label: 'Customers',
                  value: stats.customers,
                  icon: Users,
                  color: 'green',
                },
                {
                  label: 'Workers',
                  value: stats.workers,
                  icon: BarChart3,
                  color: 'purple',
                },
                {
                  label: 'Businesses',
                  value: stats.businesses,
                  icon: TrendingUp,
                  color: 'orange',
                },
              ].map((metric, index) => {
                const Icon = metric.icon;
                const bgColors = {
                  blue: 'bg-blue-50 border-blue-200',
                  green: 'bg-green-50 border-green-200',
                  purple: 'bg-purple-50 border-purple-200',
                  orange: 'bg-orange-50 border-orange-200',
                };
                const iconColors = {
                  blue: 'text-blue-600',
                  green: 'text-green-600',
                  purple: 'text-purple-600',
                  orange: 'text-orange-600',
                };

                return (
                  <div
                    key={index}
                    className={`p-6 rounded-lg border ${bgColors[metric.color as keyof typeof bgColors]}`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 mb-2">{metric.label}</p>
                        <p className="text-4xl font-bold text-gray-900">
                          {metric.value.toLocaleString()}
                        </p>
                      </div>
                      <Icon
                        size={32}
                        className={iconColors[metric.color as keyof typeof iconColors]}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Breakdown Chart */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-6">User Type Distribution</h2>
              <div className="space-y-4">
                {[
                  {
                    label: 'Customers',
                    value: stats.customers,
                    percentage: stats.total > 0 ? (stats.customers / stats.total) * 100 : 0,
                    color: 'bg-green-500',
                  },
                  {
                    label: 'Workers',
                    value: stats.workers,
                    percentage: stats.total > 0 ? (stats.workers / stats.total) * 100 : 0,
                    color: 'bg-purple-500',
                  },
                  {
                    label: 'Businesses',
                    value: stats.businesses,
                    percentage: stats.total > 0 ? (stats.businesses / stats.total) * 100 : 0,
                    color: 'bg-orange-500',
                  },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-900">{item.label}</span>
                      <span className="text-sm text-gray-600">
                        {item.value} ({item.percentage.toFixed(1)}%)
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${item.color}`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top States */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Map size={24} />
                Top States
              </h2>
              <div className="space-y-3">
                {topStates.map((state, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-900 font-medium">{state.state}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{
                            width: `${(state.count / (topStates[0]?.count || 1)) * 100}%`,
                          }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 w-12 text-right">
                        {state.count}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Conversion Rate */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Customer Ratio</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stats.total > 0
                      ? ((stats.customers / stats.total) * 100).toFixed(1)
                      : 0}
                    %
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2">Worker Ratio</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stats.total > 0 ? ((stats.workers / stats.total) * 100).toFixed(1) : 0}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
