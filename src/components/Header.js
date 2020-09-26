import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import ContactFormComponent from "./Contact-form";
import LoginFormComponent from "./Login-form";
import UpdateBrowsingHistory from "../actions/Browsing-history";
import { useDispatch } from "react-redux";
import "../css/Header.css";

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
        <div>
          <logo>
            <Link
              to="/"
              onClick={() => {
                dispatch(UpdateBrowsingHistory("/"));
              }}
            >
              <img
                src="https://via.placeholder.com/100x100"
                alt="place holder image"
              ></img>
            </Link>
          </logo>
          <h1>MAKE A DIFFERENCE</h1>
        </div>
        <nav>
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
            {/*!Parking lot item */}
            <li>
              <a
                className="right-side-buttons"
                onClick={() => {
                  document
                    .getElementsByClassName("loginform-overlay")[0]
                    .classList.add("overlayShow");
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
                className="right-side-buttons"
                onClick={() => {
                  document
                    .getElementsByClassName("contactform-overlay")[0]
                    .classList.add("overlayShow");
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
