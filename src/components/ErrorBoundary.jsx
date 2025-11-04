import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You could log this to an error reporting service
    // console.error('UI error:', error, info);
  }

  handleReload = () => {
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-50 via-white to-pink-50 text-center px-6">
          <div className="max-w-md">
            <h1 className="text-3xl font-semibold text-pink-700">Something went wrong</h1>
            <p className="mt-3 text-pink-600">An unexpected error occurred. Please try reloading the page.</p>
            <button onClick={this.handleReload} className="mt-6 inline-flex items-center rounded-md bg-pink-600 px-4 py-2 text-white hover:bg-pink-700 transition-colors">Reload</button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
