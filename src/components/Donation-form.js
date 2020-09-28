import React, { useState, useRef } from "react";
import CreditCardComponent from "./Credit-card";
import BillingDetailsComponent from "./Billing-details";
import "../css/Donation-form.css";
import { FaMoneyBill } from "react-icons/fa";

const DonationFormComponent = () => {
  const [CreditCardValidationStatus, SetCreditCardValidationStatus] = useState(
    false
  );
  const [
    BillingDetailsValidationStatus,
    SetBillingDetailsValidationStatus,
  ] = useState(false);
  /* Dispatch and useSelector setup for future use in case the form to be submitted into DB  */
  const [donationAmount, setDonationAmount] = useState(5);
  const [fundType, setFundType] = useState("General");
  const [donationFreq, setDonationFreq] = useState("Donate Now");

  /*The form submits only when all the validation is true from Billing Details,Credit Card and Donation form*/

  const SubmitForm = (e) => {
    e.preventDefault();
    if (
      CreditCardValidationStatus &&
      BillingDetailsValidationStatus &&
      donationAmount >= 5
    ) {
      alert("Thankyou! Your Donation has been received");
    }
  };
  /* 
  Using react useRef hook to access the child component from the parent component to execute validation 
  This method was required as we import multiple form components within on parent form and all forms must
  be submitted from the parent form
  */
  const creditCardRef = useRef();
  const billingInfoRef = useRef();

  return (
    <>
      <form id="donation-form-container" onSubmit={SubmitForm}>
        <h1>Donation Details</h1>
        <div className="donation-form-section-container">
          <h2> Amount </h2>
          <div id="donation-amount-container">
            <div id="donation-freq-container">
              <label htmlFor="donation-freq">Donation Frequency</label>
              <select
                id="donation-freq-id"
                onChange={(e) => setDonationFreq(e.target.value)}
                value={donationFreq}
              >
                <option value="Donate Now">Donate Now </option>
                <option value="Donate Monthly">Donate Monthly </option>
              </select>
            </div>
            <div id="donation-amount-input-container">
              <label id="donation-amount-label" htmlFor="donation-amount">
                Donation Amount<sup className="required-field">*</sup>
              </label>
              <span id="donation-amount-span">
                $&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  id="donation-amount-id"
                  className="donation-amount"
                  type="number"
                  onChange={(e) => {
                    if (setDonationAmount(e.target.value));
                    e.target.value > 5 || (e.target.value = "5");
                  }}
                  placeholder="Min $5 for online"
                  value={donationAmount}
                  min="5"
                ></input>
                <FaMoneyBill />
              </span>
            </div>
          </div>
          <h2>Fund</h2>
          <label id="fund-label" htmlFor="fund-type">Fund Type</label>
          <select
            id="fund-type-id"
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
            id="donation-message-id"
            type="textarea"
            placeholder="We love to hear from your ... 500 character max"
            maxLength="500"
          ></textarea>
        </div>
        {/* 
  Using react useRef hook to access the child component from the parent component to execute validation 
  This method was required as we import multiple form components within on parent form and all forms must
  be submitted from the parent form
  */}
        <div className="donation-form-section-container">
          <h2>Donor &amp; Tax Receipt Information</h2>
          <BillingDetailsComponent ref={billingInfoRef} />
        </div>
        <div className="donation-form-section-container">
          <CreditCardComponent ref={creditCardRef} />
        </div>
        <div id="donation-submit-button-container">
          {/* using useRef and  useImperativeHandle to submit the credit card and billing details */}
          <button
            id="donation-submit-button"
            onClick={() => {
              SetCreditCardValidationStatus(
                creditCardRef.current.runCreditCardDispatch()
              );
              SetBillingDetailsValidationStatus(
                billingInfoRef.current.runBillingInfoDispatch()
              );
            }}
          >
            Complete Your Donation
          </button>
        </div>
      </form>
    </>
  );
};

export default DonationFormComponent;
