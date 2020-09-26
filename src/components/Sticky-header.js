import React from 'react';
import HamburgerMenuComponent from './Hamburger-menu';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ContactFormComponent from "./Contact-form";
import LoginFormComponent from "./Login-form";
import '../css/Sticky-header.css';
import logo from '../img/logo.png';

const StickyHeaderComponent = () => {
  return (

    <div className="sticky-header">
      <Link className="logo" to="/"><img src={logo} alt="Logo" /></Link> 
      <Link to="/cart" id="cart-button"><span id="sticky-icon"><FaShoppingCart />&nbsp;CART</span></Link>
      <span><HamburgerMenuComponent /></span>
      <ContactFormComponent />
      <LoginFormComponent />
    </div>

  );
};
export default StickyHeaderComponent;