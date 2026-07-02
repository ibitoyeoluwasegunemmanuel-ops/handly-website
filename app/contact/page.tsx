import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { Mail, MessageCircle, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact – HANDLY',
  description: 'Get in touch with the HANDLY team. We respond within one business day.',
};

const channels = [
  {
    icon: <Mail size={20} className="text-handly-600" />,
    title: 'General',
    desc: 'Questions, feedback, anything else.',
    value: 'hello@handly.africa',
    href: 'mailto:hello@handly.africa',
  },
  {
    icon: <Briefcase size={20} className="text-handly-600" />,
    title: 'Partnerships & Investors',
    desc: 'Enterprise, press, and investment.',
    value: 'partners@handly.africa',
    href: 'mailto:partners@handly.africa',
  },
  {
    icon: <MessageCircle size={20} className="text-handly-600" />,
    title: 'Support',
    desc: 'Help with the app or an active job.',
    value: 'support@handly.africa',
    href: 'mailto:support@handly.africa',
  },
];

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="pt-40 pb-28 lg:pt-48">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left */}
            <div>
              <p className="text-sm font-semibold text-handly-600 uppercase tracking-widest mb-6">Contact</p>
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-8">
                Let's talk.
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed max-w-md mb-14">
                Whether you have a question, a partnership idea, or need help — we respond within one business day.
              </p>

              <div className="space-y-8">
                {channels.map((c) => (
                  <div key={c.title} className="flex gap-5">
                    <div className="w-11 h-11 rounded-2xl bg-handly-50 flex items-center justify-center shrink-0">
                      {c.icon}
                    </div>
                    <div>
                      <h3 className="text-[15px] font-bold text-gray-900">{c.title}</h3>
                      <p className="text-sm text-gray-500 mt-0.5 mb-1.5">{c.desc}</p>
                      <a href={c.href} className="text-sm font-semibold text-handly-600 hover:text-handly-700 transition-colors">
                        {c.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div>
              <div className="rounded-[2rem] border border-gray-900/10 p-8 sm:p-10">
                <h2 className="text-xl font-bold text-gray-900 mb-8">Send us a message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
