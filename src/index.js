import React from "react";
import { createStore, combineReducers } from "redux";
import ReactDOM from "react-dom";
import "./css/index.css";
 import ContactFormComponent from "./components/Contact-form";
// import HeroSectionComponent from "./components/Hero-section";
import { Provider } from "react-redux";
import combinedReducer from "./reducers";
import { BrowserRouter as Router, Route } from "react-router-dom";

//import HeaderComponent from "./components/HeaderComponent";
//import FooterComponent from "./components/FooterComponent";
import ShoppingCartComponent from './components/Shopping-cart';
import DonationFormComponent from './components/Donation-form';

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
      <Route path="/volunteer" exact />
      <Route path="/cart" exact />
      <Route path="/donation" component ={DonationFormComponent} exact />
      <Route path="/shop" component ={ShoppingCartComponent} exact />
      </Router> 
      
  </Provider>,
  document.getElementById("root")
);
