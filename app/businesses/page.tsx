import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Store, LayoutDashboard, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'For Businesses – Grow with HANDLY',
  description: 'Reach thousands of customers. Grow your business on Africa\'s fastest-growing services marketplace.',
};

export default function BusinessesPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-40 pb-24 lg:pt-48 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-handly-600 uppercase tracking-widest mb-6">For Businesses</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-8">
              More customers.
              <br />
              <span className="text-handly-600">Less hustle.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl mb-10">
              List your business where thousands of customers are already looking. Simple tools, no hidden fees, real growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/waitlist"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-handly-600 text-white rounded-full font-semibold hover:bg-handly-700 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                List Your Business
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
                <p className="text-3xl font-bold text-gray-900 tracking-tight">3.2K+</p>
                <p className="text-sm text-gray-500 mt-1">Businesses listed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900 tracking-tight">+180%</p>
                <p className="text-sm text-gray-500 mt-1">Year-over-year growth</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900 tracking-tight">50K+</p>
                <p className="text-sm text-gray-500 mt-1">Customers on the platform</p>
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
              Simple tools built to help you grow.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                icon: <Store size={22} className="text-handly-600" />,
                title: 'Reach local customers',
                desc: 'Get discovered by customers in your area actively searching for what you offer.',
              },
              {
                icon: <LayoutDashboard size={22} className="text-handly-600" />,
                title: 'Run it from one place',
                desc: 'Manage orders, chat with customers, and track your performance from a simple dashboard.',
              },
              {
                icon: <TrendingUp size={22} className="text-handly-600" />,
                title: 'Grow without limits',
                desc: 'Scale from a side hustle to a full operation. Reviews and repeat customers compound.',
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
              Listed in four steps.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { num: '01', title: 'Create your profile', desc: 'Add your business info, photos, and services.' },
              { num: '02', title: 'Get discovered', desc: 'Customers find you through search and categories.' },
              { num: '03', title: 'Receive orders', desc: 'Requests come straight to your dashboard.' },
              { num: '04', title: 'Grow your reputation', desc: 'Great service earns reviews and repeat business.' },
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
                Ready to grow your business?
              </h2>
              <p className="text-lg text-handly-100/80 mb-10">
                Get your profile live today and start reaching new customers.
              </p>
              <Link
                href="/waitlist"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-gray-900 rounded-full font-semibold hover:bg-handly-50 transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-black/10"
              >
                List Your Business
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
