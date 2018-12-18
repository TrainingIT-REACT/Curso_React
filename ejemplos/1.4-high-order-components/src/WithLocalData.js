import React from 'react';

/**
 * Un HOC es una función que toma un componente (WrappedComponent) y devuelve
 * uno nuevo.
 */
const WithLocalData = (WrappedComponent, key) => {
  // Retornamos un nuevo componente
  return class LocalDataHOC extends React.Component {
    constructor(props) {
      super(props);

      // Bind del método
      this.updateValue = this.updateValue.bind(this);

      this.updateInterval = null;

      // Iniciamos el estado sin nada
      this.state = {
        value: null
      }
    }

    // Actualizamos el estado y nos suscribimos a los cambios
    componentDidMount() {
      this.setState({ value: localStorage.getItem(key) });
      // He creado este setInterval porque el evento de 'storage' para
      // suscribirse a sus cambios se lanza en todas las pestañas del
      // navegador excepto la que cambia el valor
      this.updateInterval = setInterval(() => {
        this.updateValue(localStorage.getItem(key));
      }, 150);
    }

    // Eliminamos el event listener al desmontar el componente
    componentWillUnmount() {
      clearInterval(this.updateInterval);
    }

    // Recibimos el evento y actualizamos el estado de React si la key coincide.
    updateValue(newValue) {
      console.log('Update value');
      if (newValue !== this.state.value) {
        this.setState({ value: newValue });
      }
    }

    // Renderizamos el componente que recibe la funcion con la nueva propiedad!
    render() {
      // Es importante pasar las propiedades que recibe este componente
      // al WrappedComponent ({ ...this.props })
      return <WrappedComponent { ...this.props } localData={this.state.value} />
    }
  }
}

export default WithLocalData;
