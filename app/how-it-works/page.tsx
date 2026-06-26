import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import Card from '@/components/Card';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'How HANDLY Works - Step-by-Step Guide',
  description: 'Learn how to get started with HANDLY as a customer, worker, or business.',
};

export default function HowItWorksPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #158F72 0%, #0E6B55 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">How It Works</h1>
          <p className="text-xl text-white text-opacity-90 leading-relaxed max-w-3xl mx-auto">
            Whether you're looking to hire talent or find your next opportunity, HANDLY makes it simple.
          </p>
        </div>
      </section>

      {/* Tabs for different user types */}
      <Section>
        <div className="space-y-20">
          {/* For Customers */}
          <div>
            <span className="inline-block px-4 py-2 bg-handly-100 text-handly-700 rounded-full text-sm font-semibold mb-4">Customers & Businesses</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">For Customers & Businesses</h2>
              <div className="space-y-8">
                {[
                  {
                    step: 1,
                    title: 'Post Your Job',
                    description: 'Tell us what you need. Describe your project, timeline, and budget. Be as detailed as possible to attract the right freelancers.',
                    icon: '📝',
                  },
                  {
                    step: 2,
                    title: 'Review Proposals',
                    description: 'Qualified freelancers will submit proposals. Review their experience, portfolios, and previous work. Check ratings and reviews from other clients.',
                    icon: '👀',
                  },
                  {
                    step: 3,
                    title: 'Hire & Communicate',
                    description: 'Hire the freelancer you love. Use our built-in messaging to discuss details, share files, and track progress.',
                    icon: '🤝',
                  },
                  {
                    step: 4,
                    title: 'Payment & Milestone',
                    description: 'Set milestones and fund them with HANDLY. Money is held in escrow until you approve each milestone.',
                    icon: '💰',
                  },
                  {
                    step: 5,
                    title: 'Review & Rate',
                    description: 'Once the project is complete, rate and review the freelancer. Leave feedback to help the community.',
                    icon: '⭐',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-8 items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-handly-100 text-2xl">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                        Step {item.step}: {item.title}
                      </h3>
                      <p className="text-gray-600 text-lg">{item.description}</p>
                    </div>
                    {index < 4 && (
                      <div className="hidden md:flex items-center text-handly-600 text-2xl">
                        <ArrowDown />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          {/* For Workers & Service Providers */}
          <div className="border-t-2 pt-20">
            <span className="inline-block px-4 py-2 bg-handly-100 text-handly-700 rounded-full text-sm font-semibold mb-4">Workers & Artisans</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">For Workers, Artisans & Service Providers</h2>
              <div className="space-y-8">
                {[
                  {
                    step: 1,
                    title: 'Create Your Profile',
                    description: 'Sign up and complete your profile. Add your skills, experience, portfolio, and rates. This is your digital resume.',
                    icon: '👤',
                  },
                  {
                    step: 2,
                    title: 'Build Your Portfolio',
                    description: 'Showcase your best work. Upload samples, case studies, and past projects. Clients want to see what you can do.',
                    icon: '🎨',
                  },
                  {
                    step: 3,
                    title: 'Browse & Apply',
                    description: 'Find jobs that match your skills and interests. Read the project details and submit a custom proposal.',
                    icon: '🔍',
                  },
                  {
                    step: 4,
                    title: 'Get Hired & Start Working',
                    description: 'When a client hires you, start collaborating. Use our tools to share files, communicate, and stay on track.',
                    icon: '🚀',
                  },
                  {
                    step: 5,
                    title: 'Get Paid & Build Reputation',
                    description: 'Complete the work, get paid securely. Every successful project builds your reputation and unlocks new opportunities.',
                    icon: '🏆',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-8 items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-handly-100 text-2xl">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                        Step {item.step}: {item.title}
                      </h3>
                      <p className="text-gray-600 text-lg">{item.description}</p>
                    </div>
                    {index < 4 && (
                      <div className="hidden md:flex items-center text-handly-600 text-2xl">
                        <ArrowDown />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
      </Section>

      {/* Safety & Security */}
      <Section light>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-handly-100 text-handly-700 rounded-full text-sm font-semibold mb-4">Security</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Safety & Security</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: '🔒',
              title: 'Secure Payments',
              description: 'All payments are held in escrow until work is verified. Safe for both freelancers and clients.',
            },
            {
              icon: '⭐',
              title: 'Verified Profiles',
              description: 'All users are verified and reviewed. See ratings from past clients and projects.',
            },
            {
              icon: '🛡️',
              title: 'Dispute Resolution',
              description: 'Our team helps resolve disputes fairly. We protect both parties and ensure quality work.',
            },
          ].map((item, index) => (
            <Card key={index} variant="default" hover="lift">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #158F72 0%, #0E6B55 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white text-opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of customers, workers, and businesses on HANDLY
          </p>
          <Link href="/waitlist" className="inline-block">
            <button className="px-10 py-4 bg-white text-handly-600 rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-lg hover:bg-gray-50">
              Join Waitlist Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
