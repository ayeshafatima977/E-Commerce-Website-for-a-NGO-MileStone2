const ChangeCreditNo = (Num) => {
  return {
    type: "CHANGE_CREDIT_NO",
    payload: Num
  };
};
const ChangeExpDate = (date) => {
  return {
    type: "CHANGE_EXP_DATE",
    payload: date
  };
};
const ChangeCVC = (CVC) => {
  return {
    type: "CHANGE_CVC",
    payload: CVC
  };
};
const ClearCCInfo = () => {
  return {
    type: "CLEAR_CC_INFO",
    payload: true
  };
};

export { ChangeCreditNo, ChangeExpDate, ChangeCVC, ClearCCInfo };