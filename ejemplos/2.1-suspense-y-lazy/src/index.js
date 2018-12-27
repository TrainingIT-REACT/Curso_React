import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

// Ejemplos de textareas
const CodeArea = React.lazy(() => import('./CodeArea'));
// import CodeArea from './CodeArea';

class App extends React.Component {
  constructor(props) {
    super(props);

    // Creamos las referencias
    this.codearea = React.createRef();

    // Binds
    this.onChange = this.onChange.bind(this);

    // Código
    this.state = {
      code: '',
    }
  }

  // Actualizamos el código
  onChange(e) {
    this.setState({
      code: e.target.value
    });
  }

  render() {
    return (
      <React.Suspense fallback="Cargando la aplicación">
        <div className="App container">
          <h1>2.1 Suspense y Lazy</h1>
          <div className="row">
            <div className="six columns">
              <React.Suspense fallback="Cargando CodeArea">
                <CodeArea ref={this.codearea} onChange={this.onChange}/>
              </React.Suspense>
            </div>
          </div>
          <pre>
            <code>{this.state.code}</code>
          </pre>
        </div>
      </React.Suspense>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
