import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

// App
const App = () => (
  <div className="App container">
    <header>
      <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/about">Sobre este sitio</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <h1>6.1 Accesibilidad</h1>
      <p>
        Por favor, rellena el siguiente formulario para continuar:
      </p>
      <form>
        <div className="row">
          <div className="columns six">
            <label htmlFor="name">Nombre</label>
            <input id="name" type="text" placeholder="Ángel, María, Cris, etc." />
          </div>
          <div className="columns six">
            <label htmlFor="last_name">Apellidos</label>
            <input id="last_name" type="text" placeholder="García, Rodríguez, etc." />
          </div>
        </div>
        <div className="row">
          <div className="columns six">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="email@example.com" />
          </div>
          <div className="columns six">
            <label htmlFor="title">Título</label>
            <input id="title" type="text" placeholder="Desarrollador, Diseñador, etc." />
          </div>
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </main>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
