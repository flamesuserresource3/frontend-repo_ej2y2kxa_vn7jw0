import React from 'react';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section id="cta" className="relative overflow-hidden bg-gradient-to-br from-pink-50 to-violet-50 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_0%,rgba(236,72,153,0.15),transparent)]" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl font-bold text-neutral-900 md:text-4xl"
        >
          Ready for your next favorite scoop?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mx-auto mt-3 max-w-2xl text-neutral-600"
        >
          Order online for pickup or delivery. New seasonal flavors drop every Friday at noon.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#"
            className="rounded-full bg-pink-600 px-8 py-3 text-white shadow-lg shadow-pink-300/50 transition hover:translate-y-[-2px] hover:bg-pink-700"
          >
            Order Now
          </a>
          <a
            href="#flavors"
            className="rounded-full border border-neutral-300 bg-white/80 px-8 py-3 text-neutral-700 backdrop-blur transition hover:border-neutral-400 hover:bg-white"
          >
            Browse Flavors
          </a>
        </motion.div>
      </div>
    </section>
  );
}
