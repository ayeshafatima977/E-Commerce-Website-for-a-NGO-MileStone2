import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ChangeBillingInfo } from "../actions/Billing-info";
const BillingDetailsComponent = () => {
  const GlobalStateInfo = useSelector((state) => state);
  const dispatch = useDispatch();

  //Creating Local states
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userStreetAddress, setUserStreetAddress] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userProvince, setUserProvince] = useState("");
  const [userPostalCode, setUserPostalCode] = useState("");
  const [userPhone, setUserPhone] = useState("0");
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
  //NEED TO VALIDATE CC FORM validationForm
  const validationForm = (e) => {
    e.preventDefault();
    
    // Dispatch the new object back to the reducer to update the state :dispatch(actionFunction(payload));
    dispatch(ChangeBillingInfo(BillingInfoCopy));
  };

  return (
    <>
      <h2>Billing Details</h2>
      {/* DO WE NEED A SUBMIT HERE */}
      <form onSubmit={validationForm}>
        <label htmlFor="First Name">First Name</label>
        <input
          type="text"
          placeholder="Enter your First Name"
          onChange={(e) => {
            setUserFirstName(e.target.value);
          }}
        />
        <label htmlFor=" Last Name">Last Name</label>
        <input
          type="text"
          placeholder="Enter your Last Name"
          onChange={(e) => {
            setUserLastName(e.target.value);
          }}
        />
        <label htmlFor="StreetAddress">Street Address</label>
        <input
          type="text"
          placeholder="Enter your Street Address"
          onChange={(e) => {
            setUserStreetAddress(e.target.value);
          }}
        />
        <label htmlFor="City">City</label>
        <input
          type="text"
          placeholder="Enter your City"
          onChange={(e) => {
            setUserCity(e.target.value);
          }}
        />

        <label htmlFor="Province">Province</label>
        <select
          onChange={(e) => {
            setUserProvince(e.target.value);
          }}
        >
          <option value="">--Please Select Your Province--</option>
          <option value="AB">AB </option>
          <option value="BC">BC </option>
          <option value="MAN">MAN </option>
          <option value="SK">SK</option>
          <option value="ONT">ONT </option>
          <option value="QC">QC </option>
          <option value="NB">NB</option>
          <option value="NS">NS</option>
        </select>
        <label htmlFor="Postal Code">Postal Code</label>
        <input
          type="text"
          placeholder="Enter your Postal Code"
          onChange={(e) => {
            setUserPostalCode(e.target.value);
          }}
        />
        <label htmlFor="Phone">Phone</label>
        <input
          type="number"
          placeholder="Enter your Phone Number"
          onChange={(e) => {
            setUserPhone(e.target.value);
          }}
        />
        <label htmlFor="Email Address">Email Address *</label>
        <input
          type="text"
          placeholder="Enter your Email Address"
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
        />
        {/* TESTING BUTTON */}
        <button type="Submit">Send</button>
      </form>
    </>
  );
};

export default BillingDetailsComponent;
