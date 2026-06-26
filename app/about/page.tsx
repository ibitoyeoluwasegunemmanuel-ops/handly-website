import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About HANDLY - Our Mission & Story',
  description: 'Learn about HANDLY\'s mission to empower African freelancers and businesses.',
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About HANDLY</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            We're building Africa's most trusted platform for connecting talented freelancers with opportunities. Our mission is to empower workers and help businesses scale without limits.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                HANDLY was born from a simple observation: Africa has incredible talent, but the systems connecting workers with opportunities are broken. We saw talented developers, designers, and entrepreneurs struggling to find good work, while businesses struggled to find the right people.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We started HANDLY to fix this. We're building a platform that celebrates African talent, makes hiring easier, and creates sustainable income opportunities for millions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, HANDLY is trusted by thousands of freelancers and businesses across Africa, and we're just getting started.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 h-96 rounded-lg flex items-center justify-center text-6xl">
              🚀
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🤝',
                title: 'Community First',
                description: 'We believe in building a supportive community where everyone can succeed together.',
              },
              {
                icon: '💎',
                title: 'Quality & Trust',
                description: 'We maintain the highest standards to ensure quality work and trustworthy partnerships.',
              },
              {
                icon: '🌟',
                title: 'Empowerment',
                description: 'We empower individuals to take control of their careers and earnings.',
              },
              {
                icon: '🔒',
                title: 'Security & Transparency',
                description: 'Clear communication and secure transactions are at the heart of everything we do.',
              },
              {
                icon: '🌍',
                title: 'African-First',
                description: 'We\'re built for Africa, with African needs, challenges, and opportunities in mind.',
              },
              {
                icon: '📈',
                title: 'Growth & Innovation',
                description: 'We continuously improve and innovate to help you and your business grow.',
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-gray-200 text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Team</h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            We're a diverse team of product builders, engineers, and entrepreneurs passionate about empowering African talent.
          </p>
          {/* Team members would go here - using placeholder for now */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-700 text-lg">We're actively hiring. Join our team!</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Become Part of Our Story?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/waitlist"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Join Waitlist
            </Link>
            <Link
              href="/careers"
              className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              View Careers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
