'use client';

import Link from 'next/link';
import { ArrowRight, Star, Users, Briefcase, Sparkles, CheckCircle, TrendingUp, Shield, Clock, Globe, Zap } from 'lucide-react';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import Testimonials from '@/components/Testimonials';
import { useState, useEffect } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="overflow-hidden">
      {/* ===== SECTION 1: PREMIUM HERO ===== */}
      <Hero
        badge="Available on Apple App Store"
        title={
          <>
            Find Trusted <span className="text-white">Workers, Services & Businesses</span>
          </>
        }
        subtitle="HANDLY connects customers, skilled workers, artisans, and local businesses in one trusted marketplace. Find. Book. Get It Done."
        ctaPrimary={{ text: 'Download on App Store', href: 'https://apps.apple.com/us/app/handly-app/id6778122913' }}
        ctaSecondary={{ text: 'Post a Job', href: '/waitlist' }}
        stats={[
          { label: 'Active Users', value: '50K+' },
          { label: 'Jobs Completed', value: '10K+' },
        ]}
        rightContent={
          <div className="relative w-80 h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl blur-2xl" />
            <div className="relative bg-white rounded-3xl p-6 shadow-2xl">
              <div className="bg-gradient-to-br from-handly-50 to-handly-100 h-80 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📱</div>
                  <p className="text-sm font-medium text-handly-700">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        }
      />

      {/* ===== SECTION 2: QUICK ACTION LINKS ===== */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/workers" className="group">
            <Card variant="gradient" hover="glow">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-handly-100 rounded-lg group-hover:scale-110 transition-transform">
                  <Users className="text-handly-600" size={28} />
                </div>
                <ArrowRight size={20} className="text-gray-400 group-hover:text-handly-600 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Find Workers</h3>
              <p className="text-gray-600">Discover skilled professionals ready to help</p>
            </Card>
          </Link>

          <Link href="/businesses" className="group">
            <Card variant="gradient" hover="glow">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-handly-100 rounded-lg group-hover:scale-110 transition-transform">
                  <Briefcase className="text-handly-600" size={28} />
                </div>
                <ArrowRight size={20} className="text-gray-400 group-hover:text-handly-600 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">List Your Business</h3>
              <p className="text-gray-600">Reach thousands of customers on HANDLY</p>
            </Card>
          </Link>

          <Link href="/customers" className="group">
            <Card variant="gradient" hover="glow">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-handly-100 rounded-lg group-hover:scale-110 transition-transform">
                  <Zap className="text-handly-600" size={28} />
                </div>
                <ArrowRight size={20} className="text-gray-400 group-hover:text-handly-600 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Post a Job</h3>
              <p className="text-gray-600">Get work done by qualified professionals</p>
            </Card>
          </Link>
        </div>
      </Section>

      {/* ===== SECTION 3: POPULAR SERVICES ===== */}
      <Section light>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-handly-100 text-handly-700 rounded-full text-sm font-semibold mb-4">Popular Services</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">What You Can Get Done</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything from home repairs to freelance services</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { icon: '🏠', label: 'Home Repair' },
            { icon: '💼', label: 'Freelance Work' },
            { icon: '✏️', label: 'Tutoring' },
            { icon: '🚗', label: 'Transportation' },
            { icon: '💇', label: 'Beauty' },
            { icon: '📸', label: 'Photography' },
            { icon: '🎨', label: 'Design' },
            { icon: '💻', label: 'Tech Support' },
            { icon: '🧹', label: 'Cleaning' },
            { icon: '📝', label: 'Writing' },
            { icon: '🎬', label: 'Video Editing' },
            { icon: '🌐', label: 'More Services' },
          ].map((service, idx) => (
            <Card key={idx} variant="minimal">
              <div className="text-center py-4 hover:bg-gradient-to-br hover:from-handly-50 hover:to-handly-100 rounded-lg transition-all duration-300 p-4">
                <div className="text-3xl mb-2">{service.icon}</div>
                <p className="text-sm font-semibold text-gray-700">{service.label}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* ===== SECTION 4: HOW IT WORKS ===== */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Simple steps to get started</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              num: '01',
              title: 'Download & Sign Up',
              desc: 'Get the HANDLY app and create your account',
              icon: '📱',
            },
            {
              num: '02',
              title: 'Find or Post',
              desc: 'Browse services or post your job with details',
              icon: '🔍',
            },
            {
              num: '03',
              title: 'Connect & Complete',
              desc: 'Hire workers, communicate, and get work done',
              icon: '✅',
            },
          ].map((step, idx) => (
            <div key={idx} className="relative">
              <Card variant="gradient" hover="lift">
                <div className="flex items-start gap-6">
                  <div>
                    <div className="text-5xl font-black text-handly-100 mb-4">{step.num}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-lg">{step.desc}</p>
                  </div>
                  <div className="text-5xl flex-shrink-0">{step.icon}</div>
                </div>
              </Card>
              {idx < 2 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-gray-300">
                  <ArrowRight size={32} />
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ===== SECTION 5: WHY CHOOSE HANDLY ===== */}
      <Section light>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Why Choose HANDLY?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Africa's most trusted marketplace</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Shield, title: 'Verified & Safe', desc: 'All users verified for your safety' },
            { icon: Clock, title: 'Fast Response', desc: 'Get matched with workers in minutes' },
            { icon: TrendingUp, title: 'Fair Pricing', desc: 'Transparent rates with no hidden fees' },
            { icon: Globe, title: 'Pan-African', desc: 'Available across 15+ African countries' },
            { icon: Users, title: 'Community', desc: 'Join 50K+ users building opportunities' },
            { icon: CheckCircle, title: 'Quality Guaranteed', desc: 'Ratings ensure quality work' },
          ].map((feature, idx) => (
            <Card key={idx} variant="default" hover="lift">
              <div className="p-2 w-fit bg-gradient-to-br from-handly-100 to-handly-50 rounded-lg mb-4">
                <feature.icon className="text-handly-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ===== SECTION 6: TESTIMONIALS ===== */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Loved by 50K+ Users</h2>
          <p className="text-xl text-gray-600">See what customers are saying</p>
        </div>
        <Testimonials />
      </Section>

      {/* ===== SECTION 7: DOWNLOAD CTA ===== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-handly-600 via-handly-700 to-handly-800" />
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white text-opacity-95 mb-12 max-w-2xl mx-auto">
            Join thousands of users and workers transforming how Africa works. Download HANDLY today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              href="https://apps.apple.com/us/app/handly-app/id6778122913"
              variant="primary"
              size="lg"
              icon={<ArrowRight size={22} />}
              iconPosition="right"
              className="!bg-white !text-handly-600 hover:!shadow-2xl"
            >
              Download on App Store
            </Button>
            <Button
              href="/waitlist"
              variant="outline"
              size="lg"
              className="!border-white !text-white hover:!bg-white hover:!bg-opacity-10"
            >
              Join Waitlist
            </Button>
          </div>

          <p className="text-white text-opacity-75 mt-8">Available on iOS • Android coming soon</p>
        </div>
      </section>

      {/* ===== SECTION 8: STATS ===== */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: 'Active Users', value: '50K+', icon: Users },
            { label: 'Jobs Completed', value: '10K+', icon: CheckCircle },
            { label: 'Success Rate', value: '95%', icon: TrendingUp },
            { label: 'Countries', value: '15+', icon: Globe },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <Card key={idx} variant="gradient" hover="lift">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-handly-100 rounded-lg">
                    <Icon className="text-handly-600" size={32} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                    <p className="text-3xl font-black text-gray-900">{stat.value}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* ===== SECTION 9: FINAL CTA ===== */}
      <Section light>
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Join Africa's Largest Marketplace</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Whether you're looking to hire, earn, or grow your business—HANDLY is built for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/workers" variant="primary" size="lg">
              Find Work
            </Button>
            <Button href="/customers" variant="secondary" size="lg">
              Post a Job
            </Button>
            <Button href="/businesses" variant="accent" size="lg">
              Grow Your Business
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
