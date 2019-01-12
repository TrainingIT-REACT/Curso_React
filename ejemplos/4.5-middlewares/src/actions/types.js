// Definimos la lista de acciones
const actions = [
  // Todos
  "ADD_TODO",
  "COMPLETE_TODO",
  "CLEAR_TODOS",

  // Usuarios
  "UPDATE_NAME"
];

// Las convertimos en un objeto
const actionTypes = {};
actions.forEach(action => {
  actionTypes[action] = action;
});

export default actionTypes;
