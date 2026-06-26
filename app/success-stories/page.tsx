import { Metadata } from 'next';
import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/Button';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'Success Stories - Real Impact from HANDLY',
  description: 'Discover how workers, artisans, customers, and businesses are achieving their goals with HANDLY.',
};

export default function SuccessStoriesPage() {
  const stories = [
    {
      id: 1,
      name: 'Chinedu Okafor',
      role: 'Master Electrician',
      location: 'Lagos, Nigeria',
      image: '⚡',
      earnings: '₦250K+/month',
      story: 'Started with 2 jobs/week through HANDLY. Now gets 15+ requests daily. Built a team of 5 electricians and operates across Lagos.',
      quote: 'HANDLY changed my life. I went from struggling to find customers to having more work than I can handle.',
      metrics: [
        { label: 'Jobs Completed', value: '500+' },
        { label: 'Customer Rating', value: '4.9/5' },
        { label: 'Team Size', value: '5 people' },
      ],
    },
    {
      id: 2,
      name: 'Ama Mensah',
      role: 'Graphic Designer',
      location: 'Accra, Ghana',
      image: '🎨',
      earnings: '₦180K+/month',
      story: 'Freelanced on multiple platforms. HANDLY gave her the reliability and payment security she needed. Now focuses exclusively on HANDLY clients.',
      quote: 'The payment system is trustworthy, and I love how easy it is to communicate with clients directly.',
      metrics: [
        { label: 'Jobs Completed', value: '250+' },
        { label: 'Customer Rating', value: '4.8/5' },
        { label: 'Average Project Value', value: '₦15K' },
      ],
    },
    {
      id: 3,
      name: 'James Mwangi',
      role: 'Plumber & Handyman',
      location: 'Nairobi, Kenya',
      image: '🔧',
      earnings: '₦200K+/month',
      story: 'Used to take whatever jobs came his way. With HANDLY, he cherry-picks premium jobs and maintains 95% on-time completion rate.',
      quote: 'HANDLY customers value quality work. I can charge fairly and customers happily pay for reliability.',
      metrics: [
        { label: 'Jobs Completed', value: '350+' },
        { label: 'Customer Rating', value: '4.9/5' },
        { label: 'On-Time Rate', value: '95%' },
      ],
    },
    {
      id: 4,
      name: 'Nkechi Okoro',
      role: 'Fashion Designer',
      location: 'Port Harcourt, Nigeria',
      image: '👗',
      earnings: '₦220K+/month',
      story: 'Started with custom orders from friends. HANDLY connected her with wholesale buyers. Now supplies 3 boutiques across Nigeria.',
      quote: 'HANDLY opened doors I didn\'t know existed. From single orders to wholesale partnerships.',
      metrics: [
        { label: 'Active Clients', value: '25+' },
        { label: 'Customer Rating', value: '4.9/5' },
        { label: 'Portfolio Items', value: '150+' },
      ],
    },
    {
      id: 5,
      name: 'Kofi Mensah',
      role: 'Small Restaurant Owner',
      location: 'Kumasi, Ghana',
      image: '🍽️',
      earnings: '50% Growth',
      story: 'Listed his restaurant on HANDLY for catering services. Doubled revenue through corporate catering contracts discovered via the platform.',
      quote: 'HANDLY connected me with corporate clients I would never have reached through traditional methods.',
      metrics: [
        { label: 'Catering Orders/Month', value: '20+' },
        { label: 'Customer Rating', value: '4.8/5' },
        { label: 'Revenue Growth', value: '+50%' },
      ],
    },
    {
      id: 6,
      name: 'Grace Adetayo',
      role: 'Virtual Assistant',
      location: 'Ibadan, Nigeria',
      image: '💻',
      earnings: '₦160K+/month',
      story: 'Transitioned from corporate job to freelancing. HANDLY provided the steady stream of clients and payment reliability she needed.',
      quote: 'I quit my job after 3 months on HANDLY. Now I have more flexibility and earn more than my salary.',
      metrics: [
        { label: 'Jobs Completed', value: '200+' },
        { label: 'Customer Rating', value: '4.9/5' },
        { label: 'Repeat Clients', value: '80%' },
      ],
    },
  ];

  const businessStories = [
    {
      company: 'TechHub Nigeria',
      industry: 'IT Services',
      location: 'Lagos',
      icon: '🏢',
      story: 'Used HANDLY to find specialized developers for overflow projects. Now sources 30% of contractor workforce through platform.',
      metrics: [
        { label: 'Contractors Hired', value: '15+' },
        { label: 'Projects Completed', value: '50+' },
        { label: 'Cost Savings', value: '35%' },
      ],
    },
    {
      company: 'ABC Distribution',
      industry: 'Logistics',
      location: 'Accra',
      icon: '📦',
      story: 'Connected with delivery partners through HANDLY. Reduced logistics costs and improved delivery speed dramatically.',
      metrics: [
        { label: 'Delivery Partners', value: '20+' },
        { label: 'Monthly Shipments', value: '500+' },
        { label: 'Cost Per Delivery', value: '-40%' },
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Real Stories from Real People
          </h1>
          <p className="text-xl text-white text-opacity-90 leading-relaxed max-w-3xl mx-auto mb-10">
            See how workers, artisans, customers, and businesses are transforming their lives and growing their enterprises with HANDLY.
          </p>
          <Button
            href="/waitlist"
            variant="primary"
            size="lg"
            icon={<ArrowRight size={20} />}
            iconPosition="right"
            className="!bg-white !text-handly-600 hover:!shadow-2xl"
          >
            Join the Community
          </Button>
        </div>
      </section>

      {/* Worker Stories */}
      <Section>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-handly-100 text-handly-700 rounded-full text-sm font-semibold mb-4">Stories</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Workers & Artisans
          </h2>
          <p className="text-gray-600 text-center">
            How workers transformed their income and built thriving businesses
          </p>
        </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {stories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-handly-500 to-handly-600 p-6 text-white">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-5xl mb-3">{story.image}</div>
                      <h3 className="text-2xl font-bold">{story.name}</h3>
                      <p className="text-handly-100">{story.role}</p>
                      <p className="text-handly-100 text-sm">{story.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-handly-100 text-sm">Monthly Earnings</p>
                      <p className="text-2xl font-bold">{story.earnings}</p>
                    </div>
                  </div>
                </div>

                {/* Story Content */}
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{story.story}</p>

                  {/* Quote */}
                  <div className="bg-handly-50 border-l-4 border-handly-500 p-4 mb-6 rounded-r">
                    <p className="text-gray-800 italic">"{story.quote}"</p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    {story.metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <p className="text-2xl font-bold text-handly-600">{metric.value}</p>
                        <p className="text-xs text-gray-600">{metric.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Rating */}
                  <div className="mt-6 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
      </Section>

      {/* Business Stories */}
      <Section light>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-handly-100 text-handly-700 rounded-full text-sm font-semibold mb-4">Businesses</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Businesses Growing with HANDLY
          </h2>
          <p className="text-gray-600 text-center">
            How businesses find reliable contractors and scale operations
          </p>
        </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {businessStories.map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-gradient-to-r from-handly-500 to-handly-600 p-6 text-white">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-5xl mb-3">{story.icon}</div>
                      <h3 className="text-2xl font-bold">{story.company}</h3>
                      <p className="text-handly-100">{story.industry}</p>
                      <p className="text-handly-100 text-sm">{story.location}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 mb-6">{story.story}</p>

                  <div className="grid grid-cols-3 gap-4">
                    {story.metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <p className="text-2xl font-bold text-handly-600">
                          {metric.value}
                        </p>
                        <p className="text-xs text-gray-600">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
      </Section>

      {/* Stats Section */}
      <Section>
        <div className="bg-gradient-to-r from-handly-600 to-handly-700 rounded-2xl p-12 text-white text-center">
          <h2 className="text-4xl font-black mb-8">Impact by the Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <p className="text-5xl font-bold mb-2">50K+</p>
                <p className="text-handly-100">Total Users</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">15K+</p>
                <p className="text-handly-100">Active Workers</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">10K+</p>
                <p className="text-handly-100">Jobs Completed</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">₦2B+</p>
                <p className="text-handly-100">Paid to Workers</p>
              </div>
            </div>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #158F72 0%, #0E6B55 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of workers, artisans, customers, and businesses already transforming their lives with HANDLY.
          </p>
          <Button
            href="/waitlist"
            variant="primary"
            size="lg"
            icon={<ArrowRight size={20} />}
            iconPosition="right"
            className="!bg-white !text-handly-600 hover:!shadow-2xl"
          >
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
}
