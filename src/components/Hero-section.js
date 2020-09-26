import React from "react";
import { Link } from "react-router-dom";
import "../css/Hero-section.css";
import UpdateBrowsingHistory from "../actions/Browsing-history";
import { useDispatch } from "react-redux";

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
          We bring real and lasting change to the lives of the world’s most
          vulnerable children. For good.
        </p>
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
        <p>
          Each Item You Purchase Feeds a Hungry Kid.Shop For a Purpose Today.
        </p>
      </div>
    </section>
  );
};

export default HeroSectionComponent;
