import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import Link from 'next/link';
import { ArrowRight, Zap, TrendingUp, Users, Award, Globe, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: 'For Workers & Artisans - Earn on HANDLY | Africa',
  description: 'Get discovered by customers. Grow your income. Build your reputation on HANDLY—Africa\'s trusted marketplace for workers and artisans.',
};

export default function WorkersPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero
        badge="For Workers, Artisans & Service Providers"
        title={
          <>
            Get Discovered. Build Your <span className="text-white">Income</span>
          </>
        }
        subtitle="Showcase your skills to thousands of customers. Earn fair rates, build your reputation, and grow your business on Africa's most trusted marketplace."
        ctaPrimary={{ text: 'Get Started Free', href: '/waitlist' }}
        ctaSecondary={{ text: 'Learn More', href: '#how-it-works' }}
        stats={[
          { label: 'Active Workers', value: '15K+' },
          { label: 'Avg. Earnings', value: '₦50K+/month' },
        ]}
        rightContent={
          <div className="relative">
            <div className="bg-white bg-opacity-10 rounded-3xl p-1">
              <div className="bg-white rounded-3xl p-8 space-y-4">
                <div className="h-32 bg-handly-50 rounded-xl"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        }
      />

      {/* Benefits Section */}
      <Section light>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-handly-100 text-handly-700 rounded-full text-sm font-semibold mb-4">Benefits</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Why Workers Choose HANDLY</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Earn fair rates, build your reputation, grow sustainably.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap size={28} className="text-handly-600" />,
              title: 'Get Discovered Fast',
              description: 'Build your profile once, get discovered by thousands of customers.',
            },
            {
              icon: <TrendingUp size={28} className="text-handly-600" />,
              title: 'Earn Fair Rates',
              description: 'Set your own rates. No middleman. Transparent pricing.',
            },
            {
              icon: <Award size={28} className="text-handly-600" />,
              title: 'Build Reputation',
              description: 'Grow your ratings and unlock premium opportunities.',
            },
            {
              icon: <Globe size={28} className="text-handly-600" />,
              title: 'Pan-African Market',
              description: 'Access customers across 15+ African countries.',
            },
            {
              icon: <Users size={28} className="text-handly-600" />,
              title: 'Community Support',
              description: 'Connect with other workers. Learn, share, grow together.',
            },
            {
              icon: <Briefcase size={28} className="text-handly-600" />,
              title: 'Secure Payments',
              description: 'Get paid safely. Fast payouts to your bank account.',
            },
          ].map((benefit, index) => (
            <Card key={index} variant="default" hover="lift">
              <div className="mb-4 p-3 bg-gradient-to-br from-handly-100 to-handly-50 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section id="how-it-works">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-handly-100 text-handly-700 rounded-full text-sm font-semibold mb-4">Process</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">How It Works for Workers</h2>
          <p className="text-xl text-gray-600">Start earning in 4 simple steps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              number: '01',
              title: 'Build Your Profile',
              description: 'Add your skills, experience, and portfolio. Show what you can do.',
              icon: '👤',
            },
            {
              number: '02',
              title: 'Browse Jobs',
              description: 'Find jobs that match your skills. Read details and apply.',
              icon: '🔍',
            },
            {
              number: '03',
              title: 'Get Hired & Work',
              description: 'Customers choose you. Collaborate and deliver quality work.',
              icon: '💼',
            },
            {
              number: '04',
              title: 'Get Paid & Grow',
              description: 'Receive payment securely. Ratings unlock new opportunities.',
              icon: '🏆',
            },
          ].map((step, index) => (
            <Card key={index} variant="gradient" hover="lift">
              <div className="text-6xl font-black text-handly-100 mb-4">{step.number}</div>
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Success Stories */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Worker Success Stories</h2>
          <p className="text-xl text-gray-600">Real workers, real earnings, real growth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Chinedu (Electrician)',
              earnings: '₦150K+/month',
              story: 'Started with small jobs. Now get repeat customers. HANDLY changed my business.',
            },
            {
              name: 'Ama (Graphic Designer)',
              earnings: '₦200K+/month',
              story: 'Found my first client on HANDLY. Now book jobs weeks in advance.',
            },
            {
              name: 'James (Plumber)',
              earnings: '₦120K+/month',
              story: 'Building my reputation. 4.9 rating from 50+ completed jobs.',
            },
          ].map((story, index) => (
            <Card key={index} light>
              <p className="text-2xl font-bold text-handly-600 mb-2">{story.earnings}</p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">"{story.story}"</p>
              <div>
                <p className="font-semibold text-gray-900">{story.name}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #158F72 0%, #0E6B55 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Earning?</h2>
          <p className="text-xl text-white opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of workers building sustainable incomes on HANDLY.
          </p>
          <Link
            href="/waitlist"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-handly-600 rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-lg group"
          >
            Join as a Worker <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
