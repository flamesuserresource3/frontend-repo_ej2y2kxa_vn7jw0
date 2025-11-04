import React from 'react';

export default function CTASection() {
  return (
    <section id="order" className="relative py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-3xl p-8 sm:p-12 bg-white ring-1 ring-slate-200 shadow-sm">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Bring Joy Home</h2>
            <p className="mt-3 text-slate-600">Order pints, party packs, or catering with just a few clicks.</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#flavors" className="px-4 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition">Choose Flavors</a>
            <a href="#top" className="px-4 py-2 rounded-md bg-white ring-1 ring-slate-200 text-slate-800 hover:bg-slate-50 transition">Back to Top</a>
          </div>
        </div>
      </div>
    </section>
  );
}
