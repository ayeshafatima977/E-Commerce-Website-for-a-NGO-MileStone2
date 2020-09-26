/*cspell:disable*/
import React from "react";
import VolunteerFormComponent from "./Volunteer-form";
import BannerComponent from "./Banner";

/*=============================================
=         Landing page React Component        =
=============================================*/

const VolunteerApplicationPageComponent = () => {
  return (
    <>
      <BannerComponent />
      <VolunteerFormComponent />
    </>
  );
};

/*=====  End of Landing page React Component  ======*/

export default VolunteerApplicationPageComponent;
