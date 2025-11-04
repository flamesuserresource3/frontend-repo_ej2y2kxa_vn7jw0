import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-tight text-neutral-900">
          <span className="inline-block h-8 w-8 rounded-lg bg-gradient-to-br from-pink-500 to-violet-500" />
          ScoopVerse
        </a>
        <nav className="hidden items-center gap-6 text-sm text-neutral-700 md:flex">
          <a href="#flavors" className="hover:text-neutral-900">Flavors</a>
          <a href="#story" className="hover:text-neutral-900">Our Story</a>
          <a href="#cta" className="hover:text-neutral-900">Order</a>
          <a
            href="#cta"
            className="rounded-full bg-pink-600 px-4 py-2 text-white transition hover:bg-pink-700"
          >
            Get Scoops
          </a>
        </nav>
      </div>
    </header>
  );
}
