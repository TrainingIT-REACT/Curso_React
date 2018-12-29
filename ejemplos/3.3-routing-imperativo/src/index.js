import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./index.css";

// Componente
import Home from './Home';
import Hello from './Hello';

const App = () => (
  <Router>
    <div className="App container">
      <h1>3.3 Routing imperativo</h1>
      <Route path="/" exact component={Home}/>
      <Route path="/hello" exact component={Hello}/>
      <Route path="/hello/:name([a-zA-Z]*)" component={Hello}/>
    </div>
  </Router>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
