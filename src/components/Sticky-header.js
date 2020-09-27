import React from "react";
import HamburgerMenuComponent from "./Hamburger-menu";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import ContactFormComponent from "./Contact-form";
import LoginFormComponent from "./Login-form";
import "../css/Sticky-header.css";
import logo from "../img/logo-final.png";

/* Sticky header for mobile layout main site navigation menu */
const StickyHeaderComponent = () => {
  return (
    <div className="sticky-header">
      <Link className="logo" to="/">
        <img src={logo} alt="Image of charity organization logo" />
      </Link>
      <Link to="/cart" id="cart-button">
        <span id="sticky-icon">
          <FaShoppingCart />
          &nbsp;Cart
        </span>
      </Link>
      <span>
        <HamburgerMenuComponent />
      </span>
    </div>
  );
};
export default StickyHeaderComponent;
