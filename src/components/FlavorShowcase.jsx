import React from 'react';
import { useCart } from './CartContext';

const FLAVORS = [
  {
    id: 'vanilla',
    name: 'Vanilla Beam',
    desc: 'Madagascar vanilla with a hint of bean.',
    price: 5.5,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'choco',
    name: 'Choco Storm',
    desc: 'Dark cocoa swirls and fudge bites.',
    price: 6.0,
    image: 'https://images.unsplash.com/photo-1684823494318-20da2d523f4e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDaG9jbyUyMFN0b3JtfGVufDB8MHx8fDE3NjIyNjk2NjF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 'strawberry',
    name: 'Strawberry Sky',
    desc: 'Sun-ripe berries and silky cream.',
    price: 5.75,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'mint',
    name: 'Mint Pixel',
    desc: 'Fresh mint leaves and choco chips.',
    price: 5.75,
    image: 'https://images.unsplash.com/photo-1758043322958-9c353d2364ef?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNaW50JTIwUGl4ZWx8ZW58MHwwfHx8MTc2MjI2OTY2Mnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 'cookie',
    name: 'Cookie Nebula',
    desc: 'Vanilla base loaded with cookie galaxies.',
    price: 6.25,
    image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'mango',
    name: 'Mango Mirage',
    desc: 'Tropical mango puree and cream.',
    price: 5.9,
    image: 'https://images.unsplash.com/photo-1666325173514-32cd2898cbb7?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNYW5nbyUyME1pcmFnZXxlbnwwfDB8fHwxNzYyMjY5NjYyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 'pistachio',
    name: 'Pistachio Peak',
    desc: 'Roasted pistachios, lightly salted.',
    price: 6.4,
    image: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'blue',
    name: 'Blue Moon',
    desc: 'A dreamy, citrus-vanilla mystery.',
    price: 5.9,
    image: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function FlavorShowcase() {
  const { addItem } = useCart();

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
              key={f.id}
              className="group rounded-2xl border border-slate-200 bg-white p-2 shadow-sm hover:shadow-md transition"
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl">
                <img src={f.image} alt={f.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-slate-900">{f.name}</h3>
                  <span className="text-xs rounded-full bg-pink-100 px-2 py-1 text-pink-700">${f.price.toFixed(2)}</span>
                </div>
                <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
                <button
                  onClick={() => addItem({ id: f.id, name: f.name, price: f.price, image: f.image })}
                  className="mt-4 inline-flex items-center justify-center w-full rounded-md bg-slate-900 text-white text-sm py-2 hover:bg-slate-800 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
