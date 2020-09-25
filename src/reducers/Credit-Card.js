const CreditCardReducer = (
  state = {
    No: 0,
    ExpDate: "",
    CVC: 0,
    SaveCCInfo: true,
  },
  action
) => {
  switch (action.type) {
    case "CHANGE_CREDIT_INFO": {
      const CreditInfoCopy = { ...state };
      CreditInfoCopy.No = action.payload.No;
      CreditInfoCopy.ExpDate = action.payload.ExpDate;
      CreditInfoCopy.CVC = action.payload.CVC;
      CreditInfoCopy.SaveCCInfo = action.payload.SaveCCInfo;
      return CreditInfoCopy;
    }
    default:
      return state;
  }
};

export default CreditCardReducer;
