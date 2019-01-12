import React from 'react';
import { connect } from 'react-redux';

// Action creators
import { completeTodo } from './actions/todos';

const TodosList = ({ name, list, completeTodo }) => {
  return <section>
    <h3>Lista de { name != null && name !== '' ? name : 'TODOs' }</h3>
    <ul>
      { list.map((todo, i) => {
        return <li
          className={ todo.complete ? "completed" : "" }
          key={i}
          onClick={() => completeTodo(i) }
        >
          { todo.todo }
        </li>
      }) }
    </ul>
  </section>;
}

const mapStateToProps = (state/*, otherProps */) => {
  return {
    list: state.todos.list,
    name: state.user.name
  }
}

const mapDispatchToProps = (dispatch/*, otherProps */) => ({
  completeTodo: (i) => dispatch(completeTodo(i)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosList);
