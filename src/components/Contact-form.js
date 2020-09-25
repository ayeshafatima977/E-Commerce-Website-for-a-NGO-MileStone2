import React from "react";
import { FaWindowClose } from "react-icons/fa";
import "../css/Contact-form.css";
const ContactFormComponent = () => {
/*==================================================
            MAILTO VIA CONTACT FORM LOGIC
*==================================================*/
  const sendMail = (e) => {
    e.preventDefault();
    let link =
      "mailto:testemail@gmail.com" +
      "?subject=" +
      encodeURIComponent(document.getElementById("subject").value) +
      "&body=" +
      encodeURIComponent(document.getElementById("message").value);
    window.location.href = link;
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
        <form onSubmit={sendMail} id="contactForm">
          <h2>CONTACT US</h2>
          <label htmlFor="Email">Email Address:</label>
          <input
            type="text"
            placeholder="Enter your email address"
            id="email"
          />
          <label htmlFor="Subject">Subject:</label>
          <input type="text" placeholder="Enter the subject" id="subject" />
          <label htmlFor="Message">Message:</label>
          <textarea rows="6" placeholder="Enter your Message" id="message" />
          <input type="submit" id="send" value="Send" />
        </form>
      </div>
    </>
  );
};

export default ContactFormComponent;
