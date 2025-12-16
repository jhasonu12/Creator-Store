import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">◆</span>
              </div>
              <span className="font-bold text-lg text-white">Apna Store</span>
            </Link>
            <p className="text-sm text-gray-400">
              The ultimate link-in-bio solution for creators and entrepreneurs.
            </p>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Features</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Digital Products
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition">
                  Bookings
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition">
                  Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Creator University
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()}, Apna Store. All rights reserved.</p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a aria-label="Twitter" href="#" className="p-2 hover:bg-gray-800 rounded-lg transition text-gray-400 hover:text-white">
              <Twitter className="w-5 h-5" />
            </a>
            <a aria-label="Instagram" href="#" className="p-2 hover:bg-gray-800 rounded-lg transition text-gray-400 hover:text-white">
              <Instagram className="w-5 h-5" />
            </a>
            <a aria-label="Facebook" href="#" className="p-2 hover:bg-gray-800 rounded-lg transition text-gray-400 hover:text-white">
              <Facebook className="w-5 h-5" />
            </a>
            <a aria-label="LinkedIn" href="#" className="p-2 hover:bg-gray-800 rounded-lg transition text-gray-400 hover:text-white">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
