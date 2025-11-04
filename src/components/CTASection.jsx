import React from 'react';

const CTASection = () => {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-pink-50 to-white" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-pink-100 bg-white/80 backdrop-blur shadow-sm">
          <div className="p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-pink-800">Join the Scoop Club</h2>
            <p className="mt-3 text-pink-700/80">Exclusive flavors, early tastings, and sweet surprises—right to your inbox.</p>
            <form className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full sm:w-80 rounded-md border border-pink-200 bg-white px-4 py-2 text-pink-900 placeholder-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
              <button type="submit" className="inline-flex items-center rounded-md bg-pink-600 px-5 py-2.5 text-white hover:bg-pink-700 transition-colors">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
