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
          <label htmlFor="Email">
            Email<sup className="required-field"> *</sup>
          </label>

          <input
            type="text"
            placeholder="e.g., example@domain.com"
            className="contact-email"
            onChange={(e) => {
              setContactEmail(e.target.value);
            }}
          />
          <p className="contact-email-error msg-hide">
            Please enter valid email Id
          </p>
          <label htmlFor="Subject">
            Subject<sup className="required-field"> *</sup>
          </label>
          <input
            id="subject"
            type="text"
            placeholder="e.g., participate in event"
            className="contact-subject"
            maxLength="20"
            onChange={(e) => {
              setContactSubject(e.target.value);
            }}
          />
          <p className="contact-subject-error msg-hide">
            Please enter a valid Subject
          </p>
          <label htmlFor="Message">
            Message <sup className="required-field">*</sup>
          </label>
          <textarea
            id="message"
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
          <input type="submit" id="send" value="Send" />

          <p className="contact-thanks-msg msg-hide">
            Thankyou ,Your Message has been received.We will get back to you
            shortly!
          </p>
        </form>
      </div>
    </>
  );
};

export default ContactFormComponent;
