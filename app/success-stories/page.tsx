import { Metadata } from 'next';
import { ArrowRight, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Success Stories – HANDLY',
  description: 'Real people, real earnings, real growth. Stories from the HANDLY community.',
};

const stories = [
  {
    name: 'Chinedu Okafor',
    role: 'Master Electrician',
    location: 'Lagos, Nigeria',
    initials: 'CO',
    headline: '₦250K+/month',
    story: 'Started with 2 jobs a week. Now gets 15+ requests daily and runs a team of 5 electricians across Lagos.',
    quote: 'I went from struggling to find customers to having more work than I can handle.',
    stat: '500+ jobs · 4.9★',
  },
  {
    name: 'Amaka Obi',
    role: 'Professional Cleaner',
    location: 'Ibadan, Nigeria',
    initials: 'AO',
    headline: '₦180K+/month',
    story: 'Cleaned homes through word of mouth before HANDLY gave her steady bookings and payment security.',
    quote: 'The payment system is trustworthy, and clients communicate directly. That changed everything.',
    stat: '250+ jobs · 4.8★',
  },
  {
    name: 'James Adewale',
    role: 'Plumber & Handyman',
    location: 'Abuja, Nigeria',
    initials: 'JA',
    headline: '₦200K+/month',
    story: 'Used to take whatever came his way. Now cherry-picks premium jobs with a 95% on-time completion rate.',
    quote: 'HANDLY customers value quality. I charge fairly and they happily pay for reliability.',
    stat: '350+ jobs · 4.9★',
  },
  {
    name: 'Nkechi Okoro',
    role: 'Fashion Designer',
    location: 'Port Harcourt, Nigeria',
    initials: 'NO',
    headline: '₦220K+/month',
    story: 'Started with custom orders from friends. HANDLY connected her with wholesale buyers — now she supplies 3 boutiques.',
    quote: 'HANDLY opened doors I didn\'t know existed. From single orders to wholesale partnerships.',
    stat: '25+ active clients · 4.9★',
  },
  {
    name: 'Kelechi Nwosu',
    role: 'Restaurant Owner',
    location: 'Enugu, Nigeria',
    initials: 'KN',
    headline: '+50% revenue',
    story: 'Listed his restaurant for catering. Doubled revenue through corporate contracts discovered on the platform.',
    quote: 'HANDLY connected me with corporate clients I could never reach through traditional methods.',
    stat: '20+ catering orders/month · 4.8★',
  },
  {
    name: 'Grace Adetayo',
    role: 'Cook & Caterer',
    location: 'Ibadan, Nigeria',
    initials: 'GA',
    headline: '₦160K+/month',
    story: 'Left her corporate job after three months on HANDLY. More flexibility, more income, steady clients.',
    quote: 'I quit my job after 3 months on HANDLY. Now I earn more than my salary — on my own terms.',
    stat: '200+ jobs · 80% repeat clients',
  },
];

export default function SuccessStoriesPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-40 pb-16 lg:pt-48">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-handly-600 uppercase tracking-widest mb-6">Success stories</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-8">
              Real people. Real growth.
            </h1>
            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl">
              From first jobs to full teams — how workers and businesses across Nigeria are building on HANDLY.
            </p>
            <p className="text-sm text-gray-400 mt-6">
              Stories are illustrative of member journeys on the platform.
            </p>
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((s) => (
              <article key={s.name} className="rounded-3xl border border-gray-900/10 p-9 flex flex-col">
                <p className="text-3xl font-bold text-handly-600 tracking-tight mb-6">{s.headline}</p>
                <p className="text-[15px] text-gray-500 leading-relaxed mb-6">{s.story}</p>
                <p className="text-[15px] text-gray-700 leading-relaxed italic flex-1">&ldquo;{s.quote}&rdquo;</p>
                <div className="flex items-center gap-3 mt-8 pt-7 border-t border-gray-900/5">
                  <div className="w-10 h-10 rounded-full bg-handly-50 flex items-center justify-center shrink-0">
                    <span className="text-[12px] font-bold text-handly-700">{s.initials}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-900">{s.name}</p>
                    <p className="text-[13px] text-gray-500 truncate">{s.role} · {s.location}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-3">{s.stat}</p>
              </article>
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
                Your story starts here.
              </h2>
              <p className="text-lg text-handly-100/80 mb-10">
                Join thousands of workers and businesses growing on HANDLY.
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
