import { Metadata } from 'next';

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
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">HANDLY Blog</h1>
          <p className="text-xl text-gray-600">Tips, guides, and insights for freelancers and businesses</p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    <span className="text-xs font-semibold px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime} read</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{post.date}</span>
                    <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                      Read More →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-6 opacity-90">Get the latest tips and insights delivered to your inbox</p>
          <form className="flex gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
