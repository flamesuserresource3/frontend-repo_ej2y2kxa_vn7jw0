import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-semibold tracking-tight">Frost & Joy</a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-600">
          <a href="#flavors" className="hover:text-black transition-colors">Flavors</a>
          <a href="#gallery" className="hover:text-black transition-colors">Gallery</a>
          <a href="#about" className="hover:text-black transition-colors">About</a>
        </nav>
        <a href="#cta" className="inline-flex items-center rounded-full bg-black text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-neutral-800 transition-colors">Order Now</a>
      </div>
    </header>
  );
}
