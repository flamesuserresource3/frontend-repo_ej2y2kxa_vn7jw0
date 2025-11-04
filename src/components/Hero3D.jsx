import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section id="top" className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-pink-50 via-white to-white">
      <div className="absolute inset-0">
        {/* The Spline scene renders full-bleed. Avoid negative z-index. */}
        <Spline
          scene="https://prod.spline.design/8Yq8T4eJm5LQ5g0v/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient glows that don't block interaction */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-80 w-[60rem] rounded-full bg-pink-300/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-fuchsia-300/30 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-28 pb-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Cool 3D Scoops, Warmer Smiles
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Explore handcrafted flavors in a delightful 3D experience. Scroll to discover your next favorite scoop.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#flavors" className="px-4 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition">Browse Flavors</a>
            <a href="#order" className="px-4 py-2 rounded-md bg-white/80 ring-1 ring-slate-200 text-slate-800 hover:bg-white transition">Order Now</a>
          </div>
        </div>
      </div>
    </section>
  );
}
