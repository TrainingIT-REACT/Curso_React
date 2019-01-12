import types from '../actions/types';

// Estado inicial
const initialState = {
  list: []
}

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.ADD_TODO:
      return {
        list: [
          ...state.list, {
            todo: action.todo,
            complete: false,
          }
        ]
      };
    case types.COMPLETE_TODO:
      return {
        list: [
          ...state.list.slice(0, action.index),
          {
            ...state.list[action.index],
            complete: true,
          },
          ...state.list.slice(action.index + 1)
        ]
      }
    case types.CLEAR_TODOS:
      return {
        list: []
      }
    default:
      return state;
  }
}

export default reducer;
