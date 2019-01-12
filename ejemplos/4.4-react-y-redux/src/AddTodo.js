import React, { createRef } from 'react';
import { connect } from 'react-redux';

// Acciones
import { addTodo } from './actions/todos';

const AddTodo = ({ addTodo }) => {
  const input = createRef();

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(input.current.value);
    input.current.value = '';
  }

  return <form onSubmit={onSubmit}>
    <label htmlFor="add">¿Qué tienes que hacer hoy?</label>
    <input id="add" type="text" ref={input} placeholder="Ir a la compra, salir, ..." />
    <button>Agregar un TODO</button>
  </form>
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: (content) => dispatch(addTodo(content)),
});

export default connect(
  () => {},
  mapDispatchToProps,
)(AddTodo);
