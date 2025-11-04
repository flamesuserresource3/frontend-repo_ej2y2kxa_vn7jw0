import React from 'react';
import Spline from '@splinetool/react-spline';
import ImageCarousel from './ImageCarousel';

export default function Hero3D() {
  return (
    <section className="relative h-[100svh] w-full">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8pX5zM7j3v8m1bH0/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft vignette to improve text legibility without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.25)_100%)]" />

      {/* Content overlay */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 sm:px-6 lg:px-8 pb-8">
        <div className="mb-6 max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
            Joy in every scoop.
          </h1>
          <p className="mt-3 text-base sm:text-lg text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
            Crafted daily with real ingredients and a dash of wonder. Scroll through genuine moments of delight from our community.
          </p>
        </div>

        {/* Interactive carousel showcasing people enjoying ice cream */}
        <div className="rounded-2xl bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 p-3 sm:p-4">
          <ImageCarousel />
        </div>
      </div>
    </section>
  );
}
