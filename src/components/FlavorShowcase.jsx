import React from 'react';

const FLAVORS = [
  { name: 'Vanilla Beam', emoji: '🤍', desc: 'Madagascar vanilla with a hint of bean.' },
  { name: 'Choco Storm', emoji: '🍫', desc: 'Dark cocoa swirls and fudge bites.' },
  { name: 'Strawberry Sky', emoji: '🍓', desc: 'Sun-ripe berries and silky cream.' },
  { name: 'Mint Pixel', emoji: '🌿', desc: 'Fresh mint leaves and choco chips.' },
  { name: 'Cookie Nebula', emoji: '🍪', desc: 'Vanilla base loaded with cookie galaxies.' },
  { name: 'Mango Mirage', emoji: '🥭', desc: 'Tropical mango puree and cream.' },
  { name: 'Pistachio Peak', emoji: '🥜', desc: 'Roasted pistachios, lightly salted.' },
  { name: 'Blue Moon', emoji: '💙', desc: 'A dreamy, citrus-vanilla mystery.' },
];

export default function FlavorShowcase() {
  return (
    <section id="flavors" className="relative py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Our Flavors</h2>
          <p className="mt-3 text-slate-600">Handcrafted in small batches. Rotating seasonally.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FLAVORS.map((f) => (
            <div
              key={f.name}
              className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start justify-between">
                <div className="text-3xl" aria-hidden>{f.emoji}</div>
                <span className="text-[10px] px-2 py-1 rounded-full bg-pink-100 text-pink-700">Popular</span>
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{f.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
              <button className="mt-4 inline-flex items-center justify-center w-full rounded-md bg-slate-900 text-white text-sm py-2 hover:bg-slate-800 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
