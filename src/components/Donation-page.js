/*cspell:disable*/
import React from "react";
import BannerComponent from "./Banner";
import DonationFormComponent from "./Donation-form";


/*=============================================
=        Donation page React Component        =
=============================================*/

/* Assuming routing would be in middle section between header/banner and footer */
const DonationPageComponent = () => {
  return (
    <>
      <BannerComponent />
      <DonationFormComponent />     
    </>
  );
};

/*=====  End of Donation page React Component  ======*/

export default DonationPageComponent;
