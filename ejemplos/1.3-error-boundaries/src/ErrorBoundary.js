import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);

    this.state = {
      error: false
    };
  }

  static getDerivedStateFromError(error) {
    return {
      error: true
    };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  onClick() {
    this.props.onReset();
    this.setState({ error: false });
  }

  render() {
    if (this.state.error === true) {
      return (
        <div>
          <h1>{this.props.message}</h1>
          <button onClick={this.onClick}>Reintentar</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
