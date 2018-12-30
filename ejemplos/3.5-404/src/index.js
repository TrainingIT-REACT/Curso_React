import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";

import "./index.css";

// Componentes
const Home = () => <p>Página de inicio</p>;
const Test = () => <p>Test de rutas anidadas!</p>;
const Example = () => (
  <>
    <p>Otra página de ejemplo</p>
    <Route path="/example/test" component={Test} />
  </>
);
const NotFound = () => <p>Ups! Parece que aquí no hay nada (404)</p>;

const App = () => (
  <Router>
    <div className="App container">
      <h1>3.5 404</h1>
      <nav>
        <ul>
          <li><NavLink activeClassName="active" exact to="/">Inicio</NavLink></li>
          <li><NavLink activeClassName="active" to="/example">Ejemplo</NavLink></li>
          <li><NavLink activeClassName="active" to="/example/test">Rutas anidadas</NavLink></li>
          <li><NavLink activeClassName="active" to="/not-found">No existe!</NavLink></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/example" component={Example}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </Router>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
