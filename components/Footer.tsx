import Link from 'next/link';
import { Share2, X, Mail, Send } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="font-bold text-lg text-gray-900">HANDLY</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Africa's premier talent marketplace connecting exceptional freelancers with visionary businesses.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={process.env.NEXT_PUBLIC_TWITTER_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-all"
                aria-label="Twitter"
              >
                <X size={18} />
              </a>
              <a
                href={process.env.NEXT_PUBLIC_LINKEDIN_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-all"
                aria-label="LinkedIn"
              >
                <Share2 size={18} />
              </a>
              <a
                href={`mailto:hello@handly.africa`}
                className="p-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-all"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href={process.env.NEXT_PUBLIC_TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-all"
                aria-label="Telegram"
              >
                <Send size={18} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/how-it-works" className="text-gray-600 hover:text-blue-600 transition font-medium">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition font-medium">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-600 hover:text-blue-600 transition font-medium">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/dashboard/investor" className="text-gray-600 hover:text-blue-600 transition font-medium">
                  Investor Metrics
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 transition font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-blue-600 transition font-medium">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition font-medium">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-blue-600 transition font-medium">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Community</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/community" className="text-gray-600 hover:text-blue-600 transition font-medium">
                  Join Community
                </Link>
              </li>
              <li>
                <a
                  href={process.env.NEXT_PUBLIC_WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition font-medium"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={process.env.NEXT_PUBLIC_TELEGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition font-medium"
                >
                  Telegram
                </a>
              </li>
              <li>
                <Link href="/waitlist" className="text-gray-600 hover:text-blue-600 transition font-medium">
                  Join Waitlist
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-600">
            <div>
              <p>&copy; {currentYear} HANDLY. All rights reserved.</p>
            </div>
            <div className="flex gap-6 justify-center">
              <Link href="#" className="hover:text-blue-600 transition font-medium">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-blue-600 transition font-medium">
                Terms of Service
              </Link>
            </div>
            <div className="text-right">
              <p>Built by Africans, for Africa 🌍</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
