import { Metadata } from 'next';
import { Send } from 'lucide-react';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'Blog - HANDLY News & Tips',
  description: 'Read tips, guides, and insights for freelancers and businesses.',
};

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: '10 Tips to Get More Clients as a Freelancer',
      excerpt: 'Learn proven strategies to attract more high-quality clients to your freelance business.',
      category: 'Tips',
      date: 'June 15, 2024',
      readTime: '5 min',
    },
    {
      id: 2,
      title: 'How to Price Your Freelance Services',
      excerpt: 'Discover how to value your skills and set competitive rates that reflect your expertise.',
      category: 'Guides',
      date: 'June 10, 2024',
      readTime: '7 min',
    },
    {
      id: 3,
      title: 'The Future of Remote Work in Africa',
      excerpt: 'Explore how remote work is transforming economies and opportunities across Africa.',
      category: 'Insights',
      date: 'June 5, 2024',
      readTime: '8 min',
    },
    {
      id: 4,
      title: 'Building a Strong Portfolio on HANDLY',
      excerpt: 'Maximize your visibility with a portfolio that showcases your best work.',
      category: 'Guides',
      date: 'May 30, 2024',
      readTime: '6 min',
    },
    {
      id: 5,
      title: 'Success Stories: From Zero to Hero',
      excerpt: 'Real stories from freelancers who built successful careers using HANDLY.',
      category: 'Success',
      date: 'May 25, 2024',
      readTime: '10 min',
    },
    {
      id: 6,
      title: 'Why Businesses Choose HANDLY for Hiring',
      excerpt: 'Discover why companies are switching to HANDLY for their freelance needs.',
      category: 'Business',
      date: 'May 20, 2024',
      readTime: '5 min',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #158F72 0%, #0E6B55 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">HANDLY Blog</h1>
          <p className="text-xl text-white text-opacity-90 leading-relaxed max-w-3xl mx-auto">
            Tips, guides, and insights for freelancers and businesses
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <Card key={post.id} variant="default" hover="lift">
              <div className="flex gap-2 mb-4">
                <span className="text-xs font-semibold px-3 py-1 bg-handly-100 text-handly-700 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-gray-500">{post.readTime} read</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-handly-600 cursor-pointer transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-6">{post.excerpt}</p>
              <div className="flex justify-between items-center text-sm text-gray-500 pt-4 border-t border-gray-200">
                <span>{post.date}</span>
                <a href="#" className="text-handly-600 hover:text-handly-700 font-medium">
                  Read More →
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Newsletter CTA */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #158F72 0%, #0E6B55 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Stay Updated</h2>
          <p className="text-lg text-white text-opacity-90 mb-10">Get the latest tips and insights delivered to your inbox</p>
          <form className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-handly-300 focus:outline-none"
            />
            <Button
              type="submit"
              variant="primary"
              size="md"
              icon={<Send size={20} />}
              iconPosition="right"
              className="!bg-white !text-handly-600"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
