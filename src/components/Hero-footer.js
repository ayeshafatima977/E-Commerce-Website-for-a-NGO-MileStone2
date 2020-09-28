import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";
import FormValidation from "../functions/Form-validation.js";
import "../css/Hero-footer.css";

/*=============================================
=            FooterComponent            =
=============================================*/

const FooterComponent = () => {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");

  const SubmitForm = (e) => {
    e.preventDefault();

    /* Calling Global FormValidation function to validate First Name, Last Name and Email */
    /* if FormValidation === True then Display Thank you message */

    if (
      FormValidation(
        fname,
        "name",
        "newsletter-fname",
        "newsletter-fname-error-msg"
      ) &&
      FormValidation(
        lname,
        "name",
        "newsletter-lname",
        "newsletter-lname-error-msg"
      ) &&
      FormValidation(
        email,
        "email",
        "newsletter-email",
        "newsletter-email-error-msg"
      )
    ) {
      document
        .getElementsByClassName("newsletter-thanks-msg")[0]
        .classList.remove("msg-hide");
    } else {
      document
        .getElementsByClassName("newsletter-thanks-msg")[0]
        .classList.add("msg-hide");
    }
  };

  return (
    <footer>
      {/* Contact Us start */}
      <div id="major-footer">
        <section className="contact-us-info">
          <h2>Contact Us</h2>
          <p>12332 123 St Nw, Edmonton</p>
          <p>Alberta, T0A 0W0, 780-000-8888</p>
        </section>
        {/* Contact Us end */}

        {/* Get Social start */}
        <section className="social-info">
          <h2>Get Social</h2>
          <div id="socialmedia-icons">
            <span>
              <a href="https://www.facebook.com" target="_blanc">
                <FaFacebookF />
              </a>
            </span>
            <span>
              <a href="https://www.instagram.com" target="_blanc">
                <FaInstagram />
              </a>
            </span>
            <span>
              <a href="https://www.twitter.com" target="_blanc">
                <FaTwitter />
              </a>
            </span>
            <span>
              <a href="https://www.youtube.com" target="_blanc">
                <FaYoutube />
              </a>
            </span>
          </div>
        </section>
        {/* Get Social end */}

        {/* Newsletter start */}
        <section className="newsletter-info">
          <h2>Newsletter</h2>
          <p>Stay up to date with our work and how you can help</p>
          <form className="newsletter-form" onSubmit={SubmitForm}>
            <div id="fname-lname">
              <div>
                <label htmlFor="fname" className=".screen-reader-text">
                  First Name
                </label>
                <input
                  type="text"
                  id="fname"
                  className="newsletter-fname"
                  placeholder="First Name"
                  onChange={(event) => {
                    setFName(event.target.value);
                  }}
                />
                <p className="newsletter-fname-error-msg msg-hide">
                  Enter correct First Name
                </p>
              </div>
              <div>
                <label htmlFor="lname" className=".screen-reader-text">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lname"
                  className="newsletter-lname"
                  placeholder="Last Name"
                  onChange={(event) => {
                    setLName(event.target.value);
                  }}
                />
                <p className="newsletter-lname-error-msg msg-hide ">
                  Enter correct Last Name
                </p>
              </div>
            </div>
            <div id="emailid-send">
              <div>
                <label htmlFor="email" className=".screen-reader-text">
                  Email Address
                </label>
                <input
                  type="text"
                  id="email"
                  className="newsletter-email"
                  placeholder="example@domain.com"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
                <p className="newsletter-email-error-msg msg-hide ">
                  Enter valid email Id
                </p>
              </div>
              <button type="submit">
                <FaEnvelope />
              </button>
            </div>
            <p className="newsletter-thanks-msg msg-hide">
              Thank you for Subscribing to our newsletter...!
            </p>
          </form>
        </section>
      </div>
      {/* Newsletter end */}
      <div id="minor-footer">
        <p>Charitable Number 129185310 RR0001</p>
        <p>Privacy Policy | Terms &amp; Conditions</p>
        <p>&copy; 2020 Edmonton Scriptorce</p>
      </div>
    </footer>
  );
};

/*=====  End of FooterComponent  ======*/

export default FooterComponent;
