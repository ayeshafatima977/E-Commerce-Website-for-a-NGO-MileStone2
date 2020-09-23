import React from "react";
import { GrFormClose } from "react-icons/gr";
import "../css/Contact-form.css";

const ContactFormComponent = () => {
  /*==================================================
            MAILTO VIA CONTACT FORM LOGIC
*==================================================
*/
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

  const on = () => {
    document.getElementsByClassName("contact-form-overlay").display = "block";
  };

  const off = () => {
    document.getElementsByClassName("contact-form-overlay").display = "none";
  };

  /*===== END OF MAILTO VIA CONTACT FORM LOGIC  ======*/
  return (
    <>
      <div className="contact-form-overlay" onClick={off}>
        <h2>CONTACT US</h2>
        {/* ! NEED TO DO CSS TO TRANSFORM + button to 45 degrees to make X AND MAKE
      IT POPUP BY LINKING */}

        <div id="close">
          <button onClick={on}>
            <GrFormClose />
          </button>
        </div>

        <form onSubmit={sendMail}>
          <label htmlFor="Email" className="screen-reader-text">
            Email Address:
          </label>
          <input
            type="text"
            placeholder="Enter your email address"
            id="email"
          />
          <label htmlFor="Subject" className="screen-reader-text">
            Subject:
          </label>
          <input type="text" placeholder="Enter the subject" id="subject" />
          <label htmlFor="Message" className="screen-reader-text">
            Message:
          </label>
          <textarea placeholder="Enter your Message" id="message" />
          <input type="submit" value="SEND" />
        </form>
      </div>
    </>
  );
};

export default ContactFormComponent;
