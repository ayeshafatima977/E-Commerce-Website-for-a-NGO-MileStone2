/*cspell:disable*/
import React from "react";
import BannerComponent from "./Banner";

/*=============================================
=         Know us page React Component        =
=============================================*/

/* Assuming routing would be in middle section between header/banner and footer */
const KnowUsPageComponent = () => {
  return (
    <>
      <BannerComponent />
      <h2> About Us</h2>
      <p>
        We envision a community where hunger does not exist, where all citizens
        have access to an adequate and nutritious supply of food.
      </p>
      <h2> Our Vision</h2>
      <p>
        Our guiding values of Commitment, Integrity, Service, Innovation,
        Responsiveness, and Fairness govern the manner in which we work
      </p>
      <h2> Our Mission</h2>
      <p>
        To be stewards in the collection of surplus and donated food for the
        effective distribution, free of charge, to people in need in our
        community while seeking solutions to the causes of hunger.
      </p>
      <h2> FAQ </h2>
      <ul>
        <li>
          <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit?</span>
          Labore omnis doloremque veritatis, nobis eos nostrum consequatur,
          temporibus laboriosam provident dignissimos illum ad reiciendis! Odit
          laborum accusamus dolorum odio fugiat vel.
        </li>
        <li>
          <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit?</span>
          Labore omnis doloremque veritatis, nobis eos nostrum consequatur,
          temporibus laboriosam provident dignissimos illum ad reiciendis! Odit
          laborum accusamus dolorum odio fugiat vel.
        </li>
        <li>
          <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit?</span>
          Labore omnis doloremque veritatis, nobis eos nostrum consequatur,
          temporibus laboriosam provident dignissimos illum ad reiciendis! Odit
          laborum accusamus dolorum odio fugiat vel.
        </li>
        <li>
          <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit?</span>
          Labore omnis doloremque veritatis, nobis eos nostrum consequatur,
          temporibus laboriosam provident dignissimos illum ad reiciendis! Odit
          laborum accusamus dolorum odio fugiat vel.
        </li>
      </ul>
    </>
  );
};

/*=====  End of Know us page React Component  ======*/

export default KnowUsPageComponent;
