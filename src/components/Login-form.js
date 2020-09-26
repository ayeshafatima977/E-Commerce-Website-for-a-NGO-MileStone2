import React, { useState } from "react";
import { TiArrowBack } from "react-icons/ti";
import "../css/Login-form.css";
import FormValidation from "../functions/Form-validation.js";

const LoginFormComponent = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const SubmitForm = (e) => {
    e.preventDefault();
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
  const addLoginHideOverlay = () => {
    document
      .getElementById("loginform-overlay")
      .classList.remove("overlayShow");
  };
  return (
    <div className="loginform-overlay" id="loginform-overlay">
      <span onClick={addLoginHideOverlay}>
        <TiArrowBack size="30px" />
      </span>

      <form onSubmit={SubmitForm} id="loginForm">
      <h2>LOG IN</h2>
        <label htmlFor="login-email-input">Email</label>
        <input
          type="text"
          id="login-email-input"
          className="login-email-input"
          placeholder="e.g., example@domain.com"
          onChange={(e) => {
            setLoginEmail(e.target.value);
          }}
        />
        <p className="loginEmail-error msg-hide">Please enter valid email Id</p>
        <label htmlFor="login-password-input">Password</label>
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
          Please enter a Password: Minimum eight (8) in length and at least one upper
          case , one lower case letter, one digit and one special character.
        </p>
        <input type="submit" form = "loginForm" id="login-submit" value="LOG IN" />
      </form>
    </div>
  );
};

export default LoginFormComponent;
