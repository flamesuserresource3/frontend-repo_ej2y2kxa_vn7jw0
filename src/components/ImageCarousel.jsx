import React from 'react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?q=80&w=1600&auto=format&fit=crop',
    alt: 'Scoops of colorful ice cream in waffle cones',
    caption: 'Handcrafted scoops made fresh daily',
  },
  {
    src: 'https://images.unsplash.com/photo-1532678465554-94846274c297?q=80&w=1600&auto=format&fit=crop',
    alt: 'Strawberry ice cream with fresh berries',
    caption: 'Real fruit, vibrant flavors',
  },
  {
    src: 'https://images.unsplash.com/photo-1673646960378-e8352cbea00b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHJhd2JlcnJ5JTIwaWNlJTIwY3JlYW0lMjB3aXRofGVufDB8MHx8fDE3NjIyNzA1OTF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Vanilla and chocolate swirls in cup',
    caption: 'Classic swirls, silky texture',
  },
  {
    src: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1600&auto=format&fit=crop',
    alt: 'Ice cream sandwiches stacked',
    caption: 'Playful treats for every mood',
  },
  {
    src: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1600&auto=format&fit=crop',
    alt: 'Chocolate-dipped cones with sprinkles',
    caption: 'Crunch, dip, and sprinkle joy',
  },
];

const ImageCarousel = () => {
  return (
    <div className="w-full">
      <div className="overflow-x-auto snap-x snap-mandatory flex gap-4 pb-4 scrollbar-thin scrollbar-thumb-pink-300/60 scrollbar-track-pink-100/40" role="region" aria-label="Featured treats carousel">
        {images.map((img, idx) => (
          <figure
            key={idx}
            className="relative snap-start shrink-0 rounded-2xl overflow-hidden shadow-md bg-white/60 border border-pink-100"
            style={{ minWidth: '72%', maxWidth: 640 }}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-56 sm:h-64 md:h-72 w-full object-cover"
            />
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-3 text-white text-sm sm:text-base bg-gradient-to-t from-black/50 via-black/20 to-transparent">
              {img.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
