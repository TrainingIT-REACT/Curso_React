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
          <h1>9.3 Service Workers</h1>
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

// Comprobamos que el navegador lo soporte:
if ('serviceWorker' in navigator) {
  // Esperamos a que cargue la web
  window.addEventListener('load', () => {
    // Intentamos instalar el Service worker
    navigator.serviceWorker.register('/sw.js').then((registration) => {
      // Se ha registrado correctamente
      console.log('El service worker SW se ha registrado correctamente: ', registration.scope);
    }, (err) => {
      // registration failed :(
      console.log('El registro de SW ha fallado :(', err);
    });
  });
}
