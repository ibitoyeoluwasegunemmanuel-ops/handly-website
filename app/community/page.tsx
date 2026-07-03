import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, MessageCircle, Send, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Community – HANDLY',
  description: 'Join thousands of workers, customers, and businesses connecting across Africa.',
};

export default function CommunityPage() {
  const channels = [
    {
      icon: <MessageCircle size={20} className="text-handly-600" />,
      title: 'WhatsApp Community',
      desc: 'Daily tips, job alerts, and direct support from the HANDLY team.',
      href: process.env.NEXT_PUBLIC_WHATSAPP_LINK || '#',
      cta: 'Join on WhatsApp',
    },
    {
      icon: <Send size={20} className="text-handly-600" />,
      title: 'Telegram Channel',
      desc: 'Product updates, announcements, and community highlights.',
      href: process.env.NEXT_PUBLIC_TELEGRAM_LINK || '#',
      cta: 'Join on Telegram',
    },
    {
      icon: <Users size={20} className="text-handly-600" />,
      title: 'Worker Meetups',
      desc: 'In-person events in Lagos, Abuja, and Port Harcourt. Learn, network, grow.',
      href: '/contact',
      cta: 'Get notified',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-40 pb-20 lg:pt-48">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-handly-600 uppercase tracking-widest mb-6">Community</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-8">
              You're not building alone.
            </h1>
            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl">
              Join thousands of workers, customers, and business owners sharing knowledge, opportunities, and wins across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {channels.map((c) => (
              <a
                key={c.title}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group rounded-3xl border border-gray-900/10 p-9 hover:border-handly-300 hover:bg-handly-50/30 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-2xl bg-handly-50 flex items-center justify-center mb-6 group-hover:bg-white transition-colors">
                  {c.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2.5">{c.title}</h3>
                <p className="text-[15px] text-gray-500 leading-relaxed mb-6">{c.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-handly-600">
                  {c.cta}
                  <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-gray-900/5 bg-gray-50/70">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { value: '50K+', label: 'Community members' },
              { value: '10+', label: 'States across Nigeria' },
              { value: '200+', label: 'Cities active' },
              { value: 'Weekly', label: 'Events & workshops' },
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
                Grow with us.
              </h2>
              <p className="text-lg text-handly-100/80 mb-10">
                Download the app and become part of Africa's fastest-growing work community.
              </p>
              <a
                href="https://apps.apple.com/us/app/handly-app/id6778122913"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-gray-900 rounded-full font-semibold hover:bg-handly-50 transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-black/10"
              >
                Download the App
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
