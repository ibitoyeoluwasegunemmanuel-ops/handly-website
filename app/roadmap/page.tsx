import { Metadata } from 'next';
import MilestonesTimeline from '@/components/MilestonesTimeline';

export const metadata: Metadata = {
  title: 'Roadmap - HANDLY | Product & Growth Plan',
  description: 'HANDLY\'s product roadmap and growth milestones from MVP launch to pan-African market leader.',
};

export default function RoadmapPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-handly-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Product Roadmap
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            From MVP to pan-African market leader. Our clear path to dominance with measurable milestones and projected metrics.
          </p>
        </div>
      </section>

      {/* Roadmap Content */}
      <MilestonesTimeline />

      {/* Key Themes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Strategic Themes</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Rapid Growth</h3>
              <p className="text-gray-600">
                45% month-over-month user growth through product excellence and viral networks
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Geographic Expansion</h3>
              <p className="text-gray-600">
                Scale from Nigeria to 10+ African countries with localized products
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise Focus</h3>
              <p className="text-gray-600">
                Build dedicated enterprise platform and SaaS products for organizations
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI & Automation</h3>
              <p className="text-gray-600">
                Use AI for intelligent matching, recommendations, and automated support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Roadmap */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Feature Roadmap</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Q4 2024 */}
            <div className="bg-white p-8 rounded-lg border-2 border-blue-200">
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
            </div>

            {/* Q1 2025 */}
            <div className="bg-white p-8 rounded-lg border-2 border-blue-300">
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
            </div>

            {/* 2025+ */}
            <div className="bg-white p-8 rounded-lg border-2 border-handly-200">
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
            </div>
          </div>
        </div>
      </section>

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
