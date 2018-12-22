import React from "react";
import ReactDOM from "react-dom";

import "./Modal.css";

// Obtenemos la referencia del nodo usando getElementByID
const modalNode = document.getElementById("modal");

class Modal extends React.Component {
  constructor(props) {
    super(props);

    // Para tener más control sobre qué se muestra, vamos
    // a crear un nuevo DIV que incluir que será la raíz del
    // contenido
    this.el = document.createElement("div");
    // Agregamos un par de clases por defecto
    this.el.classList.add("hidden");
  }

  // Agregamos el nodo que hemos creado como descendiente de #modal
  componentDidMount() {
    modalNode.appendChild(this.el);
  }

  // Cuando no haga falta el componente, borramos el nodo que hemos
  // creado
  componentWillUnmount() {
    modalNode.removeChild(this.el);
  }

  render() {
    // Si la propiedad open es false, no mostramos nada y
    // agregamos la clase hidden al nodo que hemos creado
    if (this.props.open !== true) {
      this.el.classList.add("hidden");
      return null;
    }

    // Eliminamos la propiedad hidden y mostramos el contenido
    this.el.classList.remove("hidden");

    // Utilizamos Portal para montar este elemento en el nodo que hemos creado
    // dentro de #modal
    return ReactDOM.createPortal(
      <div>
        <div className="background" onClick={this.props.onClose}/>
        <div className="modal">
          <button className="modal__close" onClick={this.props.onClose}>&times;</button>
          {this.props.children}
        </div>
      </div>,
      this.el
    );
  }
}

export default Modal;
