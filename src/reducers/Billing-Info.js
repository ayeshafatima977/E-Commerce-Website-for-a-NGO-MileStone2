const BillingInfoReducer = (
  state = {
    FName: "",
    LName: "",
    Address: "",
    City: "",
    Prov: "",
    PostalCode: "",
    Phone: "",
    EmailID: "",
  },
  action
) => {
  switch (action.type) {
    case "CHANGE_F_NAME": {
      // Logic for changing the first name
      break;
    }
    case "CHANGE_L_NAME": {
      // Logic for changing the last name
      break;
    }
    case "CHANGE_ADDRESS": {
      // Logic for changing the address
    }
    case "CHANGE_CITY": {
      // Logic for changing the city
      break;
    }
    case "CHANGE_PROVINCE": {
      // Logic for changing the province
      break;
    }
    case "CHANGE_POSTAL_CODE": {
      // Logic for changing the postal code
      break;
    }
    case "CHANGE_PHONE": {
      // Logic for changing the phone number
      break;
    }
    case "CHANGE_EMAIL": {
      // Logic for changing the email address
      break;
    }
    default:
      return state;
  }
};

export default BillingInfoReducer;
