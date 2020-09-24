import React from "react";
import { FaWindowClose } from "react-icons/fa";
import "../css/Contact-form.css";
import FormValidation from "../functions/Form-validation.js";
const ContactFormComponent = () => {
  /*==================================================
            MAILTO VIA CONTACT FORM LOGIC
*==================================================
*/
  const SubmitForm = (e) => {
    e.preventDefault();
  //   if(
  //     FormValidation(fname, "fname", "fname") &&
  //     FormValidation(lname, "lname", "lname") &&
  //     FormValidation(email, "email", "email") &&
  //     FormValidation(subject, "email", "email")
  //   )
  //   {document
  //     .getElementsByClassName("thanks-msg")[0]
  //     .classList.add("msg-show");
  //   let link =
  //     "mailto:testemail@gmail.com" +
  //     "?subject=" +
  //     encodeURIComponent(document.getElementById("subject").value) +
  //     "&body=" +
  //     encodeURIComponent(document.getElementById("message").value);
  //   window.location.href = link;
  // }
  // else {
  //   document
  //     .getElementsByClassName("thanks-msg")[0]
  //     .classList.remove("msg-show");
  // }


  
  
  };
  /*===== END OF MAILTO VIA CONTACT FORM LOGIC  ======*/

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
            id="email"
          />
          <label htmlFor="Subject">Subject:</label>
          <input type="text" placeholder="Enter the subject" id="subject" />
          <label htmlFor="Message">Message:</label>
          <textarea placeholder="Enter your Message" id="message" />
          <input type="submit" value="SEND" />
          <p className="fname-error msg-hide">
            Please enter correct First Name
          </p>
          <p className="lname-error msg-hide">Please enter correct Last Name</p>
          <p className="email-error msg-hide">Please enter valid email Id</p>
          <p className="subject-error msg-hide">
            Please enter correct First Name
          </p>
          <p className="lname-error msg-hide">Please enter correct Last Name</p>
          <p className="email-error msg-hide">Please enter valid email Id</p>
        </form>
      </div>
    </>
  );
};

export default ContactFormComponent;
