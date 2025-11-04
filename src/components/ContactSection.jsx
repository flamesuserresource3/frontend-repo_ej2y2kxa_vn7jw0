import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-white via-pink-50 to-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 right-6 h-40 w-40 rounded-full bg-pink-200/50 blur-3xl" />
        <div className="absolute -bottom-8 left-10 h-48 w-48 rounded-full bg-pink-300/40 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-pink-900">Get in Touch</h2>
            <p className="mt-3 text-pink-700/80">Questions, catering, or flavor ideas? We’d love to hear from you.</p>
            <div className="mt-6 space-y-3 text-pink-800/90">
              <p><span className="font-medium">Email:</span> hello@frostandjoy.com</p>
              <p><span className="font-medium">Phone:</span> (555) 012-3456</p>
              <p><span className="font-medium">Address:</span> 123 Sweet St, Dessert City</p>
            </div>
          </div>
          <form className="rounded-3xl bg-white/80 backdrop-blur ring-1 ring-pink-100 p-6 shadow-sm">
            <div className="grid grid-cols-1 gap-4">
              <input type="text" placeholder="Your name" className="w-full rounded-md border border-pink-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300" required />
              <input type="email" placeholder="Email address" className="w-full rounded-md border border-pink-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300" required />
              <textarea placeholder="Message" className="min-h-[120px] w-full rounded-md border border-pink-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300" required />
              <button type="submit" className="inline-flex items-center justify-center rounded-md bg-pink-600 px-4 py-2 text-white hover:bg-pink-700">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
