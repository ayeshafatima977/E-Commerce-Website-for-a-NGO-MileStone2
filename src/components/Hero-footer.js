import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";
import FormValidation from "../functions/Form-validation.js";
import { IconContext } from "react-icons/lib";
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
        .classList.add("msg-show");
    } else {
      document
        .getElementsByClassName("newsletter-thanks-msg")[0]
        .classList.remove("msg-show");
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
        <IconContext.Provider
          value={{ color: "#FFF", style: { opacity: 0.5 } }}
        >
          <h2>Get Social</h2>
          <span>
            <a href="https://www.facebook.com" target="_blanc">
              <FaFacebookF size="40px" />
            </a>
          </span>
          <span>
            <a href="https://www.instagram.com" target="_blanc">
              <FaInstagram size="40px" />
            </a>
          </span>
          <span>
            <a href="https://www.twitter.com" target="_blanc">
              <FaTwitter size="40px" />
            </a>
          </span>
          <span>
            <a href="https://www.youtube.com" target="_blanc">
              <FaYoutube size="40px" />
            </a>
          </span>
        </IconContext.Provider>
      </section>
      {/* Get Social end */}

      {/* Newsletter start */}
      <section className="newsletter-info">
        <h2>Newsletter</h2>
        <p>Stay up to date with our work and how you can help - learn more.</p>
        <form className="newsletter-form" onSubmit={SubmitForm}>
          <div id="fname-lname">
            <label htmlFor="fname" className=".screen-reader-text">
              First Name <span className="required-field">*</span>
            </label>
            <input
              type="text"
              className="newsletter-fname"
              placeholder="e.g., Johnny"
              onChange={(event) => {
                setFName(event.target.value);
              }}
            />
            <p className="newsletter-fname-error-msg msg-hide">
              Please enter correct First Name
            </p>
            <label htmlFor="lname" className=".screen-reader-text">
              Last Name <span className="required-field">*</span>
            </label>
            <input
              type="text"
              className="newsletter-lname"
              placeholder="e.g., Bravo"
              onChange={(event) => {
                setLName(event.target.value);
              }}
            />
            <p className="newsletter-lname-error-msg msg-hide ">
              Please enter correct Last Name
            </p>
          </div>
          <div id="emailid-send">
            <label htmlFor="email" className=".screen-reader-text">
              Email Address
            </label>
            <input
              type="text"
              className="newsletter-email"
              placeholder="e.g., example@domain.com"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <p className="newsletter-email-error-msg msg-hide ">
              Please enter valid email Id
            </p>
            <button type="submit">
              <IconContext.Provider
                value={{ color: "#FFF", style: { opacity: 0.5 } }}
              >
                <FaEnvelope size="30px" />
              </IconContext.Provider>
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
