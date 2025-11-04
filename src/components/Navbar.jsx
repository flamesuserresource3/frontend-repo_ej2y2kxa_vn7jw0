import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-semibold text-slate-800">
          <span className="inline-block w-8 h-8 rounded-full bg-gradient-to-tr from-pink-400 via-fuchsia-500 to-purple-500" />
          <span>Frost & Swirl</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-700">
          <a href="#flavors" className="hover:text-slate-900 transition">Flavors</a>
          <a href="#story" className="hover:text-slate-900 transition">Our Story</a>
          <a href="#order" className="hover:text-slate-900 transition">Order</a>
        </nav>
        <a href="#order" className="text-xs sm:text-sm px-3 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition">Order Now</a>
      </div>
    </header>
  );
}
