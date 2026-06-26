'use client';

import { useEffect, useState } from 'react';
import { getWaitlistStats } from '@/lib/supabase';

export default function StatsCounter() {
  const [stats, setStats] = useState({
    total: 0,
    customers: 0,
    workers: 0,
    businesses: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getWaitlistStats();
        setStats(data);
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
    // Refresh stats every 30 seconds
    const interval = setInterval(fetchStats, 30000);
    return () => clearInterval(interval);
  }, []);

  const statItems = [
    { label: 'People on Waitlist', value: stats.total, icon: '👥' },
    { label: 'Customers', value: stats.customers, icon: '💼' },
    { label: 'Workers', value: stats.workers, icon: '🤝' },
    { label: 'Businesses', value: stats.businesses, icon: '🏢' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {statItems.map((item) => (
        <div
          key={item.label}
          className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200"
        >
          <div className="text-3xl mb-2">{item.icon}</div>
          <p className="text-3xl font-bold text-blue-600 mb-1">
            {loading ? '-' : item.value.toLocaleString()}
          </p>
          <p className="text-sm text-gray-600">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
