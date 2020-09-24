import React from "react";
import "../css/Hamburger-menu.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';

const HamburgerMenuComponent = () => {
  const ShowOverlayMenu = (e) => {
    const overlayMenu = document.getElementById("menu")
    if (e.checked) {
      overlayMenu.classList.remove("hide");
    }
    else {
      overlayMenu.classList.add("hide");
    }
  };

  return (
    <>
      <div class="menu-wrap">
        <input type="checkbox" class="toggler" onChange={(e) => {ShowOverlayMenu(e.target)}} />
        <GiHamburgerMenu size="40px"/>
      </div>
      <div id="menu" className="hide">
        <ul>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/donation">Donate</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/volunteer">Volunteer</Link></li>
        </ul>
      </div>
    </>
  );
};

export default HamburgerMenuComponent;
