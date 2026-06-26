import { Metadata } from 'next';
import { Mail } from 'lucide-react';
import FAQ from '@/components/FAQ';
import Button from '@/components/Button';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions',
  description: 'Get answers to common questions about HANDLY.',
};

export default function FAQPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #158F72 0%, #0E6B55 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-white text-opacity-90 leading-relaxed max-w-3xl mx-auto">
            Find answers to common questions about HANDLY
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <FAQ category="all" />
        </div>
      </Section>

      {/* Contact Support */}
      <Section light>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Didn't find your answer?</h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Our support team is here to help. Get in touch with us directly.
          </p>
          <Button
            href="mailto:support@handly.africa"
            variant="primary"
            size="lg"
            icon={<Mail size={20} />}
            iconPosition="right"
          >
            Contact Support
          </Button>
        </div>
      </Section>
    </div>
  );
}
