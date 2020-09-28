/* 
Title: React / Redux / Router Project
Purpose:React / Redux / Router Assignment to demonstrate competence
Author: Scriptorce (Kenji, Dharmesh, Ayesha and Amr)
Date of last edit: september 28, 2020 9:00 am

==============================================================================================
Assignment: https://drive.google.com/file/d/1TkQkSrqbAsLseSicMVCrTzICGsslFF_G/view?usp=sharing
Trello board: https://trello.com/b/QuSHXICc
GitHub Repo: https://github.com/TECHCareers-by-Manpower/milestone-2-react-redux-router-project-scriptorce
*/

import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import KnowUsPageComponent from "./components/Knowus-page";
import NewsEventsPageComponent from "./components/News-events-page";
import CartPageComponent from "./components/Cart-page";
import LandingPageComponent from "./components/Landing-page";
import ShoppingPageComponent from "./components/Shopping-page";
import DonationPageComponent from "./components/Donation-page";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Hero-footer";
import ProductDetailsOverlayComponent from "./components/Product-details-overlay";
import GlobalStore from "./components/store";
import StickyHeaderComponent from "./components/Sticky-header";
import VolunteerApplicationPageComponent from "./components/Volunteer-application-page";
import ThankYouPage from "./components/Thankyou-page.js";
import VolunteerConfPage from "./components/Volunteer-confirmation-page";
ReactDOM.render(
  <Provider store={GlobalStore}>
    <Router>
      <HeaderComponent />
      <StickyHeaderComponent />
      <Route path="/thankyou" exact component={ThankYouPage} />{/* Order confirmation thank you page */}
      <Route path="/volnterconf" exact component={VolunteerConfPage} />{/* Volunteer application thank you page */}
      <Route path="/" exact component={LandingPageComponent} />{/* Landing page */}
      <Route path="/about" exact component={KnowUsPageComponent} /> {/* Know us page */}
      <Route path="/events" exact component={NewsEventsPageComponent} /> {/* Events and news page */}
      <Route path="/news" exact component={NewsEventsPageComponent} /> {/* Events and news page */}
      <Route path="/donation" exact component={DonationPageComponent} /> {/* Donation page */}
      <Route path="/shop" exact component={ShoppingPageComponent} />{/* Shopping page */}
      <Route path="/cart" exact component={CartPageComponent} /> {/* Shopping Cart page */}
      <Route path="/volunteer" exact component={VolunteerApplicationPageComponent}/> {/* Volunteer Application page */}
      <Route path="/product-quick-view" exact component={ProductDetailsOverlayComponent}/> {/* Products Page page */}
      <FooterComponent />
    </Router>
  </Provider>,
  document.getElementById("root")
);
