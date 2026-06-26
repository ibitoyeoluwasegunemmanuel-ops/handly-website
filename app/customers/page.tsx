import { Metadata } from 'next';
import Button from '@/components/Button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'For Customers - Hire Trusted Workers | HANDLY',
  description: 'Post jobs and hire trusted workers across Africa. Fair prices, verified professionals, guaranteed quality.',
};

export default function CustomersPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-handly-700 via-handly-800 to-handly-900">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10" style={{ animationDelay: '-2s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-3xl">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter mb-8">
              Post a Job.<br />Get It Done.
            </h1>
            <p className="text-2xl md:text-3xl text-white/80 leading-relaxed mb-10 font-light max-w-2xl">
              Find verified professionals ready to work. Post once, get multiple proposals, choose the best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/waitlist"
                variant="primary"
                size="lg"
                icon={<ArrowRight size={20} />}
                iconPosition="right"
              >
                Post Your First Job
              </Button>
              <Button
                href="/#how-it-works"
                variant="outline"
                size="lg"
                className="!bg-white/10 !border-white/30 !text-white hover:!bg-white/20"
              >
                See How It Works
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-12 pt-16 border-t border-white/20 mt-16">
              <div>
                <p className="text-sm text-white/70 uppercase tracking-widest font-semibold">Jobs Posted</p>
                <p className="text-4xl font-black text-white mt-2">12.5K+</p>
              </div>
              <div>
                <p className="text-sm text-white/70 uppercase tracking-widest font-semibold">Success Rate</p>
                <p className="text-4xl font-black text-white mt-2">95%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Customers Love HANDLY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">Why Customers Love HANDLY</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to get quality work done</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                title: 'Find Workers Fast',
                description: 'Post your job in minutes. Get proposals from verified professionals within hours. No waiting.'
              },
              {
                title: 'Safe & Verified',
                description: 'Every worker is verified. Real ratings from real customers. Peace of mind with every hire.'
              },
              {
                title: 'Fair Pricing',
                description: 'No hidden fees. You control the budget. Competitive rates with transparent payment terms.'
              },
            ].map((item, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">How It Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: '1', title: 'Post Your Job', desc: 'Describe what you need and your budget' },
              { num: '2', title: 'Get Proposals', desc: 'Receive proposals from verified workers' },
              { num: '3', title: 'Choose & Hire', desc: 'Pick the best match and agree on terms' },
              { num: '4', title: 'Work & Rate', desc: 'Communicate, complete, and rate' },
            ].map((step, idx) => (
              <div key={idx}>
                <p className="text-5xl font-black text-handly-600 mb-4">{step.num}</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-handly-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-black">Ready to Get Work Done?</h2>
          <p className="text-xl text-white/90">Post your first job today and see how HANDLY makes hiring easy</p>
          <Button
            href="/waitlist"
            variant="primary"
            size="lg"
            icon={<ArrowRight size={20} />}
            iconPosition="right"
            className="mx-auto"
          >
            Post a Job Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2026 HANDLY. All rights reserved.</p>
            <div className="flex gap-6 text-gray-400 mt-4 md:mt-0">
              <a href="/" className="hover:text-white">Home</a>
              <a href="/workers" className="hover:text-white">For Workers</a>
              <a href="/businesses" className="hover:text-white">For Businesses</a>
              <a href="/about" className="hover:text-white">About</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
