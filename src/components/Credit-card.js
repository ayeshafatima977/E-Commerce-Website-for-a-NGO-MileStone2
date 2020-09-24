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
  const [userCreditNumber, setUserCreditNumber] = useState("0");
  const [userExpiry, setUserExpiry] = useState("0");
  const [userCVC, setUserCVC] = useState("0");
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
      dispatch(ChangeCreditInfo(CreditCardStateInfoCopy));
    },
  }));

  const SubmitForm = (e) => {
    e.preventDefault();
    if (
      FormValidation(
        userCreditNumber,
        "userCreditNumber",
        "userCreditNumber"
      ) &&
      FormValidation(userExpiry, "userExpiry,", "userExpiry") &&
      FormValidation(userCVC, "userCVC", "userCVC")
    ) {
      document
        .getElementsByClassName("credit-thanks-msg")[0]
        .classList.add("msg-show");
    } else {
      document
        .getElementsByClassName("credit-thanks-msg")[0]
        .classList.remove("msg-show");
    }
  };

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
      <label htmlFor="Card Number">Card Number</label>
      <input
        type="text"
        placeholder="Enter your Credit Card Number"
        className="userCreditNumber"
        maxLength="16"
        onChange={(e) => {
          setUserCreditNumber(e.target.value);
        }}
      />
      <p>
        <FaCreditCard />
      </p>
      <form onSubmit={SubmitForm} id="creditForm">
        <label htmlFor="Expiry Date">Expiry Date*</label>
        <input
          type="number"
          placeholder="Enter your Expiry Date"
          className="userExpiry"
          onChange={(e) => {
            setUserExpiry(e.target.value);
          }}
        />
        <label htmlFor="Card Code(CVC)">Card Code (CVC) *</label>
        <input
          type="text"
          placeholder="Enter your CVC"
          className="userCVC"
          maxLength="3"
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
        <p className="credit-thanks-msg msg-hide">
          Thankyou ,Your Payment has been received.
        </p>
      </form>
    </>
  );
});
export default CreditCardComponent;
