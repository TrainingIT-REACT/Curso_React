import React from "react";

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    // Hacemos el bind de los métodos
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    // Creamos la referencia
    this.fileInput = React.createRef();
  }

  printFile() {
    console.log(
      `Fichero seleccionado - ${this.fileInput.current.files[0].name}`
    );
  }

  // Imprimimos el fichero cuando el usuario envíe el formulario
  onSubmit(e) {
    e.preventDefault();
    this.printFile();
  }

  // También imprimimos el fichero cuando el usuario lo agregue
  onChange() {
    this.printFile();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>Upload file:</label>
        <input type="file" ref={this.fileInput} onChange={this.onChange} />
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default FileInput;
