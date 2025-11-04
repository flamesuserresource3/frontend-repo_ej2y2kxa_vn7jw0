import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CTASection from './components/CTASection';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50 text-pink-900">
        <Navbar />
        <main>
          <HeroSection />
          <CTASection />
        </main>
        <footer className="border-t border-pink-100 bg-white/70">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-pink-700/70">
            © {new Date().getFullYear()} Frost & Joy. All rights reserved.
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  );
};

export default App;
