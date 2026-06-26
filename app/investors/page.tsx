import { Metadata } from 'next';
import Button from '@/components/Button';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Investors - HANDLY | Funding & Growth Opportunities',
  description: 'Join us in transforming work across Africa. Explore investment opportunities with HANDLY, the fastest-growing marketplace for skilled professionals.',
};

export default function InvestorsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-handly-700 via-handly-800 to-handly-900">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10" style={{ animationDelay: '-2s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tighter mb-8">
              Africa's Marketplace for Talent
            </h1>
            <p className="text-2xl md:text-3xl text-white/80 leading-relaxed mb-12 font-light max-w-2xl">
              50K+ users. ₦480K/month revenue. Growing 45% month-over-month. This is a $100B opportunity.
            </p>
            <Button
              href="#contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
            >
              Schedule a Meeting
            </Button>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: 'Active Users', value: '50K+', context: 'year-over-year growth' },
              { label: 'Monthly Revenue', value: '₦480K', context: '45% month-over-month' },
              { label: 'Success Rate', value: '95%', context: 'customer satisfaction' },
              { label: 'Countries', value: '15+', context: 'pan-African presence' },
            ].map((metric, idx) => (
              <div key={idx}>
                <p className="text-5xl font-black text-handly-700 mb-3">{metric.value}</p>
                <p className="font-semibold text-gray-900 mb-2">{metric.label}</p>
                <p className="text-sm text-gray-600">{metric.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-12">The Opportunity</h2>

            <div className="space-y-12">
              <div>
                <p className="text-sm uppercase tracking-widest font-semibold text-gray-600 mb-3">Total Addressable Market</p>
                <p className="text-5xl font-black text-gray-900">$100B</p>
                <p className="text-lg text-gray-600 mt-4">Services economy across Africa growing at 15%+ annually</p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-widest font-semibold text-gray-600 mb-3">Serviceable Market</p>
                <p className="text-5xl font-black text-gray-900">$5B</p>
                <p className="text-lg text-gray-600 mt-4">Platform-enabled services in our target geographies and verticals</p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-widest font-semibold text-gray-600 mb-3">Serviceable Obtainable Market (1% target)</p>
                <p className="text-5xl font-black text-gray-900">$50M</p>
                <p className="text-lg text-gray-600 mt-4">Conservative 5-year revenue target at 1% market penetration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why HANDLY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-16">Why HANDLY</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[
              {
                title: 'First-Mover Advantage',
                desc: 'No mature competitor in Africa doing this at scale. We\'re building the standard.'
              },
              {
                title: 'Network Effects',
                desc: 'More workers attract more customers. More customers attract more workers. Exponential growth.'
              },
              {
                title: 'Built for Africa',
                desc: 'Designed for emerging markets. Local payment methods, trust-first approach, African team.'
              },
              {
                title: 'Unit Economics',
                desc: '$0.50 CAC, $150 LTV, 300:1 ratio. Profitable at scale. Clear path to profitability in 18 months.'
              },
            ].map((item, idx) => (
              <div key={idx} className="space-y-4 border-l-4 border-handly-600 pl-6">
                <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Terms */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-16">Investment Opportunities</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[
              {
                title: 'Series A',
                amount: '$2M',
                use: [
                  'Product development & mobile app improvements',
                  'Sales & marketing (user acquisition)',
                  'Operations & customer support scaling',
                  'Geographic expansion (3+ new countries)'
                ]
              },
              {
                title: 'Series B',
                amount: '$10M',
                use: [
                  'Enterprise SaaS platform for organizations',
                  'Regional expansion (pan-African scale)',
                  'AI-powered matching & recommendation engine',
                  'Strategic partnerships & integrations'
                ]
              },
            ].map((round, idx) => (
              <div key={idx} className="space-y-8 border-t-4 border-handly-600 pt-8">
                <div>
                  <p className="text-sm uppercase tracking-widest font-semibold text-handly-700 mb-2">Funding Round</p>
                  <h3 className="text-4xl font-black text-gray-900">{round.title}</h3>
                  <p className="text-3xl font-black text-gray-900 mt-2">{round.amount}</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest font-semibold text-gray-600 mb-4">Use of Funds</p>
                  <ul className="space-y-3">
                    {round.use.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-handly-600 font-bold">→</span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-handly-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8" id="contact">
          <h2 className="text-5xl md:text-6xl font-black">Let's Build the Future Together</h2>
          <p className="text-xl text-white/90">Join us in transforming how work happens across Africa</p>
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            icon={<ArrowRight size={20} />}
            iconPosition="right"
            className="mx-auto"
          >
            Schedule a Call
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
              <a href="/about" className="hover:text-white">About</a>
              <a href="/company" className="hover:text-white">Company</a>
              <a href="/traction" className="hover:text-white">Traction</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
