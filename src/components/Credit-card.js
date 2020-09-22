import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ChangeCreditInfo } from "../actions/Credit-card";

const CreditCardComponent = () => {
  const GlobalStateInfo = useSelector((state) => state);
  const dispatch = useDispatch();
  //const CreditCardStateInfoCopy = {
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

  //   // Update the state you wish to edit in the copy
  //   CreditCardStateInfoCopy.No = 123456;
  //   CreditCardStateInfoCopy.ExpDate = 40620;
  //   CreditCardStateInfoCopy.CVC = 1423;
  //This is to access the store for edit mode i.e dispatch(actionFunction(payload));
  //   dispatch(ChangeCreditInfo({ creditInfo }));

  // Change Global Store with the Local values edited above
  // };

  // //@Link :https://stackoverflow.com/questions/49212020/react-checkbox-select-onchange
  // handleCheckClick = () => {
  //   this.setState({ checked: !this.state.checked });
  // };

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
          onChange={(e) => {
            setUserCreditNumber(e.target.value);
          }}
        />
        <label htmlFor="Expiry Date" className="screen-reader-text">
          Expiry Date *
        </label>
        <input
          type="number"
          onChange={(e) => {
            setUserExpiry(e.target.value);
          }}
        />
        <label htmlFor="Card Code(CVC)" className="screen-reader-text">
          Card Code (CVC) *
        </label>
        <input
          type="number"
          onChange={(e) => {
            setUserCVC(e.target.value);
          }}
        />
        <input
          type="checkbox"
          checked={this.state.checked}
          onChange={this.handleCheckClick}
          className="filled-in"
          id="filled-in-box"
        />

        <input
          type="checkbox"
          onClick={(e) => {
            setUserInfoSave(e.target.value);
          }}
        />
        <button type="Submit">Send</button>
      </form>
    </>
  );
};
export default CreditCardComponent;
