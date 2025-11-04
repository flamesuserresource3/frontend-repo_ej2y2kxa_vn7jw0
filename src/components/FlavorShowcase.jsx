import React from 'react';
import { motion } from 'framer-motion';

const flavors = [
  {
    name: 'Classic Vanilla',
    desc: 'Madagascar bourbon vanilla with flecks of real bean.',
    color: 'from-amber-200 to-amber-100',
    emoji: '🍦',
  },
  {
    name: 'Double Chocolate',
    desc: 'Dark cocoa swirls with chocolate chunks.',
    color: 'from-brown-200 to-rose-100',
    emoji: '🍫',
  },
  {
    name: 'Strawberry Swirl',
    desc: 'Summer strawberries and velvety cream.',
    color: 'from-pink-200 to-rose-100',
    emoji: '🍓',
  },
  {
    name: 'Mint Chip Nebula',
    desc: 'Cool mint galaxies dotted with dark chips.',
    color: 'from-emerald-200 to-teal-100',
    emoji: '🌿',
  },
  {
    name: 'Salted Caramel',
    desc: 'Buttery ribbons and a pinch of sea salt.',
    color: 'from-orange-200 to-amber-100',
    emoji: '🧂',
  },
  {
    name: 'Pistachio Dream',
    desc: 'Nutty, creamy, and softly sweet.',
    color: 'from-lime-200 to-emerald-100',
    emoji: '🌰',
  },
  {
    name: 'Cookie Constellation',
    desc: 'Vanilla base packed with cookie stars.',
    color: 'from-slate-200 to-stone-100',
    emoji: '🍪',
  },
  {
    name: 'Blueberry Cheesecake',
    desc: 'Cream cheese swirls and blueberry bursts.',
    color: 'from-indigo-200 to-violet-100',
    emoji: '🫐',
  },
];

export default function FlavorShowcase() {
  return (
    <section id="flavors" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <h2 className="font-display text-3xl font-bold text-neutral-900 md:text-4xl">
            Our Flavors
          </h2>
          <p className="mt-2 max-w-2xl text-neutral-600">
            Small-batch, always seasonal. Crafted with premium ingredients and a sprinkle of joy.
          </p>
        </div>
        <a href="#cta" className="hidden rounded-full border border-neutral-300 px-4 py-2 text-sm text-neutral-700 transition hover:bg-neutral-50 md:block">
          Order Now
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {flavors.map((f, idx) => (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.4, delay: idx * 0.03 }}
            className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${f.color} p-1 shadow-sm`}
          >
            <div className="rounded-2xl bg-white p-5 transition group-hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="text-4xl" aria-hidden>
                  {f.emoji}
                </span>
                <span className="rounded-full bg-white/70 px-3 py-1 text-xs text-neutral-600 backdrop-blur">
                  Signature
                </span>
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900">{f.name}</h3>
              <p className="mt-1 text-sm text-neutral-600">{f.desc}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-lg font-bold text-neutral-900">$4.50</span>
                <button className="rounded-full bg-pink-600 px-4 py-2 text-sm text-white shadow-pink-300/50 transition hover:translate-y-[-1px] hover:bg-pink-700">
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
