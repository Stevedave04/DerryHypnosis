import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  message: string;
}

/**
 * Catches rendering errors in the component subtree.
 * Without this, an uncaught error causes a blank white page with no feedback.
 */
class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, message: '' };
  }

  static getDerivedStateFromError(error: unknown): State {
    const message = error instanceof Error ? error.message : String(error);
    return { hasError: true, message };
  }

  componentDidCatch(error: unknown, info: React.ErrorInfo) {
    // Surface the error in dev so it's easy to debug
    console.error('[ErrorBoundary]', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="min-h-screen bg-cream-light flex items-center justify-center px-6 pt-20">
          <div className="text-center max-w-lg">
            <h1 className="font-heading text-3xl font-bold text-teal mb-4">
              Something went wrong
            </h1>
            <p className="font-body text-slate-800/60 mb-8 leading-relaxed">
              This page couldn't load. Please try refreshing or go back to the homepage.
            </p>
            <Link
              to="/"
              onClick={() => this.setState({ hasError: false, message: '' })}
              className="inline-flex items-center justify-center gap-2 bg-teal hover:bg-teal-dark text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg"
            >
              Back to Home
            </Link>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
