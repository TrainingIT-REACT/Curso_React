import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import "./index.css";

// Componentes que se renderizarán en las distintas rutas
const Home = () => <p>Esta es la página principal</p>;

// Rutas anidadas
const AboutMe = () => <p>Mi nombre es Ángel!</p>;
const AboutCourse = () => <p>Bienvenido o Bienvenida a este curso de React!</p>;

// Este componente define rutas anidadas
const About = ({ match }) => <div>
  <p>Este ejemplo trata sobre React Router</p>
  <p>
    <NavLink activeClassName="active" to={`${match.url}/me`}>Sobre mi</NavLink>
    {' '}
    <NavLink activeClassName="active" to={`${match.url}/course`}>Sobre este curso</NavLink>
  </p>
  <Route path={`${match.url}/me`} component={AboutMe}/>
  <Route path={`${match.url}/course`} component={AboutCourse}/>
</div>;

const App = () => (
  <Router>
    <div className="App container">
      <h1>3.1 React Router</h1>
      <p>
        <NavLink exact activeClassName="active" to="/">Inicio</NavLink>
        {' '}
        <NavLink activeClassName="active" to="/about">Este ejemplo</NavLink>
      </p>
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
