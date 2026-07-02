import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How It Works – HANDLY',
  description: 'How HANDLY works for customers, workers, and businesses. Post, connect, get it done.',
};

const audiences = [
  {
    eyebrow: 'For Customers',
    title: 'Get quality work done',
    href: '/customers',
    cta: 'Post a Job',
    steps: [
      { title: 'Post your job', desc: 'Describe the work, your timeline, and budget.' },
      { title: 'Get proposals', desc: 'Verified workers respond with offers and availability.' },
      { title: 'Choose & hire', desc: 'Compare ratings and prices, then pick your match.' },
      { title: 'Pay & rate', desc: 'Release payment when satisfied and leave a rating.' },
    ],
  },
  {
    eyebrow: 'For Workers',
    title: 'Earn on your terms',
    href: '/workers',
    cta: 'Start Earning',
    steps: [
      { title: 'Build your profile', desc: 'Add your skills, portfolio, and your rates.' },
      { title: 'Browse jobs', desc: 'See requests near you that match what you do.' },
      { title: 'Send proposals', desc: 'Quote your price and win the jobs you want.' },
      { title: 'Get paid weekly', desc: 'Secure payouts straight to your bank account.' },
    ],
  },
  {
    eyebrow: 'For Businesses',
    title: 'Grow your customer base',
    href: '/businesses',
    cta: 'List Your Business',
    steps: [
      { title: 'Create your profile', desc: 'Add your business info, photos, and services.' },
      { title: 'Get discovered', desc: 'Customers find you through search and categories.' },
      { title: 'Receive orders', desc: 'Requests come straight to your dashboard.' },
      { title: 'Build reputation', desc: 'Great service earns reviews and repeat business.' },
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-40 pb-20 lg:pt-48">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-handly-600 uppercase tracking-widest mb-6">How it works</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-8">
              One marketplace, three ways to win.
            </h1>
            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl">
              Whether you're hiring, working, or growing a business — here's exactly how HANDLY works for you.
            </p>
          </div>
        </div>
      </section>

      {/* Audiences */}
      {audiences.map((a, idx) => (
        <section key={a.eyebrow} className={`py-24 ${idx % 2 === 0 ? 'bg-gray-50/70' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
              <div>
                <p className="text-sm font-semibold text-handly-600 uppercase tracking-widest mb-4">{a.eyebrow}</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">{a.title}</h2>
              </div>
              <Link
                href={a.href}
                className="inline-flex items-center gap-2 text-[15px] font-semibold text-handly-600 hover:text-handly-700 transition-colors shrink-0"
              >
                {a.cta}
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {a.steps.map((step, i) => (
                <div key={step.title}>
                  <p className="text-sm font-bold text-handly-600 mb-5">{String(i + 1).padStart(2, '0')}</p>
                  <div className="h-px bg-gray-900/10 mb-6" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2.5">{step.title}</h3>
                  <p className="text-[15px] text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-handly-900 px-8 py-20 sm:px-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-handly-800 via-handly-900 to-[#031a17]" />
            <div className="relative max-w-2xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
                Ready to start?
              </h2>
              <p className="text-lg text-handly-100/80 mb-10">
                Download the app and join 50,000+ people getting things done on HANDLY.
              </p>
              <a
                href="https://apps.apple.com/us/app/handly-app/id6778122913"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-gray-900 rounded-full font-semibold hover:bg-handly-50 transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-black/10"
              >
                Download the App
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
