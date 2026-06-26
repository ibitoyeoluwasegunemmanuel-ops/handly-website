'use client';

import Link from 'next/link';
import { ArrowRight, Star, Users, Briefcase, Home as HomeIcon, Wrench, Sparkles, Droplets, Scissors, Car, CheckCircle, TrendingUp, Shield, Clock, Globe, Award } from 'lucide-react';
import Testimonials from '@/components/Testimonials';
import { useState, useEffect } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      {/* SECTION 1: HERO */}
      <section
        style={{
          background: 'linear-gradient(135deg, #158F72 0%, #0E6B55 100%)',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '80px',
          paddingBottom: '80px',
        }}
      >
        {/* Background accents */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div>
              {/* Badge */}
              <div style={{ marginBottom: '32px' }} className="inline-flex items-center gap-2 px-4 py-2 bg-white bg-opacity-15 backdrop-blur-sm rounded-full border border-white border-opacity-30">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                <span style={{ color: 'white', fontSize: '14px', fontWeight: 600 }}>Available on Apple App Store</span>
              </div>

              {/* Headline */}
              <h1 style={{ color: 'white', marginBottom: '24px' }}>
                Find Trusted Workers, Services & Businesses
              </h1>

              {/* Subheadline */}
              <p style={{ color: 'rgba(255,255,255,0.95)', fontSize: '18px', marginBottom: '48px', maxWidth: '500px' }}>
                HANDLY connects customers, skilled workers, artisans, and local businesses in one trusted marketplace.
              </p>

              {/* Emphasis Text */}
              <p style={{ color: 'white', fontSize: '24px', fontWeight: 700, marginBottom: '48px' }}>
                Find. Book. Get It Done.
              </p>

              {/* Primary CTA */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="https://apps.apple.com/us/app/handly-app/id6778122913"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ backgroundColor: 'white', color: '#158F72' }}
                >
                  <span>🍎</span> Download on App Store
                </a>
                <Link href="/waitlist" className="btn btn-outline-white">
                  Post a Job <ArrowRight size={20} />
                </Link>
              </div>

              {/* Secondary CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/workers" className="btn btn-outline-white">
                  Find Workers
                </Link>
                <Link href="/businesses" className="btn btn-outline-white">
                  List Your Business
                </Link>
              </div>

              {/* Google Play - Coming Soon */}
              <div style={{ marginTop: '24px', opacity: 0.6 }} className="flex items-center gap-3 px-6 py-3 border-2 border-white border-opacity-40 text-white rounded-lg cursor-not-allowed font-semibold">
                <span>▶️</span> Coming Soon on Google Play
              </div>
            </div>

            {/* Right Column - iPhone Mockup */}
            <div className="hidden lg:flex justify-center">
              <div style={{ position: 'relative', width: '320px' }}>
                {/* Phone Bezel */}
                <div
                  style={{
                    background: 'linear-gradient(to bottom, #1a1a1a, #0a0a0a)',
                    borderRadius: '40px',
                    padding: '12px',
                    boxShadow: 'var(--shadow-xl)',
                  }}
                >
                  {/* Screen */}
                  <div style={{ background: '#f8fafc', borderRadius: '36px', overflow: 'hidden', height: '600px', display: 'flex', flexDirection: 'column' }}>
                    {/* Status Bar */}
                    <div style={{ background: 'linear-gradient(to right, #158F72, #0E6B55)', color: 'white', padding: '12px 16px', fontSize: '12px', fontWeight: 600, display: 'flex', justifyContent: 'space-between' }}>
                      <span>9:41</span>
                      <span>📶 📡</span>
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1, padding: '16px', overflowY: 'auto' }}>
                      <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>Lagos, Nigeria</h2>
                      <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '16px' }}>What do you need?</p>

                      {/* Quick Actions */}
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '16px' }}>
                        {['Post Job', 'Find Workers', 'Browse Services'].map((action, i) => (
                          <div key={i} style={{ background: '#E6F4EF', padding: '12px', borderRadius: '12px', textAlign: 'center', cursor: 'pointer' }}>
                            <p style={{ fontSize: '12px', fontWeight: 700, color: '#0F172A' }}>{action}</p>
                          </div>
                        ))}
                      </div>

                      {/* Services Grid */}
                      <p style={{ fontSize: '12px', fontWeight: 600, color: '#64748B', marginBottom: '8px' }}>Popular Services</p>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                        {[
                          { emoji: '🏠', label: 'Home' },
                          { emoji: '🔧', label: 'Fix' },
                          { emoji: '✨', label: 'Clean' },
                          { emoji: '⚡', label: 'Electric' },
                        ].map((service, i) => (
                          <div key={i} style={{ textAlign: 'center' }}>
                            <p style={{ fontSize: '24px', marginBottom: '4px' }}>{service.emoji}</p>
                            <p style={{ fontSize: '11px', color: '#64748B', fontWeight: 600 }}>{service.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Stats */}
                <div
                  className="card"
                  style={{
                    position: 'absolute',
                    top: '-24px',
                    right: '-40px',
                    width: '200px',
                    padding: '16px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '40px', height: '40px', background: '#E6F4EF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>👥</div>
                    <div>
                      <p style={{ fontSize: '12px', color: '#64748B', fontWeight: 600 }}>50K+</p>
                      <p style={{ fontSize: '14px', fontWeight: 700, color: '#0F172A' }}>Customers</p>
                    </div>
                  </div>
                </div>

                <div
                  className="card"
                  style={{
                    position: 'absolute',
                    top: '120px',
                    right: '-50px',
                    width: '200px',
                    padding: '16px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '40px', height: '40px', background: '#E6F4EF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>💼</div>
                    <div>
                      <p style={{ fontSize: '12px', color: '#64748B', fontWeight: 600 }}>15K+</p>
                      <p style={{ fontSize: '14px', fontWeight: 700, color: '#0F172A' }}>Workers</p>
                    </div>
                  </div>
                </div>

                <div
                  className="card"
                  style={{
                    position: 'absolute',
                    bottom: '40px',
                    right: '-40px',
                    width: '200px',
                    padding: '16px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '40px', height: '40px', background: '#E6F4EF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>⭐</div>
                    <div>
                      <p style={{ fontSize: '12px', color: '#64748B', fontWeight: 600 }}>4.8★</p>
                      <p style={{ fontSize: '14px', fontWeight: 700, color: '#0F172A' }}>Rating</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats - Visible on all sizes */}
          <div style={{ marginTop: '80px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
            {[
              { value: '120K+', label: 'Jobs Completed' },
              { value: '3.2K+', label: 'Businesses' },
              { value: '15', label: 'Countries' },
              { value: '₦2B+', label: 'Paid Out' },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '24px',
                  textAlign: 'center',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'white',
                }}
              >
                <p style={{ fontSize: '32px', fontWeight: 700, marginBottom: '8px' }}>{stat.value}</p>
                <p style={{ fontSize: '14px', opacity: 0.9 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Popular Services */}
      <section style={{ paddingTop: '100px', paddingBottom: '100px', background: 'white' }}>
        <div className="container">
          <div style={{ marginBottom: '64px' }}>
            <h2 style={{ marginBottom: '12px' }}>Popular Services</h2>
            <p style={{ fontSize: '18px', color: '#64748B' }}>Find exactly what you need</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '24px' }}>
            {[
              { icon: '🏠', label: 'Home Services' },
              { icon: '🔧', label: 'Repairs' },
              { icon: '✨', label: 'Cleaning' },
              { icon: '⚡', label: 'Electrical' },
              { icon: '💧', label: 'Plumbing' },
              { icon: '✂️', label: 'Beauty' },
              { icon: '🚗', label: 'Transport' },
              { icon: '📦', label: 'More' },
            ].map((service, i) => (
              <div
                key={i}
                className="card"
                style={{
                  textAlign: 'center',
                  padding: '32px 24px',
                  cursor: 'pointer',
                  transition: 'all var(--transition-base)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <p style={{ fontSize: '48px', marginBottom: '12px' }}>{service.icon}</p>
                <p style={{ fontWeight: 600, color: '#0F172A' }}>{service.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: How It Works */}
      <section style={{ paddingTop: '100px', paddingBottom: '100px', background: '#F8FAFC' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ marginBottom: '12px' }}>How HANDLY Works</h2>
            <p style={{ fontSize: '18px', color: '#64748B' }}>Simple. Fast. Secure. Get it done in 3 steps.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {[
              {
                number: '1',
                title: 'Post or Search',
                description: 'Post a job or find trusted workers and services in seconds',
                icon: '📝',
              },
              {
                number: '2',
                title: 'Connect & Hire',
                description: 'Review profiles, hire the best match, and start collaborating',
                icon: '🤝',
              },
              {
                number: '3',
                title: 'Get It Done',
                description: 'Secure payments, real-time tracking, and guaranteed satisfaction',
                icon: '✅',
              },
            ].map((step, i) => (
              <div key={i} className="card" style={{ padding: '40px 32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      background: 'linear-gradient(135deg, #158F72 0%, #0E6B55 100%)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '24px',
                    }}
                  >
                    {step.number}
                  </div>
                  <p style={{ fontSize: '36px' }}>{step.icon}</p>
                </div>
                <h3 style={{ marginBottom: '16px' }}>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: For Customers */}
      <section style={{ paddingTop: '100px', paddingBottom: '100px', background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '64px', alignItems: 'center' }}>
            <div>
              <h2 style={{ marginBottom: '24px' }}>For Customers</h2>
              <p style={{ fontSize: '18px', marginBottom: '32px', lineHeight: 'var(--line-height-relaxed)' }}>Post a job, find trusted workers, and get your projects done by verified professionals who care about quality.</p>
              <ul style={{ marginBottom: '40px' }}>
                {[
                  'Post unlimited jobs',
                  'Get instant quotes',
                  'Secure payments',
                  'Track progress in real-time',
                  'Rate and review workers',
                ].map((feature, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '16px', color: '#0F172A' }}>
                    <CheckCircle size={20} style={{ color: '#158F72', flexShrink: 0 }} />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/customers" className="btn btn-primary">
                Start Hiring Now <ArrowRight size={20} />
              </Link>
            </div>
            <div
              style={{
                background: 'linear-gradient(135deg, #E6F4EF 0%, #F8FAFC 100%)',
                borderRadius: 'var(--radius-xl)',
                height: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '80px',
              }}
            >
              👤
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: For Workers */}
      <section style={{ paddingTop: '100px', paddingBottom: '100px', background: '#F8FAFC' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '64px', alignItems: 'center' }}>
            <div
              style={{
                background: 'linear-gradient(135deg, #E6F4EF 0%, #F8FAFC 100%)',
                borderRadius: 'var(--radius-xl)',
                height: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '80px',
                order: -1,
              }}
            >
              💼
            </div>
            <div>
              <h2 style={{ marginBottom: '24px' }}>For Workers</h2>
              <p style={{ fontSize: '18px', marginBottom: '32px', lineHeight: 'var(--line-height-relaxed)' }}>Get discovered by customers, build your reputation, and earn fair rates on your terms.</p>
              <ul style={{ marginBottom: '40px' }}>
                {[
                  'Unlimited job opportunities',
                  'Set your own rates',
                  'Build your profile & reputation',
                  'Instant payments',
                  'Work on your schedule',
                ].map((feature, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '16px', color: '#0F172A' }}>
                    <CheckCircle size={20} style={{ color: '#158F72', flexShrink: 0 }} />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/workers" className="btn btn-primary">
                Start Earning Now <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: For Businesses */}
      <section style={{ paddingTop: '100px', paddingBottom: '100px', background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '64px', alignItems: 'center' }}>
            <div>
              <h2 style={{ marginBottom: '24px' }}>For Businesses</h2>
              <p style={{ fontSize: '18px', marginBottom: '32px', lineHeight: 'var(--line-height-relaxed)' }}>Create a business profile, connect with customers across Africa, and scale your business effortlessly.</p>
              <ul style={{ marginBottom: '40px' }}>
                {[
                  'Free business listing',
                  'Reach thousands of customers',
                  'Professional portfolio',
                  'Bulk job management',
                  'Business analytics',
                ].map((feature, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '16px', color: '#0F172A' }}>
                    <CheckCircle size={20} style={{ color: '#158F72', flexShrink: 0 }} />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/businesses" className="btn btn-primary">
                List Your Business <ArrowRight size={20} />
              </Link>
            </div>
            <div
              style={{
                background: 'linear-gradient(135deg, #E6F4EF 0%, #F8FAFC 100%)',
                borderRadius: 'var(--radius-xl)',
                height: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '80px',
              }}
            >
              🏢
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Success Stories */}
      <section style={{ paddingTop: '100px', paddingBottom: '100px', background: '#F8FAFC' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ marginBottom: '12px' }}>Success Stories</h2>
            <p style={{ fontSize: '18px', color: '#64748B' }}>Real results from real people</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {[
              {
                name: 'Adekunle',
                role: 'Plumber',
                story: 'Went from 2 jobs/month to 20+ with HANDLY. Now earning ₦500K+/month',
                avatar: '👨‍🔧',
              },
              {
                name: 'Folake',
                role: 'Home Cleaner',
                story: 'Built a team of 5 cleaners. HANDLY helped me scale from solo to business owner',
                avatar: '👩‍💼',
              },
              {
                name: 'Lagos Tech Startup',
                role: 'Business',
                story: 'Hired 50+ freelancers through HANDLY. Saved 40% on hiring costs',
                avatar: '🏢',
              },
            ].map((story, i) => (
              <div key={i} className="card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ width: '48px', height: '48px', background: '#E6F4EF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
                    {story.avatar}
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, color: '#0F172A' }}>{story.name}</p>
                    <p style={{ fontSize: '14px', color: '#64748B' }}>{story.role}</p>
                  </div>
                </div>
                <p style={{ fontStyle: 'italic', color: '#0F172A', marginBottom: '16px' }}>"{story.story}"</p>
                <div style={{ display: 'flex', gap: '4px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} style={{ fill: '#fbbf24', color: '#fbbf24' }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Testimonials */}
      <section style={{ paddingTop: '100px', paddingBottom: '100px', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ marginBottom: '12px' }}>Loved by 50K+ Users</h2>
            <p style={{ fontSize: '18px', color: '#64748B' }}>See what customers, workers, and businesses are saying</p>
          </div>

          <Testimonials limit={3} />
        </div>
      </section>

      {/* SECTION 9: Download App CTA */}
      <section
        style={{
          background: 'linear-gradient(135deg, #158F72 0%, #0E6B55 100%)',
          paddingTop: '100px',
          paddingBottom: '100px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ color: 'white', marginBottom: '24px' }}>Download the App</h2>
            <p style={{ color: 'rgba(255,255,255,0.95)', fontSize: '18px', marginBottom: '48px', lineHeight: 'var(--line-height-relaxed)' }}>
              Get access to thousands of jobs and services, manage your profile, and track projects on the go.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://apps.apple.com/us/app/handly-app/id6778122913" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ backgroundColor: 'white', color: '#158F72' }}>
                <span>🍎</span> Download on App Store
              </a>
              <div className="btn" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', cursor: 'not-allowed', opacity: 0.6 }}>
                <span>▶️</span> Coming Soon on Google Play
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: Investor Section */}
      <section style={{ paddingTop: '100px', paddingBottom: '100px', background: '#F8FAFC' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ marginBottom: '12px' }}>Investor-Grade Metrics</h2>
            <p style={{ fontSize: '18px', color: '#64748B' }}>Built on real data and explosive growth</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
            {[
              { icon: '📈', metric: '45% MoM Growth', desc: 'Month-over-month user growth' },
              { icon: '⭐', metric: '4.8★ Rating', desc: 'Average platform rating' },
              { icon: '⚡', metric: '3-Day Payback', desc: 'Customer acquisition payback period' },
              { icon: '💯', metric: '₦2B+ Paid', desc: 'Total paid to workers' },
              { icon: '🚀', metric: '15 Countries', desc: 'Live in Africa' },
              { icon: '💰', metric: '₦480M+', desc: 'Monthly platform revenue' },
            ].map((stat, i) => (
              <div key={i} className="card">
                <p style={{ fontSize: '48px', marginBottom: '16px' }}>{stat.icon}</p>
                <p style={{ fontSize: '20px', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>{stat.metric}</p>
                <p style={{ fontSize: '14px', color: '#64748B' }}>{stat.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '64px' }}>
            <Link href="/investors" className="btn btn-primary">
              View Investor Materials <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 11: Community */}
      <section style={{ paddingTop: '100px', paddingBottom: '100px', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ marginBottom: '12px' }}>Join Our Community</h2>
            <p style={{ fontSize: '18px', color: '#64748B' }}>Connect with thousands of workers, customers, and businesses</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
            {[
              { platform: 'WhatsApp', icon: '💬', url: '#' },
              { platform: 'Telegram', icon: '📱', url: '#' },
              { platform: 'Twitter', icon: '𝕏', url: '#' },
              { platform: 'LinkedIn', icon: '🔗', url: '#' },
            ].map((community, i) => (
              <a key={i} href={community.url} target="_blank" rel="noopener noreferrer" className="card" style={{ textAlign: 'center', padding: '40px' }}>
                <p style={{ fontSize: '56px', marginBottom: '16px' }}>{community.icon}</p>
                <p style={{ fontWeight: 600, color: '#0F172A' }}>{community.platform}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12: Final CTA */}
      <section style={{ paddingTop: '100px', paddingBottom: '100px', background: '#F8FAFC' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ marginBottom: '24px' }}>Get Started Today</h2>
            <p style={{ fontSize: '18px', color: '#64748B', marginBottom: '48px', lineHeight: 'var(--line-height-relaxed)' }}>
              Whether you want to find workers, offer your skills, or grow your business — HANDLY is where opportunities meet.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/waitlist" className="btn btn-primary">
                Join Now <ArrowRight size={20} />
              </Link>
              <a href="https://apps.apple.com/us/app/handly-app/id6778122913" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Download App <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
