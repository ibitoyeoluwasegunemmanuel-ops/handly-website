import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Community - Join HANDLY\'s Community',
  description: 'Join our thriving community of workers, artisans, customers, and businesses across Africa.',
};

export default function CommunityPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-handly-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Join Our Community</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with workers, artisans, customers, and businesses across Africa. Share experiences, learn, and grow together.
          </p>
        </div>
      </section>

      {/* Community Channels */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Connect With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '💬',
                name: 'WhatsApp Group',
                description: 'Join our main community group for daily discussions',
                action: 'Join Group',
                link: process.env.NEXT_PUBLIC_WHATSAPP_LINK || '#',
              },
              {
                icon: '📱',
                name: 'Telegram',
                description: 'Get updates and share announcements',
                action: 'Join Channel',
                link: process.env.NEXT_PUBLIC_TELEGRAM_LINK || '#',
              },
              {
                icon: '🐦',
                name: 'Twitter',
                description: 'Follow us for news and updates',
                action: 'Follow Us',
                link: process.env.NEXT_PUBLIC_TWITTER_LINK || '#',
              },
              {
                icon: '💼',
                name: 'LinkedIn',
                description: 'Connect with us on LinkedIn',
                action: 'Connect',
                link: process.env.NEXT_PUBLIC_LINKEDIN_LINK || '#',
              },
            ].map((channel, index) => (
              <a
                key={index}
                href={channel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-4xl mb-4">{channel.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{channel.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{channel.description}</p>
                <span className="inline-block px-4 py-2 text-handly-600 border border-handly-600 rounded-lg hover:bg-handly-50 transition-colors font-medium text-sm">
                  {channel.action}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Community Benefits */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Community Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🤝',
                title: 'Network',
                description: 'Build relationships with thousands of workers, artisans, customers, and business owners',
              },
              {
                icon: '📚',
                title: 'Learn',
                description: 'Access exclusive content, tips, and strategies from successful members',
              },
              {
                icon: '🎁',
                title: 'Rewards',
                description: 'Earn badges, featured listings, and exclusive perks as an active member',
              },
              {
                icon: '💡',
                title: 'Share Knowledge',
                description: 'Help others by sharing your experience and expertise with the community',
              },
              {
                icon: '📣',
                title: 'Get Discovered',
                description: 'Showcase your work and get featured in community spotlights',
              },
              {
                icon: '🌟',
                title: 'Opportunities',
                description: 'Access exclusive job opportunities and partnerships',
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-gray-200">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Upcoming Events</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              {
                title: 'Virtual Meetup: Pricing Your Services',
                date: 'June 30, 2024 • 3:00 PM WAT',
                speaker: 'Chioma Okafor',
              },
              {
                title: 'Webinar: Building Your Freelance Brand',
                date: 'July 7, 2024 • 7:00 PM WAT',
                speaker: 'Tunde Ajayi',
              },
              {
                title: 'Q&A Session: Ask the HANDLY Team',
                date: 'July 14, 2024 • 4:00 PM WAT',
                speaker: 'HANDLY Team',
              },
            ].map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{event.date}</p>
                    <p className="text-gray-600 text-sm">Speaker: {event.speaker}</p>
                  </div>
                  <button className="mt-4 md:mt-0 px-6 py-2 bg-handly-600 text-white rounded-lg hover:bg-handly-700 transition-colors font-medium">
                    RSVP
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
