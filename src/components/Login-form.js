import React from "react";
import { TiArrowBack } from "react-icons/ti";
import "../css/Login-form.css";

const LoginFormComponent = () => {
  const addLoginHideOverlay = () => {
    document
      .getElementById("loginform-overlay")
      .classList.remove("overlayShow");
  };
  return (
    <div className="loginform-overlay" id="loginform-overlay">
      <span onClick={addLoginHideOverlay}>
        <TiArrowBack size="30px"/>
      </span>
      <h2>Log in</h2>
      <form>
        <label htmlFor="login-email-input"  />
        <input
          type="email"
          id="login-email-input"
          className="login-input"
          placeholder="Email"
        />
        <label htmlFor="login-password-input" />
        <input
          type="password"
          id="login-password-input"
          className="login-input"
          placeholder="Password"
        />
        <input type="submit" id="login-submit" value="LOG IN" />
      </form>
    </div>
  );
};

export default LoginFormComponent;
