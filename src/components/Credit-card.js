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
import DatePicker from "react-datepicker";
const CreditCardComponent = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  /*Creating Local states  */
  const [userCreditNumber, setUserCreditNumber] = useState("");
  const [userExpiry, setUserExpiry] = useState("");
  const [userCVC, setUserCVC] = useState("");
  const [userInfoSave, setUserInfoSave] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  /* 
   Creating a Copy with parameters assigned in the Creditcard reducer*/
  const CreditCardStateInfoCopy = {
    No: userCreditNumber,
    ExpDate: userExpiry,
    CVC: userCVC,
    SaveCCInfo: userInfoSave,
  };
  /* 
  Using react useRef hook to access the child component from the parent component to execute validation 
  This method was required as we import multiple form components within on parent form and all forms must
  be submitted from the parent form
  */
  useImperativeHandle(ref, () => ({
    runCreditCardDispatch() {
      /* This function will run onsubmit from parent-Shopping Cart
       */
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
      ){
        dispatch(ChangeCreditInfo(CreditCardStateInfoCopy));
      return true;}
    },
  }));
  return (
    <>
      <section id="credit-card-form">
        <div className="credit-card-form-section-container">
          <div className="cards-styling">
            <section id="cards-row-1" className="cards">
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
            <section id="cards-row-2" className="cards">
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
          <div id="creditcard-input-container">
            <div id="credit-number-container">
              <label className="credit-label" htmlFor="user-credit-number-id">
                Number on Card<sup className="required-field">*</sup>
              </label>
              <div className="credit-icon">
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
              <label
                className="credit-label"
                id="cc-exp-date-label"
                htmlFor="user-credit-expiry-id"
              >
                Expires<sup className="required-field">*</sup>
              </label>
              {/* Date Picker component is used here for the user to select the expiry date  */}
              <DatePicker
                id="user-credit-expiry-id"
                className="user-credit-expiry"
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);
                  if (date !== null) {
                    setUserExpiry(date.getMonth() + "/" + date.getFullYear());
                  } else {
                    setUserExpiry("00/0000");
                  }
                }}
                placeholderText="Click to select a date"
                dateFormat="yyyy/MM"
                showMonthYearPicker
                minDate={new Date()}
              />
              <p className="user-credit-expiry-error msg-hide">
                Please enter correct expiry date
              </p>
            </div>
            <div id="credit-CVC-container">
              <label
                className="credit-label"
                id="cc-cvc-label"
                htmlFor="user-credit-cvc-id"
              >
                Security Code <sup className="required-field">*</sup>
              </label>
              <input
                type="text"
                id="user-credit-cvc-id"
                placeholder="1234"
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
            {/* <section className="checkbox"> */}
            <div id="credit-save-container">
              <input
                type="checkbox"
                id="checkboxes"
                onChange={(e) => {
                  /* If the checkbox is checked it returns true else returns false*/
                  setUserInfoSave(e.target.checked);
                }}
              />
              <label htmlFor="checkboxes" id="checkbox-label">
                Save payment information
              </label>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});
export default CreditCardComponent;