import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
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
        "contactEmail",
        "contactEmail-error"
      ) &&
      FormValidation(
        contactSubject,
        "subject",
        "contactSubject",
        "contactSubject-error"
      ) &&
      FormValidation(
        contactMessage,
        "message",
        "contactMessage",
        "contactMessage-error"
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
        <form onSubmit={SubmitForm} id="contactForm">
          <h2>CONTACT US</h2>
          <label htmlFor="Email">
            Email<span className="required-field">*</span>
          </label>

          <input
            type="text"
            placeholder="e.g., example@domain.com"
            className="contactEmail"
            onChange={(e) => {
              setContactEmail(e.target.value);
            }}
          />
          <p className="contactEmail-error msg-hide">
            Please enter valid email Id
          </p>
          <label htmlFor="Subject">
            Subject<span className="required-field">*</span>
          </label>
          <input
            id="subject"
            type="text"
            placeholder="e.g., participate in event"
            className="contactSubject"
            maxLength="20"
            onChange={(e) => {
              setContactSubject(e.target.value);
            }}
          />
          <p className="contactSubject-error msg-hide">
            Please enter a valid Subject
          </p>
          <label htmlFor="Message">
            Message <span className="required-field">*</span>
          </label>
          <textarea
            id="message"
            placeholder="We love to hear from your ... 500 character max"
            className="contactMessage"
            maxLength="500"
            onChange={(e) => {
              setContactMessage(e.target.value);
            }}
          />
          <p className="contactMessage-error msg-hide">
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
