/* Global state reducer to store the user billing details for 
local use within other components or future backend DB applications */

const BillingInfoReducer = (
  state = {
    fName: "",
    lName: "",
    address: "",
    city: "",
    prov: "",
    postalCode: "",
    phone: "",
    emailID: "",
  },
  action
) => {
  switch (action.type) {
    case "CHANGE_BILLING_INFO": {
      const BillingInformationCopy = { ...state };
      BillingInformationCopy.fName = action.payload.fName;
      BillingInformationCopy.lName = action.payload.lName;
      BillingInformationCopy.address = action.payload.address;
      BillingInformationCopy.city = action.payload.city;
      BillingInformationCopy.prov = action.payload.prov;
      BillingInformationCopy.postalCode = action.payload.postalCode;
      BillingInformationCopy.phone = action.payload.phone;
      BillingInformationCopy.email = action.payload.email;
      return BillingInformationCopy;
    }
    default:
      return state;
  }
};

export default BillingInfoReducer;
