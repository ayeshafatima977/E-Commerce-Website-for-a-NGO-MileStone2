import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

/*=============================================
=            HeaderComponent            =
=============================================*/

const HeaderComponent = () => {
  return (
    <>
      <logo>Logo</logo>
      <h1>Make A DIFFERENCE</h1>
      <nav>
        <ul>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/events">EVENTS</Link>
          </li>
          <li>
            <Link to="/news">NEWS</Link>
          </li>
          <li>
            <Link to="/donation">DONATE</Link>
          </li>
          <li>
            <Link to="/shop">SHOP</Link>
          </li>
          <li>
            <Link to="/volunteer">VOLUNTEER</Link>
          </li>
          {/*!Parking lot item */}
        </ul>
        <ul>
          <li>
            <button
              onClick={() => {
                document
                  .getElementsByClassName("loginform-overlay")[0]
                  .classList.add("overlayShow");
              }}
            >
              LOGIN
            </button>
          </li>
          <li>
            {/* Here we are
            calling Child Component -Contact Us Form and adding a Class to
            overlay on the Header page which is the parent component-We use CSS
            to Show/Hide the overlay */}
            <button
              onClick={() => {
                document
                  .getElementsByClassName("contactform-overlay")[0]
                  .classList.add("overlayShow");
              }}
            >
              CONTACT
            </button>
          </li>
          <li>
            <Link to="/cart">
              CART
              <FaShoppingCart />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
/*=====  End of HeaderComponent  ======*/

export default HeaderComponent;
