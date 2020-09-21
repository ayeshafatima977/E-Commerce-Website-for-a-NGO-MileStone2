import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import ContactFormComponent from "./components/Contact-form";
import HeroSectionComponent from "./components/Hero-section";
import { BrowserRouter as Router, Route } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <h1>Hello Scriptorce</h1>
    <Router>
      <ContactFormComponent />
      <HeroSectionComponent />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
