"use client";

import { toast } from 'sonner';

export default function CTA() {
  function handleStart() {
    toast.success('Trial started', {
      description: 'You now have 14 days free. Check your email for next steps.',
    });
  }

  return (
    <section className="py-20 sm:py-32 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          Ready to turn your passion into profit?
        </h2>

        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Join over 100k creators and entrepreneurs who are building their business on Apna Store. Get started free for 14 days.
        </p>

        <button
          onClick={handleStart}
          className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition text-base"
        >
          Start Your Free Trial
        </button>

        <p className="text-gray-400 text-sm mt-6">No credit card needed. Totally free for 14 days.</p>
      </div>
    </section>
  );
}
