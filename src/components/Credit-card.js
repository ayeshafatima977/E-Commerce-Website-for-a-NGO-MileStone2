import React from "react";
import { useSelector, useDispatch } from "react-redux";

const CreditCardComponent = () => {
  const GlobalStateInfo = useSelector((state) => state);
  const dispatch = useDispatch();
  const CreditCardStateInfoCopy = {
    ...GlobalStateInfo.UserData.CreditCardInfo.No,
  };
  dispatch(ChangeCreditInfo(CreditCardStateInfoCopy));

  return <></>;
};

export default CreditCardComponent;
