import React from "react";
const ContactFormComponent = () => {
  /*=============================================
=           Mail To Contact Form        =
=============================================*/
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
  /*=====  End of Mail To Contact Form   ======*/
  /*
*==================================================
            GLOBAL VARIABLES DEFINITION
*==================================================
*/
  /* DOM ELEMENTS DEFINITION */
  const getInTouchForm = document.getElementById("contact-form");
  const name = document.getElementById("name");
  const emailID = document.getElementById("emailid");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");
  const nameErrorMsg = document.getElementById("nameerror");
  const emailErrorMsg = document.getElementById("emailerror");
  const subjectErrorMsg = document.getElementById("subjecterror");
  const messageErrorMsg = document.getElementById("messageerror");
  const emailFormatErrorMsg = document.getElementById("emailformaterror");

  const GetInTouchFormValidation = () => {
    let errorsCntr = 0;

    /* EMPTY FORM FIELDS VALIDATION */
    if (name.value == "") {
      nameErrorMsg.style.display = "block";
      name.classList.add("empty-field-error");
      errorsCntr++;
    } else {
      nameErrorMsg.style.display = "none";
      name.classList.remove("empty-field-error");
    }
    if (emailID.value == "") {
      emailErrorMsg.style.display = "block";
      emailID.classList.add("empty-field-error");
      errorsCntr++;
    } else {
      emailErrorMsg.style.display = "none";
      emailID.classList.remove("empty-field-error");
    }
    if (subject.value == "") {
      subjectErrorMsg.style.display = "block";
      subject.classList.add("empty-field-error");
      errorsCntr++;
    } else {
      subjectErrorMsg.style.display = "none";
      subject.classList.remove("empty-field-error");
    }
    if (message.value == "") {
      messageErrorMsg.style.display = "block";
      message.classList.add("empty-field-error");

      errorsCntr++;
    } else {
      messageErrorMsg.style.display = "none";
      message.classList.remove("empty-field-error");
    }

    /* EMAIL ID FORMAT VALIDATION */
    if (!ValidateEmail()) {
      emailFormatErrorMsg.style.display = "block";
      emailID.classList.add("empty-field-error");
      errorsCntr++;
    } else {
      emailFormatErrorMsg.style.display = "none";
      emailID.classList.remove("empty-field-error");
    }
    return Boolean(errorsCntr == 0);
  };

  /*
  *==================================================
            EMAIL FORMAT VALIDATION FUNCTION
  *==================================================
  */

  /**
   *
   * THIS FUNCTION IS USING REGULAR EXPRESSIONS TO CHECK EMAIL FORMAT PER EXPLANATION BELOW IN THE CITATION SECTION.
   *
   */

  const ValidateEmail = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailID.value)) {
      return true;
    }
    return false;
  };

  /*=====  END OF EMAIL VALIDATION  ======*/

  return (
    <>
      <h2>CONTACT US</h2>
      {/* <a href="#" id="btn"></a>
      <div class="popupForm">
        <div class="popupContent"> */}
      /* NEED TO DO CSS TO TRANSFORM + button to 45 degrees to make X AND MAKE
      IT POPUP BY LINKING*/
      <div class="close">+</div>
      <form onSubmit={sendMail}>
        <label htmlFor="Email">Email Address:</label>
        <input type="text" placeholder="Enter your email address" id="email" />
        <label htmlFor="Subject">Subject:</label>
        <input type="text" placeholder="Enter the subject" id="subject" />
        <label htmlFor="Message">Message:</label>
        <textarea id="message" placeholder="Enter your Message" id="message" />
        <input type="submit" value="SEND" />
      </form>
      {/* </div>
      </div> */}
    </>
  );
};

export default ContactFormComponent;
