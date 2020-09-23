import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ChangeCreditInfo } from "../actions/Credit-card";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcAmazonPay } from "react-icons/fa";
import { FaCcApplePay } from "react-icons/fa";
import { SiGooglepay } from "react-icons/si";
import { FaCreditCard } from "react-icons/fa";

const CreditCardComponent = () => {
  const GlobalStateInfo = useSelector((state) => state);
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

  //NEED TO VALIDATE CC FORM validationForm
  const validationForm = (e) => {
    e.preventDefault();
    // Dispatch the new object back to the reducer to update the state :dispatch(actionFunction(payload));
    // dispatch(ChangeCreditInfo(CreditCardStateInfoCopy));
  };

  return (
    <>
      <form>
        {" /* onSubmit={validationForm} */ "}
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
          type="number"
          placeholder="Enter your Credit Card Number"
          onChange={(e) => {
            setUserCreditNumber(e.target.value);
            dispatch(ChangeCreditInfo(CreditCardStateInfoCopy));
          }}
        />
        <p>
          <FaCreditCard />
        </p>
        <label htmlFor="Expiry Date">Expiry Date*</label>
        <input
          type="number"
          placeholder="Enter your Expiry Date"
          onChange={(e) => {
            setUserExpiry(e.target.value);
            dispatch(ChangeCreditInfo(CreditCardStateInfoCopy));
          }}
        />
        <label htmlFor="Card Code(CVC)">Card Code (CVC) *</label>
        <input
          type="number"
          placeholder="Enter your CVC"
          onChange={(e) => {
            setUserCVC(e.target.value);
            dispatch(ChangeCreditInfo(CreditCardStateInfoCopy));
          }}
        />
        <input
          type="checkbox"
          id="checkboxes"
          onChange={(e) => {
            // If the checkbox is checked it returns true else returns false
            setUserInfoSave(e.target.checked);
            dispatch(ChangeCreditInfo(CreditCardStateInfoCopy));
          }}
        />
        {/* Testing */}
        {/* {console.log(userInfoSave)} */}
        {/* <button type="Submit">Save</button> */}
      </form>
    </>
  );
};
export default CreditCardComponent;
