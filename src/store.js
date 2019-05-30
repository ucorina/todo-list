import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import todoApp from "./reducers";

const enhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(todoApp, enhancers);

export default store;
