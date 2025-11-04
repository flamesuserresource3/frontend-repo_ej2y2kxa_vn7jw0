import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from './CartContext';

export default function Navbar() {
  const { count, toggleCart } = useCart();

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
        <div className="flex items-center gap-2">
          <a href="#order" className="hidden sm:inline-flex text-xs sm:text-sm px-3 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition">Order Now</a>
          <button onClick={toggleCart} className="relative inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 hover:bg-slate-50">
            <ShoppingCart size={16} />
            <span className="hidden sm:inline">Cart</span>
            {count > 0 && (
              <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-pink-600 px-1 text-xs font-medium text-white">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
