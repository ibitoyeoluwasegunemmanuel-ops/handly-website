import Link from 'next/link';

const columns = [
  {
    title: 'Product',
    links: [
      { href: '/customers', label: 'For Customers' },
      { href: '/workers', label: 'For Workers' },
      { href: '/businesses', label: 'For Businesses' },
      { href: '/how-it-works', label: 'How It Works' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/careers', label: 'Careers' },
      { href: '/investors', label: 'Investors' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/blog', label: 'Blog' },
      { href: '/success-stories', label: 'Success Stories' },
      { href: '/community', label: 'Community' },
      { href: '/faq', label: 'FAQ' },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-900/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-14 mb-20">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-handly-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-base">H</span>
              </div>
              <span className="font-bold text-lg tracking-tight text-gray-900">HANDLY</span>
            </Link>
            <p className="text-[15px] text-gray-500 leading-relaxed max-w-xs mb-8">
              The trusted marketplace connecting customers, skilled workers, and businesses across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://apps.apple.com/us/app/handly-app/id6778122913"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span className="text-left leading-tight">
                  <span className="block text-[10px] text-white/60">Download on the</span>
                  <span className="block text-sm font-semibold -mt-0.5">App Store</span>
                </span>
              </a>
              <span
                aria-disabled="true"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3 bg-gray-100 text-gray-400 rounded-xl cursor-not-allowed select-none"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                  <path d="M3 20.5V3.5c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.25-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31M6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" />
                </svg>
                <span className="text-left leading-tight">
                  <span className="block text-[10px] text-gray-400">Google Play</span>
                  <span className="block text-sm font-semibold -mt-0.5">Coming Soon</span>
                </span>
              </span>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-gray-900 mb-5">{col.title}</h3>
              <ul className="space-y-3.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-900/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">&copy; {currentYear} HANDLY. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <Link href="#" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">Privacy</Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">Terms</Link>
            <p className="text-sm text-gray-400">Built for Africa 🌍</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
