import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Plus } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FAQ – HANDLY',
  description: 'Answers to common questions about hiring, working, and growing a business on HANDLY.',
};

const sections = [
  {
    title: 'General',
    items: [
      {
        q: 'What is HANDLY?',
        a: 'HANDLY is Africa\'s trusted marketplace connecting customers with verified skilled workers, artisans, and businesses. We make it simple to find work, hire help, and get things done.',
      },
      {
        q: 'Is HANDLY available in my country?',
        a: 'HANDLY is launching across Africa, starting with Nigeria. We\'re expanding to more countries soon — join the waitlist to be notified when we launch in your region.',
      },
      {
        q: 'How much does HANDLY cost?',
        a: 'Browsing and posting jobs is free. HANDLY takes a small commission on completed work — no subscriptions, no hidden fees.',
      },
    ],
  },
  {
    title: 'For Customers',
    items: [
      {
        q: 'How do I hire someone on HANDLY?',
        a: 'Post a job or browse verified professionals, review their profiles and ratings, and hire the one that fits. You communicate, track progress, and pay — all inside HANDLY.',
      },
      {
        q: 'How are payments handled?',
        a: 'Payments are held securely and released when the work is complete. We support cards, bank transfers, and mobile money.',
      },
      {
        q: 'What if I\'m not satisfied with the work?',
        a: 'You can request revisions, work it out with the professional, or escalate to our support team. Our dispute resolution process protects both sides.',
      },
    ],
  },
  {
    title: 'For Workers',
    items: [
      {
        q: 'How do I get started?',
        a: 'Download the app, build your profile with your skills and portfolio, and set your rates. Once verified, you can browse and apply for jobs that match your expertise.',
      },
      {
        q: 'How much can I earn?',
        a: 'You set your own rates and keep what you earn minus a small platform commission. Top workers on HANDLY earn ₦150K+ per month.',
      },
      {
        q: 'When do I get paid?',
        a: 'Payments are released after job completion, with fast weekly withdrawals to your bank account or mobile money.',
      },
    ],
  },
  {
    title: 'For Businesses',
    items: [
      {
        q: 'How can HANDLY help my business?',
        a: 'List your services where thousands of customers are already searching. Manage orders from a simple dashboard and grow through reviews and repeat customers.',
      },
      {
        q: 'Is there an enterprise plan?',
        a: 'Yes — we offer business plans with team management, bulk hiring, and priority support. Contact us to learn about enterprise solutions.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-40 pb-16 lg:pt-48">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-handly-600 uppercase tracking-widest mb-6">Support</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-8">
              Questions, answered.
            </h1>
            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl">
              Everything you need to know about HANDLY. Can’t find what you’re looking for?{' '}
              <Link href="/contact" className="text-handly-600 font-semibold hover:text-handly-700">
                Talk to us
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {sections.map((section) => (
            <div key={section.title} className="mb-16">
              <h2 className="text-sm font-semibold text-handly-600 uppercase tracking-widest mb-6">
                {section.title}
              </h2>
              <div className="divide-y divide-gray-900/5 border-y border-gray-900/5">
                {section.items.map((item) => (
                  <details key={item.q} className="group py-6">
                    <summary className="flex items-center justify-between gap-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                      <span className="text-lg font-semibold text-gray-900">{item.q}</span>
                      <Plus
                        size={20}
                        className="shrink-0 text-gray-400 transition-transform duration-300 group-open:rotate-45"
                      />
                    </summary>
                    <p className="mt-4 text-[15px] text-gray-500 leading-relaxed max-w-2xl">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-handly-900 px-8 py-20 sm:px-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-handly-800 via-handly-900 to-[#031a17]" />
            <div className="relative max-w-2xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
                Still have questions?
              </h2>
              <p className="text-lg text-handly-100/80 mb-10">
                Our team responds within one business day.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-gray-900 rounded-full font-semibold hover:bg-handly-50 transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-black/10"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
