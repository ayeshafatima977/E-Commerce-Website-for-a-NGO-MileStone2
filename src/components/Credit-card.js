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
import DatePickerCCExpComponent from "./Date-picker-ccexp";
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
      //This function will run onsubmit from parent-Shopping Cart or the Donation form
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
          "user-credit-cvc-error"
        )
      )
        dispatch(ChangeCreditInfo(CreditCardStateInfoCopy));
      return true;
    },
  }));

  return (
    <>
      <form id="credit-card-form">
        <div className="credit-card-form-section-container">
          <h4>Credit Card</h4>
          <div className="cards-styling">
            <section className="cards">
              <span>
                <FaCcMastercard /> &nbsp;
              </span>
              <span>
                <FaCcVisa /> &nbsp;
              </span>
              <span>
                <FaCcPaypal /> &nbsp;
              </span>
            </section>
            <section className="cards">
              <span>
                <FaCcAmazonPay /> &nbsp;
              </span>
              <span>
                <FaCcApplePay /> &nbsp;
              </span>
              <span>
                <SiGooglepay /> &nbsp;
              </span>
            </section>
          </div>
          <div id="credit-number-container">
            <label htmlFor="user-credit-number-id">
              Number on Card<sup className="required-field">*</sup>
            </label>
            <div class="credit-icon">
              <input
                type="text"
                id="user-credit-number-id"
                placeholder="0123 4567 8910 1112"
                className="user-credit-number"
                maxLength="16"
                onChange={(e) => {
                  setUserCreditNumber(e.target.value);
                }}
              />
              <FaCreditCard id="cc" />
            </div>
            <p className="user-credit-number-error msg-hide">
              Please enter correct Credit Card Number
            </p>
          </div>
          <div id="credit-exp-date-container">
            <label htmlFor="user-credit-expiry-id">
              Expires<sup className="required-field">*</sup>
            </label>
            <DatePickerCCExpComponent />
            <input
              id="user-credit-expiry-id"
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
          </div>
          <div id="credit-CVC-container">
            <label htmlFor="user-credit-cvc-id">
              Security Code <sup className="required-field">*</sup>
            </label>
            <input
              type="text"
              id="user-credit-cvc-id"
              placeholder="e.g.,1234"
              className="user-credit-cvc"
              maxLength="4"
              onChange={(e) => {
                setUserCVC(e.target.value);
              }}
            />
            <p className="user-credit-cvc-error msg-hide">
              Please enter correct CVC
            </p>
          </div>
          <section className="checkbox">
            <div id="credit-save-container">
              <input
                type="checkbox"
                id="checkboxes"
                onChange={(e) => {
                  // If the checkbox is checked it returns true else returns false
                  setUserInfoSave(e.target.checked);
                }}
              />
              <label htmlFor="checkboxes" id="checkbox-label">
                Save payment information
              </label>
            </div>
          </section>
        </div>
      </form>
    </>
  );
});
export default CreditCardComponent;
