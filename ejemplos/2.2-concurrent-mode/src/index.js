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

  componentDidMount() {
    console.timeLog('mount');
  }

  // Actualizamos el código
  onChange(e) {
    this.setState({
      code: e.target.value
    });
  }

  render() {
    console.timeLog('render');
    return (
      <div className="App container">
        <h1>2.2 Concurrent Mode</h1>
        <div className="row">
          <div className="six columns">
            <React.Suspense maxDuration={150} fallback="Cargando CodeArea">
              <CodeArea ref={this.codearea} onChange={this.onChange}/>
            </React.Suspense>
          </div>
        </div>
        <pre>
          <code>{this.state.code}</code>
        </pre>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
