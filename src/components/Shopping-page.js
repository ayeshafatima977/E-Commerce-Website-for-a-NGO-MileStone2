/*cspell:disable*/
import React from "react";
import ShoppingLayoutComponent from "./Shopping-layout";
import ShoppingNavigationComponent from "./Shopping-navigation";
import BannerComponent from "./Banner";
import ContactFormComponent from "./Contact-form";
import ProductDetailsOverlayComponent from "./Product-details-overlay";

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
      <ContactFormComponent />
      {/* <ProductDetailsOverlayComponent productId="1" /> */}

      {
        /* /*=============================================
=            Messup ARea            =
=============================================*/
        <div className="product-overlay" id="trial"></div>

        /*=====  End of Messup ARea  ======*/
      }
    </>
  );
};

/*=====  End of Cart page React Component  ======*/

export default ShoppingPageComponent;
