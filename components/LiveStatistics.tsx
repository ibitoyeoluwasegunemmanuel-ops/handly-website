'use client';

import { useEffect, useState } from 'react';
import { getDashboardMetrics } from '@/lib/supabase';

interface Statistic {
  label: string;
  value: string;
  icon: string;
  description?: string;
}

interface LiveStatisticsProps {
  statistics?: Statistic[];
}

const DEFAULT_STATISTICS: Statistic[] = [
  { label: 'Total Users', value: '50K+', icon: '👥' },
  { label: 'Active Workers', value: '15K+', icon: '💼' },
  { label: 'Businesses Listed', value: '3.2K', icon: '🏢' },
  { label: 'Jobs Posted', value: '12.5K', icon: '📋' },
  { label: 'Jobs Completed', value: '10K+', icon: '✅' },
  { label: 'Countries Covered', value: '15', icon: '🌍' },
  { label: 'Cities Covered', value: '200+', icon: '🏙️' },
  { label: 'Downloads', value: '45K+', icon: '📱' },
];

export default function LiveStatistics({ statistics }: LiveStatisticsProps) {
  const [mounted, setMounted] = useState(false);
  const [liveStatistics, setLiveStatistics] = useState<Statistic[]>(DEFAULT_STATISTICS);

  useEffect(() => {
    setMounted(true);

    // Fetch real metrics from Supabase
    const fetchMetrics = async () => {
      try {
        const metrics = await getDashboardMetrics();

        if (metrics) {
          const formattedStats: Statistic[] = [
            { label: 'Total Users', value: `${Math.round((metrics.total_users || 50000) / 1000)}K+`, icon: '👥' },
            { label: 'Active Workers', value: `${Math.round((metrics.active_workers || 15000) / 1000)}K+`, icon: '💼' },
            { label: 'Businesses Listed', value: `${Math.round((metrics.total_businesses || 3200) / 100)}`, icon: '🏢' },
            { label: 'Jobs Posted', value: `${Math.round((metrics.jobs_posted || 12500) / 1000)}K+`, icon: '📋' },
            { label: 'Jobs Completed', value: `${Math.round((metrics.jobs_completed || 10000) / 1000)}K+`, icon: '✅' },
            { label: 'Countries Covered', value: String(metrics.countries_covered || 15), icon: '🌍' },
            { label: 'Cities Covered', value: `${metrics.cities_covered || 200}+`, icon: '🏙️' },
            { label: 'Downloads', value: `${Math.round((metrics.total_downloads || 45000) / 1000)}K+`, icon: '📱' },
          ];

          setLiveStatistics(formattedStats);
        }
      } catch (error) {
        console.error('Failed to fetch metrics:', error);
        setLiveStatistics(statistics || DEFAULT_STATISTICS);
      }
    };

    fetchMetrics();
  }, [statistics]);

  if (!mounted) {
    return null;
  }

  return (
    <section className="bg-gradient-to-r from-handly-50 to-handly-100 py-16 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {liveStatistics.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl md:text-4xl mb-2 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-xs md:text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
