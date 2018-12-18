import React from "react";
import ReactDOM from "react-dom";

// Importamos otros componentes
import Title from "./Title";
import ErrorBoundary from "./ErrorBoundary";

import "./styles.css";

// Estado inicial
const initialState = {
  arr: ["hola!"]
};

// Applicación básica
class App extends React.Component {
  constructor(props) {
    super(props);

    // Bind de los métodos
    this.onClick = this.onClick.bind(this);
    this.onClickError = this.onClickError.bind(this);
    this.onReset = this.onReset.bind(this);

    // Iniciamos el estado con un array con contenido
    this.state = initialState;
  }

  // Actualiza el estado con un valor válido
  onClick(e) {
    this.setState({ arr: ["qué tal?"] });
  }

  // Actualiza el estado provocando un error en Title
  onClickError(e) {
    this.setState({ arr: [] });
  }

  // Vuelve el estado al array inicial
  onReset() {
    this.setState(initialState);
  }

  render() {
    return (
      <div className="App">
        {/* El primer ErrorBoundary engloba toda la app */}
        <ErrorBoundary onReset={this.onReset} message="Ops! Algo ha salido mal">
          {/* Este ErrorBoundary sólo encapsula a Title */}
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
