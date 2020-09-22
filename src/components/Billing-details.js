import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ChangeBillingInfo } from "../actions/Billing-info";

const BillingDetailsComponent = (props) => {
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
  // Check we need to make a global copy
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
  const validationForm = (e) => {
    e.preventDefault();
    dispatch(ChangeBillingInfo(BillingInfoCopy));
  };

  return (
    <>
      {/* DO WE NEED A SUBMIT HERE */}
      <form onSubmit={validationForm}>
        <label htmlFor="First Name" className="screen-reader-text">
          First Name
        </label>
        <input
          type="text"
          onChange={(e) => {
            setUserFirstName(e.target.value);
          }}
        />
        <label htmlFor=" Last Name" className="screen-reader-text">
          Last Name
        </label>
        <input
          type="text"
          onChange={(e) => {
            setUserLastName(e.target.value);
          }}
        />
        <label htmlFor="StreetAddress" className="screen-reader-text">
          Street Address
        </label>
        <input
          type="text"
          onChange={(e) => {
            setUserStreetAddress(e.target.value);
          }}
        />
        <label htmlFor="City" className="screen-reader-text">
          City
        </label>
        <input
          type="text"
          onChange={(e) => {
            setUserCity(e.target.value);
          }}
        />

        <label htmlFor="Province" className="screen-reader-text">
          Province
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
        <label htmlFor="Postal Code" className="screen-reader-text">
          Postal Code
        </label>
        <input
          type="text"
          onChange={(e) => {
            setUserPostalCode(e.target.value);
          }}
        />
        <label htmlFor="Phone" className="screen-reader-text">
          Phone
        </label>
        <input
          type="number"
          onChange={(e) => {
            setUserPhone(e.target.value);
          }}
        />
        <label htmlFor="Email Address" className="screen-reader-text">
          Email Address *
        </label>
        <input
          type="text"
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
        />
      </form>
    </>
  );
};

export default BillingDetailsComponent;
