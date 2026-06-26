import { Metadata } from 'next';
import Button from '@/components/Button';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About HANDLY - Our Mission & Vision',
  description: 'Learn about HANDLY\'s mission to transform work in Africa by connecting skilled professionals with opportunities.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-handly-700 via-handly-800 to-handly-900">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10" style={{ animationDelay: '-2s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-3xl">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter mb-8">
              Transforming Work<br />in Africa.
            </h1>
            <p className="text-2xl md:text-3xl text-white/80 leading-relaxed font-light max-w-2xl">
              We believe Africa's talent is world-class. We built HANDLY to connect that talent with opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-12">Our Story</h2>

          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p>
              HANDLY was born from a simple observation: Africa has incredible talent and unmet demand for services, but the connection between them is broken.
            </p>
            <p>
              We watched skilled workers struggle to find reliable customers. We watched customers unable to find trustworthy professionals. And we saw an opportunity to fix this.
            </p>
            <p>
              So we built HANDLY - a marketplace designed for Africa. Built on the understanding that trust is everything, that transparency matters, and that fair pricing benefits everyone.
            </p>
            <p>
              Today, 50K+ users trust HANDLY to connect them with opportunity. And we're just getting started.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                title: 'Trust First',
                desc: 'Verification isn\'t optional. Every user is verified. Real reviews. Real ratings. Real peace of mind.'
              },
              {
                title: 'Fair Always',
                desc: 'No hidden fees. No surprise charges. Transparent pricing. You know exactly what you\'re paying.'
              },
              {
                title: 'Africa Built',
                desc: 'Built for African context. Understanding local payment, trust, and communication challenges. For Africans, by Africans.'
              },
            ].map((value, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: 'Active Users', value: '50K+' },
              { label: 'Jobs Completed', value: '10K+' },
              { label: 'Countries', value: '15+' },
              { label: 'Success Rate', value: '95%' },
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold">{stat.label}</p>
                <p className="text-5xl font-black text-gray-900 mt-3">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-handly-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-black">Join Our Mission</h2>
          <p className="text-xl text-white/90">Help us transform how work happens in Africa</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="https://apps.apple.com/us/app/handly-app/id6778122913"
              variant="primary"
              size="lg"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
            >
              Download App
            </Button>
            <Button
              href="/careers"
              variant="outline"
              size="lg"
              className="!bg-white/10 !border-white/30 !text-white hover:!bg-white/20"
            >
              View Careers
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2026 HANDLY. All rights reserved.</p>
            <div className="flex gap-6 text-gray-400 mt-4 md:mt-0">
              <a href="/" className="hover:text-white">Home</a>
              <a href="/customers" className="hover:text-white">For Customers</a>
              <a href="/workers" className="hover:text-white">For Workers</a>
              <a href="/businesses" className="hover:text-white">For Businesses</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
