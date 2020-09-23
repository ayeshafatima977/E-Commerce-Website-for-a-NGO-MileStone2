import React from "react";
import { createStore } from "redux";
import ReactDOM from "react-dom";
import "./css/index.css";
import { Provider } from "react-redux";
import combinedReducer from "./reducers";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ShoppingLayoutComponent from "./components/Shopping-layout";
import ShoppingNavigation from './components/Shopping-navigation';
 import ContactFormComponent from "./components/Contact-form";
// import HeroSectionComponent from "./components/Hero-section";

//import HeaderComponent from "./components/HeaderComponent";
//import FooterComponent from "./components/FooterComponent";
import ShoppingCartComponent from './components/Shopping-cart';
import DonationFormComponent from './components/Donation-form';
import KnowUsPageComponent from './components/Knowus-page';
import NewsEventsPageComponent from './components/News-events-page';
import CartPageComponent from './components/Cart-page';
import LandingPageComponent from './components/Landing-page';
import ShoppingPageComponent from './components/Shopping-page';
import DonationPageComponent from './components/Donation-page';

const GlobalStore = createStore(
  combinedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <Provider store={GlobalStore}>
    <Router>
      <h1>Hello Scriptorce</h1>

      <Route path="/" exact component ={LandingPageComponent}/>
      <Route path="/about" exact component={KnowUsPageComponent}/>
      <Route path="/events" exact component={NewsEventsPageComponent}/>
      <Route path="/news" exact component={NewsEventsPageComponent}/>
      <Route path="/donation" exact component={DonationPageComponent}/>
      <Route path="/shop" exact component={ShoppingPageComponent}/>
      <Route path="/volunteer" exact />
      <Route path="/contact" exact component={ContactFormComponent} /> {/*! This line will be removed after we implement CSS overlay */}
      <Route path="/cart" exact component={CartPageComponent}/>
    </Router> 
  </Provider>,
  document.getElementById("root")
);
