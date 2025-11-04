import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero3D() {
  const { scrollYProgress } = useScroll();
  const titleY = useTransform(scrollYProgress, [0, 0.3], [0, -80]);
  const subtitleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.2]);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        {/* 3D Scene */}
        <Spline
          scene="https://prod.spline.design/0r9JQX5m2oK3c9iQ/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient glow overlays - don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80" />
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-pink-300/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-violet-300/40 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          style={{ y: titleY }}
          className="font-display text-5xl font-extrabold tracking-tight text-neutral-800 drop-shadow-sm md:text-6xl lg:text-7xl"
        >
          ScoopVerse Ice Cream
        </motion.h1>
        <motion.p
          style={{ opacity: subtitleOpacity }}
          className="mt-4 max-w-2xl text-lg text-neutral-600 md:text-xl"
        >
          Hand-crafted scoops, cosmic flavors, and melt-in-your-mouth magic. Scroll to explore our menu.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 flex items-center gap-4"
        >
          <a
            href="#flavors"
            className="rounded-full bg-pink-600 px-6 py-3 text-white shadow-lg shadow-pink-300/50 transition hover:translate-y-[-2px] hover:bg-pink-700"
          >
            Explore Flavors
          </a>
          <a
            href="#story"
            className="rounded-full border border-neutral-300 bg-white/80 px-6 py-3 text-neutral-700 backdrop-blur transition hover:border-neutral-400 hover:bg-white"
          >
            Our Story
          </a>
        </motion.div>
      </div>
    </section>
  );
}
