import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ background: '#1a1a1a', color: '#ff4444', padding: '40px', minHeight: '100vh', fontFamily: 'monospace' }}>
          <h1 style={{ color: 'white' }}>Oops! Something went wrong.</h1>
          <p>The application crashed during render. Error details:</p>
          <div style={{ background: '#000', padding: '20px', borderRadius: '8px', border: '1px solid #333', overflowX: 'auto' }}>
            <pre>{this.state.error && this.state.error.toString()}</pre>
          </div>
          <button 
            onClick={() => window.location.reload()}
            style={{ marginTop: '20px', padding: '10px 20px', background: '#8B5CF6', border: 'none', borderRadius: '5px', color: 'white', cursor: 'pointer' }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children; 
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
