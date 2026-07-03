import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Investors – HANDLY',
  description: 'Join us in transforming work across Africa. Explore investment opportunities with HANDLY.',
};

export default function InvestorsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-40 pb-24 lg:pt-48 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-handly-600 uppercase tracking-widest mb-6">Investor Relations</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-8">
              The marketplace for Africa's services economy.
            </h1>
            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl mb-10">
              50K+ users. 45% month-over-month growth. A $100B addressable market with no dominant player — yet.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-handly-600 text-white rounded-full font-semibold hover:bg-handly-700 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              Request the Deck
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Traction */}
      <section className="py-20 border-y border-gray-900/5 bg-gray-50/70">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { value: '50K+', label: 'Active users', sub: 'growing 45% MoM' },
              { value: '₦480K', label: 'Monthly revenue', sub: 'and accelerating' },
              { value: '300:1', label: 'LTV to CAC', sub: '$0.50 CAC · $150 LTV' },
              { value: '10+', label: 'Nigerian states', sub: 'built to scale pan-African' },
            ].map((m) => (
              <div key={m.label}>
                <p className="text-4xl font-bold text-gray-900 tracking-tight">{m.value}</p>
                <p className="text-[15px] font-semibold text-gray-900 mt-2">{m.label}</p>
                <p className="text-sm text-gray-500 mt-0.5">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold text-handly-600 uppercase tracking-widest mb-4">The opportunity</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              A massive market, still up for grabs.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              { value: '$100B', label: 'Total addressable market', desc: 'Africa\'s services economy, growing 15%+ annually as urbanization accelerates.' },
              { value: '$5B', label: 'Serviceable market', desc: 'Platform-enabled services across our target geographies and verticals.' },
              { value: '$50M', label: 'Revenue at 1% share', desc: 'Our conservative five-year target at just 1% market penetration.' },
            ].map((m) => (
              <div key={m.label}>
                <p className="text-5xl font-bold text-handly-600 tracking-tight mb-4">{m.value}</p>
                <div className="h-px bg-gray-900/10 mb-6" />
                <h3 className="text-lg font-bold text-gray-900 mb-2.5">{m.label}</h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why now */}
      <section className="py-28 bg-gray-50/70">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold text-handly-600 uppercase tracking-widest mb-4">Why HANDLY</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              Four reasons this compounds.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
            {[
              {
                title: 'First-mover at scale',
                desc: 'No mature competitor is doing this across Africa. We\'re setting the standard while the market is still forming.',
              },
              {
                title: 'Network effects',
                desc: 'Every new worker makes the platform more valuable to customers — and vice versa. Growth compounds on both sides.',
              },
              {
                title: 'Built for the market',
                desc: 'Local payments, verification designed for African context, and a team that lives the problem daily.',
              },
              {
                title: 'Unit economics that work',
                desc: '$0.50 CAC against $150 LTV. A clear, modeled path to profitability within 18 months of Series A.',
              },
            ].map((item, idx) => (
              <div key={item.title} className="flex gap-6">
                <p className="text-sm font-bold text-handly-600 pt-1">{String(idx + 1).padStart(2, '0')}</p>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2.5">{item.title}</h3>
                  <p className="text-[15px] text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rounds */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold text-handly-600 uppercase tracking-widest mb-4">Funding</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              Where the capital goes.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                round: 'Series A',
                amount: '$2M',
                status: 'Raising now',
                use: [
                  'Product & mobile app development',
                  'User acquisition in core markets',
                  'Operations & support scaling',
                  'Expansion to 3 new countries',
                ],
              },
              {
                round: 'Series B',
                amount: '$10M',
                status: 'Projected 2027',
                use: [
                  'Enterprise platform for organizations',
                  'Pan-African regional expansion',
                  'AI-powered matching engine',
                  'Strategic partnerships & integrations',
                ],
              },
            ].map((r) => (
              <div key={r.round} className="rounded-3xl border border-gray-900/10 p-10">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <p className="text-sm font-semibold text-handly-600 uppercase tracking-widest mb-2">{r.round}</p>
                    <p className="text-5xl font-bold text-gray-900 tracking-tight">{r.amount}</p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-handly-50 text-handly-700">
                    {r.status}
                  </span>
                </div>
                <ul className="space-y-3.5">
                  {r.use.map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] text-gray-600">
                      <span className="text-handly-600 font-bold shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
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
                Let's talk.
              </h2>
              <p className="text-lg text-handly-100/80 mb-10">
                We're raising our Series A. Request the deck or schedule a call with the founders.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-gray-900 rounded-full font-semibold hover:bg-handly-50 transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-black/10"
              >
                Schedule a Call
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
