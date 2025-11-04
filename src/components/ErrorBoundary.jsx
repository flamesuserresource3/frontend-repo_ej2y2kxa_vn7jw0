import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('UI ErrorBoundary caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 to-sky-50 p-8 text-center">
          <div className="max-w-md">
            <h2 className="text-2xl font-semibold mb-2">Something went wrong</h2>
            <p className="text-neutral-600 mb-6">Please refresh the page. If the issue persists, we can disable the 3D scene as a fallback.</p>
            <button onClick={() => window.location.reload()} className="rounded-full bg-black text-white px-5 py-2 text-sm">Reload</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
