import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);

    // Binds
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Estado
    this.state = {
      name: ''
    }
  }

  onChange(e) {
    this.setState({ name: e.target.value });
  }

  onSubmit(e) {
    // Evitamos que evento de submit continue
    e.preventDefault();
    // Redirigimos al usuario a la ruta de destino!
    this.props.history.push(`/hello/${this.state.name}`, { some: 'test' });
  }

  render() {
    return <form onSubmit={this.onSubmit}>
      <div>
        <label htmlFor="name">Introduce tu nombre</label>
        <input id="name" type="text" value={this.state.name}
          onChange={this.onChange} placeholder="Cris" />
      </div>
      <button type="submit">Dime hola!</button>
    </form>;
  }
}

export default Home;
