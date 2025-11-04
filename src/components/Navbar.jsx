import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-pink-100">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-pink-500 text-white font-black shadow-sm">FJ</span>
          <span className="text-lg sm:text-xl font-semibold text-pink-700">Frost & Joy</span>
        </div>
        <ul className="hidden md:flex items-center gap-8 text-pink-700/80">
          <li><a href="#menu" className="hover:text-pink-700 transition-colors">Menu</a></li>
          <li><a href="#story" className="hover:text-pink-700 transition-colors">Our Story</a></li>
          <li><a href="#contact" className="hover:text-pink-700 transition-colors">Contact</a></li>
        </ul>
        <div className="flex items-center gap-3">
          <a href="#order" className="inline-flex items-center rounded-md bg-pink-600 px-4 py-2 text-white hover:bg-pink-700 transition-colors">Order Now</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
