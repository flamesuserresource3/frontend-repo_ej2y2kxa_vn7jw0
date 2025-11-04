import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CTASection from './components/CTASection';
import ErrorBoundary from './components/ErrorBoundary';
import StoryParallax from './components/StoryParallax';
import ContactSection from './components/ContactSection';
import MenuSection from './components/MenuSection';
import CheckoutSection from './components/CheckoutSection';
import { CartProvider } from './components/CartContext';
import SideCart from './components/SideCart';
import CartButton from './components/CartButton';

const App = () => {
  return (
    <ErrorBoundary>
      <CartProvider>
        <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50 text-pink-900">
          <a id="top" href="#top" className="sr-only">Top</a>
          <Navbar />
          <main>
            <HeroSection />
            <MenuSection />
            <StoryParallax />
            <ContactSection />
            <CTASection />
            <CheckoutSection />
          </main>
          <footer className="border-t border-pink-100 bg-white/70">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-pink-700/70">
              © {new Date().getFullYear()} Frost & Joy. All rights reserved.
            </div>
          </footer>
          <SideCart />
          <CartButton />
        </div>
      </CartProvider>
    </ErrorBoundary>
  );
};

export default App;
