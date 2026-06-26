import { Metadata } from 'next';
import { Mail } from 'lucide-react';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'Careers at HANDLY - Join Our Team',
  description: 'Join the HANDLY team and help us empower African freelancers.',
};

export default function CareersPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #158F72 0%, #0E6B55 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Join Our Team</h1>
          <p className="text-xl text-white text-opacity-90 leading-relaxed max-w-3xl mx-auto">
            Help us build the future of African freelancing. We're looking for talented individuals who are passionate about our mission.
          </p>
        </div>
      </section>

      {/* Open Positions */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900">Open Positions</h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          {[
            {
              title: 'Senior Backend Engineer',
              department: 'Engineering',
              location: 'Remote (Africa-based)',
            },
            {
              title: 'Mobile Developer (React Native)',
              department: 'Engineering',
              location: 'Remote (Africa-based)',
            },
            {
              title: 'Product Manager',
              department: 'Product',
              location: 'Remote (Africa-based)',
            },
            {
              title: 'Community Manager',
              department: 'Community',
              location: 'Remote (Africa-based)',
            },
            {
              title: 'Marketing Manager',
              department: 'Marketing',
              location: 'Remote (Africa-based)',
            },
          ].map((job, index) => (
            <Card key={index} variant="default" hover="lift">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                  <div className="flex gap-4 text-gray-600 text-sm">
                    <span>{job.department}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                  </div>
                </div>
                <Button variant="outline" size="md">
                  Apply Now
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-2xl mx-auto">
          <Card variant="default" hover="none">
            <p className="text-lg text-gray-700 mb-6">
              Don't see a role that fits? We're always looking for talented people.
            </p>
            <Button href="mailto:careers@handly.africa" variant="primary" size="lg" icon={<Mail size={20} />} iconPosition="right">
              Send Your Resume
            </Button>
          </Card>
        </div>
      </Section>

      {/* Culture & Values */}
      <Section light>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900">Why Work at HANDLY?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: '🚀',
              title: 'Impact',
              description: 'Build products that empower millions of Africans to achieve their goals.',
            },
            {
              icon: '🌍',
              title: 'Growth',
              description: 'Work with a team of talented individuals and grow your skills.',
            },
            {
              icon: '🤝',
              title: 'Community',
              description: 'Be part of a supportive team that values collaboration and innovation.',
            },
            {
              icon: '💪',
              title: 'Flexibility',
              description: 'Work remotely and enjoy a flexible schedule that works for you.',
            },
            {
              icon: '🎓',
              title: 'Learning',
              description: 'Continuous learning opportunities and professional development budget.',
            },
            {
              icon: '⭐',
              title: 'Equity',
              description: 'Top performers have the opportunity to earn equity in the company.',
            },
          ].map((item, index) => (
            <Card key={index} variant="default" hover="lift">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
