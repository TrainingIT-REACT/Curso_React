import React from "react";
import ReactDOM from "react-dom";

// Importamos los estilos
import "./index.css";

// Componentes
import ShowName from './ShowName';
import ShowNumber from './ShowNumber';

class App extends React.Component {
  constructor(props) {
    super(props);

    // Bind
    this.updateValue = this.updateValue.bind(this);
  }

  // Actualizamos el valor de los elementos en el localStorage!
  updateValue(key, value) {
    console.log(`Setting ${key} : ${value}`);
    localStorage.setItem(key, value);
  }

  render() {
    return <div className="App container">
      <h1>1.4 High Order Components (HOC)</h1>
      <div className="row">
        <div className="four columns">
          <label htmlFor="name">Nombre</label>
          <input id="name" placeholder="Cris" type="text"
            onChange={(e) => this.updateValue('name', e.target.value)} />
        </div>
        <div className="four columns">
          <label htmlFor="number">Número</label>
          <input id="number" type="number" placeholder="0"
            onChange={(e) => this.updateValue('number', e.target.value)} />
        </div>
      </div>
      <div className="row">
        <div className="four columns">
          <ShowName />
        </div>
        <div className="four columns">
          <ShowNumber />
        </div>
      </div>
    </div>
  }
};

// Renderizamos App
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
