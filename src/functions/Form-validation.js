import "../css/Form-validation.css";

/* Citation:
*@Link:https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
*@Link: https://stackoverflow.com/questions/3763820/javascript-regular-expression-to-validate-an-address
*Link : https://www.w3resource.com/javascript/form/phone-no-validation.php
*@Link:https://stackoverflow.com/questions/15774555/efficient-regex-for-canadian-postal-code-function
*@Link:https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
*/
export default function FormValidation(
  inputFieldContent,
  inputFieldType,
  inputFieldClassName,
  errorMessageClassName
) {
  const canadianMobilePrefix = [
    226,
    249,
    289,
    343,
    365,
    416,
    437,
    519,
    548,
    613,
    647,
    705,
    807,
    905,
    403,
    587,
    780,
    825,
    236,
    250,
    604,
    672,
    778,
    506,
    709,
    782,
    902,
    204,
    431,
    306,
    867,
    639,
  ];
  let PassIndicator = true;
  inputFieldContent = inputFieldContent.trim();
  const manipulateDoMError = () => {
    document
      .getElementsByClassName(errorMessageClassName)[0]
      .classList.add("msg-show");
    document
      .getElementsByClassName(inputFieldClassName)[0]
      .classList.add("input-error");
    PassIndicator = false;
  };

  const manipulateDoMClearError = () => {
    document
      .getElementsByClassName(errorMessageClassName)[0]
      .classList.remove("msg-show");
    document
      .getElementsByClassName(inputFieldClassName)[0]
      .classList.remove("input-error");
  };

  switch (inputFieldType) {
    case "name": //first name , second name, full name and city
      if (!/^[A-Za-z/s]+$/.test(inputFieldContent)) {
        manipulateDoMError();
      } else {
        manipulateDoMClearError();
      }
      return PassIndicator;

    case "email":
      if (
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputFieldContent)
      ) {
        manipulateDoMError();
      } else {
        manipulateDoMClearError();
      }
      return PassIndicator;

    case "required-field": //subject, message, date
      if (inputFieldContent === "") {
        manipulateDoMError();
      } else {
        manipulateDoMClearError();
      }
      return PassIndicator;

    case "postal": // Canadian Postal Code
      if (!/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(inputFieldContent)) {
        manipulateDoMError();
      } else {
        manipulateDoMClearError();
      }
      return PassIndicator;

    case "address":
      if (
        inputFieldContent === "" ||
        !/^[a-zA-Z0-9\s,'-.]*$/.test(inputFieldContent)
      ) {
        manipulateDoMError();
      } else {
        manipulateDoMClearError();
      }
      return PassIndicator;

    case "phone": // Canadian local phones
      const inputFieldContentPrefix = inputFieldContent.slice(0, 3);
      const aCanadianNbr = canadianMobilePrefix.includes(
        Number(inputFieldContentPrefix)
      );
      if (
        !(
          /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
            inputFieldContent
          ) && aCanadianNbr
        )
      ) {
        manipulateDoMError();
      } else {
        manipulateDoMClearError();
      }
      return PassIndicator;

    case "cc-number-input":
      if (
        !/^\(?([0-9]{4})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})?[-. ]?([0-9]{4})$/.test(
          inputFieldContent
        )
      ) {
        manipulateDoMError();
      } else {
        manipulateDoMClearError();
      }
      return PassIndicator;

    case "cc-exp":
      if (!/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(inputFieldContent)) {
        manipulateDoMError();
      } else {
        manipulateDoMClearError();
      }
      return PassIndicator;

    case "cc-cvc":
      if (!/^[0-9]{3,4}$/.test(inputFieldContent)) {
        manipulateDoMError();
      } else {
        manipulateDoMClearError();
      }
      return PassIndicator;

    case "password":
      if (
        !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8}$/.test(
          inputFieldContent
        )
      ) {
        manipulateDoMError();
      } else {
        manipulateDoMClearError();
      }
      return PassIndicator;
      
    default:
      return;
  }
}
