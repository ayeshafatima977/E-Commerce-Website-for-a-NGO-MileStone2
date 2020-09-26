import React, { useState, useImperativeHandle, forwardRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ChangeBillingInfo } from "../actions/Billing-info";
import FormValidation from "../functions/Form-validation.js";
import "../css/Billing-details.css";

const BillingDetailsComponent = forwardRef((props, ref) => {
  const GlobalStateInfo = useSelector((state) => state);
  const dispatch = useDispatch();

  //Creating Local states
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userStreetAddress, setUserStreetAddress] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userProvince, setUserProvince] = useState("AB");
  const [userPostalCode, setUserPostalCode] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");

  // Creating a Copy with parameters assigned in the Billing Information reducer
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

  useImperativeHandle(ref, () => ({
    runBillingInfoDispatch() {
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
      <form id="billing-form">
        <label htmlFor="first name">
          First Name<sup className="required-field">*</sup>
        </label>
        <input
          id="billing-firstname-id"
          type="text"
          placeholder="Johnny"
          className="billing-firstname"
          onChange={(e) => {
            setUserFirstName(e.target.value);
          }}
        />
        <p className="billing-firstname-error msg-hide">
          Please enter correct First Name
        </p>
        <label htmlFor="last name">
          Last Name<sup className="required-field">*</sup>
        </label>
        <input
          id="billing-lastname-id"
          type="text"
          placeholder="Bravo"
          className="billing-lastname"
          onChange={(e) => {
            setUserLastName(e.target.value);
          }}
        />
        <p className="billing-lastname-error msg-hide">
          Please enter correct Last Name
        </p>
        <label htmlFor="street address">
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
        <label htmlFor="city">
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

        <label htmlFor="province">
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
        <label htmlFor="postal Code">
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
        <label htmlFor="phone">
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
        <label htmlFor="email address">
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
      </form>
    </>
  );
});

export default BillingDetailsComponent;
