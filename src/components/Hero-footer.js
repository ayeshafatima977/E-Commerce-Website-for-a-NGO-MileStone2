import React from "react";

/*=============================================
=            FooterComponent            =
=============================================*/

const FooterComponent = () => {
  return (
    <footer>
      {/* Contact Us start */}
      <section>
        <div>
          <h2>Contact Us</h2>
          <p>12332 123 St Nw, Edmonton</p>
          <p>Alberta, T0A 0W0, 780-000-8888</p>
        </div>
        <p>Charitable Number 129185310 RR0001</p>
      </section>
      {/* Contact Us end */}

      {/* Get Social start */}
      <section>
        <div>
          <h2>Get Social</h2>
          {/** Get npm install from fontawsome*/}
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <p>Privacy Policy | Terms &amp; Conditions</p>
      </section>
      {/* Get Social end */}

      {/* Newsletter start */}
      <section>
        <div>
          <h1>Newsletter</h1>
          <p>
            Stay up to date with our work and how you can help - learn more.
          </p>
          <label htmlFor="fname" className="screen-reader-text">
            First Name
          </label>
          <input type="text" id="fname" placeholder="First name" />
          <label htmlFor="lname" className="screen-reader-text">
            Last Name
          </label>
          <input type="text" id="lname" placeholder="Last name" />
          <label htmlFor="email" className="screen-reader-text">
            Email Address
          </label>
          <input type="email" id="email" placeholder="Email Address" />
          <p>{/* envelop icon from font awesome */}</p>
        </div>
        <p>&copy; 2020 Edomonton Scriptorce</p>
      </section>
      {/* Newsletter end */}
    </footer>
  );
};

/*=====  End of FooterComponent  ======*/

export default FooterComponent;
