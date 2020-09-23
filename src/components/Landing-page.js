/*cspell:disable*/
import React from "react";
import HeroSectionComponent from "./Hero-section";
import ContactFormComponent from "./Contact-form";
import "../css/Contact-form.css";

/*=============================================
=         Landing page React Component        =
=============================================*/

const LandingPageComponent = () => {
  return (
    <>
      <HeroSectionComponent />
      <ContactFormComponent />
    </>
  );
};

/*=====  End of Landing page React Component  ======*/

export default LandingPageComponent;
