import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers at HANDLY - Join Our Team',
  description: 'Join the HANDLY team and help us empower African freelancers.',
};

export default function CareersPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Join Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help us build the future of African freelancing. We're looking for talented individuals who are passionate about our mission.
          </p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Open Positions</h2>
          <div className="space-y-4">
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
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex gap-4 text-gray-600">
                      <span>{job.department}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <button className="mt-4 md:mt-0 px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-blue-50 rounded-lg text-center">
            <p className="text-lg text-gray-700">
              Don't see a role that fits? We're always looking for talented people.
            </p>
            <a
              href="mailto:careers@handly.africa"
              className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Send Your Resume
            </a>
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Work at HANDLY?</h2>
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
              <div key={index} className="bg-white p-8 rounded-lg border border-gray-200">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
