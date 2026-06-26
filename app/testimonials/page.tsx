import { Metadata } from 'next';
import Section from '@/components/Section';
import Testimonials from '@/components/Testimonials';

export const metadata: Metadata = {
  title: 'Success Stories - What Our Users Say',
  description: 'Read success stories from customers, workers, and businesses using HANDLY.',
};

export default function TestimonialsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #158F72 0%, #0E6B55 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Success Stories</h1>
          <p className="text-xl text-white text-opacity-90 leading-relaxed max-w-3xl mx-auto">
            See how customers, workers, and businesses are achieving their goals with HANDLY
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <Section>
        <Testimonials type="all" />
      </Section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #158F72 0%, #0E6B55 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Be Part of Our Success Stories</h2>
          <p className="text-xl text-white text-opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of customers, workers, and businesses on HANDLY
          </p>
          <a
            href="/waitlist"
            className="inline-block px-10 py-4 bg-white text-handly-600 rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-lg hover:bg-gray-50"
          >
            Join Waitlist
          </a>
        </div>
      </section>
    </div>
  );
}
