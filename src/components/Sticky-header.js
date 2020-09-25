import React from 'react';
import HamburgerMenuComponent from './Hamburger-menu';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ContactFormComponent from "./Contact-form";
import LoginFormComponent from "./Login-form";
import '../css/Sticky-header.css';

const StickyHeaderComponent = () => {
  return (
    <div className="sticky-header">
      <span>LOGO</span>
      <Link to="/cart" id="cart-button"><span id="sticky-icon"><FaShoppingCart />&nbsp;CART</span></Link>
      <span><HamburgerMenuComponent /></span>
      <ContactFormComponent />
      <LoginFormComponent />
    </div>
  );
};
export default StickyHeaderComponent;