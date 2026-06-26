import { Metadata } from 'next';
import Button from '@/components/Button';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'For Businesses - List Your Service | HANDLY',
  description: 'Reach thousands of customers. Grow your business. List your services on Africa\'s fastest-growing marketplace.',
};

export default function BusinessesPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-handly-700 via-handly-800 to-handly-900">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10" style={{ animationDelay: '-2s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-3xl">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter mb-8">
              Grow Your<br />Business.
            </h1>
            <p className="text-2xl md:text-3xl text-white/80 leading-relaxed mb-10 font-light max-w-2xl">
              List your business and reach thousands of customers across Africa. No hidden fees. Simple tools to grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/waitlist"
                variant="primary"
                size="lg"
                icon={<ArrowRight size={20} />}
                iconPosition="right"
              >
                List Your Business
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
                <p className="text-sm text-white/70 uppercase tracking-widest font-semibold">Businesses Listed</p>
                <p className="text-4xl font-black text-white mt-2">3.2K+</p>
              </div>
              <div>
                <p className="text-sm text-white/70 uppercase tracking-widest font-semibold">Growth Rate</p>
                <p className="text-4xl font-black text-white mt-2">+180% YoY</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Businesses Choose HANDLY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">Why Businesses Choose HANDLY</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Simple tools to help you grow</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                title: 'Reach Local Customers',
                description: 'Get discovered by thousands of customers actively looking for your services in your area.'
              },
              {
                title: 'Manage Your Business',
                description: 'Simple dashboard to manage orders, communicate with customers, and track your growth.'
              },
              {
                title: 'Grow Without Limits',
                description: 'Scale from side hustle to full-time business. No restrictions. Only your ambition matters.'
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
              { num: '1', title: 'Create Profile', desc: 'Tell customers about your business' },
              { num: '2', title: 'List Services', desc: 'Add the services you offer and pricing' },
              { num: '3', title: 'Get Orders', desc: 'Receive customer requests instantly' },
              { num: '4', title: 'Grow Business', desc: 'Build reviews and grow month after month' },
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
          <h2 className="text-5xl md:text-6xl font-black">Ready to Grow?</h2>
          <p className="text-xl text-white/90">List your business today and start reaching new customers</p>
          <Button
            href="/waitlist"
            variant="primary"
            size="lg"
            icon={<ArrowRight size={20} />}
            iconPosition="right"
            className="mx-auto"
          >
            List Your Business
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
              <a href="/customers" className="hover:text-white">For Customers</a>
              <a href="/workers" className="hover:text-white">For Workers</a>
              <a href="/about" className="hover:text-white">About</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
