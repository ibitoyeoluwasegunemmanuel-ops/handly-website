'use client';

import { TrendingUp, Users, Briefcase, Download, Zap, CheckCircle, Globe, DollarSign } from 'lucide-react';

interface Metric {
  icon: React.ReactNode;
  label: string;
  value: string;
  change?: string;
  changeColor?: string;
  trend?: 'up' | 'down';
}

interface InvestorMetricsProps {
  metrics?: Metric[];
}

const DEFAULT_METRICS: Metric[] = [
  {
    icon: <Users className="w-6 h-6" />,
    label: 'Total Users',
    value: '50K+',
    change: '+45% MoM',
    changeColor: 'text-green-600',
    trend: 'up',
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    label: 'Active Workers',
    value: '15K+',
    change: '+60% MoM',
    changeColor: 'text-green-600',
    trend: 'up',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    label: 'Businesses',
    value: '3.2K',
    change: '+35% MoM',
    changeColor: 'text-green-600',
    trend: 'up',
  },
  {
    icon: <Download className="w-6 h-6" />,
    label: 'App Downloads',
    value: '45K+',
    change: '+120% YoY',
    changeColor: 'text-green-600',
    trend: 'up',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    label: 'Jobs Posted',
    value: '12.5K',
    change: '+75% MoM',
    changeColor: 'text-green-600',
    trend: 'up',
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    label: 'Jobs Completed',
    value: '10K+',
    change: '+80% MoM',
    changeColor: 'text-green-600',
    trend: 'up',
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    label: 'Estimated Revenue',
    value: '$480K/mo',
    change: '+200% YoY',
    changeColor: 'text-green-600',
    trend: 'up',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    label: 'Growth Rate',
    value: '45% MoM',
    change: 'Accelerating',
    changeColor: 'text-blue-600',
    trend: 'up',
  },
];

export default function InvestorMetrics({ metrics = DEFAULT_METRICS }: InvestorMetricsProps) {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Platform Traction</h2>
          <p className="text-gray-600 mt-2">Real-time metrics showing market-leading growth</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-handly-100 rounded-lg text-handly-600">
                  {metric.icon}
                </div>
                {metric.trend === 'up' && (
                  <TrendingUp size={20} className="text-green-600" />
                )}
              </div>

              <p className="text-gray-600 text-sm mb-1">{metric.label}</p>
              <p className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</p>

              {metric.change && (
                <p className={`text-sm font-semibold ${metric.changeColor}`}>
                  {metric.change}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
