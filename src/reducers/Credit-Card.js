const CreditCardReducer = (
  state = {
    No: 0,
    ExpDate: "",
    CVC: 0,
    SaveCCInfo: true
  },
  action) => {
  switch (action.type) {
    case ("CHANGE_CREDIT_NO"):
    {
      // Logic for changing the credit card no
       break;
    }
    case ("CHANGE_EXP_DATE"):
    {
       // Logic for changing the expiry date
       break;
    }
    case ("CHANGE_CVC"):
    {
       // Logic for changing the CVC.
       break;
    }
    case ("CLEAR_CC_INFO"):
    {
       // Logic for clearing CC info if user doesn't want us to save it.
       break;
    }
    default:
       return state;
  };
};

export default CreditCardReducer;