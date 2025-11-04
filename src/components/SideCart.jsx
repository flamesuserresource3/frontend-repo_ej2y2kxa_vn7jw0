import React from 'react';
import { X, Plus, Minus, Trash, ShoppingCart } from 'lucide-react';
import { useCart } from './CartContext';

export default function SideCart() {
  const { items, subtotal, increment, decrement, removeItem, isOpen, closeCart } = useCart();

  return (
    <div aria-hidden={!isOpen} className={`fixed inset-0 z-50 ${isOpen ? '' : 'pointer-events-none'} `}>
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={closeCart}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-xl ring-1 ring-black/5 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        <header className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div className="flex items-center gap-2 text-slate-900 font-semibold">
            <ShoppingCart size={18} />
            Your Cart
          </div>
          <button onClick={closeCart} className="rounded-md p-2 hover:bg-slate-100" aria-label="Close cart">
            <X size={18} />
          </button>
        </header>
        <div className="flex h-[calc(100%-160px)] flex-col overflow-hidden">
          <div className="flex-1 overflow-auto px-5 py-4 space-y-4">
            {items.length === 0 ? (
              <p className="text-sm text-slate-600">Your cart is empty. Add some scoops!</p>
            ) : (
              items.map((it) => (
                <div key={it.id} className="flex gap-3 rounded-xl border border-slate-200 p-3">
                  <img src={it.image} alt={it.name} className="h-16 w-16 rounded-md object-cover" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="truncate font-medium text-slate-900">{it.name}</p>
                        <p className="text-xs text-slate-500">${it.price.toFixed(2)}</p>
                      </div>
                      <button onClick={() => removeItem(it.id)} className="rounded p-1 text-slate-500 hover:bg-slate-100" aria-label={`Remove ${it.name}`}>
                        <Trash size={14} />
                      </button>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 rounded-md border border-slate-200">
                        <button onClick={() => decrement(it.id)} className="px-2 py-1 hover:bg-slate-100" aria-label={`Decrease ${it.name}`}>
                          <Minus size={14} />
                        </button>
                        <span className="min-w-[2ch] text-center text-sm">{it.qty}</span>
                        <button onClick={() => increment(it.id)} className="px-2 py-1 hover:bg-slate-100" aria-label={`Increase ${it.name}`}>
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="text-sm font-medium text-slate-900">${(it.qty * it.price).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="border-t border-slate-200 p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600">Subtotal</span>
              <span className="text-base font-semibold text-slate-900">${subtotal.toFixed(2)}</span>
            </div>
            <a href="#checkout" onClick={closeCart} className="mt-4 block w-full rounded-md bg-slate-900 px-4 py-2 text-center text-white hover:bg-slate-800">
              Checkout
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}
