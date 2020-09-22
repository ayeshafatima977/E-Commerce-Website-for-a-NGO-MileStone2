import React from "react";
import { createStore, combineReducers } from "redux";
import ReactDOM from "react-dom";
import "./css/index.css";
import ContactFormComponent from "./components/Contact-form";
import HeroSectionComponent from "./components/Hero-section";
import { Provider } from "react-redux";
import combinedReducer from "./reducers";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ShoppingLayoutComponent from "./components/Shopping-layout";

const GlobalStore = createStore(
  combinedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <Provider store={GlobalStore}>
    <Router>
      <h1>Hello Scriptorce</h1>
      <Route path="/" exact >
        <HeroSectionComponent />
        <ContactFormComponent />
      </Route>
      <Route path="/about" exact >
      </Route>
      <Route path="/events" exact >
      </Route>
      <Route path="/news" exact >
      </Route>
      <Route path="/donation" exact >
      </Route>
      <Route path="/shop" exact >
        <ShoppingLayoutComponent />
      </Route>
      <Route path="/volunteer" exact >
      </Route>
      <Route path="/cart" exact >
      </Route>
    </Router>
  </Provider>,
  document.getElementById("root")
);
