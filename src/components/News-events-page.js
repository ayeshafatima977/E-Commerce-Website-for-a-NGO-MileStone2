/*cspell:disable*/
import React from "react";
import BannerComponent from "./Banner";
import ContactFormComponent from "./Contact-form";
/*=============================================
=      News and Events page React Component   =
=============================================*/

/* Assuming routing would be in middle section between header/banner and footer */
const NewsEventsPageComponent = () => {
  return (
    <>
      <BannerComponent />
      {/*=============News Section===============*/}

      <h1> News </h1>

      <section>
        <h2>News Header</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore omnis
          doloremque veritatis, nobis eos nostrum consequatur, temporibus
          laboriosam provident dignissimos illum ad reiciendis! Odit laborum
          accusamus dolorum odio fugiat vel.
        </p>
        <img
          src="https://via.placeholder.com/350x200"
          alt="place holder image"
        ></img>
        <h2> News Header</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore omnis
          doloremque veritatis, nobis eos nostrum consequatur, temporibus
          laboriosam provident dignissimos illum ad reiciendis! Odit laborum
          accusamus dolorum odio fugiat vel.
        </p>
        <img
          src="https://via.placeholder.com/350x200"
          alt="place holder image"
        ></img>
      </section>

      {/*=============Events Section===============*/}
      <h1> Events </h1>
      <section>
        <h2> Events Header</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore omnis
          doloremque veritatis, nobis eos nostrum consequatur, temporibus
          laboriosam provident dignissimos illum ad reiciendis! Odit laborum
          accusamus dolorum odio fugiat vel.
        </p>
        <img
          src="https://via.placeholder.com/350x200"
          alt="place holder image"
        ></img>
        <h2> Events Header</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore omnis
          doloremque veritatis, nobis eos nostrum consequatur, temporibus
          laboriosam provident dignissimos illum ad reiciendis! Odit laborum
          accusamus dolorum odio fugiat vel.
        </p>
        <img
          src="https://via.placeholder.com/350x200"
          alt="place holder image"
        ></img>
      </section>
      <ContactFormComponent />
    </>
  );
};

/*=====  End of News and Events page React Component  ======*/

export default NewsEventsPageComponent;
