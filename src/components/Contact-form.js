import React, { useState } from "react";
import "../css/Contact-form.css";
import FormValidation from "../functions/Form-validation.js";

const ContactFormComponent = () => {
  // Creating Local states only for Validation purpose
  const [contactEmail, setContactEmail] = useState("");
  const [contactSubject, setContactSubject] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const SubmitForm = (e) => {
    e.preventDefault();

    if (
      FormValidation(
        contactEmail,
        "email",
        "contact-email",
        "contact-email-error"
      ) &&
      FormValidation(
        contactSubject,
        "required-field",
        "contact-subject",
        "contact-subject-error"
      ) &&
      FormValidation(
        contactMessage,
        "required-field",
        "contact-message",
        "contact-message-error"
      )
    ) {
      document
        .getElementsByClassName("contact-thanks-msg")[0]
        .classList.add("msg-show");
      let link =
        "mailto:example@domain.com" +
        "?subject=" +
        encodeURIComponent(contactSubject) +
        "&body=" +
        encodeURIComponent(contactMessage);
      window.location.href = link;
    } else {
      document
        .getElementsByClassName("contact-thanks-msg")[0]
        .classList.remove("msg-show");
    }
  };
  /* Close contact form @ click outside the form container */
  const closeEventHandle = () => {
    const modal = document.getElementsByClassName("contactform-overlay")[0];
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("overlayShow");
      }
    });
  };
  /*===== END OF MAILTO VIA CONTACT FORM LOGIC  ======*/
  return (
    <>
      <div
        className="contactform-overlay"
        onClick={() => {
          closeEventHandle();
        }}
      >
        <form onSubmit={SubmitForm} id="contact-form">
          <h2>CONTACT US</h2>
          <div id="contact-email-container">
            <label htmlFor="email">
              Email<sup className="required-field"> *</sup>
            </label>
            <input
              type="text"
              id="contact-email-id"
              placeholder="example@domain.com"
              className="contact-email"
              onChange={(e) => {
                setContactEmail(e.target.value);
              }}
            />
            <p className="contact-email-error msg-hide">
              Please enter valid email Id
            </p>
          </div>
          <div id="contact-subjuct-container">
            <label htmlFor="subject">
              Subject<sup className="required-field"> *</sup>
            </label>
            <input
              id="contact-subject-id"
              type="text"
              placeholder="participate in event"
              className="contact-subject"
              maxLength="20"
              onChange={(e) => {
                setContactSubject(e.target.value);
              }}
            />
            <p className="contact-subject-error msg-hide">
              Please enter a valid Subject
            </p>
          </div>
          <div id="contact-message-container">
            <label htmlFor="message">
              Message <sup className="required-field">*</sup>
            </label>
            <textarea
              id="contact-message"
              placeholder="We love to hear from your ... 500 character max"
              className="contact-message"
              maxLength="500"
              onChange={(e) => {
                setContactMessage(e.target.value);
              }}
            />
            <sup className="required-field note">* Required Field</sup>
            <p className="contact-message-error msg-hide">
              Please enter a message
            </p>
          </div>
          <div id="contact-submit-container">
            <input type="submit" id="send" value="Send" />
            <p className="contact-thanks-msg msg-hide">
              Thankyou ,Your Message has been received.We will get back to you
              shortly!
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactFormComponent;
