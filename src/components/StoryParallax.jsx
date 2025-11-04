import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function StoryParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start center', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.6]);

  return (
    <section id="story" ref={ref} className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="pointer-events-none absolute -left-10 top-10 h-56 w-56 rounded-full bg-pink-200/50 blur-2xl" />
      <div className="pointer-events-none absolute -right-8 bottom-10 h-64 w-64 rounded-full bg-violet-200/50 blur-2xl" />

      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <motion.div style={{ y: y1, opacity }} className="relative">
          <div className="aspect-square w-full overflow-hidden rounded-3xl bg-gradient-to-br from-pink-100 to-violet-100 p-2">
            <div className="h-full w-full rounded-2xl bg-[radial-gradient(circle_at_30%_30%,rgba(236,72,153,0.2),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(124,58,237,0.2),transparent_60%)]" />
          </div>
        </motion.div>
        <motion.div style={{ y: y2 }}>
          <h2 className="font-display text-3xl font-bold text-neutral-900 md:text-4xl">Crafted with Care</h2>
          <p className="mt-3 text-neutral-600">
            We churn every batch in-house, sourcing dairy from local farms and fruits from nearby orchards. Our team experiments weekly to bring playful, seasonal flavors to life—always small-batch and made with love.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {['Real Ingredients', 'Small-Batch', 'No Artificial Flavors', 'Sustainable Sourcing'].map((item) => (
              <li key={item} className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-800 shadow-sm">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-pink-600 text-white">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
