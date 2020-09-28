import React from "react";
import "../css/Hamburger-menu.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

/* Hamburger menu for the sticky mobile view */
const HamburgerMenuComponent = () => {
  /* Function to add and remove the hide class to the overlay menu.*/
  const ShowOverlayMenu = (e) => {
    const overlayMenu = document.getElementById("menu");
    if (e.checked) {
      overlayMenu.classList.remove("hide");
    } else {
      overlayMenu.classList.add("hide");
    }
  };

  return (
    <>
      <div className="menu-wrap">
        <span>
          <input
            type="checkbox"
            className="toggler"
            onChange={(e) => {
              ShowOverlayMenu(e.target);
            }}
          />
          <GiHamburgerMenu />
        </span>
      </div>
      <div id="menu" className="hide">
        <ul>
          <li
            onClick={() => {
              document
                .getElementsByClassName("loginform-overlay")[0]
                .classList.add("overlayShow");
            }}
          >
            Login
          </li>
          <li>
            <Link to="/shop" onClick={ShowOverlayMenu}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="/donation" onClick={ShowOverlayMenu}>
              Donate
            </Link>
          </li>
          <li>
            <span
              onClick={() => {
                document
                  .getElementsByClassName("contactform-overlay")[0]
                  .classList.add("overlayShow");
              }}
            >
              Contact
            </span>
          </li>
          <li>
            <Link to="/about" onClick={ShowOverlayMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/events" onClick={ShowOverlayMenu}>
              Events
            </Link>
          </li>
          <li>
            <Link to="/news" onClick={ShowOverlayMenu}>
              News
            </Link>
          </li>
          <li>
            <Link to="/volunteer" onClick={ShowOverlayMenu}>
              Volunteer
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HamburgerMenuComponent;
