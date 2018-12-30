import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

// Componente para contar TODOs
const TodoCounter = React.memo(function Counter({ todos }) {
  return <p>
    Total: <b>{todos.length}</b>
  </p>;
});

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    // Binds
    this.onAdd = this.onAdd.bind(this);

    // Referencias
    this.todoText = React.createRef();

    // Initialize the state
    this.state = {
      todos: []
    };
  }

  onAdd(e) {
    e.preventDefault();

    // Extraemos el elemento del estado
    let { todos } = this.state;

    // En vez de hacer push, usamos concat para clonar el array
    const newTodos = todos.concat([this.todoText.current.value]);

    // Limpiamos el form
    this.todoText.current.value = "";

    // Lo agregamos
    this.setState({ todos: newTodos });
  }

  render() {
    return (
      <div className="App container">
        <h1>1.9 Pure Components</h1>
        <p>
          <div>
            <label htmlFor="newTodo">Agrega un elemento a la lista</label>
            <input id="newTodo" type="text" ref={this.todoText} />
          </div>
          <button onClick={this.onAdd}>Add Todo</button>
          <TodoCounter todos={this.state.todos} />
          <ul>
            {this.state.todos.reverse().map((todo, i) => (
              <li key={i}>{todo}</li>
            ))}
          </ul>
        </p>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
