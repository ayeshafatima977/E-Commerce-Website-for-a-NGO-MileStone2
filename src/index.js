import React from "react";
import { createStore } from "redux";
import ReactDOM from "react-dom";
import "./css/index.css";
import { Provider } from "react-redux";
import combinedReducer from "./reducers";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ShoppingLayoutComponent from "./components/Shopping-layout";
import ShoppingNavigation from './components/Shopping-navigation';

const GlobalStore = createStore(
  combinedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <Provider store={GlobalStore}>
    <Router>
      <h1>Hello Scriptorce</h1>
      <Route path="/" exact />
      <Route path="/about" exact />
      <Route path="/events" exact />
      <Route path="/news" exact />
      <Route path="/donation" exact />
      <Route path="/shop" exact />
      <ShoppingLayoutComponent />
      <ShoppingNavigation />
      <Route path="/volunteer" exact />
      <Route path="/cart" exact />
    </Router> 
  </Provider>,
  document.getElementById("root")
);
