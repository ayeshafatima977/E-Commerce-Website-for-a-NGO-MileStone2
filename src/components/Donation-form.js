import React, { useState, useRef } from "react";
import CreditCardComponent from "./Credit-card";
import BillingDetailsComponent from "./Billing-details";
import { useSelector, useDispatch } from "react-redux";
import '../css/Donation-form.css';

const DonationFormComponent = () => {
  let x = false;
  const globalStateInfo = useSelector((state) => state);
  const dispatch = useDispatch();
  const [donationAmount, setDonationAmount] = useState(0);
  const [fundType, setFundType] = useState("General");
  const [donationFreq, setDonationFreq] = useState("Donate Now");
  const SubmitForm = () => {
    console.log("Hello World!");
    //Remove product from the subtotal and order altogether if 0 when user hit submit
    //global validation function
  };

  const creditCardRef = useRef();
  const billingInfoRef = useRef();

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          SubmitForm();
        }}
      >
        <h1>Donation Details</h1>
        <h2> Amount </h2>
        <label htmlFor="donation-freq" className="screen-reader-text">
          Donation Frequency
        </label>
        <select
          id="donation-freq"
          onChange={(e) => setDonationFreq(e.target.value)}
          value={donationFreq}
        >
          <option value="Donate Now">Donate Now </option>
          <option value="Donate Monthly">Donate Monthly </option>
        </select>
        <label htmlFor="donation-amount" className="screen-reader-text">
          Donation Amount
        </label>
        <span>$<input
          id="donation-amount"
          type="number"
          onChange={(e) => setDonationAmount(e.target.value)}
          placeholder="Donation Amount"
          value={donationAmount}
        ></input></span>
        <h2>Fund</h2>
        <label htmlFor="func-type" className="screen-reader-text">
          Fund Type
        </label>
        <select
          id="func-type"
          onChange={(e) => setFundType(e.target.value)}
          value={fundType}
        >
          <option value="General">General </option>
          <option value="Kids Sports and Arts Fund">
            Kids Sports and Arts Fund{" "}
          </option>
          <option value="Help to Feed a Kid">Help to Feed a Kid </option>
          <option value="Kids Education Fund">Kids Education Fund </option>
          <option value="Kids Clothing Fund">Kids Clothing Fund </option>
        </select>
        <label htmlFor="donation-message" className="screen-reader-text">
          Message
        </label>
        <input
          id="donation-message"
          type="textarea"
          placeholder="Send us a message"
        ></input>
        <CreditCardComponent ref={creditCardRef} />

        <BillingDetailsComponent ref={billingInfoRef} />
        <button
          onClick={() => {
            creditCardRef.current.runCreditCardDispatch();
            billingInfoRef.current.runBillingInfoDispatch();
          }}
        >
          Click
        </button>
      </form>
    </>
  );
};

export default DonationFormComponent;
