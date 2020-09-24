import React from 'react';
import HamburgerMenuComponent from './Hamburger-menu';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../css/Sticky-header.css';

const StickyHeaderComponent = () => {
  return (
    <div className="sticky-header">
      <span>LOGO</span>
      <Link to="/cart" id="cart-button">Cart<FaShoppingCart /></Link>
      <span><HamburgerMenuComponent /></span>
    </div>
  );
};
export default StickyHeaderComponent;