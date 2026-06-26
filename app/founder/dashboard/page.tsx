'use client';

import { useState, useEffect } from 'react';
import {
  TrendingUp,
  Users,
  DollarSign,
  Zap,
  Download,
  FileText,
  BarChart3,
  MapPin,
  Layers,
  Activity,
  Target,
  AlertCircle,
} from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { FounderDashboardData } from '@/lib/types';
import {
  generateMockReport,
  generateCSVReport,
  generateHTMLReport,
  downloadCSV,
  downloadPDF,
} from '@/lib/reports';

export default function FounderCommandCenter() {
  const [data, setData] = useState<FounderDashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [reportType, setReportType] = useState<'daily' | 'weekly' | 'monthly' | 'investor'>('daily');

  useEffect(() => {
    // In production, fetch from your API
    // For now, use mock data
    const mockData = generateMockReport(reportType);
    setData(mockData);
    setLoading(false);
  }, [reportType]);

  const handleExportCSV = () => {
    if (data) {
      const csv = generateCSVReport(data, reportType);
      downloadCSV(csv, reportType);
    }
  };

  const handleExportPDF = async () => {
    if (data) {
      const html = generateHTMLReport(data, reportType);
      await downloadPDF(html, reportType);
    }
  };

  if (loading || !data) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const totalUsers = data.marketplace.total_customers + data.marketplace.total_workers + data.marketplace.total_businesses;

  const KPICard = ({ icon: Icon, label, value, change, color }: any) => (
    <div className={`${color} p-6 rounded-lg border border-opacity-20 border-white`}>
      <div className="flex items-start justify-between mb-4">
        <Icon size={24} className="text-white opacity-80" />
        {change && (
          <span className="text-sm font-semibold text-green-300">
            {change > 0 ? '+' : ''}{(change * 100).toFixed(1)}%
          </span>
        )}
      </div>
      <p className="text-white opacity-75 text-sm mb-2 font-medium">{label}</p>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 border-b border-blue-400 border-opacity-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Founder Command Center</h1>
          <p className="text-blue-100">Real-time platform health & growth metrics</p>

          {/* Report Type Selector */}
          <div className="mt-6 flex gap-3 flex-wrap">
            {(['daily', 'weekly', 'monthly', 'investor'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setReportType(type)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors capitalize ${
                  reportType === type
                    ? 'bg-white text-blue-600'
                    : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
                }`}
              >
                {type} Report
              </button>
            ))}
          </div>

          {/* Export Buttons */}
          <div className="mt-4 flex gap-3">
            <button
              onClick={handleExportCSV}
              className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg text-white font-medium flex items-center gap-2 transition-colors"
            >
              <Download size={18} />
              Export CSV
            </button>
            <button
              onClick={handleExportPDF}
              className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg text-white font-medium flex items-center gap-2 transition-colors"
            >
              <FileText size={18} />
              Export PDF
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Primary KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <KPICard
            icon={DollarSign}
            label="Monthly Revenue (MRR)"
            value={`$${data.kpis.mrr.toLocaleString()}`}
            change={0.15}
            color="bg-gradient-to-br from-green-600 to-green-700"
          />
          <KPICard
            icon={Users}
            label="Total Active Users"
            value={totalUsers.toLocaleString()}
            change={0.25}
            color="bg-gradient-to-br from-blue-600 to-blue-700"
          />
          <KPICard
            icon={Activity}
            label="Monthly Transactions"
            value={data.marketplace.total_transactions.toLocaleString()}
            change={0.18}
            color="bg-gradient-to-br from-purple-600 to-purple-700"
          />
          <KPICard
            icon={Target}
            label="Growth Rate (MoM)"
            value={`${(data.growth_rate * 100).toFixed(1)}%`}
            color="bg-gradient-to-br from-orange-600 to-orange-700"
          />
        </div>

        {/* Financial Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <DollarSign size={20} className="text-green-500" />
              Financial Metrics
            </h3>
            <div className="space-y-4">
              {[
                { label: 'GMV', value: `$${data.kpis.gmv.toLocaleString()}` },
                { label: 'ARR', value: `$${data.kpis.arr.toLocaleString()}` },
                { label: 'Platform Revenue', value: `$${data.marketplace.platform_revenue.toLocaleString()}` },
                { label: 'Monthly Burn Rate', value: `$${data.kpis.burn_rate.toLocaleString()}` },
                { label: 'Runway', value: `${data.kpis.runway_months.toFixed(1)} months` },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-gray-700 bg-opacity-30 rounded">
                  <span className="text-gray-400">{item.label}</span>
                  <span className="font-bold text-lg">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Zap size={20} className="text-yellow-500" />
              Unit Economics
            </h3>
            <div className="space-y-4">
              {[
                { label: 'CAC', value: `$${data.kpis.cac.toFixed(2)}` },
                { label: 'LTV', value: `$${data.kpis.ltv.toFixed(2)}` },
                { label: 'LTV:CAC Ratio', value: `${data.kpis.ltv_cac_ratio.toFixed(1)}:1` },
                { label: 'Payback Period', value: `${data.kpis.payback_period_months.toFixed(1)} months` },
                { label: 'Net Retention', value: `${(data.kpis.net_retention * 100).toFixed(1)}%` },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-gray-700 bg-opacity-30 rounded">
                  <span className="text-gray-400">{item.label}</span>
                  <span className="font-bold text-lg">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* User Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Users size={20} className="text-blue-500" />
              User Breakdown
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={[
                    { name: 'Customers', value: data.marketplace.total_customers },
                    { name: 'Workers', value: data.marketplace.total_workers },
                    { name: 'Businesses', value: data.marketplace.total_businesses },
                  ]}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }: any) => `${name}: ${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  <Cell fill="#3b82f6" />
                  <Cell fill="#10b981" />
                  <Cell fill="#f59e0b" />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Layers size={20} className="text-purple-500" />
              App Analytics
            </h3>
            <div className="space-y-3">
              {data.app_analytics.map((app) => (
                <div key={app.platform} className="bg-gray-700 bg-opacity-30 p-3 rounded">
                  <p className="font-semibold capitalize text-sm mb-2">{app.platform}</p>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Active Users:</span>
                      <span className="text-blue-400 font-semibold">{app.active_users.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">DAU:</span>
                      <span className="text-blue-400 font-semibold">{app.dau.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">D1 Retention:</span>
                      <span className="text-green-400 font-semibold">{(app.retention_day_1 * 100).toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">D30 Retention:</span>
                      <span className="text-green-400 font-semibold">{(app.retention_day_30 * 100).toFixed(1)}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <BarChart3 size={20} className="text-pink-500" />
              Marketplace Stats
            </h3>
            <div className="space-y-3">
              {[
                { label: 'Active Jobs', value: data.marketplace.active_jobs },
                { label: 'Jobs Completed', value: data.marketplace.jobs_completed },
                { label: 'Total Transactions', value: data.marketplace.total_transactions },
                { label: 'Avg Job Value', value: `$${data.marketplace.avg_job_value.toFixed(2)}` },
                { label: 'Worker Satisfaction', value: `${(data.marketplace.worker_satisfaction * 100).toFixed(1)}%` },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-gray-700 bg-opacity-20 rounded">
                  <span className="text-gray-400 text-sm">{item.label}</span>
                  <span className="font-semibold">{item.value.toLocaleString?.() || item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Revenue Trend */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-lg font-bold mb-4">Revenue Trend (30 Days)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data.daily_data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="date" stroke="#9ca3af" style={{ fontSize: '0.75rem' }} />
                <YAxis stroke="#9ca3af" />
                <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '0.5rem' }} />
                <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* User Growth */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-lg font-bold mb-4">User Growth (30 Days)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data.daily_data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="date" stroke="#9ca3af" style={{ fontSize: '0.75rem' }} />
                <YAxis stroke="#9ca3af" />
                <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '0.5rem' }} />
                <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Cities & Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <MapPin size={20} className="text-red-500" />
              Top Cities
            </h3>
            <div className="space-y-3">
              {data.top_cities.map((city, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-gray-700 bg-opacity-20 rounded">
                  <div>
                    <p className="font-semibold">{city.city}</p>
                    <p className="text-sm text-gray-400">{city.users.toLocaleString()} users</p>
                  </div>
                  <p className="font-bold text-green-400">${city.revenue.toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <BarChart3 size={20} className="text-cyan-500" />
              Top Categories
            </h3>
            <div className="space-y-3">
              {data.top_categories.map((cat, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-gray-700 bg-opacity-20 rounded">
                  <div>
                    <p className="font-semibold">{cat.category}</p>
                    <p className="text-sm text-gray-400">{cat.jobs.toLocaleString()} jobs</p>
                  </div>
                  <p className="font-bold text-green-400">${cat.revenue.toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Alerts */}
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <AlertCircle size={20} className="text-yellow-500" />
            Key Alerts & Insights
          </h3>
          <div className="space-y-3">
            <div className="p-4 bg-blue-900 bg-opacity-30 border-l-4 border-blue-500 rounded">
              <p className="font-semibold text-blue-300">Growth Acceleration</p>
              <p className="text-sm text-gray-300 mt-1">Platform growth is at {(data.growth_rate * 100).toFixed(1)}% MoM. On track for 2026 expansion targets.</p>
            </div>
            <div className="p-4 bg-green-900 bg-opacity-30 border-l-4 border-green-500 rounded">
              <p className="font-semibold text-green-300">Unit Economics Healthy</p>
              <p className="text-sm text-gray-300 mt-1">LTV:CAC ratio at {data.kpis.ltv_cac_ratio.toFixed(1)}:1. Payback period: {data.kpis.payback_period_months.toFixed(1)} months.</p>
            </div>
            <div className="p-4 bg-purple-900 bg-opacity-30 border-l-4 border-purple-500 rounded">
              <p className="font-semibold text-purple-300">App Traction Building</p>
              <p className="text-sm text-gray-300 mt-1">Combined downloads: 13,000. D30 retention at 23%. Focus on improving onboarding.</p>
            </div>
            <div className="p-4 bg-orange-900 bg-opacity-30 border-l-4 border-orange-500 rounded">
              <p className="font-semibold text-orange-300">Runway Status</p>
              <p className="text-sm text-gray-300 mt-1">Current runway: {data.kpis.runway_months.toFixed(1)} months. Series A needed by Q2 2025.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
