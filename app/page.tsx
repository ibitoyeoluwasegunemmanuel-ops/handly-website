import Link from 'next/link';
import { ArrowRight, Search, Star, Home as HomeIcon, Briefcase, User, MessageCircle, BadgeCheck } from 'lucide-react';

const APP_STORE_URL = 'https://apps.apple.com/us/app/handly-app/id6778122913';

function AppStoreButton({ dark = false }: { dark?: boolean }) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] ${
        dark
          ? 'bg-gray-900 text-white hover:bg-gray-800'
          : 'bg-white text-gray-900 hover:bg-handly-50 shadow-lg shadow-black/10'
      }`}
    >
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      Download on the App Store
    </a>
  );
}

function PhoneMockup() {
  return (
    <div className="relative">
      {/* Ambient glow */}
      <div className="absolute -inset-10 bg-handly-400/20 rounded-full blur-3xl" />

      <div className="relative w-[310px] rounded-[3rem] bg-gray-950 p-2.5 shadow-2xl shadow-black/40 ring-1 ring-white/20">
        <div className="rounded-[2.4rem] bg-gray-50 overflow-hidden">
          {/* Status bar */}
          <div className="flex items-center justify-between px-7 pt-4 pb-2">
            <span className="text-[13px] font-semibold text-gray-900">9:41</span>
            <div className="w-24 h-6 bg-gray-950 rounded-full" />
            <div className="flex items-center gap-1">
              <div className="w-4 h-2.5 rounded-[2px] bg-gray-900" />
              <div className="w-1 h-2.5 rounded-[2px] bg-gray-300" />
            </div>
          </div>

          {/* App header */}
          <div className="px-5 pt-3 pb-4 flex items-center justify-between">
            <div>
              <p className="text-[11px] text-gray-400 font-medium">Good morning 👋</p>
              <p className="text-[15px] font-bold text-gray-900">What do you need done?</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-handly-100 flex items-center justify-center">
              <span className="text-[12px] font-bold text-handly-700">AO</span>
            </div>
          </div>

          {/* Search */}
          <div className="px-5 pb-4">
            <div className="flex items-center gap-2.5 bg-white rounded-2xl px-4 py-3 shadow-sm border border-gray-100">
              <Search size={15} className="text-gray-400" />
              <span className="text-[13px] text-gray-400">Try &quot;fix my generator&quot;</span>
            </div>
          </div>

          {/* Category chips */}
          <div className="px-5 pb-4 flex gap-2">
            {['Plumbing', 'Cleaning', 'Repairs'].map((chip, i) => (
              <span
                key={chip}
                className={`text-[11px] font-semibold px-3.5 py-1.5 rounded-full ${
                  i === 0 ? 'bg-handly-600 text-white' : 'bg-white text-gray-600 border border-gray-200'
                }`}
              >
                {chip}
              </span>
            ))}
          </div>

          {/* Worker cards */}
          <div className="px-5 pb-3">
            <p className="text-[12px] font-bold text-gray-900 mb-2.5">Top rated near you</p>
            <div className="space-y-2.5">
              {[
                { initials: 'TA', name: 'Tunde Adeyemi', role: 'Electrician', rating: '4.9', price: '₦8,500' },
                { initials: 'AO', name: 'Amaka Obi', role: 'Cleaner', rating: '4.8', price: '₦6,000' },
              ].map((w) => (
                <div key={w.name} className="flex items-center gap-3 bg-white rounded-2xl p-3 shadow-sm border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-handly-50 flex items-center justify-center shrink-0">
                    <span className="text-[12px] font-bold text-handly-700">{w.initials}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1">
                      <p className="text-[13px] font-bold text-gray-900 truncate">{w.name}</p>
                      <BadgeCheck size={12} className="text-handly-500 shrink-0" />
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
                      <span>{w.role}</span>
                      <span className="flex items-center gap-0.5">
                        <Star size={9} className="fill-amber-400 text-amber-400" /> {w.rating}
                      </span>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-[12px] font-bold text-gray-900">{w.price}</p>
                    <p className="text-[10px] font-semibold text-handly-600">Book</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom nav */}
          <div className="flex items-center justify-around px-8 py-3.5 bg-white border-t border-gray-100">
            <HomeIcon size={18} className="text-handly-600" />
            <Search size={18} className="text-gray-300" />
            <Briefcase size={18} className="text-gray-300" />
            <MessageCircle size={18} className="text-gray-300" />
            <User size={18} className="text-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white">
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-handly-900">
        <div className="absolute inset-0 bg-gradient-to-br from-handly-800 via-handly-900 to-[#031a17]" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-handly-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob-float" />
        <div className="absolute -bottom-32 left-1/4 w-[400px] h-[400px] bg-teal-400 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob-float-slow" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-24 lg:pt-44 lg:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            {/* Left */}
            <div className="max-w-xl">
              <p className="animate-fade-up inline-flex items-center gap-2 text-sm font-semibold text-handly-200 mb-8">
                <span className="w-1.5 h-1.5 bg-handly-300 rounded-full" />
                Now live on the App Store
              </p>

              <h1 className="animate-fade-up animation-delay-100 text-5xl sm:text-6xl lg:text-[4.75rem] font-bold text-white leading-[1.04] tracking-tight mb-7">
                Trusted help,
                <br />
                one tap away.
              </h1>

              <p className="animate-fade-up animation-delay-200 text-lg sm:text-xl text-handly-100/80 leading-relaxed mb-10">
                Find verified workers near you or post a job and let professionals compete for your business.
              </p>

              <div className="animate-fade-up animation-delay-300 flex flex-col sm:flex-row gap-4 mb-16">
                <AppStoreButton />
                <Link
                  href="/customers"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-white border border-white/25 hover:bg-white/10 transition-all duration-300"
                >
                  Post a Job
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="animate-fade-up animation-delay-300 flex gap-14">
                <div>
                  <p className="text-3xl font-bold text-white tracking-tight">12</p>
                  <p className="text-sm text-handly-200/70 mt-1">Service categories</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white tracking-tight">2</p>
                  <p className="text-sm text-handly-200/70 mt-1">Ways to hire</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white tracking-tight">100%</p>
                  <p className="text-sm text-handly-200/70 mt-1">Verified workers</p>
                </div>
              </div>
            </div>

            {/* Right: phone */}
            <div className="hidden lg:flex justify-center">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ============ TRUST STRIP ============ */}
      <section className="border-b border-gray-900/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { value: 'Live', label: 'On the iOS App Store' },
              { value: '12', label: 'Service categories' },
              { value: '10+', label: 'States across Nigeria' },
              { value: '100%', label: 'Identity-verified workers' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold text-gray-900 tracking-tight">{stat.value}</p>
                <p className="text-[15px] text-gray-500 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold text-handly-600 uppercase tracking-widest mb-4">Services</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-5">
              Whatever you need, someone nearby does it well.
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              From quick home fixes to professional services — every category, verified.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: '🔧', label: 'Plumbing' },
              { icon: '⚡', label: 'Electrical' },
              { icon: '🧹', label: 'Cleaning' },
              { icon: '🛠️', label: 'Repairs' },
              { icon: '🎨', label: 'Painting' },
              { icon: '🪚', label: 'Carpentry' },
              { icon: '🚗', label: 'Driving' },
              { icon: '📦', label: 'Delivery' },
              { icon: '🌿', label: 'Gardening' },
              { icon: '🛡️', label: 'Security' },
              { icon: '🍳', label: 'Cooking' },
              { icon: '🧺', label: 'Laundry' },
            ].map((service) => (
              <div
                key={service.label}
                className="group rounded-3xl border border-gray-900/5 p-8 text-center hover:border-handly-200 hover:bg-handly-50/40 transition-all duration-300"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <p className="text-[15px] font-semibold text-gray-900">{service.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="py-28 bg-gray-50/70">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold text-handly-600 uppercase tracking-widest mb-4">How it works</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-5">
              Two ways to hire. Both effortless.
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Need someone now? Book instantly. Want to compare offers? Post a job and let workers come to you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="rounded-3xl bg-white border border-gray-900/10 p-10">
              <div className="inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-handly-50 text-handly-700 mb-6">
                ⚡ Book Now
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Instant assign</h3>
              <p className="text-[15px] text-gray-500 leading-relaxed">
                Pick a category, describe the task, and get matched with an available verified worker near you — right away.
              </p>
            </div>
            <div className="rounded-3xl bg-white border border-gray-900/10 p-10">
              <div className="inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-handly-50 text-handly-700 mb-6">
                🏪 Post a Job
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Workers apply</h3>
              <p className="text-[15px] text-gray-500 leading-relaxed">
                Post your job with a budget and photos. Verified workers apply, you compare ratings and prices, and choose the best.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              { num: '01', title: 'Book or post', desc: 'Get matched instantly, or post a job with photos and your budget.' },
              { num: '02', title: 'Chat & agree', desc: 'Message workers in the app, compare ratings and prices, agree on terms.' },
              { num: '03', title: 'Done & rated', desc: 'Work gets completed, payment is handled, and both sides leave a rating.' },
            ].map((step) => (
              <div key={step.num}>
                <p className="text-sm font-bold text-handly-600 mb-5">{step.num}</p>
                <div className="h-px bg-gray-900/10 mb-7" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ APP PREVIEW (screenshot placeholders) ============ */}
      {/* Replace each placeholder by dropping real screenshots into public/screens/
          as home.png, book-now.png, post-a-job.png, worker-profile.png, wallet.png
          and swapping the placeholder divs for <Image> tags. */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold text-handly-600 uppercase tracking-widest mb-4">Inside the app</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              Everything happens in one app.
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { label: 'Home', desc: 'Browse categories & top-rated workers' },
              { label: 'Book Now', desc: 'Instant matching near you' },
              { label: 'Post a Job', desc: 'Photos, budget, offers' },
              { label: 'Worker Profile', desc: 'Ratings, reviews, portfolio' },
              { label: 'Wallet', desc: 'Earnings & fast withdrawals' },
            ].map((screen) => (
              <div key={screen.label}>
                <div className="aspect-[9/19] rounded-[1.75rem] bg-gray-950 p-1.5 shadow-xl shadow-gray-950/10">
                  <div className="h-full rounded-[1.4rem] bg-gradient-to-b from-handly-50 to-gray-100 flex flex-col items-center justify-center gap-3 px-4">
                    <div className="w-10 h-10 rounded-2xl bg-handly-600 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">H</span>
                    </div>
                    <p className="text-[13px] font-bold text-gray-700 text-center">{screen.label}</p>
                    <p className="text-[11px] text-gray-400 text-center leading-snug">Screenshot coming soon</p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-gray-900 mt-4">{screen.label}</p>
                <p className="text-[13px] text-gray-500 mt-0.5">{screen.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY CUSTOMERS / WHY WORKERS ============ */}
      <section className="py-28 bg-gray-50/70">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Customers */}
            <div>
              <p className="text-sm font-semibold text-handly-600 uppercase tracking-widest mb-4">For customers</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-9">
                Why customers love HANDLY.
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  'Verified workers',
                  'Nearby professionals',
                  'Multiple offers per job',
                  'Compare prices upfront',
                  'Ratings & reviews',
                  'In-app chat',
                  'Photo uploads',
                  'Fast response',
                  'Secure experience',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[15px] text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-handly-100 text-handly-700 flex items-center justify-center text-[11px] font-bold shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/customers" className="inline-flex items-center gap-2 text-[15px] font-semibold text-handly-600 hover:text-handly-700 transition-colors mt-9">
                Learn more for customers <ArrowRight size={16} />
              </Link>
            </div>

            {/* Workers */}
            <div>
              <p className="text-sm font-semibold text-handly-600 uppercase tracking-widest mb-4">For workers</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-9">
                Why workers love HANDLY.
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  'More customers',
                  'Flexible schedule',
                  'Build your reputation',
                  'Wallet & fast payouts',
                  'More jobs nearby',
                  'Business growth tools',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[15px] text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-handly-100 text-handly-700 flex items-center justify-center text-[11px] font-bold shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/workers" className="inline-flex items-center gap-2 text-[15px] font-semibold text-handly-600 hover:text-handly-700 transition-colors mt-9">
                Learn more for workers <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PERFECT FOR BUSINESSES ============ */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-handly-600 uppercase tracking-widest mb-4">For businesses</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                Perfect for businesses.
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-9 max-w-lg">
                Source trusted workers quickly — technicians, electricians, cleaners, drivers, and maintenance staff, all verified and rated.
              </p>
              <Link
                href="/businesses"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-handly-600 text-white rounded-full font-semibold hover:bg-handly-700 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                HANDLY for Business
                <ArrowRight size={18} />
              </Link>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Hire technicians on demand',
                'Find electricians & cleaners',
                'Reliable drivers & delivery',
                'Maintenance workers',
                'Verified & rated staff',
                'Fast, repeatable sourcing',
              ].map((item) => (
                <li key={item} className="rounded-2xl border border-gray-900/10 px-6 py-5 text-[15px] font-medium text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-28 bg-gray-50/70">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold text-handly-600 uppercase tracking-widest mb-4">Testimonials</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              Loved by the people who use it.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: 'Found a qualified electrician in 30 minutes. He fixed the issue the same day. This is how it should work.',
                author: 'Chioma Okafor',
                role: 'Customer, Lagos',
                initials: 'CO',
              },
              {
                quote: 'HANDLY changed my business. I started with small jobs — now I have repeat customers every single week.',
                author: 'Chinedu Eze',
                role: 'Electrician, Abuja',
                initials: 'CE',
              },
              {
                quote: 'The verification gives me real confidence. Every person I’ve hired through HANDLY has been reliable.',
                author: 'Sarah Adebayo',
                role: 'Operations Manager, Port Harcourt',
                initials: 'SA',
              },
            ].map((t) => (
              <div key={t.author} className="bg-white rounded-3xl p-8 border border-gray-900/5 flex flex-col">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-[15px] text-gray-700 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 mt-8">
                  <div className="w-10 h-10 rounded-full bg-handly-50 flex items-center justify-center">
                    <span className="text-[12px] font-bold text-handly-700">{t.initials}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t.author}</p>
                    <p className="text-[13px] text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DOWNLOAD CTA ============ */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-handly-900 px-8 py-20 sm:px-16 sm:py-24 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-handly-800 via-handly-900 to-[#031a17]" />
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-handly-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30" />

            <div className="relative max-w-2xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
                Get the app. Get it done.
              </h2>
              <p className="text-lg text-handly-100/80 mb-10">
                Join customers and workers across Nigeria hiring and earning on HANDLY.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <AppStoreButton />
                <span
                  aria-disabled="true"
                  className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full font-semibold bg-white/10 text-white/50 cursor-not-allowed select-none border border-white/10"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                    <path d="M3 20.5V3.5c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.25-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31M6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" />
                  </svg>
                  Google Play — Coming Soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
