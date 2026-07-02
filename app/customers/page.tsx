import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap, BadgeCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'For Customers – Hire Trusted Workers | HANDLY',
  description: 'Post jobs and hire verified workers across Africa. Fair prices, verified professionals, guaranteed quality.',
};

export default function CustomersPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-40 pb-24 lg:pt-48 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-handly-600 uppercase tracking-widest mb-6">For Customers</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-8">
              Post a job.
              <br />
              <span className="text-handly-600">Hire with confidence.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl mb-10">
              Describe what you need, compare offers from verified professionals, and choose the best — all from your phone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/waitlist"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-handly-600 text-white rounded-full font-semibold hover:bg-handly-700 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                Post Your First Job
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-semibold text-gray-900 border border-gray-200 hover:border-gray-900 transition-colors"
              >
                See How It Works
              </Link>
            </div>

            <div className="flex gap-14 mt-16 pt-10 border-t border-gray-900/5">
              <div>
                <p className="text-3xl font-bold text-gray-900 tracking-tight">12.5K+</p>
                <p className="text-sm text-gray-500 mt-1">Jobs posted</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900 tracking-tight">95%</p>
                <p className="text-sm text-gray-500 mt-1">Completed successfully</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900 tracking-tight">4.8★</p>
                <p className="text-sm text-gray-500 mt-1">Average worker rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-28 bg-gray-50/70">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              Everything you need to get quality work done.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                icon: <Zap size={22} className="text-handly-600" />,
                title: 'Offers within hours',
                desc: 'Post your job in minutes and receive proposals from available professionals near you — fast.',
              },
              {
                icon: <ShieldCheck size={22} className="text-handly-600" />,
                title: 'Verified professionals',
                desc: 'Every worker is identity-verified with real ratings from real customers. Hire with peace of mind.',
              },
              {
                icon: <BadgeCheck size={22} className="text-handly-600" />,
                title: 'You control the budget',
                desc: 'Compare transparent prices upfront. No hidden fees, no surprises when the work is done.',
              },
            ].map((item) => (
              <div key={item.title}>
                <div className="w-12 h-12 rounded-2xl bg-white border border-gray-900/5 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold text-handly-600 uppercase tracking-widest mb-4">How it works</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              Four steps to done.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { num: '01', title: 'Post your job', desc: 'Describe the work, your timeline, and budget.' },
              { num: '02', title: 'Get proposals', desc: 'Verified workers respond with offers and availability.' },
              { num: '03', title: 'Choose & hire', desc: 'Compare ratings and prices, then pick your match.' },
              { num: '04', title: 'Pay & rate', desc: 'Release payment when satisfied and leave a rating.' },
            ].map((step) => (
              <div key={step.num}>
                <p className="text-sm font-bold text-handly-600 mb-5">{step.num}</p>
                <div className="h-px bg-gray-900/10 mb-7" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-handly-900 px-8 py-20 sm:px-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-handly-800 via-handly-900 to-[#031a17]" />
            <div className="relative max-w-2xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
                Ready to get work done?
              </h2>
              <p className="text-lg text-handly-100/80 mb-10">
                Post your first job today — it takes less than five minutes.
              </p>
              <Link
                href="/waitlist"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-gray-900 rounded-full font-semibold hover:bg-handly-50 transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-black/10"
              >
                Post a Job Now
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
