import React from "react";
import { Link } from "react-router-dom";
import LandingPage from "../img/LandingPage.jpg";

const HeroSectionComponent = () => {
  return (
    <>
      <img src={LandingPage} alt="A Kid eating Mango" />
      <p>We Strive To Make A Difference for Those Kids In Need.</p>
      <Link to="/donation">DONATE</Link>
      {/* <input type="submit" id="donate" value="DONATE" ></input> */}
      <Link to="/shop">SHOP</Link>
      {/* <input type="submit" id="shop" value="SHOP"></input> */}
      <p>Each Item You Purchase Feeds a Hungry Kid.Shop For a Purpose Today.</p>
    </>
  );
};

export default HeroSectionComponent;
