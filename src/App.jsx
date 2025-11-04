import React from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import CTASection from './components/CTASection';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero3D />
        <CTASection />
      </main>
      <footer className="border-t border-black/5 py-8 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Frost & Joy. All rights reserved.
      </footer>
    </div>
  );
}
