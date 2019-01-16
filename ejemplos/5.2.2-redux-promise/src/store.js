import { createStore, applyMiddleware } from "redux";
import promise from 'redux-promise-middleware';

// Reducers
import posts from './reducers/posts';

export default createStore(
  posts,
  applyMiddleware(promise())
);
