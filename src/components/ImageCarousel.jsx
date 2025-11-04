import React from 'react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1663064912307-dd42fd2e6f62?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXb21hbiUyMGVuam95aW5nJTIwYW4lMjBpY2V8ZW58MHwwfHx8MTc2MjI3MDE2N3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Woman enjoying an ice cream cone in the sun',
  },
  {
    src: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=1974&auto=format&fit=crop',
    alt: 'Colorful scoops of ice cream in bowls',
  },
  {
    src: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1974&auto=format&fit=crop',
    alt: 'Friends sharing ice cream and laughing',
  },
  {
    src: 'https://images.unsplash.com/photo-1609989705616-3c4e66d0cd22?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGcmllbmRzJTIwc2hhcmluZyUyMGljZSUyMGNyZWFtfGVufDB8MHx8fDE3NjIyNzAxNjd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Ice cream cones with sprinkles and toppings',
  },
];

export default function ImageCarousel() {
  return (
    <div className="w-full">
      <div
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2"
        aria-label="Joyful ice cream moments carousel"
      >
        {images.map((img, idx) => (
          <figure
            key={idx}
            className="relative min-w-[80%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[36%] aspect-[4/3] snap-start overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-full object-cover"
              loading="lazy"
              draggable={false}
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-3 text-white/95 text-xs sm:text-sm bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
              {img.alt}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
