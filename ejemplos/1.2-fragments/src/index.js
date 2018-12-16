import React, { Fragment } from "react";
import ReactDOM from "react-dom";

// Importamos los estilos
import "./index.css";

// Otros componentes
import ListItems from './ListItems';
import Glossary from './Glossary';

// List de términos para el glosario
const terms = [
  {
    term: "React",
    definition: "ajhduiqwhkdjahsjd"
  },
  {
    term: "Redux",
    definition: "akjshdkjqwd"
  }
];

const App = () => (
  <div className="container">
    <h1>1.2 Fragments</h1>
    <ul>
      <ListItems />
      <li>Esto es un test</li>
    </ul>
    <ul>
      <ListItems />
      <li>Otro test</li>
    </ul>
    <Glossary terms={terms} />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
