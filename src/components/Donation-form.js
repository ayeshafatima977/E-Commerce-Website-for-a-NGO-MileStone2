import React, { useState, useRef } from "react";
import CreditCardComponent from "./Credit-card";
import BillingDetailsComponent from "./Billing-details";
import { useSelector, useDispatch } from "react-redux";
import "../css/Donation-form.css";
import FormValidation from "../functions/Form-validation.js";

const DonationFormComponent = () => {
  let x = false;
  const [CreditCardValidationStatus, SetCreditCardValidationStatus] = useState(
    false
  );
  const [
    BillingDetailsValidationStatus,
    SetBillingDetailsValidationStatus,
  ] = useState(false);
  const globalStateInfo = useSelector((state) => state);
  const dispatch = useDispatch();
  const [donationAmount, setDonationAmount] = useState(5);
  const [fundType, setFundType] = useState("General");
  const [donationFreq, setDonationFreq] = useState("Donate Now");
  const [donationMsg, setdonationmsg] = useState("");

  //Global validation function
  const SubmitForm = (e) => {
    e.preventDefault();
    if (CreditCardValidationStatus && BillingDetailsValidationStatus) {
      alert("Thankyou! Your Donation has been received");
    }
  };

  const creditCardRef = useRef();
  const billingInfoRef = useRef();

  return (
    <>
      <form id="donation-form-container" onSubmit={SubmitForm}>
        <h1>Donation Details</h1>
        <div className="donation-form-section-container">
          <h2> Amount </h2>
        <label htmlFor="donation-freq">Donation Frequency</label>
        <select
          id="donation-freq"
          onChange={(e) => setDonationFreq(e.target.value)}
          value={donationFreq}
        >
          <option value="Donate Now">Donate Now </option>
          <option value="Donate Monthly">Donate Monthly </option>
        </select>
        <label htmlFor="donation-amount">
          Donation Amount<span className="required-field">*</span>
        </label>
        <span>
          $
          <input
            className="donationAmount"
            type="number"
            onChange={(e) => {
              if (setDonationAmount(e.target.value));
              e.target.value > 5 || (e.target.value = "5");
            }}
            placeholder="Min $5 for online"
            value={donationAmount}
            min="5"
          ></input>
        </span>
        <h2>Fund</h2>
        <label htmlFor="fund-type">Fund Type</label>
        <select
          id="fund-type"
          onChange={(e) => setFundType(e.target.value)}
          value={fundType}
        >
          <option value="General">General </option>
          <option value="Kids Sports and Arts Fund">
            Kids Sports and Arts Fund
          </option>
          <option value="Help to Feed a Kid">Help to Feed a Kid </option>
          <option value="Kids Education Fund">Kids Education Fund </option>
          <option value="Kids Clothing Fund">Kids Clothing Fund </option>
        </select>
        <label htmlFor="donation-message">Message</label>
        <textarea
          className="donationMsg"
          id="donation-message"
          type="textarea"
          placeholder="We love to hear from your ... 500 character max"
          maxLength="500"
        ></textarea>
       </div>
        <div className="donation-form-section-container">
          <BillingDetailsComponent ref={billingInfoRef} /></div>
        <div className="donation-form-section-container">
          <CreditCardComponent ref={creditCardRef} />
        </div>
        <button
          onClick={() => {
            SetCreditCardValidationStatus(
              creditCardRef.current.runCreditCardDispatch()
            );
            SetBillingDetailsValidationStatus(
              billingInfoRef.current.runBillingInfoDispatch()
            );
          }}
        >
          {/* NOTE REPLACE BUTTON AS PER FIGMA */}
          Click
        </button>
      </form>
    </>
  );
};

export default DonationFormComponent;
