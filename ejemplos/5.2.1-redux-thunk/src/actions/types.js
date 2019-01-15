// Definimos la lista de acciones
const actions = [
  // Todos
  "POSTS_LOADING",
  "POSTS_LOADED",
  "POSTS_ERROR",
];

// Las convertimos en un objeto
const actionTypes = {};
actions.forEach(action => {
  actionTypes[action] = action;
});

export default actionTypes;
