import { createStore, combineReducers, applyMiddleware } from "redux";

// Reducers
import todos from './reducers/todos';
import user from './reducers/user';

// Middlewares
import logger from './middlewares/logger';

export default createStore(
  combineReducers({ todos, user }),
  applyMiddleware(logger)
);
