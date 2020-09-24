import { combineReducers, createStore } from "redux";
import combinedReducer from "../reducers/Root-reducer";
const GlobalStore = createStore(
  combinedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
  export default GlobalStore;