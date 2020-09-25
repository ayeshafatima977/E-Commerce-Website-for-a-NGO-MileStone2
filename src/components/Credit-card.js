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
          "userCreditNumber",
          "userCreditNumber-error"
        ) &&
        FormValidation(
          userExpiry,
          "cc-exp",
          "userExpiry",
          "userExpiry-error"
        ) &&
        FormValidation(userCVC, "cc-cvc", "userCVC", "userCVC-error")
      )
        // {
        //   document
        //     .getElementsByClassName("credit-thanks-msg")[0]
        //     .classList.add("msg-show");
        // } else {
        //   document
        //     .getElementsByClassName("credit-thanks-msg")[0]
        //     .classList.remove("msg-show");
        // }

        // After validation sucessfull it will perform dispatch
        console.log("Inside Credit Card Component:", CreditCardStateInfoCopy);

      dispatch(ChangeCreditInfo(CreditCardStateInfoCopy));
      return true;
    },
  }));
  // Note:Wrap the INPUTS IN FORM
  return (
    <>
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
          placeholder="xxxx xxxx xxxx xxxx"
          className="userCreditNumber"
          maxLength="16"
          onChange={(e) => {
            setUserCreditNumber(e.target.value);
          }}
        />
        <FaCreditCard />
      </div>

      <label htmlFor="Expiry Date">
        Expires<span className="required-field">*</span>
      </label>
      <input
        type="text"
        maxlength="5"
        placeholder="YY MM"
        className="userExpiry"
        onChange={(e) => {
          setUserExpiry(e.target.value);
        }}
      />
      <label htmlFor="Card Code(CVC)">
        Security Code <span className="required-field">*</span>
      </label>
      <input
        type="text"
        placeholder="xxx"
        className="userCVC"
        maxLength="4"
        onChange={(e) => {
          setUserCVC(e.target.value);
        }}
      />
      <input
        type="checkbox"
        id="checkboxes"
        onChange={(e) => {
          // If the checkbox is checked it returns true else returns false
          setUserInfoSave(e.target.checked);
        }}
      />
      <p className="userCreditNumber-error msg-hide">
        Please enter correct Credit Card Number
      </p>
      <p className="userExpiry-error msg-hide">
        Please enter correct expiry date
      </p>
      <p className="userCVC-error msg-hide">Please enter correct CVC</p>
      {/* <p className="credit-thanks-msg msg-hide">
        Thankyou ,Your Payment has been received.
      </p> */}
    </>
  );
});
export default CreditCardComponent;
