import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./rootReducer";

// const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
export default store;
