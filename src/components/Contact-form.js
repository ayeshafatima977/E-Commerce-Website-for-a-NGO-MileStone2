import React from "react";

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

  /*===== END OF MAILTO VIA CONTACT FORM LOGIC  ======*/
  return (
    <>
      <h2>CONTACT US</h2>
      {/* ! NEED TO DO CSS TO TRANSFORM + button to 45 degrees to make X AND MAKE
      IT POPUP BY LINKING */}
      {/* <div class="close">+</div> */}
      <form onSubmit={sendMail}>
        <label htmlFor="Email" className="screen-reader-text">
          Email Address:
        </label>
        <input type="text" placeholder="Enter your email address" id="email" />
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
    </>
  );
};

export default ContactFormComponent;
