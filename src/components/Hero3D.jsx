import React, { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch() {
    // swallow errors from the Spline canvas and fall back gracefully
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default function Hero3D() {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Guard against environments where WebGL becomes unavailable after load
    timeoutRef.current = window.setTimeout(() => {
      if (!loaded) setFailed(true);
    }, 3500);
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [loaded]);

  const Fallback = (
    <div className="relative h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-100 via-white to-white" />
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-80 w-[60rem] rounded-full bg-pink-300/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-fuchsia-300/30 blur-3xl" />
    </div>
  );

  return (
    <section id="top" className="relative w-full bg-white">
      {/* Sized container ensures stable viewport height so canvas never collapses */}
      <div className="relative h-[100svh] w-full">
        {/* Spline canvas with robust fallback on Windows 11/edge cases */}
        <ErrorBoundary fallback={Fallback}>
          {!failed && (
            <Spline
              scene="https://prod.spline.design/8Yq8T4eJm5LQ5g0v/scene.splinecode"
              onLoad={() => setLoaded(true)}
              onError={() => setFailed(true)}
              style={{ width: '100%', height: '100%' }}
            />
          )}
        </ErrorBoundary>
        {failed && Fallback}
      </div>

      {/* Non-interactive glow overlays so the 3D scene remains clickable */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-80 w-[60rem] rounded-full bg-pink-300/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-fuchsia-300/30 blur-3xl" />

      {/* Foreground copy sits above without negative z-index. Only buttons are interactive. */}
      <div className="absolute inset-x-0 top-0 flex h-[100svh] items-center">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="max-w-2xl select-none">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              Cool 3D Scoops, Warmer Smiles
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Explore handcrafted flavors in a delightful 3D experience. Scroll to discover your next favorite scoop.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#flavors" className="pointer-events-auto px-4 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition">Browse Flavors</a>
              <a href="#order" className="pointer-events-auto px-4 py-2 rounded-md bg-white/80 ring-1 ring-slate-200 text-slate-800 hover:bg-white transition">Order Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
