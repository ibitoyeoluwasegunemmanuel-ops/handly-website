import { Metadata } from 'next';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers – HANDLY',
  description: 'Join the team building Africa\'s most trusted marketplace for work.',
};

const roles = [
  { title: 'Senior Backend Engineer', department: 'Engineering', location: 'Remote (Africa-based)' },
  { title: 'Mobile Developer (React Native)', department: 'Engineering', location: 'Remote (Africa-based)' },
  { title: 'Product Manager', department: 'Product', location: 'Remote (Africa-based)' },
  { title: 'Community Manager', department: 'Community', location: 'Remote (Africa-based)' },
  { title: 'Marketing Manager', department: 'Marketing', location: 'Remote (Africa-based)' },
];

const values = [
  { title: 'Real impact', desc: 'Your work directly helps thousands of people earn a living and get things done.' },
  { title: 'Remote-first', desc: 'Work from anywhere in Africa. We hire for talent, not location.' },
  { title: 'Ownership', desc: 'Small team, big scope. You\'ll own meaningful pieces of the product from day one.' },
];

export default function CareersPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-40 pb-20 lg:pt-48">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-handly-600 uppercase tracking-widest mb-6">Careers</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-8">
              Build the future of work in Africa.
            </h1>
            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl">
              We're a small, ambitious team solving a problem that matters for millions of people. Come do the best work of your career.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50/70">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {values.map((v, idx) => (
              <div key={v.title}>
                <p className="text-sm font-bold text-handly-600 mb-5">{String(idx + 1).padStart(2, '0')}</p>
                <div className="h-px bg-gray-900/10 mb-7" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-sm font-semibold text-handly-600 uppercase tracking-widest mb-4">Open roles</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              We're hiring.
            </h2>
          </div>

          <div className="divide-y divide-gray-900/5 border-y border-gray-900/5">
            {roles.map((job) => (
              <a
                key={job.title}
                href={`mailto:careers@handly.africa?subject=${encodeURIComponent(`Application: ${job.title}`)}`}
                className="group flex items-center justify-between gap-6 py-7 hover:px-4 transition-all duration-300 hover:bg-gray-50/70 rounded-xl"
              >
                <div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-handly-700 transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {job.department} · {job.location}
                  </p>
                </div>
                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-gray-300 group-hover:text-handly-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </a>
            ))}
          </div>

          <p className="text-[15px] text-gray-500 mt-10">
            Don't see a fit?{' '}
            <a href="mailto:careers@handly.africa" className="font-semibold text-handly-600 hover:text-handly-700">
              Send us your resume anyway
            </a>
            {' '}— we're always looking for exceptional people.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-handly-900 px-8 py-20 sm:px-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-handly-800 via-handly-900 to-[#031a17]" />
            <div className="relative max-w-2xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
                Do work that matters.
              </h2>
              <p className="text-lg text-handly-100/80 mb-10">
                Help 50,000+ people across Africa hire, earn, and grow.
              </p>
              <a
                href="mailto:careers@handly.africa"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-gray-900 rounded-full font-semibold hover:bg-handly-50 transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-black/10"
              >
                Apply Now
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
