import { Metadata } from 'next';
import Card from '@/components/Card';
import WaitlistForm from '@/components/WaitlistForm';

export const metadata: Metadata = {
  title: 'Join HANDLY Waitlist - Africa\'s Trusted Marketplace',
  description: 'Join the HANDLY waitlist and be among the first to connect with customers, workers, and businesses across Africa.',
};

export default function WaitlistPage() {
  return (
    <div className="relative min-h-screen overflow-hidden" style={{ background: 'linear-gradient(135deg, #158F72 0%, #0E6B55 100%)' }}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side - Info */}
          <div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Join the Marketplace Revolution</h1>
            <p className="text-lg text-white text-opacity-90 mb-8 leading-relaxed">
              Be among the first to experience HANDLY—Africa's operating system for services, workers, local businesses, and communities.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: '✨',
                  title: 'Exclusive Early Access',
                  description: 'Early members get special perks, priority support, and exclusive features'
                },
                {
                  icon: '🤝',
                  title: 'Personalized Onboarding',
                  description: 'Get dedicated support from our team as we launch and scale together'
                },
                {
                  icon: '🌍',
                  title: 'Pan-African Growth',
                  description: 'Connect with customers, workers, and businesses across Nigeria and beyond'
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-lg border border-white border-opacity-20">
                  <div className="text-2xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-white text-opacity-80 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <Card variant="default" hover="none">
            <h2 className="text-3xl font-black text-gray-900 mb-6">Get Early Access</h2>
            <WaitlistForm />
          </Card>
        </div>
      </div>
    </div>
  );
}
