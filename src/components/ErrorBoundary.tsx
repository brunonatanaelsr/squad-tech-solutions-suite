import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from './ui/button';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error boundary caught an error:', error, errorInfo);
    
    // Here you could send error to monitoring service
    // Example: Sentry.captureException(error);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-md w-full text-center">
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Ops!</h1>
              <p className="text-lg text-gray-600 mb-4">
                Algo deu errado. Nosso time foi notificado sobre este problema.
              </p>
              <details className="text-left bg-gray-100 p-4 rounded-lg mb-4">
                <summary className="cursor-pointer font-medium text-gray-700 mb-2">
                  Detalhes técnicos
                </summary>
                <pre className="text-xs text-gray-600 overflow-auto">
                  {this.state.error?.message}
                </pre>
              </details>
            </div>
            <div className="space-y-3">
              <Button 
                onClick={this.handleReload}
                className="w-full bg-squad-primary hover:bg-squad-dark"
              >
                Recarregar página
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.location.href = '/'}
                className="w-full"
              >
                Voltar ao início
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
