import React from 'react';
import ImageCarousel from './ImageCarousel';

// 3D scene intentionally disabled per request. We present a pink/white aesthetic background instead.
const HeroSection = () => {
  return (
    <section className="relative h-[100svh] w-full flex items-center">
      {/* Soft pink/white layered background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-50 via-white to-pink-50" />
        <div className="absolute -top-24 -right-16 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-pink-200/50 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-pink-300/40 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center rounded-full bg-pink-100 text-pink-700 px-3 py-1 text-xs font-medium ring-1 ring-pink-200">Small-batch • Handcrafted</span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-pink-800">
            Scoop up moments of pure joy
          </h1>
          <p className="mt-4 text-pink-700/80 text-base sm:text-lg">
            Creamy classics and playful specials, made fresh with love. No 3D needed—just a delightfully soft pink and white vibe.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#order" className="inline-flex items-center rounded-md bg-pink-600 px-5 py-2.5 text-white hover:bg-pink-700 transition-colors">Order Now</a>
            <a href="#menu" className="inline-flex items-center rounded-md bg-white px-5 py-2.5 text-pink-700 ring-1 ring-pink-200 hover:bg-pink-50 transition-colors">Browse Menu</a>
          </div>
        </div>

        <div className="md:pl-6">
          <ImageCarousel />
        </div>
      </div>

      {/* Subtle vignette that does not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-pink-100/30 via-transparent to-transparent" />
    </section>
  );
};

export default HeroSection;
