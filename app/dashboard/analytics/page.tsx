'use client';

import { useState, useEffect } from 'react';
import { format, subDays } from 'date-fns';
import { Download, TrendingUp, Users, Share2, Eye, Smartphone } from 'lucide-react';
import {
  SignupTrendChart,
  UserTypeDistribution,
  DeviceBreakdownChart,
  GrowthChart,
} from '@/components/Charts';
import { getWaitlistStats, getTopStates } from '@/lib/supabase';
import { getDailySignups, getDownloadStats, getAnalyticsMetrics } from '@/lib/analytics';

export default function AnalyticsDashboard() {
  const [dateRange, setDateRange] = useState('7d');
  const [stats, setStats] = useState<any>(null);
  const [signupData, setSignupData] = useState<any[]>([]);
  const [downloadData, setDownloadData] = useState<any>(null);
  const [metricsData, setMetricsData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const days = parseInt(dateRange);
        const startDate = subDays(new Date(), days);
        const endDate = new Date();

        // Fetch all data in parallel
        const [
          waitlistStats,
          dailySignups,
          downloads,
          analyticsMetrics,
        ] = await Promise.all([
          getWaitlistStats(),
          getDailySignups(startDate, endDate),
          getDownloadStats(startDate, endDate),
          getAnalyticsMetrics(startDate, endDate),
        ]);

        setStats(waitlistStats);
        setSignupData(dailySignups);
        setDownloadData(downloads);
        setMetricsData(analyticsMetrics);
      } catch (error) {
        console.error('Failed to fetch analytics:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dateRange]);

  const userTypeData = stats ? [
    { name: 'Customers', value: stats.customers },
    { name: 'Workers', value: stats.workers },
    { name: 'Businesses', value: stats.businesses },
  ] : [];

  const deviceData = metricsData ? [
    { name: 'Desktop', value: metricsData.device_breakdown?.desktop || 0 },
    { name: 'Mobile', value: metricsData.device_breakdown?.mobile || 0 },
    { name: 'Tablet', value: metricsData.device_breakdown?.tablet || 0 },
  ] : [];

  const downloadRate = downloadData?.conversion_rate ? parseFloat(downloadData.conversion_rate) : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600 mt-2">Track HANDLY's growth and user engagement</p>
        </div>

        {/* Date Range Selector */}
        <div className="mb-8 flex gap-4">
          {[
            { value: '7', label: 'Last 7 Days' },
            { value: '30', label: 'Last 30 Days' },
            { value: '90', label: 'Last 90 Days' },
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => setDateRange(option.value)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                dateRange === option.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-900 border border-gray-200 hover:border-blue-600'
              }`}
            >
              {option.label}
            </button>
          ))}
          <button
            onClick={() => {
              const csv = generateCSV();
              downloadCSV(csv);
            }}
            className="ml-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2"
          >
            <Download size={20} />
            Export CSV
          </button>
        </div>

        {/* KPI Cards */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                {
                  icon: Users,
                  label: 'Total Signups',
                  value: stats?.total || 0,
                  color: 'blue',
                },
                {
                  icon: Share2,
                  label: 'App Downloads',
                  value: (downloadData?.total || 0).toLocaleString(),
                  color: 'green',
                },
                {
                  icon: Eye,
                  label: 'Page Views',
                  value: metricsData?.total_page_views || 0,
                  color: 'purple',
                },
                {
                  icon: TrendingUp,
                  label: 'Download Rate',
                  value: `${downloadRate.toFixed(1)}%`,
                  color: 'orange',
                },
              ].map((metric, index) => {
                const Icon = metric.icon;
                const colors: Record<string, string> = {
                  blue: 'bg-blue-50 text-blue-600',
                  green: 'bg-green-50 text-green-600',
                  purple: 'bg-purple-50 text-purple-600',
                  orange: 'bg-orange-50 text-orange-600',
                };

                return (
                  <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                    <div className={`w-12 h-12 rounded-lg ${colors[metric.color]} flex items-center justify-center mb-4`}>
                      <Icon size={24} />
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{metric.label}</p>
                    <p className="text-3xl font-bold text-gray-900">{metric.value}</p>
                  </div>
                );
              })}
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {signupData.length > 0 && <SignupTrendChart data={signupData} />}
              {userTypeData.length > 0 && <UserTypeDistribution data={userTypeData} />}
              {deviceData.some(d => d.value > 0) && <DeviceBreakdownChart data={deviceData} />}
            </div>

            {/* Breakdown Tables */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* User Type Breakdown */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">User Type Breakdown</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Customers', value: stats?.customers || 0, color: 'bg-green-100 text-green-700' },
                    { label: 'Workers', value: stats?.workers || 0, color: 'bg-purple-100 text-purple-700' },
                    { label: 'Businesses', value: stats?.businesses || 0, color: 'bg-orange-100 text-orange-700' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-900 font-medium">{item.label}</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${item.color}`}>
                        {item.value.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Download Breakdown */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Download Breakdown</h3>
                <div className="space-y-3">
                  {[
                    { label: 'App Store', value: downloadData?.app_store || 0, color: 'bg-blue-100 text-blue-700' },
                    { label: 'Google Play', value: downloadData?.google_play || 0, color: 'bg-green-100 text-green-700' },
                    { label: 'Total', value: downloadData?.total || 0, color: 'bg-gray-100 text-gray-700' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-900 font-medium">{item.label}</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${item.color}`}>
                        {item.value.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Metrics Summary */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-gray-600 text-sm mb-2">Unique Visitors</p>
                  <p className="text-2xl font-bold text-gray-900">{metricsData?.unique_visitors || 0}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-2">Avg Session Duration</p>
                  <p className="text-2xl font-bold text-gray-900">~3 min</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-2">Waitlist Conversion</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {metricsData?.total_page_views
                      ? ((stats?.total / metricsData.total_page_views) * 100).toFixed(2)
                      : 0}%
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// Helper functions
function generateCSV() {
  const timestamp = new Date().toISOString();
  let csv = 'HANDLY Analytics Export\n';
  csv += `Generated: ${timestamp}\n\n`;

  // This would be populated with actual data in production
  csv += 'Metric,Value\n';
  csv += 'Total Signups,{total_signups}\n';
  csv += 'Total Downloads,{total_downloads}\n';
  csv += 'Unique Visitors,{unique_visitors}\n';

  return csv;
}

function downloadCSV(csv: string) {
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(csv));
  element.setAttribute('download', `handly-analytics-${format(new Date(), 'yyyy-MM-dd')}.csv`);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
