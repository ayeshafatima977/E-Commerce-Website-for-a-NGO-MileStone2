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
        <h3>
          Love is what drives us. And there’s no limit to what love can do.
        </h3>
        Going to the ends. Where no one else goes. Because love can make the
        greatest impact in the hardest places to be a child. We’re a global
        relief, development and advocacy organization. We partner with children,
        families and their communities to reach their full potential by tackling
        the causes of poverty and injustice.
      </p>
      <p>
        Empowering people to rise out of poverty. We bring real and lasting
        change to the lives of the world’s most vulnerable children. For good.
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
          <span> Is child sponsorship an effective way to help?</span>
          Yes. When you sponsor a child, you help bring long-term changes to
          that child’s community, creating a happier and healthier environment
          in which to grow up.
        </li>
        <li>
          <span> Is the money I give to World Vision handled responsibly?</span>
          Yes. We account for every dollar. Of the funds given to World Vision
          in 2016, 80.5% went directly to programs that help children and
          families, 13.5% went to fundraising, and 6% was allocated to
          administration. Audits are conducted regularly by external firms to
          verify the accuracy of our financial reporting. To learn more about
          how donations are used, check out our latest Annual Report.
        </li>
        <li>
          <span> Can I adopt or bring a sponsored child to Canada?</span>
          No. We do not organize adoption or bringing children to Canada for
          visits. Your help to improve a child’s quality of life and
          self-reliance in their own countries and cultures has deeper value
          than moving them to a foreign country.
        </li>
        <li>
          <span>What is my Expected Delivery Timing For Receiving Order?</span>
          We will send your items by mail, within 7 to 10 business days. There
          is no cost charged to you for shipping and handling.
        </li>
      </ul>

    </>
  );
};

/*=====  End of Know us page React Component  ======*/

export default KnowUsPageComponent;
