import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

// Reducers
import posts from './reducers/posts';

export default createStore(
  posts,
  applyMiddleware(thunk)
);
