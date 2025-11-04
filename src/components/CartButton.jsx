import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from './CartContext';

export default function CartButton() {
  const { count, toggleCart } = useCart();

  return (
    <button
      onClick={toggleCart}
      aria-label="Open cart"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-pink-600 px-4 py-3 text-white shadow-lg ring-1 ring-pink-500/30 hover:bg-pink-700 transition"
    >
      <ShoppingCart size={18} />
      <span className="text-sm font-medium">Cart</span>
      {count > 0 && (
        <span className="ml-1 inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-white px-2 text-xs font-semibold text-pink-700">
          {count}
        </span>
      )}
    </button>
  );
}
