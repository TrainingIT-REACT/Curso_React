import React from "react";
import ReactDOM from "react-dom";

// Importamos otros componentes
import Title from "./Title";
import ErrorBoundary from "./ErrorBoundary";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    // Bind de los métodos
    this.onClick = this.onClick.bind(this);
    this.onClickError = this.onClickError.bind(this);
    this.onReset = this.onReset.bind(this);

    // Iniciamos el array en el estado
    this.state = {
      arr: ["hola!"]
    };
  }

  // Actualiza el estado con un valor válido
  onClick(e) {
    this.setState({ arr: ["qué tal?"] });
  }

  // Actualiza
  onClickError(e) {
    this.setState({ arr: [] });
  }

  onReset() {
    this.setState({ arr: ["hi"] });
  }

  render() {
    return (
      <div className="App">
        <ErrorBoundary onReset={this.onReset} message="Ops! Algo ha salido mal">
          <ErrorBoundary
            onReset={this.onReset}
            message="Ops! Algo ha salido mal en Title"
          >
            <Title arr={this.state.arr} />
          </ErrorBoundary>
          <button onClick={this.onClick}>Actualizar estado</button>
          <button onClick={this.onClickError}>
            Introducir error
          </button>
        </ErrorBoundary>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
