import React, { Component } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import styles from './ErrorBoundary.module.css';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    // Aquí puedes enviar el error a un servicio como Sentry
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.errorContainer}>
          <div className={styles.errorContent}>
            <AlertTriangle className={styles.errorIcon} size={64} />
            <h2 className={styles.errorTitle}>Algo salió mal</h2>
            <p className={styles.errorMessage}>
              Ha ocurrido un error inesperado. Por favor, intenta recargar la página.
            </p>
            <button className={styles.resetButton} onClick={this.handleReset}>
              <RefreshCw size={16} />
              Recargar página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;