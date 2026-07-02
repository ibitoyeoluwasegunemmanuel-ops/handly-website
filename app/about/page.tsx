import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About HANDLY – Our Mission',
  description: 'HANDLY\'s mission is to transform work in Africa by connecting skilled professionals with opportunity.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-40 pb-24 lg:pt-48 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-handly-600 uppercase tracking-widest mb-6">About</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-8">
              Africa's talent is world-class. Now the access is too.
            </h1>
            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl">
              We're building the trusted infrastructure that connects skilled people with the work they deserve.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-28 bg-gray-50/70">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-semibold text-handly-600 uppercase tracking-widest mb-6">Our story</p>
          <div className="space-y-7 text-lg text-gray-600 leading-relaxed">
            <p>
              HANDLY was born from a simple observation: Africa has incredible talent and enormous demand for services — but the connection between them is broken.
            </p>
            <p>
              Skilled workers struggle to find reliable customers. Customers struggle to find professionals they can trust. The gap costs everyone: lost income, wasted time, missed opportunity.
            </p>
            <p>
              So we built the marketplace we wished existed — designed for African realities. Identity verification because trust is everything. Transparent pricing because fairness compounds. Local payments because convenience matters.
            </p>
            <p className="text-gray-900 font-semibold">
              Today, 50,000+ people use HANDLY to hire and earn. We're just getting started.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold text-handly-600 uppercase tracking-widest mb-4">Values</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              What we won't compromise on.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                title: 'Trust first',
                desc: 'Verification isn\'t optional. Every user is verified, every review is real. Trust is the product.',
              },
              {
                title: 'Fair always',
                desc: 'No hidden fees. No exploitative cuts. When workers win and customers win, we win.',
              },
              {
                title: 'Built for Africa',
                desc: 'Local payments, local languages, local context. Designed by Africans, for African realities.',
              },
            ].map((value, idx) => (
              <div key={value.title}>
                <p className="text-sm font-bold text-handly-600 mb-5">{String(idx + 1).padStart(2, '0')}</p>
                <div className="h-px bg-gray-900/10 mb-7" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-gray-900/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { value: '50K+', label: 'Active users' },
              { value: '10K+', label: 'Jobs completed' },
              { value: '15+', label: 'Countries' },
              { value: '95%', label: 'Success rate' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold text-gray-900 tracking-tight">{stat.value}</p>
                <p className="text-[15px] text-gray-500 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-handly-900 px-8 py-20 sm:px-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-handly-800 via-handly-900 to-[#031a17]" />
            <div className="relative max-w-2xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
                Join the mission.
              </h2>
              <p className="text-lg text-handly-100/80 mb-10">
                Help us transform how work happens across Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://apps.apple.com/us/app/handly-app/id6778122913"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-gray-900 rounded-full font-semibold hover:bg-handly-50 transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-black/10"
                >
                  Download the App
                  <ArrowRight size={18} />
                </a>
                <Link
                  href="/careers"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-semibold text-white border border-white/25 hover:bg-white/10 transition-colors"
                >
                  View Careers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
