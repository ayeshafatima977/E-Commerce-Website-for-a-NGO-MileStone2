import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ChangeCreditInfo } from "../actions/Credit-card";

const CreditCardComponent = () => {
  const GlobalStateInfo = useSelector((state) => state);
  const dispatch = useDispatch();
  //   Creating a copy of Global Store with User Data
  //...GlobalStateInfo.UserData.CreditCardInfo
  //};
  //Creating Local states
  const [userCreditNumber, setUserCreditNumber] = useState("0");
  const [userExpiry, setUserExpiry] = useState("0");
  const [userCVC, setUserCVC] = useState("0");
  const [userInfoSave, setUserInfoSave] = useState("");

  const CreditCardStateInfoCopy = {
    No: userCreditNumber,
    ExpDate: userExpiry,
    CVC: userCVC,
    SaveCCInfo: userInfoSave,
  };

  //NEED TO VALIDATE CC FORM validationForm
  const validationForm = (e) => {
    e.preventDefault();
    dispatch(ChangeCreditInfo(CreditCardStateInfoCopy));
  };

  return (
    <>
      <form onSubmit={validationForm}>
        <h2>Credit Card</h2>
        <label htmlFor="Card Number" className="screen-reader-text">
          Card Number
        </label>
        <input
          type="number"
          placeholder="Enter your Credit Card Number"
          onChange={(e) => {
            setUserCreditNumber(e.target.value);
          }}
        />
        <label htmlFor="Expiry Date" className="screen-reader-text">
          Expiry Date *
        </label>
        <input
          type="number"
          placeholder="Enter your Expiry Date"
          onChange={(e) => {
            setUserExpiry(e.target.value);
          }}
        />
        <label htmlFor="Card Code(CVC)" className="screen-reader-text">
          Card Code (CVC) *
        </label>
        <input
          type="number"
          placeholder="Enter your CVC"
          onChange={(e) => {
            setUserCVC(e.target.value);
          }}
        />

        <input
          type="checkbox"
          id="checkboxes"
          onChange={(e) => {
            setUserInfoSave(e.target.checked);
          }}
        />
        {console.log(userInfoSave)}

        <button type="Submit">Save</button>
      </form>
    </>
  );
};
export default CreditCardComponent;
