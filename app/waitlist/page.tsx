import { Metadata } from 'next';
import WaitlistForm from '@/components/WaitlistForm';

export const metadata: Metadata = {
  title: 'Join HANDLY Waitlist - Africa\'s Freelancer Platform',
  description: 'Join the HANDLY waitlist and be among the first to get access when we launch.',
};

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side - Info */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Join the Revolution</h1>
            <p className="text-lg text-gray-700 mb-8">
              Be among the first to experience HANDLY, Africa's most innovative freelancer platform.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: '✨',
                  title: 'Early Bird Benefits',
                  description: 'Early members get special perks and exclusive features'
                },
                {
                  icon: '🎯',
                  title: 'Personalized Support',
                  description: 'Get help from our team as we launch and grow'
                },
                {
                  icon: '🌍',
                  title: 'Pan-African Opportunity',
                  description: 'Connect with clients and freelancers across Africa'
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-2xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Early Access</h2>
            <WaitlistForm />
          </div>
        </div>
      </div>
    </div>
  );
}
