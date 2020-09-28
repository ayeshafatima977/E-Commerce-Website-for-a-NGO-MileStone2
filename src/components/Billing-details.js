import React, { useState, useImperativeHandle, forwardRef } from "react";
import { useDispatch } from "react-redux";
import { ChangeBillingInfo } from "../actions/Billing-info";
import FormValidation from "../functions/Form-validation.js";
import "../css/Billing-details.css";

const BillingDetailsComponent = forwardRef((props, ref) => {
  const dispatch = useDispatch();

  /*   Creating Local states */
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userStreetAddress, setUserStreetAddress] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userProvince, setUserProvince] = useState("AB");
  const [userPostalCode, setUserPostalCode] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");

  /* Creating a Copy with parameters assigned in the Billing Information reducer*/
  const BillingInfoCopy = {
    fName: userFirstName,
    lName: userLastName,
    address: userStreetAddress,
    city: userCity,
    prov: userProvince,
    postalCode: userPostalCode,
    phone: userPhone,
    emailID: userEmail,
  };

  /* 
  Using react useRef hook to access the child component from the parent component to execute validation 
  This method was required as we import multiple form components within on parent form and all forms must
  be submitted from the parent form
  */
  useImperativeHandle(ref, () => ({
    runBillingInfoDispatch() {
      /* Calling Global function for Form validation */

      if (
        FormValidation(
          userFirstName,
          "name",
          "billing-firstname",
          "billing-firstname-error"
        ) &&
        FormValidation(
          userLastName,
          "name",
          "billing-lastname",
          "billing-lastname-error"
        ) &&
        FormValidation(
          userStreetAddress,
          "address",
          "billing-streetaddress",
          "billing-streetaddress-error"
        ) &&
        FormValidation(
          userCity,
          "name",
          "billing-city",
          "billing-city-error"
        ) &&
        FormValidation(
          userPostalCode,
          "postal",
          "billing-postalcode",
          "billing-postalcode-error"
        ) &&
        FormValidation(
          userPhone,
          "phone",
          "billing-phone",
          "billing-phone-error"
        ) &&
        FormValidation(
          userEmail,
          "email",
          "billing-email",
          "billing-email-error "
        )
      ) {
        dispatch(ChangeBillingInfo(BillingInfoCopy));
        return true;
      }
    },
  }));

  return (
    <>
      <section id="billing-form">
        <div className="billing-form-section-container">
          <div id="billing-form-first-name-container">
            <label htmlFor="billing-firstname-id">
              First Name<sup className="required-field">*</sup>
            </label>
            <input
              id="billing-firstname-id"
              type="text"
              placeholder="First Name"
              className="billing-firstname"
              onChange={(e) => {
                setUserFirstName(e.target.value);
              }}
            />
            <p className="billing-firstname-error msg-hide">
              Please enter correct First Name
            </p>
          </div>
          <div id="billing-form-last-name-container">
            <label htmlFor="billing-lastname-id">
              Last Name<sup className="required-field">*</sup>
            </label>
            <input
              id="billing-lastname-id"
              type="text"
              placeholder="Last Name"
              className="billing-lastname"
              onChange={(e) => {
                setUserLastName(e.target.value);
              }}
            />
            <p className="billing-lastname-error msg-hide">
              Please enter correct Last Name
            </p>
          </div>
          <div id="billing-form-street-address-container">
            <label htmlFor="billing-streetaddress-id">
              Street Address<sup className="required-field">*</sup>
            </label>
            <input
              id="billing-streetaddress-id"
              type="text"
              placeholder="123st."
              className="billing-streetaddress"
              onChange={(e) => {
                setUserStreetAddress(e.target.value);
              }}
            />
            <p className="billing-streetaddress-error msg-hide">
              Please enter a valid Street address
            </p>
          </div>
          <div id="billing-form-city-container">
            <label htmlFor="billing-city-id">
              City<sup className="required-field">*</sup>
            </label>
            <input
              id="billing-city-id"
              type="text"
              placeholder="Edmonton"
              className="billing-city"
              onChange={(e) => {
                setUserCity(e.target.value);
              }}
            />
            <p className="billing-city-error msg-hide">Please enter a city</p>
          </div>
          <div id="billing-form-province-container">
            <label htmlFor="province-id">
              Province<sup className="required-field">*</sup>
            </label>
            <select
              id="province-id"
              onChange={(e) => {
                setUserProvince(e.target.value);
              }}
            >
              <option value="AB">AB </option>
              <option value="BC">BC </option>
              <option value="MAN">MAN </option>
              <option value="SK">SK</option>
              <option value="ONT">ONT </option>
              <option value="QC">QC </option>
              <option value="NB">NB</option>
              <option value="NS">NS</option>
            </select>
          </div>
          <div id="billing-form-postal-code-container">
            <label htmlFor="billing-postalcode-id">
              Postal Code<sup className="required-field">*</sup>
            </label>
            <input
              type="text"
              id="billing-postalcode-id"
              placeholder="T2A 1E3"
              className="billing-postalcode"
              maxLength="7"
              onChange={(e) => {
                setUserPostalCode(e.target.value);
              }}
            />
            <p className="billing-postalcode-error msg-hide">
              Please enter a PostalCode
            </p>
          </div>
          <div id="billing-form-phone-container">
            <label htmlFor="billing-phone-id">
              Phone<sup className="required-field">*</sup>
            </label>
            <input
              type="text"
              id="billing-phone-id"
              maxLength="10"
              placeholder="780-123-4567"
              className="billing-phone"
              onChange={(e) => {
                setUserPhone(e.target.value);
              }}
            />
            <p className="billing-phone-error msg-hide">
              Please enter a valid phone number
            </p>
          </div>
          <div id="billing-form-email-container">
            <label htmlFor="billing-email-id">
              Email Address <sup className="required-field">*</sup>
            </label>
            <input
              id="billing-email-id"
              type="text"
              placeholder="example@domain.com"
              className="billing-email"
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
            />
            <p className="billing-email-error msg-hide">
              Please enter valid email Id
            </p>
          </div>
        </div>
      </section>
    </>
  );
});

export default BillingDetailsComponent;
