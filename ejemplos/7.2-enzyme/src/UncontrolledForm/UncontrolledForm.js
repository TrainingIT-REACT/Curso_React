import React from "react";

class UncontrolledForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    // Creamos la referencia para el input
    this.input = React.createRef();
    // Iniciamos el estado
    this.state = {
      value: "M"
    };
  }

  // En este caso el evento no incluye ninguna referencia al input
  // Tienes que utilizar this.input
  onSubmit(e) {
    this.setState({ value: this.input.current.value });
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="lastName">Last Name</label>
        <input
          defaultValue={this.state.value}
          id="lastName"
          type="text"
          ref={this.input}
        />
        <p>
          Your last name is: <b className="name">{this.state.value}</b>
        </p>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default UncontrolledForm;
