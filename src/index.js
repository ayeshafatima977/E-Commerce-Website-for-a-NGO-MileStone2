import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import KnowUsPageComponent from './components/Knowus-page';
import NewsEventsPageComponent from './components/News-events-page';
import CartPageComponent from './components/Cart-page';
import LandingPageComponent from './components/Landing-page';
import ShoppingPageComponent from './components/Shopping-page';
import DonationPageComponent from './components/Donation-page';
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Hero-footer";
import ProductDetailsOverlayComponent from "./components/Product-details-overlay";
import GlobalStore from "./components/store"
import HamburgerMenuComponent from "./components/Hamburger-menu";


ReactDOM.render(
  <Provider store={GlobalStore}>
    <Router>
      <h1>Hello Scriptorce</h1>
      <HeaderComponent />
      <Route path="/" exact component={LandingPageComponent} />
      <Route path="/about" exact component={KnowUsPageComponent} />
      <Route path="/events" exact component={NewsEventsPageComponent} />
      <Route path="/news" exact component={NewsEventsPageComponent} />
      <Route path="/donation" exact component={DonationPageComponent} />
      <Route path="/shop" exact component={ShoppingPageComponent} />
      <Route path="/volunteer" exact component={HamburgerMenuComponent} />
     {/*  <Route path="/contact" exact component={ContactFormComponent} /> */} {/*! This line will be removed after we implement CSS overlay */}
      <Route path="/cart" exact component={CartPageComponent}/>
      <Route path="/product-quick-view" exact component={ProductDetailsOverlayComponent} />
      <FooterComponent />
    </Router>
  </Provider>,
  document.getElementById("root")
);
