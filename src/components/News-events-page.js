/*cspell:disable*/
import React from "react";
import BannerComponent from "./Banner";
import NewsImageOne from "../img/covid-news-comp.jpg";
import NewsImageTwo from "../img/food-support-news-comp.jpg";
import EventImageOne from "../img/children-day-event-comp.jpg";
import EventImageTwo from "../img/christmas-event-comp.jpg";

/*=============================================
=      News and Events page React Component   =
=============================================*/

/* Assuming routing would be in middle section between header/banner and footer */
const NewsEventsPageComponent = () => {
  return (
    <article>
      <BannerComponent />
      {/*=============News Section===============*/}

      <h1> News </h1>
      <section>
        <h2>COVID 19 update</h2>
        <p>
          Despite the challenges of COVID-19, our organization has continued our
          work and service in the community. If you feel sick, then call 911
          right away. Wash hand more frequently, keep distance two-meter apart,
          wear a face mask when necessary, and avoid unnecessary travel. Thank
          you for your continued support of our organization. Together, we will
          get through this health crisis.
        </p>
        <img
          src={NewsImageOne}  
          alt="covid 19 text image"
          width="350px"
          height="200px"
        ></img>
        <h2>Provided food to support for families in need</h2>
        <p>
          We have created a temporary support program called fresh food for
          kids, which provides nutritious food baskets to local families in
          need. We delivered enough food and supplies for a family of four to
          five people for four weeks. For those who can give, any amount will
          make a difference in providing healthy, nutritious food to kids in
          need.
        </p>
        <img
          src={NewsImageTwo}   
          alt="People providing food to needy"
          width="350px"
          height="200px"
        ></img>
      </section>

      {/*=============Events Section===============*/}
      <h1> Events </h1>
      <section>
        <h2>World Children Day Event: Friday, November 20, 2020</h2>
        <p>
          This year it will be a World Children Day like no other before! While
          we practice Coronavirus social distancing for everyone’s safety, we
          will still come together to celebrate this great day event at our
          organization. This year we are celebrating the 31st anniversary of the
          U.N. Convention on the Rights of the Child.
        </p>
        <img
          src={EventImageOne}   
          alt="All children standing and doing activities together in room"
          width="350px"
          height="200px"
        ></img>
        <h2>Christmas Event: Saturday, December 26, 2020</h2>
        <p>
          The Christmas Event is an annual event that is organized by and
          benefits to our organization. Fundraising is important to how our
          organization can serve those in need, and this is true even more this
          year. More than 90% of our clients are children under the age of 18,
          and the economic downturn is causing great difficulty for the families
          who need help putting food on the table.
        </p>
        <img
          src={EventImageTwo}   
          alt="Christmas image with different lights"
          width="350px"
          height="200px"
        ></img>
      </section>
    </article>
  );
};

/*=====  End of News and Events page React Component  ======*/

export default NewsEventsPageComponent;
