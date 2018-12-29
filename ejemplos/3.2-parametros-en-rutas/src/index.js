import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./index.css";

// Componentes que se renderizarán en las distintas rutas
const Home = () => <p>
  Introduce tu nombre en la URL.
  Por ejemplo: <Link to="/hello/cris">/hello/cris</Link>
</p>;

// Este componente utiliza el parámetro para mostrarlo en la interfaz
const Hello = ({ match }) => <div>
  { match.params.name != null ?
    <p>Hola <b>{match.params.name}</b>!</p>
    : <Home />
  }
</div>;

const App = () => (
  <Router>
    <div className="App container">
      <h1>3.2 Parámetros en rutas</h1>
      <Route path="/" exact component={Home}/>
      <Route path="/hello" exact component={Hello}/>
      <Route path="/hello/:name([a-zA-Z]*)" component={Hello}/>
    </div>
  </Router>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
