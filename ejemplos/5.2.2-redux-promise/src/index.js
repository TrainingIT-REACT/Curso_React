import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";

// Store
import store from './store';

// Componentes
import Articles from './Articles';

// App
const App = () => (
  <Provider store={store}>
    <div className="App container">
      <h1>5.2.1 Thunk</h1>
      <Articles />
    </div>
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
