import React from "react";
import BannerComponent from "./Banner";
import NewsImageOne from "../img/NewsImageOne.jpg";
import NewsImageTwo from "../img/NewsImageTwo.jpg";
import NewsImageThree from "../img/NewsImageThree.jpg";
import NewsImageFour from "../img/NewsImageFour.jpg";
import EventImageOne from "../img/EventImageOne.jpg";
import EventImageTwo from "../img/EventImageTwo.jpg";
import EventImageThree from "../img/EventImageThree.jpg";
import EventImageFour from "../img/EventImageFour.jpg";
import { FaRegCalendar } from "react-icons/fa";
import "../css/News-event-page.css";

/*=============================================
=      News and Events page React Component   =
=============================================*/

const NewsEventsPageComponent = () => {
  return (
    <>
      <BannerComponent />
      {/*=============News Section===============*/}
      <article id="news-event-article">
        <h1> News </h1>
        <section className="news-event-section">
          <h2>COVID 19 update</h2>
          <div className="img-news-para-one">
            <img src={NewsImageOne} alt="covid 19 logo"></img>
            <p>
              Despite the challenges of COVID-19, our organization has continued
              our work and service in the community. If you feel sick, then call
              911 right away. Wash hand more frequently, keep distance two-meter
              apart, wear a face mask when necessary, and avoid unnecessary
              travel. Thank you for your continued support of our organization.
              Together, we will get through this health crisis.
            </p>
          </div>

          <h2>Provided food to support for families in need</h2>
          <div className="img-news-para-two">
            <img src={NewsImageTwo} alt="People providing food to needy"></img>
            <p>
              We have created a temporary support program called fresh food for
              kids, which provides nutritious food baskets to local families in
              need. We delivered enough food and supplies for a family of four
              to five people for four weeks. For those who can give, any amount
              will make a difference in providing healthy, nutritious food to
              kids in need.
            </p>
          </div>

          <h2>Received 50K Donation From Various organizations in Last Year</h2>
          <div className="img-news-para-three">
            <img src={NewsImageThree} alt="Child with some coins in hand"></img>
            <p>
              Despite the challenges of COVID-19, our organization has continued
              our work and service in the community. If you feel sick, then call
              911 right away. Wash hand more frequently, keep distance two-meter
              apart, wear a face mask when necessary, and avoid unnecessary
              travel. Thank you for your continued support of our organization.
              Together, we will get through this health crisis.
            </p>
          </div>

          <h2>Celebrated Canada Day 2020</h2>
          <div className="img-news-para-four">
            <img
              src={NewsImageFour}
              alt="People gathered to celebrate Canada Day"
            ></img>
            <p>
              We have created a temporary support program called fresh food for
              kids, which provides nutritious food baskets to local families in
              need. We delivered enough food and supplies for a family of four
              to five people for four weeks. For those who can give, any amount
              will make a difference in providing healthy, nutritious food to
              kids in need.
            </p>
          </div>
        </section>

        {/*=============Events Section===============*/}
        <h1> Events </h1>
        <section className="news-event-section">
          <h2>World Children Day Event:</h2>
          <h3>
            <FaRegCalendar /> November 20,2020. From 4PM - 8PM
          </h3>
          <div className="img-event-para-one">
            <img
              src={EventImageOne}
              alt="All children standing and doing activities together in room"
            ></img>
            <p>
              This year it will be a World Children Day like no other before!
              While we practice Coronavirus social distancing for everyone’s
              safety, we will still come together to celebrate this great day
              event at our organization. This year we are celebrating the 31st
              anniversary of the U.N. Convention on the Rights of the Child.
            </p>
          </div>

          <h2>Christmas Event: </h2>
          <h3>
            <FaRegCalendar /> December 26, 2020. From 4PM - 8PM
          </h3>
          <div className="img-event-para-two">
            <img
              src={EventImageTwo}
              alt="Christmas event with different lights"
            ></img>
            <p>
              The Christmas Event is an annual event that is organized by and
              benefits to our organization. Fundraising is important to how our
              organization can serve those in need, and this is true even more
              this year. More than 90% of our clients are children under the age
              of 18, and the economic downturn is causing great difficulty for
              the families who need help putting food on the table.
            </p>
          </div>

          <h2>World Children Day Event:</h2>
          <h3>
            <FaRegCalendar /> November 23,2021. From 4PM - 8PM
          </h3>
          <div className="img-event-para-three">
            <img
              src={EventImageThree}
              alt="children playing in the field"
            ></img>
            <p>
              This year it will be a World Children Day like no other before!
              While we practice Coronavirus social distancing for everyone’s
              safety, we will still come together to celebrate this great day
              event at our organization. This year we are celebrating the 32st
              anniversary of the U.N. Convention on the Rights of the Child.
            </p>
          </div>

          <h2>Christmas Event: </h2>
          <h3>
            <FaRegCalendar /> December 26, 2021. From 4PM - 8PM
          </h3>
          <div className="img-event-para-four">
            <img src={EventImageFour} alt="Mug with some lights around"></img>
            <p>
              The Christmas Event is an annual event that is organized by and
              benefits to our organization. Fundraising is important to how our
              organization can serve those in need, and this is true even more
              this year. More than 90% of our clients are children under the age
              of 18, and the economic downturn is causing great difficulty for
              the families who need help putting food on the table.
            </p>
          </div>
        </section>
      </article>
    </>
  );
};

/*=====  End of News and Events page React Component  ======*/

export default NewsEventsPageComponent;
