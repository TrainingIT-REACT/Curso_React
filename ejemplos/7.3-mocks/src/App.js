import React from 'react';

// App
class App extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      content: '',
      loading: false,
      response: ''
    }
  }

  onChange(key, e) {
    this.setState({
      [key]: e.target.value
    });
  }

  async onSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true, response: '' });
    try {
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'POST',
          body: JSON.stringify({
            title: this.state.title,
            body: this.state.content,
            userId: 1
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        }
      );
      const json = await res.json();
      this.setState({
        response: `Guardado correctamente! ID: ${json.id}`,
        loading: false,
      });
    } catch (err) {
      this.setState({
        response: 'Error guardando el artículo',
        loading: false,
      });
    }
  }

  render() {
    return <div className="App container">
      <h1>7.3 Mocks</h1>
      <form onSubmit={this.onSubmit}>
        <div>
          <label htmlFor="title">Título</label>
          <input id="title" type="text" value={this.state.title}
            onChange={e => this.onChange('title', e)} disabled={this.state.loading} />
        </div>
        <div>
          <label htmlFor="content">Contenido</label>
          <textarea id="content" type="text" value={this.state.content}
            onChange={e => this.onChange('content', e)} disabled={this.state.loading} />
        </div>
        <input type="submit" value="Enviar" disabled={this.state.loading} />
      </form>
      <p>{this.state.response}</p>
    </div>
  }
};

export default App;
