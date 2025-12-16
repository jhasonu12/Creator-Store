"use client";

import * as FM from 'framer-motion';
import { ShoppingCart, Calendar, Mail, BookOpen, Palette, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: ShoppingCart,
    title: 'Digital Products',
    description: 'Sell ebooks, videos, templates, and more. Build and manage your digital library in minutes.',
  },
  {
    icon: Calendar,
    title: 'Calendar Bookings',
    description: 'Offer 1-on-1 consulting or coaching sessions. Sync with your calendar automatically.',
  },
  {
    icon: Mail,
    title: 'Collect Emails & Leads',
    description: 'Build your audience with email lists and signup forms. Export your data anytime.',
  },
  {
    icon: BookOpen,
    title: 'Courses & Memberships',
    description: 'Host your courses or create exclusive memberships. Charge monthly, yearly, or as a one-time payment.',
  },
  {
    icon: Palette,
    title: 'Customizable Store',
    description: 'Match your brand perfectly. Choose from beautiful templates or create a custom design.',
  },
  {
    icon: BarChart3,
    title: 'Powerful Analytics',
    description: 'Track your stats, learn, and conversions. Make data-driven decisions about your business.',
  },
];



const item = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay } }),
};

export default function FeaturesGrid() {
  const Motion = FM && FM.motion ? FM.motion : null;
  const hasMotion = Boolean(Motion);

  if (!hasMotion) {
    // Fallback static markup when framer-motion isn't available at runtime
    return (
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Everything you need, all in one place.</h2>
            <p className="text-gray-600 text-base sm:text-lg">Your digital storefront in 11 minutes. Get exactly you're looking for.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <Motion.section className="py-20 sm:py-32 bg-white" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <Motion.h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" variants={item} custom={0.02}>
            Everything you need, all in one place.
          </Motion.h2>
          <Motion.p className="text-gray-600 text-base sm:text-lg" variants={item} custom={0.08}>
            Your digital storefront in 11 minutes. Get exactly you're looking for.
          </Motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Motion.div
                key={index}
                className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition"
                variants={item}
                custom={index * 0.08}
              >
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </Motion.div>
            );
          })}
        </div>
      </div>
    </Motion.section>
  );
}
