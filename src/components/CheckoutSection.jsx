import React, { useState } from 'react';
import { useCart } from './CartContext';

export default function CheckoutSection() {
  const { items, subtotal, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', address: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.address) return;
    // In a real app, send order to backend here
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <section id="checkout" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 p-10 ring-1 ring-emerald-200/50">
            <h2 className="text-3xl font-bold text-emerald-900">Order Confirmed 🎉</h2>
            <p className="mt-3 text-emerald-800">Thanks for your order! We sent a confirmation email with your receipt. Your scoops will be on the way shortly.</p>
            <a href="#top" className="mt-6 inline-block rounded-md bg-emerald-700 px-4 py-2 text-white hover:bg-emerald-800">Back to Home</a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="checkout" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <div className="rounded-3xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">Checkout</h2>
            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="Full name"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
                required
              />
              <input
                type="email"
                placeholder="Email address"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
                required
              />
              <textarea
                placeholder="Delivery address"
                value={form.address}
                onChange={(e) => setForm((f) => ({ ...f, address: e.target.value }))}
                className="min-h-[120px] w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
                required
              />
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-800"
                disabled={items.length === 0}
              >
                Place Order
              </button>
              {items.length === 0 && (
                <p className="text-sm text-slate-500">Your cart is empty. Add some flavors first.</p>
              )}
            </form>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="rounded-3xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Order Summary</h3>
            <ul className="mt-4 space-y-3">
              {items.map((it) => (
                <li key={it.id} className="flex items-center justify-between text-sm text-slate-700">
                  <span className="truncate">{it.name} × {it.qty}</span>
                  <span className="font-medium">${(it.price * it.qty).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 border-t border-slate-200 pt-4 flex items-center justify-between">
              <span className="text-sm text-slate-600">Subtotal</span>
              <span className="text-base font-semibold text-slate-900">${subtotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
