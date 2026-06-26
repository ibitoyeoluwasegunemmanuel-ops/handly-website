'use client';

import { CheckCircle2, Circle } from 'lucide-react';

interface Milestone {
  quarter: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
  highlights: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

interface MilestonesTimelineProps {
  milestones?: Milestone[];
  title?: string;
}

const DEFAULT_MILESTONES: Milestone[] = [
  {
    quarter: 'Q2 2024',
    title: 'MVP Launch',
    description: 'Launched core platform with real-time interpreter dispatch',
    status: 'completed',
    highlights: [
      'Live video calling system',
      'Real-time interpreter matching',
      'Payment integration (Stripe)',
      '50+ interpreters onboarded',
    ],
    metrics: [
      { label: 'Users', value: '5K' },
      { label: 'Monthly Revenue', value: '$15K' },
    ],
  },
  {
    quarter: 'Q3 2024',
    title: 'Beta Growth Phase',
    description: 'Expanded to 5 pilot cities with paid customers',
    status: 'completed',
    highlights: [
      '5 paying organizational customers',
      'Mobile app released (iOS & Android)',
      'Call recording feature added',
      '300+ interpreters',
    ],
    metrics: [
      { label: 'Users', value: '25K' },
      { label: 'Monthly Revenue', value: '$45K' },
    ],
  },
  {
    quarter: 'Q4 2024',
    title: 'Scale Phase 1',
    description: 'Regional expansion and enterprise partnerships',
    status: 'in-progress',
    highlights: [
      '10+ enterprise customers',
      'Multi-city expansion',
      'Advanced scheduling system',
      'Quality assurance dashboard',
    ],
    metrics: [
      { label: 'Users', value: '50K' },
      { label: 'Monthly Revenue', value: '$120K' },
    ],
  },
  {
    quarter: 'Q1 2025',
    title: 'Market Leadership',
    description: 'Establish market dominance in core regions',
    status: 'planned',
    highlights: [
      'Series A fundraise ($3-5M)',
      '20+ enterprise customers',
      'Pan-regional coverage',
      'AI-assisted features',
    ],
    metrics: [
      { label: 'Users', value: '100K' },
      { label: 'Monthly Revenue', value: '$200K' },
    ],
  },
  {
    quarter: 'Q2-Q3 2025',
    title: 'Geographic Expansion',
    description: 'Expand to new countries and languages',
    status: 'planned',
    highlights: [
      'French language support',
      'Expansion to West Africa',
      'Government partnerships',
      'Premium tier launch',
    ],
    metrics: [
      { label: 'Users', value: '300K' },
      { label: 'Monthly Revenue', value: '$500K' },
    ],
  },
  {
    quarter: 'Q4 2025+',
    title: 'Pan-African Leader',
    description: 'Market leadership across Africa',
    status: 'planned',
    highlights: [
      'Multi-language platform',
      'Expansion to 10+ countries',
      'Enterprise SaaS products',
      'AI-powered features',
    ],
    metrics: [
      { label: 'Users', value: '1M+' },
      { label: 'Annual Revenue', value: '$10M+' },
    ],
  },
];

export default function MilestonesTimeline({
  milestones = DEFAULT_MILESTONES,
  title = 'Growth Milestones'
}: MilestonesTimelineProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          <p className="text-gray-600 mt-2">From MVP to pan-African market leader</p>
        </div>

        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index !== milestones.length - 1 && (
                <div className="absolute left-[18px] top-16 w-0.5 h-24 bg-gradient-to-b from-handly-400 to-gray-200" />
              )}

              <div className="flex gap-6">
                {/* Timeline dot */}
                <div className="flex flex-col items-center pt-1">
                  {milestone.status === 'completed' ? (
                    <CheckCircle2 className="w-10 h-10 text-green-600 flex-shrink-0" />
                  ) : milestone.status === 'in-progress' ? (
                    <div className="w-10 h-10 rounded-full border-2 border-handly-600 flex items-center justify-center flex-shrink-0">
                      <div className="w-3 h-3 bg-handly-600 rounded-full" />
                    </div>
                  ) : (
                    <Circle className="w-10 h-10 text-gray-400 flex-shrink-0" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-sm font-semibold text-handly-600 uppercase">{milestone.quarter}</p>
                        <h3 className="text-xl font-bold text-gray-900 mt-1">{milestone.title}</h3>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          milestone.status === 'completed'
                            ? 'bg-green-100 text-green-800'
                            : milestone.status === 'in-progress'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {milestone.status === 'completed'
                          ? 'Completed'
                          : milestone.status === 'in-progress'
                          ? 'In Progress'
                          : 'Planned'}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-4">{milestone.description}</p>

                    {/* Highlights */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {milestone.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-handly-600 mt-1">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Metrics */}
                    {milestone.metrics && (
                      <div className="border-t border-gray-200 pt-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Expected Metrics:</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {milestone.metrics.map((metric, i) => (
                            <div key={i} className="bg-gradient-to-br from-handly-50 to-white p-3 rounded">
                              <p className="text-xs text-gray-600">{metric.label}</p>
                              <p className="text-lg font-bold text-handly-600">{metric.value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
