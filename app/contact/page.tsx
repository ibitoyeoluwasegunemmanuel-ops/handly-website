import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - HANDLY',
  description: 'Get in touch with the HANDLY team.',
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-handly-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600">We'd love to hear from you</p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: '📧',
                title: 'Email',
                description: 'hello@handly.africa',
                action: 'mailto:hello@handly.africa',
              },
              {
                icon: '💬',
                title: 'WhatsApp',
                description: 'Chat with us on WhatsApp',
                action: process.env.NEXT_PUBLIC_WHATSAPP_LINK || '#',
              },
              {
                icon: '🌐',
                title: 'Twitter',
                description: '@handlyafrica',
                action: process.env.NEXT_PUBLIC_TWITTER_LINK || '#',
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.action}
                target={item.action.startsWith('mailto') ? undefined : '_blank'}
                rel={item.action.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-handly-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-handly-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-handly-500 focus:border-transparent"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-handly-500 focus:border-transparent resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-handly-600 text-white py-2 rounded-lg hover:bg-handly-700 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
