/*cspell:disable*/
import React from "react";
import ShoppingLayoutComponent from "./Shopping-layout";
import ShoppingNavigationComponent from "./Shopping-navigation";
import BannerComponent from './Banner';

/*=============================================
=        Products page React Component        =
=============================================*/

/* Assuming routing would be in middle section between header/banner and footer */
const ShoppingPageComponent = () => {
  return (
    <>
      <BannerComponent />
      <ShoppingLayoutComponent />
      <ShoppingNavigationComponent />
    </>
  );
};

/*=====  End of Cart page React Component  ======*/

export default ShoppingPageComponent;
