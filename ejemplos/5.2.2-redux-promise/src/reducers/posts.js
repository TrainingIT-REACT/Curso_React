import { getPosts } from '../actions/posts';

// Estado inicial
const initialState = {
  isLoading: false,
  posts: [],
  error: false
}

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case String(getPosts.pending):
      // Activamos la flag de isLoading.
      // Eliminamos cualquier error anterior
      return {
        ...state,
        isLoading: true,
        error: false
      };
    case String(getPosts.fulfilled):
      // Almacenamos los articulos y reiniciamos
      // las flags
      return {
        ...state,
        isLoading: false,
        posts: action.payload,
        error: false
      }
    case String(getPosts.rejected):
      // Desactivamos la flag de carga y
      // activamos la de error
      return {
        ...state,
        isLoading: false,
        error: true
      }
    default:
      return state;
  }
}

export default reducer;
