import { Metadata } from 'next';
import Card from '@/components/Card';
import Section from '@/components/Section';
import MilestonesTimeline from '@/components/MilestonesTimeline';

export const metadata: Metadata = {
  title: 'Roadmap - HANDLY | Product & Growth Plan',
  description: 'HANDLY\'s product roadmap and growth milestones from MVP launch to pan-African market leader.',
};

export default function RoadmapPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #158F72 0%, #0E6B55 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Our Product Roadmap
          </h1>
          <p className="text-xl text-white text-opacity-90 leading-relaxed">
            From MVP to pan-African market leader. Our clear path to dominance with measurable milestones and projected metrics.
          </p>
        </div>
      </section>

      {/* Roadmap Content */}
      <MilestonesTimeline />

      {/* Key Themes */}
      <Section>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-handly-100 text-handly-700 rounded-full text-sm font-semibold mb-4">Strategy</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Strategic Themes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: '🚀',
              title: 'Rapid Growth',
              desc: '45% month-over-month user growth through product excellence and viral networks',
            },
            {
              icon: '🌍',
              title: 'Geographic Expansion',
              desc: 'Scale from Nigeria to 10+ African countries with localized products',
            },
            {
              icon: '🏢',
              title: 'Enterprise Focus',
              desc: 'Build dedicated enterprise platform and SaaS products for organizations',
            },
            {
              icon: '🤖',
              title: 'AI & Automation',
              desc: 'Use AI for intelligent matching, recommendations, and automated support',
            },
          ].map((theme, i) => (
            <Card key={i} variant="default" hover="lift">
              <div className="text-4xl mb-4 text-center">{theme.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{theme.title}</h3>
              <p className="text-gray-600 text-center">{theme.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Feature Roadmap */}
      <Section light>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-handly-100 text-handly-700 rounded-full text-sm font-semibold mb-4">Timeline</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Feature Roadmap</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Q4 2024 */}
          <Card variant="default" hover="lift">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-2xl">📅</span>
                Q4 2024
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Core Platform</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Advanced search & filters</li>
                    <li>• Worker verification badges</li>
                    <li>• Scheduled bookings</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Enterprise</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Bulk workforce management</li>
                    <li>• Custom contract templates</li>
                    <li>• API access</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Analytics</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Performance dashboards</li>
                    <li>• Detailed reporting</li>
                    <li>• Export capabilities</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Q1 2025 */}
            <Card variant="default" hover="lift">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-2xl">📅</span>
                Q1 2025
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Geographic Expansion</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Launch in Ghana & Kenya</li>
                    <li>• Local payment methods</li>
                    <li>• Language localization</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">AI Features</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Smart recommendations</li>
                    <li>• Automated matching</li>
                    <li>• Pricing suggestions</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Payments</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Multi-currency support</li>
                    <li>• Escrow system</li>
                    <li>• Instant payouts</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* 2025+ */}
            <Card variant="default" hover="lift">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                2025+
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Advanced AI</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Skill prediction</li>
                    <li>• Demand forecasting</li>
                    <li>• Dynamic pricing</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Mini-Apps</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• In-app services</li>
                    <li>• Partner integrations</li>
                    <li>• Ecosystem expansion</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Global Expansion</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Cross-border services</li>
                    <li>• Global marketplace</li>
                    <li>• 10+ countries</li>
                  </ul>
                </div>
              </div>
          </Card>
        </div>
      </Section>

      {/* Success Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Success Metrics</h2>

          <div className="bg-gradient-to-r from-handly-50 to-handly-100 p-8 rounded-lg border border-handly-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div>
                <p className="text-gray-600 text-sm mb-1">Response Time</p>
                <p className="text-2xl font-bold text-gray-900">&lt;30s</p>
                <p className="text-xs text-gray-600">Interpreter assignment</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">Acceptance Rate</p>
                <p className="text-2xl font-bold text-handly-600">&gt;80%</p>
                <p className="text-xs text-gray-600">Of offered calls</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">Customer Rating</p>
                <p className="text-2xl font-bold text-gray-900">4.5+/5</p>
                <p className="text-xs text-gray-600">Average satisfaction</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">Worker Earnings</p>
                <p className="text-2xl font-bold text-gray-900">&gt;$50</p>
                <p className="text-xs text-gray-600">Per week target</p>
              </div>
            </div>

            <p className="text-gray-700">
              We measure success by the lives we change. Every metric focuses on creating real value for workers, customers, and the broader ecosystem.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
