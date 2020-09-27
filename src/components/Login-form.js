import React, { useState } from "react";
import { TiArrowBack } from "react-icons/ti";
import "../css/Login-form.css";
import FormValidation from "../functions/Form-validation.js";

/* Creating Local state for using it in Form validation */

const LoginFormComponent = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const SubmitForm = (e) => {
    e.preventDefault();

    /* Calling Global function for Form validation */

    if (
      FormValidation(
        loginEmail,
        "email",
        "login-email-input",
        "loginEmail-error"
      ) &&
      FormValidation(
        loginPassword,
        "password",
        "login-password-input",
        "loginPassword-error"
      )
    ) {
      alert("Login successful");
    }
  };

  /* Here overlay feature is used to show/hide the Login form to pop on user click*/

  const addLoginHideOverlay = () => {
    document
      .getElementById("loginform-overlay")
      .classList.remove("overlayShow");
  };
  return (
    <div className="loginform-overlay" id="loginform-overlay">
      <form onSubmit={SubmitForm} id="loginForm">
        <span onClick={addLoginHideOverlay}>
          <TiArrowBack />
        </span>
        <h2>LOG IN</h2>
        <label htmlFor="login-email-input">
          Email<sup className="required-field"> *</sup>
        </label>
        <input
          type="text"
          id="login-email-input"
          className="login-email-input"
          placeholder="example@domain.com"
          onChange={(e) => {
            setLoginEmail(e.target.value);
          }}
        />
        <p className="loginEmail-error msg-hide">Please enter valid email Id</p>
        <label htmlFor="login-password-input">
          Password<sup className="required-field"> *</sup>
        </label>
        <input
          type="password"
          id="login-password-input"
          className="login-password-input"
          placeholder="Password"
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }}
        />
        <p className="loginPassword-error msg-hide">
          Please enter a Password: Minimum eight (8) in length and at least one
          upper case , one lower case letter, one digit and one special
          character.
        </p>

        <input
          type="submit"
          form="loginForm"
          id="login-submit"
          value="LOG IN"
        />
        <sup className="required-field note">* Required Field</sup>
      </form>
    </div>
  );
};

export default LoginFormComponent;
