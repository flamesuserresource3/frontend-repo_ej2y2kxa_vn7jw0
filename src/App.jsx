import React from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import FlavorShowcase from './components/FlavorShowcase';
import CTASection from './components/CTASection';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main>
        <Hero3D />
        <FlavorShowcase />
        <CTASection />
      </main>
      <footer className="border-t border-black/5 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Frost & Swirl. All rights reserved.
      </footer>
    </div>
  );
}
