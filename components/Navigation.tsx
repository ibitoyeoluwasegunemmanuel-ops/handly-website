'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/customers', label: 'For Customers' },
  { href: '/workers', label: 'For Workers' },
  { href: '/businesses', label: 'For Businesses' },
  { href: '/about', label: 'About' },
  { href: '/investors', label: 'Investors' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-900/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-handly-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-base">H</span>
            </div>
            <span className="font-bold text-lg tracking-tight text-gray-900">HANDLY</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-9">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://apps.apple.com/us/app/handly-app/id6778122913"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-colors"
            >
              Download the app
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} className="text-gray-900" /> : <Menu size={24} className="text-gray-900" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-8 pt-2">
            <div className="flex flex-col">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-3.5 text-lg font-medium text-gray-900 border-b border-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://apps.apple.com/us/app/handly-app/id6778122913"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center px-5 py-3.5 bg-gray-900 text-white font-semibold rounded-full"
                onClick={() => setIsOpen(false)}
              >
                Download the app
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
