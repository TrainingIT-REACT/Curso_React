import React from "react";
import ReactDOM from "react-dom";

// Componentes
import Modal from './Modal';

// CSS
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    // Binds
    this.showModal = this.showModal.bind(this);
    this.onClose = this.onClose.bind(this);

    // Estado inicial
    this.state = {
      openModal: false
    };
  }

  // Cierra el modal. Este método se lo pasamos al modal
  onClose() {
    this.setState(state => ({
      openModal: false
    }));
  }

  // Mostramos el modal!
  showModal() {
    this.setState(state => ({
      openModal: true
    }));
  }

  render() {
    return (
      <div className="App container">
        <h1>1.7 Portals</h1>
        <div class="content">
          <Modal open={this.state.openModal} onClose={this.onClose}>
            <h4>Esto es un modal</h4>
            <p>Aquí puedes mostrar información</p>
          </Modal>
          <button onClick={this.showModal}>Mostrar modal</button>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
