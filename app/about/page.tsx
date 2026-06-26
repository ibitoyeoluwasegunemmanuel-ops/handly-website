import { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About HANDLY - Empowering Africa\'s Talent',
  description: 'Discover HANDLY\'s mission to transform how Africa works. Join thousands of freelancers and businesses building the future of work.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero
        title={
          <>
            Transforming How <span className="text-white">Africa Does Business</span>
          </>
        }
        subtitle="HANDLY is building Africa's most trusted marketplace for connecting customers, skilled workers, artisans, service providers, and businesses. We're empowering people to earn sustainably and helping businesses grow without limits."
      />

      {/* Our Story */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-handly-100 text-handly-700 rounded-full text-sm font-semibold mb-4">About</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                HANDLY was founded on a simple truth: <strong>Africa has incredible talent and untapped potential, but systems that don't work for them.</strong>
              </p>
              <p>
                We watched skilled workers, artisans, service providers, and small businesses struggle to connect with customers at fair prices, while customers couldn't find trustworthy help. The gap was costing Africa billions in opportunity.
              </p>
              <p>
                So we built HANDLY—a marketplace designed specifically for African realities: instant connections, secure payments in local currencies, verified workers, and a community that celebrates excellence.
              </p>
              <p>
                Today, 50K+ users and thousands of businesses trust HANDLY. And we're just getting started.
              </p>
            </div>
            <Button
              href="/waitlist"
              variant="primary"
              size="md"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
              className="mt-8"
            >
              Join the Movement
            </Button>
          </div>
          <div className="relative">
            <Card variant="gradient" hover="lift">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🌍</div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Pan-African Reach</p>
                    <p className="font-semibold text-gray-900">15+ Countries</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-3xl">👥</div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Global Talent Pool</p>
                    <p className="font-semibold text-gray-900">50K+ Freelancers</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-3xl">💼</div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Business Partners</p>
                    <p className="font-semibold text-gray-900">3.2K+ Companies</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Our Mission & Vision */}
      <Section light>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-handly-100 text-handly-700 rounded-full text-sm font-semibold mb-4">Purpose</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Mission & Vision</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card variant="default" hover="lift">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To empower Africa's talent by building a world-class platform that connects exceptional freelancers with high-impact opportunities, enabling sustainable income and business growth across the continent.
            </p>
          </Card>
          <Card variant="default" hover="lift">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              A world where geographic location doesn't limit opportunity, where African talent is recognized globally, and where freelancers and businesses can thrive together on a platform built for them.
            </p>
          </Card>
        </div>
      </Section>

      {/* Our Values */}
      <Section>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-handly-100 text-handly-700 rounded-full text-sm font-semibold mb-4">Values</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-600">These principles guide every decision we make</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: '🤝',
              title: 'Community First',
              description: 'We build for our community, not just from them. Your success is our success.',
            },
            {
              icon: '✨',
              title: 'Excellence',
              description: 'We maintain the highest standards in every interaction, transaction, and innovation.',
            },
            {
              icon: '🔒',
              title: 'Trust & Transparency',
              description: 'Clear communication and secure transactions are non-negotiable. No hidden fees.',
            },
            {
              icon: '📈',
              title: 'Empowerment',
              description: 'We give you tools, resources, and support to take control of your future.',
            },
            {
              icon: '🌍',
              title: 'African-First',
              description: 'Built for Africa\'s unique challenges, opportunities, and strengths.',
            },
            {
              icon: '💡',
              title: 'Innovation',
              description: 'We continuously evolve to serve you better with cutting-edge solutions.',
            },
          ].map((value, index) => (
            <Card key={index} variant="default" hover="lift">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{value.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Why HANDLY */}
      <Section light>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-handly-100 text-handly-700 rounded-full text-sm font-semibold mb-4">Why HANDLY</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Why Choose HANDLY?</h2>
          <p className="text-xl text-gray-600">We're different because we're built for Africa</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            'Local payment methods and currency support',
            'Offline-friendly interface for unreliable connections',
            'African-focused customer support (African timezones)',
            'Verification system designed for African context',
            'Competitive rates—no middleman fees',
            'Thriving community of African workers and entrepreneurs',
            'Security tailored to local needs',
            'Growth opportunities across 15+ countries',
          ].map((item, i) => (
            <Card key={i} variant="default" hover="lift">
              <div className="flex items-start gap-4">
                <CheckCircle size={24} className="text-handly-600 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">{item}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #158F72 0%, #0E6B55 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Be Part of the Story?</h2>
          <p className="text-xl text-white text-opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of users, workers, and businesses already transforming how Africa does business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/waitlist"
              variant="primary"
              size="lg"
              className="!bg-white !text-handly-600 hover:!shadow-2xl"
            >
              Join Waitlist
            </Button>
            <Button
              href="/how-it-works"
              variant="outline"
              size="lg"
              className="!border-white !text-white hover:!bg-white hover:!bg-opacity-10"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
