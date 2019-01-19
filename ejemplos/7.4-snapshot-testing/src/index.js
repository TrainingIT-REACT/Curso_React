import React from "react";
import ReactDOM from "react-dom";

// Componentes
import UncontrolledForm from "./UncontrolledForm";

import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    // Bind del método
    this.onChange = this.onChange.bind(this);

    // Inicializamos el estado
    this.state = {
      value: "Angel"
    };
  }

  // Este método recibe cómo parámetro el evento sintético de React.
  // Podemos acceder al valor utilizando e.target.value
  onChange(e) {
    // e.persist();
    // this.setState(state => ({
    //   value: e.target.value
    // }));
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className="App container">
        <h1>7.2 Enzyme</h1>
        <div className="row">
          <div className="six columns">
            <form>
              <label htmlFor="#input">Name</label>
              <input id="input" type="text" value={this.state.value} onChange={this.onChange} />
              <p>
                Your name is: <b>{this.state.value}</b>
              </p>
            </form>
          </div>
          <div className="six columns">
            <UncontrolledForm />
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
