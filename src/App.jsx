import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero3D from './components/Hero3D.jsx';
import FlavorShowcase from './components/FlavorShowcase.jsx';
import StoryParallax from './components/StoryParallax.jsx';
import CTASection from './components/CTASection.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero3D />
        <FlavorShowcase />
        <StoryParallax />
        <CTASection />
      </main>
      <footer className="border-t border-neutral-200 py-10 text-center text-sm text-neutral-600">
        © {new Date().getFullYear()} ScoopVerse. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
