import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error, <Link to="/">Click here to go back</Link>
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
