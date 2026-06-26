'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/customers', label: 'For Customers' },
    { href: '/workers', label: 'For Workers' },
    { href: '/businesses', label: 'For Businesses' },
    { href: '/about', label: 'About' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/community', label: 'Community' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white border-b border-handly-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-handly-500 to-handly-700 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <span className="font-bold text-lg text-gray-900 hidden sm:inline text-handly-700">HANDLY</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-handly-600 transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex gap-3">
            <a
              href={process.env.NEXT_PUBLIC_APPSTORE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-handly-600 border border-handly-600 rounded-lg hover:bg-handly-50 transition-all duration-300 text-sm font-semibold flex items-center gap-2"
            >
              <Download size={16} />
              Download App
            </a>
            <Link
              href="/waitlist"
              className="px-6 py-2 bg-gradient-to-r from-handly-500 to-handly-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-semibold"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} className="text-gray-900" /> : <Menu size={24} className="text-gray-900" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 pt-4 border-t border-handly-100">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2.5 text-gray-700 hover:bg-handly-50 rounded-lg transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-handly-100 flex flex-col gap-2">
                <a
                  href={process.env.NEXT_PUBLIC_APPSTORE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 text-handly-600 border border-handly-600 rounded-lg text-center font-semibold flex items-center justify-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Download size={16} />
                  Download
                </a>
                <Link
                  href="/waitlist"
                  className="px-4 py-2.5 bg-gradient-to-r from-handly-500 to-handly-600 text-white rounded-lg text-center font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
