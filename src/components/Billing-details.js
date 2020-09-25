import React, { useState, useImperativeHandle, forwardRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ChangeBillingInfo } from "../actions/Billing-info";
import FormValidation from "../functions/Form-validation.js";

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
          "fname",
          "userFirstName",
          "userFirstName-error"
        ) &&
        FormValidation(
          userLastName,
          "lname",
          "userLastName",
          "userLastName-error"
        ) &&
        FormValidation(userStreetAddress, "address", "userStreetAddress","userStreetAddress-error") &&
        FormValidation(userCity, "city", "userCity", "userCity-error") &&
        FormValidation(
          userPostalCode,
          "postal",
          "userPostalCode",
          "userPostalCode-error"
        )&&
        FormValidation(userPhone, "phone", "userPhone", "userPhone-error") &&
        FormValidation(userEmail, "email", "userEmail", "userEmail-error ") 
      
        
        
       
      ) {
        // {
        //   document
        //     .getElementsByClassName("billing-thanks-msg")[0]
        //     .classList.add("msg-show");
        // } else {
        //   document
        //     .getElementsByClassName("billing-thanks-msg")[0]
        //     .classList.remove("msg-show");
        // }
        dispatch(ChangeBillingInfo(BillingInfoCopy));
        return true;
      }
    },
  }));

  // const SubmitForm = (e) => {
  //   e.preventDefault();
  // };

  return (
    <>
      <h2>Billing Details</h2>
      <form id="billingForm">
        <label htmlFor="First Name">
          First Name<span className="required-field">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter your First Name"
          className="userFirstName"
          onChange={(e) => {
            setUserFirstName(e.target.value);
            
          }}
        />
        <label htmlFor=" Last Name">
          Last Name<span className="required-field">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter your Last Name"
          className="userLastName"
          onChange={(e) => {
            setUserLastName(e.target.value);
          }}
        />
        <label htmlFor="StreetAddress">
          Street Address<span className="required-field">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter your Street Address"
          className="userStreetAddress"
          onChange={(e) => {
            setUserStreetAddress(e.target.value);
          }}
        />
        <label htmlFor="City">
          City<span className="required-field">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter your City"
          className="userCity"
          onChange={(e) => {
            setUserCity(e.target.value);
          }}
        />

        <label htmlFor="Province">
          Province<span className="required-field">*</span>
        </label>
        <select
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
        <label htmlFor="Postal Code">
          Postal Code<span className="required-field">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter your Postal Code"
          className="userPostalCode"
          maxLength="7"
          onChange={(e) => {
            setUserPostalCode(e.target.value);
          }}
        />
        <label htmlFor="Phone">
          Phone<span className="required-field">*</span>
        </label>
        <input
          type="text"
          maxLength="10"
          placeholder="Enter your Phone Number"
          className="userPhone"
          onChange={(e) => {
            setUserPhone(e.target.value);
          }}
        />
        <label htmlFor="Email Address">
          Email Address <span className="required-field">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter your Email Address"
          className="userEmail"
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
        />
        <p className="userFirstName-error msg-hide">
          Please enter correct First Name
        </p>
        <p className="userLastName-error msg-hide">
          Please enter correct Last Name
        </p>
        <p className="userPhone-error msg-hide">
          Please enter a valid phone number
        </p>
        <p className="userEmail-error msg-hide">Please enter valid email Id</p>
        <p className="userStreetAddress-error msg-hide">
          Please enter a valid Street address
        </p>
        <p className="userCity-error msg-hide">Please enter a city</p>
        <p className="userPostalCode-error msg-hide">
          Please enter a PostalCode
        </p>
        {/* <p className="billing-thanks-msg msg-hide">Thankyou.</p> */}
      </form>
    </>
  );
});

export default BillingDetailsComponent;
