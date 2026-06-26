'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle, Users, Briefcase, TrendingUp } from 'lucide-react';
import Button from '@/components/Button';
import { useState, useEffect } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="overflow-hidden bg-white">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-handly-700 via-handly-800 to-handly-900">
        {/* Subtle animated blobs */}
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob-float" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob-float-slow" style={{ animationDelay: '-2s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left: Text */}
            <div className="space-y-10">
              <div className="space-y-8">
                <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter">
                  Get It<br />Done.
                </h1>
                <p className="text-2xl md:text-3xl text-white/80 leading-relaxed max-w-2xl font-light">
                  Find trusted workers and get things done. Africa's most reliable marketplace.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  href="https://apps.apple.com/us/app/handly-app/id6778122913"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight size={20} />}
                  iconPosition="right"
                >
                  Download on App Store
                </Button>
                <Button
                  href="/customers"
                  variant="outline"
                  size="lg"
                  className="!bg-white/10 !border-white/30 !text-white hover:!bg-white/20"
                >
                  Post a Job
                </Button>
              </div>

              {/* Trust metrics */}
              <div className="flex flex-col sm:flex-row gap-12 pt-12 border-t border-white/20">
                <div>
                  <p className="text-sm text-white/70 uppercase tracking-widest font-semibold">Active Users</p>
                  <p className="text-4xl font-black text-white mt-2">50K+</p>
                </div>
                <div>
                  <p className="text-sm text-white/70 uppercase tracking-widest font-semibold">Jobs Completed</p>
                  <p className="text-4xl font-black text-white mt-2">10K+</p>
                </div>
              </div>
            </div>

            {/* Right: iPhone mockup */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl blur-2xl" />
                <div className="relative bg-black rounded-3xl p-3 shadow-2xl" style={{ aspectRatio: '9/19' }}>
                  <div className="bg-white rounded-2xl h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">📱</div>
                      <p className="text-sm font-semibold text-gray-600">Coming Soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST METRICS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: 'Verified Workers', value: '15K+' },
              { label: 'Registered Businesses', value: '3.2K+' },
              { label: 'Success Rate', value: '95%' },
              { label: 'Countries', value: '15+' },
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold">{stat.label}</p>
                <p className="text-4xl md:text-5xl font-black text-gray-900 mt-3">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">What You Can Get Done</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">From home repairs to freelance services, skilled professionals ready to help</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: '🏠', label: 'Home Repair' },
              { icon: '💼', label: 'Freelance' },
              { icon: '✏️', label: 'Tutoring' },
              { icon: '🚗', label: 'Transport' },
              { icon: '💇', label: 'Beauty' },
              { icon: '📸', label: 'Photography' },
            ].map((service, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl mb-4">{service.icon}</div>
                <p className="font-semibold text-gray-900">{service.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW IT WORKS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to get started</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { num: '01', title: 'Post or Browse', desc: 'Tell us what you need or showcase your skills' },
              { num: '02', title: 'Connect', desc: 'Match with trusted professionals instantly' },
              { num: '03', title: 'Get It Done', desc: 'Communicate, deliver, and rate each other' },
            ].map((step, idx) => (
              <div key={idx}>
                <p className="text-6xl font-black text-handly-600 mb-6">{step.num}</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-lg">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY HANDLY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">Why HANDLY</h2>
            <p className="text-xl text-gray-600">Africa's most trusted marketplace</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: '✓', title: 'Verified & Trusted', desc: 'Every user verified. Real reviews. Real reliability.' },
              { icon: '⚡', title: 'Instant Matching', desc: 'Connect with right professionals in minutes, not days.' },
              { icon: '💰', title: 'Fair & Transparent', desc: 'No hidden fees. You control the rates and terms.' },
            ].map((feature, idx) => (
              <div key={idx} className="space-y-6">
                <p className="text-5xl">{feature.icon}</p>
                <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: TESTIMONIALS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">Loved by Our Community</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: 'Found quality freelancers within days. The platform is incredibly intuitive.',
                author: 'Chioma M.',
                role: 'Business Owner',
              },
              {
                quote: 'Finally a marketplace that understands African professionals. The earnings are fair.',
                author: 'James O.',
                role: 'Freelancer',
              },
              {
                quote: 'The verification process gives me confidence. Every hire has been reliable.',
                author: 'Sarah A.',
                role: 'Marketing Manager',
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA - DOWNLOAD */}
      <section className="py-24 bg-gradient-to-br from-handly-700 to-handly-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-black">Ready to Get Started?</h2>
          <p className="text-xl text-white/90">Join thousands of users transforming how work gets done in Africa</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              href="https://apps.apple.com/us/app/handly-app/id6778122913"
              variant="primary"
              size="lg"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
            >
              Download on App Store
            </Button>
            <Button
              href="/workers"
              variant="outline"
              size="lg"
              className="!bg-white/10 !border-white/30 !text-white hover:!bg-white/20"
            >
              Find Work
            </Button>
          </div>
          <p className="text-white/75 text-sm pt-4">Available on iOS • Android coming soon</p>
        </div>
      </section>

      {/* SECTION 8: FOOTER */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/how-it-works" className="hover:text-white">How It Works</a></li>
                <li><a href="/success-stories" className="hover:text-white">Success Stories</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about" className="hover:text-white">About Us</a></li>
                <li><a href="/careers" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Community</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/community" className="hover:text-white">Join Community</a></li>
                <li><a href="/blog" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2026 HANDLY. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">Built for Africa, by Africans</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
