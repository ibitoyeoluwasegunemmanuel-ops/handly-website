import { Metadata } from 'next';
import WaitlistForm from '@/components/WaitlistForm';
import { Sparkles, Handshake, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Join the Waitlist – HANDLY',
  description: 'Be among the first to connect with customers, workers, and businesses across Africa.',
};

const perks = [
  {
    icon: <Sparkles size={20} className="text-handly-600" />,
    title: 'Exclusive early access',
    desc: 'Early members get priority support and exclusive launch perks.',
  },
  {
    icon: <Handshake size={20} className="text-handly-600" />,
    title: 'Personalized onboarding',
    desc: 'Dedicated help from our team as we launch and scale together.',
  },
  {
    icon: <Globe size={20} className="text-handly-600" />,
    title: 'Pan-African network',
    desc: 'Connect with customers and workers across Nigeria and beyond.',
  },
];

export default function WaitlistPage() {
  return (
    <div className="bg-white">
      <section className="pt-40 pb-28 lg:pt-48">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Left */}
            <div>
              <p className="text-sm font-semibold text-handly-600 uppercase tracking-widest mb-6">Waitlist</p>
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-8">
                Be first in line.
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed max-w-md mb-14">
                Join the waitlist and be among the first to hire, earn, and grow on Africa's most trusted marketplace.
              </p>

              <div className="space-y-8">
                {perks.map((p) => (
                  <div key={p.title} className="flex gap-5">
                    <div className="w-11 h-11 rounded-2xl bg-handly-50 flex items-center justify-center shrink-0">
                      {p.icon}
                    </div>
                    <div>
                      <h3 className="text-[15px] font-bold text-gray-900">{p.title}</h3>
                      <p className="text-sm text-gray-500 mt-0.5">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div className="rounded-[2rem] border border-gray-900/10 p-8 sm:p-10">
              <h2 className="text-xl font-bold text-gray-900 mb-8">Get early access</h2>
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
