/*cspell:disable*/
import React from "react";
import ShoppingLayoutComponent from "./Shopping-layout";
import ShoppingNavigationComponent from "./Shopping-navigation";

/*=============================================
=        Products page React Component        =
=============================================*/

/* Assuming routing would be in middle section between header/banner and footer */
const ShoppingPageComponent = () => {
  return (
    <>
      <ShoppingLayoutComponent />
      <ShoppingNavigationComponent />
    </>
  );
};

/*=====  End of Cart page React Component  ======*/

export default ShoppingPageComponent;
