import React from 'react';

export default function CTASection() {
  return (
    <section id="cta" className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Ready for your happiest scoop?</h2>
        <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">
          Swing by our shop or order online for pickup. Seasonal flavors rotate weekly.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#"
            className="inline-flex items-center rounded-full bg-black text-white px-6 py-3 text-sm font-medium shadow-sm hover:bg-neutral-800 transition-colors"
          >
            Order Now
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center rounded-full border border-neutral-300 bg-white text-black px-6 py-3 text-sm font-medium hover:bg-neutral-50"
          >
            Explore Gallery
          </a>
        </div>
      </div>
    </section>
  );
}
