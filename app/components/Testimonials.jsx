"use client";

import { motion } from 'framer-motion';

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay } }),
};

export default function Testimonials() {
  const testimonials = [
    {
      name: "Jessica Smith",
      role: "Digital Creator",
      image: "JS",
      quote:
        "Apna Store completely changed the game for me. I've gone from zero to steady passive income in just a few months. The simplicity is unmatched.",
    },
    {
      name: "Camille Chavez",
      role: "Coach",
      image: "CC",
      quote:
        "I'm a financial coach with limited tech skills. Apna Store made it incredibly easy to launch my course and manage my bookings. Honestly, I can't imagine using anything else.",
    },
    {
      name: "Anita Vega",
      role: "Educator",
      image: "AV",
      quote:
        "I've tried many tools, but nothing has ever made me feel this supported. I created my Apna Store to sell my digital courses and was able to finally stop overworking and be present at work.",
    },
  ];

  return (
    <motion.section className="py-20 sm:py-32 bg-white" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2" variants={item} custom={0.02}>
            Why creators <span className="text-red-500">❤️</span> Apna Store
          </motion.h2>
          <motion.p className="text-gray-600 text-base sm:text-lg" variants={item} custom={0.08}>
            Don't just take our word for it. Hear from creators who have transformed their
            businesses.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} className="p-6 bg-gray-50 rounded-xl border border-gray-200" variants={item} custom={index * 0.08}>
              {/* Avatar */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{testimonial.image}</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                  <p className="text-gray-600 text-xs">{testimonial.role}</p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-sm leading-relaxed">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
