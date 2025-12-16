"use client";

import { motion } from "framer-motion";
import { toast } from "sonner";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay },
  }),
};

export default function CTA() {
  function handleStart() {
    toast.success("Trial started", {
      description:
        "You now have 14 days free. Check your email for next steps.",
    });
  }

  return (
    <motion.section
      className="py-20 sm:py-32 relative overflow-hidden text-white bg-gradient-to-r from-[hsl(var(--sidebar-primary))] via-[var(--sonner-success)] to-[hsl(var(--sidebar-primary))]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
          variants={fadeUp}
          custom={0.02}
        >
          Ready to turn your passion into profit?
        </motion.h2>

        <motion.p
          className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed"
          variants={fadeUp}
          custom={0.12}
        >
          Join over 100k creators and entrepreneurs who are building their
          business on Apna Store. Get started free for 14 days.
        </motion.p>

        <motion.button
          onClick={handleStart}
          className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-600/50 transition-all duration-300 transform hover:scale-105 text-base inline-flex items-center gap-2 mb-6"
          variants={fadeUp}
          custom={0.22}
        >
          <span>Start Your Free Trial</span>
          <span className="group-hover:translate-x-1 transition-transform">
            →
          </span>
        </motion.button>

        <motion.p
          className="text-[color:rgba(255,255,255,0.85)] text-sm mt-6"
          variants={fadeUp}
          custom={0.3}
        >
          No credit card needed. Totally free for 14 days.
        </motion.p>

        {/* Animated background orbs (use CSS tokens for color tone) */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div
            className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl"
            style={{
              background: "hsl(var(--sidebar-primary) / 0.18)",
              transform: "translateY(-50%)",
            }}
          />

          <div
            className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl"
            style={{
              background:
                "color-mix(in srgb, var(--sonner-success) 18%, transparent)",
              transform: "translateY(-50%)",
            }}
          />
        </div>
      </div>
    </motion.section>
  );
}
