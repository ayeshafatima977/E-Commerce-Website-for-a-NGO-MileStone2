const ChangeFName= (name) => {
  return {
    type: "CHANGE_F_NAME",
    payload: name
  };
};
const ChangeLName = (name) => {
  return {
    type: "CHANGE_L_NAME",
    payload: name
  };
};
const ChangeStreetAddress = (address) => {
  return {
    type: "CHANGE_ADDRESS",
    payload: address
  };
};
const ChangeCity = (city) => {
  return {
    type: "CHANGE_CITY",
    payload: city
  };
};
const ChangeProv = (province) => {
  return {
    type: "CHANGE_PROVINCE",
    payload: province
  };
};
const ChangePostal= (postalCode) => {
  return {
    type: "CHANGE_POSTAL_CODE",
    payload: postalCode
  };
};
const ChangePhone = (phoneNo) => {
  return {
    type: "CHANGE_PHONE",
    payload: phoneNo
  };
};
const ChangeEmail = (email) => {
  return {
    type: "CHANGE_EMAIL",
    payload: email
  };
};

export { ChangeFName, ChangeLName, ChangeStreetAddress, ChangeCity, ChangeProv, ChangePostal, ChangePhone, ChangeEmail };