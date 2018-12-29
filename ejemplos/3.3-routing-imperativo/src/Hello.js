import React from 'react';

// Este componente utiliza el parámetro para mostrarlo en la interfaz
const Hello = ({ history, match }) => {
  const goBack = (e) => {
    // Evitamos que evento de navegación continue
    e.preventDefault();
    // Atrás!
    history.goBack();
  }
  return <div>
    <p>Hola <b>{match.params.name}</b>!</p>
    <button onClick={goBack}>Atrás</button>
  </div>;
}

export default Hello;
