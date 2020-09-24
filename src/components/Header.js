import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

/*=============================================
=            HeaderComponent            =
=============================================*/

const HeaderComponent = () => {
  //   const ShowOverLay = (/* toShowFormName */) => {
  //     let callingForm;
  //     if (toShowFormName === "contact") {
  //       //   callingForm = document.getElementsByClassName("contactform-overlay");
  //     //   document.getElementsByClassName("contactform-overlay").display = "block";
  // console.log("I am here in Show Overlay");
  //     } else if (toShowFormName === "login") {
  //       callingForm = document.getElementsByClassName("loginform-overlay");
  //     }
  //     // callingForm.classList.add("form-overlay");

  //   };

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
            <a
              href=""
              //   onClick={ShowOverLay("login")}
              className="login-form-overlay"
            >
              LOGIN
            </a>
          </li>
          <li>
            <button
              
              onClick={() => {
                alert("I am here");
                console.log( document.getElementsByClassName("contactform-overlay"));
                document.getElementsByClassName("contactform-overlay").display =
                  "block";
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
