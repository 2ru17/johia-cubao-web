import React from 'react';
import Button from './Button';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an unhandled error:', error, errorInfo);
  }

  handleReload = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center bg-background-light dark:bg-background-dark text-text-dark dark:text-text-light">
          <div className="w-16 h-16 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold font-heading mb-3">Something went wrong</h2>
          <p className="text-gray-500 dark:text-gray-400 font-sans max-w-md mb-8">
            We encountered an unexpected error while rendering this page. You can try reloading or returning home.
          </p>
          <div className="flex gap-4">
            <Button variant="solid" onClick={this.handleReload}>
              Reload Page
            </Button>
            <Button variant="outline" href="/">
              Return Home
            </Button>
          </div>
          {process.env.NODE_ENV !== 'production' && this.state.error && (
            <div className="mt-8 p-4 bg-neutral-900 border border-neutral-800 rounded-xl max-w-xl text-left text-xs font-mono text-red-400 overflow-x-auto">
              <p className="font-bold mb-1">Dev Error Stack:</p>
              <pre className="whitespace-pre-wrap">{String(this.state.error?.stack || this.state.error)}</pre>
            </div>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
