import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";

// Store
import store from './store';

// Componentes
import TodosList from './TodosList';
import AddTodo from './AddTodo';
import UpdateName from './UpdateName';

// App
const App = () => (
  <Provider store={store}>
    <div className="App container">
      <h1>4.3 Reducers y Acciones</h1>
      <UpdateName />
      <AddTodo />
      <TodosList />
    </div>
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
