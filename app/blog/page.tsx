import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog – HANDLY',
  description: 'Guides, insights, and stories from Africa\'s marketplace for work.',
};

const posts = [
  {
    id: 1,
    title: '10 Tips to Get More Clients as a Freelancer',
    excerpt: 'Proven strategies to attract more high-quality clients to your freelance business.',
    category: 'Tips',
    date: 'June 15, 2026',
    readTime: '5 min',
  },
  {
    id: 2,
    title: 'How to Price Your Freelance Services',
    excerpt: 'How to value your skills and set competitive rates that reflect your expertise.',
    category: 'Guides',
    date: 'June 10, 2026',
    readTime: '7 min',
  },
  {
    id: 3,
    title: 'The Future of Remote Work in Africa',
    excerpt: 'How remote work is transforming economies and opportunities across the continent.',
    category: 'Insights',
    date: 'June 5, 2026',
    readTime: '8 min',
  },
  {
    id: 4,
    title: 'Building a Strong Portfolio on HANDLY',
    excerpt: 'Maximize your visibility with a portfolio that showcases your best work.',
    category: 'Guides',
    date: 'May 30, 2026',
    readTime: '6 min',
  },
  {
    id: 5,
    title: 'Success Stories: From Zero to Hero',
    excerpt: 'Real stories from workers who built successful careers using HANDLY.',
    category: 'Success',
    date: 'May 25, 2026',
    readTime: '10 min',
  },
  {
    id: 6,
    title: 'Why Businesses Choose HANDLY for Hiring',
    excerpt: 'Why companies are switching to HANDLY for their service and talent needs.',
    category: 'Business',
    date: 'May 20, 2026',
    readTime: '5 min',
  },
];

export default function BlogPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-40 pb-16 lg:pt-48">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-handly-600 uppercase tracking-widest mb-6">Blog</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-8">
              Ideas for people who get things done.
            </h1>
            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl">
              Guides, insights, and stories from Africa's marketplace for work.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group rounded-3xl border border-gray-900/10 p-9 hover:border-handly-300 hover:bg-handly-50/30 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-handly-50 text-handly-700">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.readTime} read</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 leading-snug mb-3 group-hover:text-handly-700 transition-colors">
                  {post.title}
                </h2>
                <p className="text-[15px] text-gray-500 leading-relaxed flex-1">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-8">
                  <span className="text-sm text-gray-400">{post.date}</span>
                  <ArrowUpRight
                    size={18}
                    className="text-gray-300 group-hover:text-handly-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
