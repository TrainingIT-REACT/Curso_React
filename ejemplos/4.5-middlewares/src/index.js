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
      <h1>4.5 Middlewares</h1>
      <UpdateName />
      <AddTodo test="true"/>
      <TodosList />
    </div>
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
