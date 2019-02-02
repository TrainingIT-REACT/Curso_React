import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import "./index.css";

// Contexto
import UserContext from './contexts/user';

// Componentes
import Home from './Home';
import Login from './Login';
import Admin from './Admin';

// Componente para definir rutas privadas
import PrivateRoute from './PrivateRoute';

class App extends React.Component {
  constructor(props) {
    super(props);

    // Bind de los métodos
    this.updateUser = this.updateUser.bind(this);

    this.state = {
      signedIn: false,
      updateUser: this.updateUser,
    }
  }

  updateUser(signedIn) {
    this.setState(() => ({ signedIn }));
  }

  render() {
    return <Router>
      <UserContext.Provider value={this.state}>
        <div className="App container">
          <h1>9.4 Versionando el código</h1>
          <nav>
            <ul>
              <li><NavLink activeClassName="active" exact to="/">Inicio</NavLink></li>
              <li><NavLink activeClassName="active" to="/login">Login</NavLink></li>
              <li><NavLink activeClassName="active" to="/admin">Admin</NavLink></li>
            </ul>
          </nav>
          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}/>
          <PrivateRoute path="/admin" component={Admin}/>
        </div>
      </UserContext.Provider>
    </Router>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// Instalamos el service worker

// Definimos la variable que contendrá al service worker
let worker;
// Esta variable indica que ya se ha forzado la recarga
// de la página
let refreshing = false;

// Agregamos el evento on Click
document.getElementById('reload').addEventListener('click', () => {
  // Mandamos el mensaje al worker
  console.log("regarga");
  worker.postMessage({ action: 'skipWaiting' });
});

// Comprobamos que el navegador lo soporte:
if ('serviceWorker' in navigator) {
  // Esperamos a que cargue la web
  window.addEventListener('load', () => {
    // Intentamos instalar el Service worker
    navigator.serviceWorker.register('/sw.js').then((registration) => {
      // Se ha registrado correctamente
      console.log('El service worker SW se ha registrado correctamente: ', registration.scope);

      // Nos suscribimos al evento de nueva versión
      registration.addEventListener('updatefound', () => {
        // Obtenemos el nuevo worker
        worker = registration.installing;

        // Nos suscribimos a los cambios en su ciclo de vida
        worker.addEventListener('statechange', () => {
          // Comprobamos si ha habido un cambio
          if (worker.state === 'installed') {
            // Una vez que se ha instalado, mostramos el botón
            const updateApp = document.getElementById('updateApplication');
            updateApp.classList.add('show');
          }
        });
      });
    }, (err) => {
      // registration failed :(
      console.log('El registro de SW ha fallado :(', err);
    });

    // Nos suscribimos al evento de actualización
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!refreshing) {
        // Forzamos la recarga de la página
        window.location.reload();
        refreshing = true;
      }
    });
  });
}
