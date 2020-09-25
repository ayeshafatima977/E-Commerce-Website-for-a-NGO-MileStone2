import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import "../css/Contact-form.css";
import FormValidation from "../functions/Form-validation.js";

const ContactFormComponent = () => {
  // Creating Local states only for Validation purpose
  const [contactEmail, setcontactEmail] = useState("");
  const [contactSubject, setcontactSubject] = useState("");
  const [contactMessage, setcontactMessage] = useState("");

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
        "mailto:testemail@gmail.com" +
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

  return (
    <>
      {/* Here we wrap the Target element i.e form so as to dispaly in the Parent element which is our header to display the contact form when button is clicked */}
      <div className="contactform-overlay">
        <h2>CONTACT US</h2>

        <div class="close">
          {/* To deactivate or remove the class from Child component we use classList Remove here */}
          <button
            onClick={() => {
              document
                .getElementsByClassName("contactform-overlay")[0]
                .classList.remove("overlayShow");
            }}
          >
            <FaWindowClose />
          </button>
        </div>

        <form onSubmit={SubmitForm} id="contactForm">
          <label htmlFor="Email">Email Address:</label>
          <input
            type="text"
            placeholder="Enter your email address"
            className="contactEmail"
          />
          <label htmlFor="Subject">Subject:</label>
          <input
            type="text"
            placeholder="Enter the subject"
            className="contactSubject"
            maxLength="20"
          />
          <label htmlFor="Message">Message:</label>
          <textarea
            placeholder="Enter your Message"
            className="contactMessage"
            maxlength="500"
          />
          <input type="submit" value="SEND" />
          <p className="contactEmail-error msg-hide">
            Please enter valid email Id
          </p>
          <p className="contactSubject-error msg-hide">
            Please enter a valid Subject
          </p>
          <p className="contactMessage-error msg-hide">
            Please enter a message
          </p>
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
