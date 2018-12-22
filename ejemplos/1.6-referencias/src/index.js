import React from "react";
import ReactDOM from "react-dom";

// Libería para copiar y pegar código
import gotem from "gotem";

// Ejemplos de textareas
import CodeAreaForward from './CodeAreaForward';
import CodeArea from './CodeArea';

import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    // Creamos las referencias
    this.codearea = React.createRef();
    this.codeareaforward = React.createRef();
    this.code = React.createRef();
    this.button = React.createRef();

    // Binds
    this.onChange = this.onChange.bind(this);

    // Código
    this.state = {
      code: '',
    }
  }

  componentDidMount() {
    // Hacemos focus de uno de los textareas
    this.codearea.current.focusTextArea();
    // this.codeareaforward.current.focus();

    // Inicializamos Gotem!
    gotem(this.button.current, this.code.current, {
      success: () => console.log("Bien!"),
      error: () => console.log("Error!")
    });
  }

  // Actualizamos el código
  onChange(e) {
    this.setState({
      code: e.target.value
    });
  }

  render() {
    return (
      <div className="App container">
        <h1>1.6 Referencias</h1>
        <div className="row">
          <div className="six columns">
            <h4>Referencia a componente</h4>
            <CodeArea ref={this.codearea} onChange={this.onChange}/>
          </div>
          <div className="six columns">
            <h4>ForwardRef</h4>
            <CodeAreaForward ref={this.codeareaforward} onChange={this.onChange}/>
          </div>
        </div>
        <pre ref={this.code}>
          <code>{this.state.code}</code>
        </pre>
        <p>
          <button ref={this.button}>Copy</button>
        </p>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
