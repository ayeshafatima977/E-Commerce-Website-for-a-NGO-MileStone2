import React from "react";
import { createStore, combineReducers } from "redux";
import ReactDOM from "react-dom";
import "./css/index.css";
import { Provider } from "react-redux";
import combinedReducer from "./reducers";
import { BrowserRouter as Router, Route } from "react-router-dom";

const LayoutStore = createStore(
  combinedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={LayoutStore}>
    <Router>
      <h1>Hello Scriptorce</h1>
      <Route path="/" exact/>
      <Route path="/store" exact/>
      <Route path="/cart" exact/>
      <Route path="/donation" exact/>
    </Router>
  </Provider>,
  document.getElementById("root")
);
