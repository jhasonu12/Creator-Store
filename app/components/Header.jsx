"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">◆</span>
            </div>
            <span className="font-bold text-lg text-gray-900">Apna Store</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm text-gray-600 hover:text-gray-900 transition">
              Features
            </Link>
            <Link href="#pricing" className="text-sm text-gray-600 hover:text-gray-900 transition">
              Pricing
            </Link>
            <Link href="#learn" className="text-sm text-gray-600 hover:text-gray-900 transition">
              Learn
            </Link>
            <Link href="#blog" className="text-sm text-gray-600 hover:text-gray-900 transition">
              Blog
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:inline text-sm font-medium text-gray-600 hover:text-gray-900 transition">
              Log in
            </button>
            <button className="px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded-full hover:bg-purple-700 transition">
              Get Started free
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              className="p-2 md:hidden hover:bg-gray-100 rounded-lg transition"
            >
              {isMenuOpen ? <X className="w-5 h-5 text-gray-600" /> : <Menu className="w-5 h-5 text-gray-600" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <Link href="#features" className="text-sm text-gray-600 hover:text-gray-900 transition py-2">
              Features
            </Link>
            <Link href="#pricing" className="text-sm text-gray-600 hover:text-gray-900 transition py-2">
              Pricing
            </Link>
            <Link href="#learn" className="text-sm text-gray-600 hover:text-gray-900 transition py-2">
              Learn
            </Link>
            <Link href="#blog" className="text-sm text-gray-600 hover:text-gray-900 transition py-2">
              Blog
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
