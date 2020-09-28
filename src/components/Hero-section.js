import React from "react";
import { Link } from "react-router-dom";
import "../css/Hero-section.css";
import UpdateBrowsingHistory from "../actions/Browsing-history";
import { useDispatch } from "react-redux";

/*=============================================
=            Hero Section Component            =
=============================================*/

const HeroSectionComponent = () => {
  const dispatch = useDispatch();
  return (
    <section>
      <div className="hero-section">
        <p id="mobile-landing-text">Make a difference. Donate today.</p>
        <p>
          We Strive To Make A Difference for Those Kids In Need.Empowering
          people to rise out of poverty.
        </p>
        <p>
          Each Item You Purchase Feeds a Hungry Kid.Shop For a Purpose Today.
        </p>

        {/* Donate and Shop Buttons Directly linked to Donation and Shop components */}

        <div id="shop-donate-btns">
          <Link
            to="/donation"
            id="hero-donate-link"
            onClick={() => {
              dispatch(UpdateBrowsingHistory("/donation"));
            }}
          >
            DONATE
          </Link>
          <Link
            to="/shop"
            id="hero-shop-link"
            onClick={() => {
              dispatch(UpdateBrowsingHistory("/shop"));
            }}
          >
            SHOP
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionComponent;
/*=====  End of Hero Section Component  ======*/
