import React, { useState, useRef } from "react";
import CreditCardComponent from "./Credit-card";
import BillingDetailsComponent from "./Billing-details";
import { useSelector, useDispatch } from "react-redux";
import "../css/Donation-form.css";
import FormValidation from "../functions/Form-validation.js";

const DonationFormComponent = () => {
  let x = false;
  const globalStateInfo = useSelector((state) => state);
  const dispatch = useDispatch();
  const [donationAmount, setDonationAmount] = useState(0);
  const [fundType, setFundType] = useState("General");
  const [donationFreq, setDonationFreq] = useState("Donate Now");
  const [donationMsg, setdonationmsg] = useState("");

  //Global validation function
  const SubmitForm = (e) => {
    e.preventDefault();
    if (
      FormValidation(
        donationAmount,
        "donationAmount",
        "donationAmount",
        "donationAmount-error"
      ) &&
      FormValidation(
        donationMsg,
        "donationMsg",
        "donationMsg",
        "donationMsg-error"
      )
    ) {
      document
        .getElementsByClassName("donation-thanks-msg")[0]
        .classList.add("msg-show");
    } else {
      document
        .getElementsByClassName("donation-thanks-msg")[0]
        .classList.remove("msg-show");
    }
    //Remove product from the subtotal and order altogether if 0 when user hit submit
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
        <label htmlFor="donation-freq">Donation Frequency</label>
        <select
          id="donation-freq"
          onChange={(e) => setDonationFreq(e.target.value)}
          value={donationFreq}
        >
          <option value="Donate Now">Donate Now </option>
          <option value="Donate Monthly">Donate Monthly </option>
        </select>
        <label htmlFor="donation-amount">Donation Amount</label>
        <span>
          $
          <input
            className="donationAmount"
            type="number"
            onChange={(e) => setDonationAmount(e.target.value)}
            placeholder="Donation Amount"
            value={donationAmount}
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
        <input
          className="donationMsg"
          id="donation-message"
          type="textarea"
          placeholder="Send us a message. Max 500 Character"
          maxlength="5"
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

        <p className="donationAmount-error msg-hide">
          Please enter Donation amount
        </p>
        <p className="donationMsg-error msg-hide">
          Please don't exceed 500 characters.
        </p>
        <p className="donation-thanks-msg msg-hide">
          Thankyou for your Donation,Your Donation has been received.
        </p>
      </form>
    </>
  );
};

export default DonationFormComponent;
