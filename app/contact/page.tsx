import { Metadata } from 'next';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'Contact Us - HANDLY',
  description: 'Get in touch with the HANDLY team.',
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #158F72 0%, #0E6B55 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Contact Us</h1>
          <p className="text-xl text-white text-opacity-90 leading-relaxed max-w-3xl mx-auto">
            We'd love to hear from you. Get in touch and let's start a conversation.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <Section>
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
            >
              <Card variant="default" hover="lift">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <Card variant="default" hover="none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-handly-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-handly-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-handly-500 focus:border-transparent"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-handly-500 focus:border-transparent resize-none"
                  placeholder="Your message..."
                />
              </div>

              <Button type="submit" variant="primary" size="lg" fullWidth>
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </Section>
    </div>
  );
}
