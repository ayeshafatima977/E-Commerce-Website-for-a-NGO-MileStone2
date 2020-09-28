import React from "react";
import BannerComponent from "./Banner";
import "../css/Knowus-page.css";

/*=============================================
=         Know us page React Component        =
=============================================*/

const KnowUsPageComponent = () => {
  return (
    <>
      <BannerComponent />
      <article id="know-us-article">
        {/*=====================About Us ========================*/}

        <section className="know-us-section">
          <div id="about-us-heading-container">
            <div></div>
            <h1 id="about-us-heading"> About Us</h1>
          </div>

          <h2>
            Love is what drives us. And there’s no limit to what love can do.
          </h2>
          <p>
            Going to the ends. Where no one else goes. Because love can make the
            greatest impact in the hardest places to be a child. We’re a global
            relief, development and advocacy organization. We partner with
            children, families and their communities to reach their full
            potential by tackling the causes of poverty and injustice.
          </p>
          <p>
            Empowering people to rise out of poverty. We bring real and lasting
            change to the lives of the world’s most vulnerable children. For
            good.
          </p>
        </section>
        {/*=====================Vision ========================*/}
        <section className="know-us-section">
          <div id="vision-heading-container">
            <div></div>
            <h1 id="vision-heading">Vision</h1>
          </div>
          <p>
            Our guiding values of Commitment, Integrity, Service, Innovation,
            Responsiveness, and Fairness govern the manner in which we work. Our
            guiding values of Commitment, Integrity, Service, Innovation,
            Responsiveness, and Fairness govern the manner in which we work. Our
            guiding values of Commitment, Integrity, Service, Innovation,
            Responsiveness, and Fairness govern the manner in which we work.
          </p>
          <p>
            Our guiding values of Commitment, Integrity, Service, Innovation,
            Responsiveness, and Fairness govern the manner in which we work.
          </p>
        </section>
        {/*=====================Mission========================*/}
        <section className="know-us-section">
          <div id="mission-heading-container">
            <div></div>
            <h1 id="mission-heading">Mission</h1>
          </div>

          <p>
            To be stewards in the collection of surplus and donated food for the
            effective distribution, free of charge, to people in need in our
            community while seeking solutions to the causes of hunger. To be
            stewards in the collection of surplus and donated food for the
            effective distribution, free of charge, to people in need in our
            community while seeking solutions to the causes of hunger.
          </p>
          <p>
            To be stewards in the collection of surplus and donated food for the
            effective distribution, free of charge, to people in need in our
            community while seeking solutions to the causes of hunger.
          </p>
        </section>
        {/*=====================FAQ ========================*/}
        <section className="know-us-section">
          <div id="faq-heading-container">
            <div></div>
            <h1 id="faq-heading">FAQ</h1>
          </div>
          <h3>Is child sponsorship an effective way to help?</h3>
          <p>
            Yes. When you sponsor a child, you help bring long-term changes to
            that child’s community, creating a happier and healthier environment
            in which to grow up.
          </p>

          <h3>Is the money I give to World Vision handled responsibly?</h3>
          <p>
            Yes. We account for every dollar. Of the funds given to World Vision
            in 2016, 80.5% went directly to programs that help children and
            families, 13.5% went to fundraising, and 6% was allocated to
            administration. Audits are conducted regularly by external firms to
            verify the accuracy of our financial reporting. To learn more about
            how donations are used, check out our latest Annual Report.
          </p>

          <h3>Can I adopt or bring a sponsored child to Canada?</h3>
          <p>
            No. We do not organize adoption or bringing children to Canada for
            visits. Your help to improve a child’s quality of life and
            self-reliance in their own countries and cultures has deeper value
            than moving them to a foreign country.
          </p>

          <h3>What is my Expected Delivery Timing For Receiving Order?</h3>
          <p>
            We will send your items by mail, within 7 to 10 business days. There
            is no extra cost charged to you for shipping and handling.
          </p>
        </section>
      </article>
    </>
  );
};

/*=====  End of Know us page React Component  ======*/

export default KnowUsPageComponent;
