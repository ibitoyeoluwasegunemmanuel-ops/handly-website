import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Wallet, UserCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'For Workers – Earn on Your Terms | HANDLY',
  description: 'Find work, build your reputation, and earn fair rates. Join 15K+ skilled workers earning on HANDLY.',
};

export default function WorkersPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-40 pb-24 lg:pt-48 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-handly-600 uppercase tracking-widest mb-6">For Workers</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-8">
              Your skills.
              <br />
              <span className="text-handly-600">Your income.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl mb-10">
              Get discovered by thousands of customers, set your own rates, and build a reputation that keeps the work coming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://apps.apple.com/us/app/handly-app/id6778122913"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-handly-600 text-white rounded-full font-semibold hover:bg-handly-700 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                Download the App
                <ArrowRight size={18} />
              </a>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-semibold text-gray-900 border border-gray-200 hover:border-gray-900 transition-colors"
              >
                Learn More
              </Link>
            </div>

            <div className="flex gap-14 mt-16 pt-10 border-t border-gray-900/5">
              <div>
                <p className="text-3xl font-bold text-gray-900 tracking-tight">15K+</p>
                <p className="text-sm text-gray-500 mt-1">Active workers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900 tracking-tight">₦50K+</p>
                <p className="text-sm text-gray-500 mt-1">Avg. monthly earnings</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900 tracking-tight">Weekly</p>
                <p className="text-sm text-gray-500 mt-1">Payouts to your bank</p>
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
              Work on your terms, with real support.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                icon: <UserCheck size={22} className="text-handly-600" />,
                title: 'Get discovered fast',
                desc: 'Your profile reaches thousands of nearby customers actively looking for your exact skills.',
              },
              {
                icon: <TrendingUp size={22} className="text-handly-600" />,
                title: 'Set your own rates',
                desc: 'No middleman deciding your worth. You quote the price, you negotiate, you win the job.',
              },
              {
                icon: <Wallet size={22} className="text-handly-600" />,
                title: 'Paid safely, weekly',
                desc: 'Secure payments with fast weekly withdrawals straight to your bank account.',
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
              Start earning in four steps.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { num: '01', title: 'Build your profile', desc: 'Add your skills, photos of your work, and your rates.' },
              { num: '02', title: 'Browse jobs', desc: 'See requests near you that match what you do.' },
              { num: '03', title: 'Send proposals', desc: 'Quote your price and win the jobs you want.' },
              { num: '04', title: 'Earn & grow', desc: 'Deliver great work, collect ratings, get repeat customers.' },
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
                Start earning today.
              </h2>
              <p className="text-lg text-handly-100/80 mb-10">
                Join 15,000+ skilled workers building sustainable income on HANDLY.
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
              <p className="text-sm text-handly-100/60 mt-6">Available on iOS · Android coming soon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
