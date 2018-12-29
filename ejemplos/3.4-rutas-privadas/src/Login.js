import React from 'react';

// Contexto de usuario
import UserContext from './contexts/user';

// Este componente utiliza el parámetro para mostrarlo en la interfaz
const Login = ({ location }) => {
  return <UserContext.Consumer>
    {({ signedIn, updateUser }) => {
      return <div>
        { signedIn ? (
          <p>Ya puedes ir al panel de administración! 👆</p>
        ) : (
          <>
            <button onClick={() => updateUser(true)}>Login</button>
            { (location.state && location.state.message) &&
              <p>
                { location.state.message }
              </p>
            }
          </>
        )}
      </div>
    }}
  </UserContext.Consumer>;
}

export default Login;
