import React from 'react';

const IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1575234337239-4c6492d7df1c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDaG9jb2xhdGUlMjBzY29vcCUyMHdpdGglMjBkcml6emxlfGVufDB8MHx8fDE3NjIyNjk2NjB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Chocolate scoop with drizzle',
  },
  {
    src: 'https://images.unsplash.com/photo-1575234337239-4c6492d7df1c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDaG9jb2xhdGUlMjBzY29vcCUyMHdpdGglMjBkcml6emxlfGVufDB8MHx8fDE3NjIyNjk2NjB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Strawberry ice cream cones',
  },
  {
    src: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop',
    alt: 'Mint ice cream with chocolate chips',
  },
  {
    src: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=1600&auto=format&fit=crop',
    alt: 'Assorted colorful scoops',
  },
];

export default function ImageGallery() {
  return (
    <section className="py-20 bg-gradient-to-b from-pink-50/50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Scoops in the Wild</h2>
          <p className="mt-3 text-slate-600">A peek at our most photogenic moments.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {IMAGES.map((img, idx) => (
            <div key={idx} className="group overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-white">
              <img src={img.src} alt={img.alt} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
