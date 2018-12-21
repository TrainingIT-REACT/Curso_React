import React from "react";
import ReactDOM from "react-dom";

// Importamos los estilos
import "./index.css";

// Contexto
import { AccessibilityContext } from './contexts/Accesibility';

// Componentes
import Definition from './Definition';
import FontSizeSelector from './FontSizeSelector';

class App extends React.Component {
  constructor(props) {
    super(props);

    // Bind
    this.updateFontSize = this.updateFontSize.bind(this);

    // El estado se corresponde con el Contexto:
    this.state = {
      fontSize: 16,
      updateFontSize: this.updateFontSize,
    };
  }

  // Definimos el método para actualizar el valor
  updateFontSize(fontSize) {
    this.setState(state => ({ fontSize }));
  }

  render() {
    return <div className="App container">
      <AccessibilityContext.Provider value={this.state}>
        <header className="header">
          <div className="header__title">
            <h1>1.5 Context API</h1>
          </div>
          <div className="header__selector">
            <FontSizeSelector />
          </div>
        </header>
        <div className="row">
          <Definition />
        </div>
      </AccessibilityContext.Provider>
    </div>
  }
};

// Renderizamos App
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
