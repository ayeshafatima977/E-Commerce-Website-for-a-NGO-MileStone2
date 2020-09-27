/*cspell:disable*/
import React from "react";
import ShoppingLayoutComponent from "./Shopping-layout";
import ShoppingNavigationComponent from "./Shopping-navigation";
import BannerComponent from "./Banner";
import "../css/Product-overlay.css";
import "../css/Shopping-page.css";

/*=============================================
=        Products page React Component        =
=============================================*/

/* Routing would be in middle section between header/banner and footer */
const ShoppingPageComponent = () => {
  return (
    <>
      <BannerComponent />
      <div id="shopping-page-layout">
        <ShoppingNavigationComponent />
        <ShoppingLayoutComponent />
      </div>
      <div
        className="product-details-overlay"
        id="product-details-overlay-div"
      ></div>
    </>
  );
};

/*=====  End of Cart page React Component  ======*/

export default ShoppingPageComponent;
