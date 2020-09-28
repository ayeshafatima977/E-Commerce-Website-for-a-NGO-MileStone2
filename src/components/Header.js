import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import ContactFormComponent from "./Contact-form";
import LoginFormComponent from "./Login-form";
import UpdateBrowsingHistory from "../actions/Browsing-history";
import { useDispatch } from "react-redux";
import "../css/Header.css";
import Logo from "../img/logo-final.png";

/*=============================================
=            HeaderComponent            =
=============================================*/

const HeaderComponent = () => {
  const dispatch = useDispatch();
  dispatch(UpdateBrowsingHistory("/"));
  return (
    <>
      <ContactFormComponent />
      <LoginFormComponent />
      <section className="common-header">
        {/* Top section for logo and slogan header */}
        <div className="logo-container">
          <div>
            <Link
              id="logo"
              to="/"
              onClick={() => {
                dispatch(UpdateBrowsingHistory("/"));
              }}
            >
              <img src={Logo} alt="logo with Shopkidos Text on it" />
            </Link>
          </div>
          <h1>MAKE A DIFFERENCE</h1>
        </div>
        <nav>
          {/* Navigation section with site routs */}
          <ul>
            <li>
              <Link
                to="/about"
                onClick={() => {
                  dispatch(UpdateBrowsingHistory("/about"));
                }}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to="/events"
                onClick={() => {
                  dispatch(UpdateBrowsingHistory("/events"));
                }}
              >
                EVENTS
              </Link>
            </li>
            <li>
              <Link
                to="/news"
                onClick={() => {
                  dispatch(UpdateBrowsingHistory("/news"));
                }}
              >
                NEWS
              </Link>
            </li>
            <li>
              <Link
                to="/donation"
                onClick={() => {
                  dispatch(UpdateBrowsingHistory("/news"));
                }}
              >
                DONATE
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                onClick={() => {
                  dispatch(UpdateBrowsingHistory("/news"));
                }}
              >
                SHOP
              </Link>
            </li>
            <li>
              <Link
                to="/volunteer"
                onClick={() => {
                  dispatch(UpdateBrowsingHistory("/news"));
                }}
              >
                VOLUNTEER
              </Link>
            </li>
            <li>
              <a
                href="#top"
                className="right-side-buttons"
                onClick={() => {
                  document
                    .getElementsByClassName("loginform-overlay")[0]
                    .classList.add("overlayShow");
                  dispatch(UpdateBrowsingHistory("/loginform"));
                }}
              >
                LOGIN
              </a>
            </li>
            <li>
              {/* Here we are
            calling Child Component -Contact Us Form and adding a Class to
            overlay on the Header page which is the parent component-We use CSS
            to Show/Hide the overlay */}
              <a
                href="#top"
                className="right-side-buttons"
                onClick={() => {
                  document
                    .getElementsByClassName("contactform-overlay")[0]
                    .classList.add("overlayShow");
                  dispatch(UpdateBrowsingHistory("/contactform"));
                }}
              >
                CONTACT
              </a>
            </li>
            <li>
              <Link
                className="right-side-buttons"
                to="/cart"
                onClick={() => {
                  dispatch(UpdateBrowsingHistory("/cart"));
                }}
              >
                <span>
                  <FaShoppingCart />
                  &nbsp;CART
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};
/*=====  End of HeaderComponent  ======*/

export default HeaderComponent;
