import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";
// import '../css/Hero-footer.css';

/*=============================================
=            FooterComponent            =
=============================================*/

const FooterComponent = () => {
  const [firstName, SetFirstName] = useState("");
  const [lastName, SetLastName] = useState("");
  const [email, SetEmail] = useState("");

  const NewsLetterSubscribe = (e) => {
    e.preventDefault();
    NewsLetterFormValidation();
  };

  const NewsLetterFormValidation = () => {
    let errorCntr = 0;
    if (!/^[A-Za-z]+$/.test(firstName)) {
      document
        .getElementsByClassName("fname-error")[0]
        .classList.add("msg-show");
      document.getElementsByClassName("fname")[0].classList.add("input-error");
      errorCntr++;
    } else {
      document
        .getElementsByClassName("fname-error")[0]
        .classList.remove("msg-show");
      document
        .getElementsByClassName("fname")[0]
        .classList.remove("input-error");
    }
    if (!/^[A-Za-z]+$/.test(lastName)) {
      document
        .getElementsByClassName("lname-error")[0]
        .classList.add("msg-show");
      document.getElementsByClassName("lname")[0].classList.add("input-error");
      errorCntr++;
    } else {
      document
        .getElementsByClassName("lname-error")[0]
        .classList.remove("msg-show");
      document
        .getElementsByClassName("lname")[0]
        .classList.remove("input-error");
    }
    if (
        FormValidation(fname, "fname", "fname","fname-error") &&
        FormValidation(lname, "lname", "lname", "lname-error") &&
        FormValidation(email, "email", "email", "email-error")
    ) {
      document
        .getElementsByClassName("email-error")[0]
        .classList.add("msg-show");
      document.getElementsByClassName("email")[0].classList.add("input-error");
      errorCntr++;
    } else {
      document
        .getElementsByClassName("email-error")[0]
        .classList.remove("msg-show");
      document
        .getElementsByClassName("email")[0]
        .classList.remove("input-error");
    }
    if (errorCntr === 0) {
      document
        .getElementsByClassName("thanks-msg")[0]
        .classList.add("msg-show");
    } else {
      document
        .getElementsByClassName("thanks-msg")[0]
        .classList.remove("msg-show");
    }
  };

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
          <p>
            <FaFacebookF />
          </p>
          <p>
            <FaInstagram />
          </p>
          <p>
            <FaTwitter />
          </p>
          <p>
            <FaYoutube />
          </p>
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
          <form onSubmit={NewsLetterSubscribe}>
            <label htmlFor="fname" className="screen-reader-text">
              First Name
            </label>
            <input
              type="text"
              className="fname"
              placeholder="First name"
              value={firstName}
              onChange={(event) => {
                SetFirstName(event.target.value);
              }}
            />
            <label htmlFor="lname" className="screen-reader-text">
              Last Name
            </label>
            <input
              type="text"
              className="lname"
              placeholder="Last name"
              value={lastName}
              onChange={(event) => {
                SetLastName(event.target.value);
              }}
            />
            <label htmlFor="email" className="screen-reader-text">
              Email Address
            </label>
            <input
              type="text"
              className="email"
              placeholder="Email Address"
              value={email}
              onChange={(event) => {
                SetEmail(event.target.value);
              }}
            />
            <button type="submit">
              <FaEnvelope />
            </button>
            <p className="fname-error msg-hide">
              Please enter correct First Name
            </p>
            <p className="lname-error msg-hide ">
              Please enter correct Last Name
            </p>
            <p className="email-error msg-hide ">Please enter valid email Id</p>
            <p className="thanks-msg msg-hide">
              Thank you for Subscribing to our newsletter...!
            </p>
          </form>
        </div>
        <p>&copy; 2020 Edmonton Scriptorce</p>
      </section>
      {/* Newsletter end */}
    </footer>
  );
};

/*=====  End of FooterComponent  ======*/

export default FooterComponent;
