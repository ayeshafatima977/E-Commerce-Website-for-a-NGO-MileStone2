/*cspell:disable*/
import React from "react";
import BannerComponent from "./Banner";
import ShoppingCartComponent from "./Shopping-cart";
/*=============================================
=            Cart page React Component        =
=============================================*/

/* Assuming routing would be in middle section between header/banner and footer */
const CartPageComponent = () => {
  return (
    <>
      <BannerComponent />
      <ShoppingCartComponent />
    </>
  );
};

/*=====  End of Cart page React Component  ======*/

export default CartPageComponent;
