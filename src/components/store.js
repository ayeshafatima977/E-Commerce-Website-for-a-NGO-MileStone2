import { createStore } from "redux";
import combinedReducer from "../reducers/Root-reducer";

/* Global state store using combined reducer from the root reducer file */

const GlobalStore = createStore(
  combinedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default GlobalStore;
