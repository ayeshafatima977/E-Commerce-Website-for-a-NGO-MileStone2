import React, { useState, useImperativeHandle, forwardRef } from "react";
import { useDispatch } from "react-redux";
import { ChangeCreditInfo } from "../actions/Credit-card";
import {
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaCcAmazonPay,
  FaCcApplePay,
  FaCreditCard,
} from "react-icons/fa";
import { SiGooglepay } from "react-icons/si";
import FormValidation from "../functions/Form-validation.js";

const CreditCardComponent = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  //Creating Local states
  const [userCreditNumber, setUserCreditNumber] = useState("");
  const [userExpiry, setUserExpiry] = useState("");
  const [userCVC, setUserCVC] = useState("");
  const [userInfoSave, setUserInfoSave] = useState("");

  // Creating a Copy with parameters assigned in the Creditcard reducer

  const CreditCardStateInfoCopy = {
    No: userCreditNumber,
    ExpDate: userExpiry,
    CVC: userCVC,
    SaveCCInfo: userInfoSave,
  };
  useImperativeHandle(ref, () => ({
    runCreditCardDispatch() {
      //Think of it as onsubmit function
      //This fn will run onsubmit from parent-Shopping Cart or the Donation form
      if (
        FormValidation(
          userCreditNumber,
          "cc-number-input",
          "user-credit-number",
          "user-credit-number-error"
        ) &&
        FormValidation(
          userExpiry,
          "cc-exp",
          "user-credit-expiry",
          "user-credit-expiry-error"
        ) &&
        FormValidation(
          userCVC, 
          "cc-cvc", 
          "user-credit-cvc", 
          "user-credit-cvc-error")
      )
        dispatch(ChangeCreditInfo(CreditCardStateInfoCopy));
      return true;
    },
  }));
  // Note:Wrap the INPUTS IN FORM
  return (
    <>
      <form id="credit-card-form">
        <h2>Credit Card</h2>
        <p>
          <FaCcMastercard />
        </p>
        <p>
          <FaCcVisa />
        </p>
        <p>
          <FaCcPaypal />
        </p>
        <p>
          <FaCcAmazonPay />
        </p>
        <p>
          <FaCcApplePay />
        </p>
        <p>
          <SiGooglepay />
        </p>
        <div>
          <label htmlFor="Card Number">
            Number on Card<span className="required-field">*</span>
          </label>
          <input
            type="text"
            placeholder="0123 4567 8910 1112"
            className="user-credit-number"
            maxLength="16"
            onChange={(e) => {
              setUserCreditNumber(e.target.value);
            }}
          />
          <FaCreditCard />
          <p className="user-credit-number-error msg-hide">
            Please enter correct Credit Card Number
          </p>
        </div>

        <label htmlFor="Expiry Date">
          Expires<span className="required-field">*</span>
        </label>
        <input
          type="text"
          maxLength="5"
          placeholder="yy/mm"
          className="user-credit-expiry"
          onChange={(e) => {
            setUserExpiry(e.target.value);
          }}
        />
        <p className="user-credit-expiry-error msg-hide">
          Please enter correct expiry date
        </p>
        <label htmlFor="Card Code(CVC)">
          Security Code <span className="required-field">*</span>
        </label>
        <input
          type="text"
          placeholder="e.g.,1234"
          className="user-credit-cvc"
          maxLength="4"
          onChange={(e) => {
            setUserCVC(e.target.value);
          }}
        />
        <p className="user-credit-cvc-error msg-hide">Please enter correct CVC</p>
        <input
          type="checkbox"
          id="checkboxes"
          onChange={(e) => {
            // If the checkbox is checked it returns true else returns false
            setUserInfoSave(e.target.checked);
          }}
        />
      </form>
    </>
  );
});
export default CreditCardComponent;
