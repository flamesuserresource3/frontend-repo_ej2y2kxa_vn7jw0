import React from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import FlavorShowcase from './components/FlavorShowcase';
import CTASection from './components/CTASection';
import StoryParallax from './components/StoryParallax';
import ImageGallery from './components/ImageGallery';
import SideCart from './components/SideCart';
import CheckoutSection from './components/CheckoutSection';
import { CartProvider } from './components/CartContext';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white text-slate-800">
        <Navbar />
        <main>
          <Hero3D />
          <StoryParallax />
          <ImageGallery />
          <FlavorShowcase />
          <CTASection />
          <CheckoutSection />
        </main>
        <footer className="border-t border-black/5 py-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Frost & Swirl. All rights reserved.
        </footer>
        <SideCart />
      </div>
    </CartProvider>
  );
}
