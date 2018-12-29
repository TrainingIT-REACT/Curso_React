import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Contexto de usuario
import UserContext from './contexts/user';

// Obtenemos el componente a renderizar y cualquier otro parámetro
const PrivateRoute = ({ component: Component, ...others }) => {
  return (
    <UserContext.Consumer>
      { ({ signedIn }) => {
        // Definimos la ruta utilizando el método render
        return <Route
          {...others}
          render={(props) =>
            // Renderizamos el componente con sus propiedades solo si el
            // usuario está identificado
            signedIn ? (
              <Component {...props} />
            ) : (
              // Redirigimos a /login en otro caso
              <Redirect
                to={{
                  pathname: '/login',
                  state: {
                    message: 'Por favor, haz login primero'
                  }
                }}
              />
            )
          }
        />
      }}
    </UserContext.Consumer>
  );
}

export default PrivateRoute;
