import "../css/Form-validation.css";

/* Add more cases per the input types that you would like to validate */
/* We don't need to play with CSS */
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
    case "fname":
      if (!/^[A-Za-z]+$/.test(inputFieldContent)) {
        manipulateDoMError();
      } else {
        manipulateDoMClearError();
      }
      return PassIndicator;

    case "lname":
      if (!/^[A-Za-z]+$/.test(inputFieldContent)) {
        manipulateDoMError();
      } else {
        manipulateDoMClearError();
      }
      return PassIndicator;

    case "email":
      // @Link:https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
      if (
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputFieldContent)
      ) {
        manipulateDoMError();
      } else {
        manipulateDoMClearError();
      }
      return PassIndicator;

    case "subject":
      if (inputFieldContent === "") {
        manipulateDoMError();
      } else {
        manipulateDoMClearError();
      }
      return PassIndicator;

    case "message":
      if (inputFieldContent === "") {
        manipulateDoMError();
      } else {
        manipulateDoMClearError();
      }
      return PassIndicator;

    case "postal":
      if (!/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(inputFieldContent)) {
        manipulateDoMError();
      } else {
        manipulateDoMClearError();
      }
      return PassIndicator;

    case "city":
      if (!/^[A-Za-z\s]+$/.test(inputFieldContent)) {
        manipulateDoMError();
      } else {
        manipulateDoMClearError();
      }
      return PassIndicator;

    // @Link: https://stackoverflow.com/questions/3763820/javascript-regular-expression-to-validate-an-address
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

    /* Mobile Number Start */
    // Citation :  Mobile Number RegExpression, Accept input in XXX-XXX-XXXX or XXX.XXX.XXXX or XXX XXX XXXX
    // Link : https://www.w3resource.com/javascript/form/phone-no-validation.php
    case "phone":
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

    // @Link:https://stackoverflow.com/questions/15774555/efficient-regex-for-canadian-postal-code-function
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

    //@Link:https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
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

    case "dob":
      if (
        !/^((?:0[1-9])|(?:1[0-2]))\/((?:0[0-9])|(?:[1-2][0-9])|(?:3[0-1]))\/(\d{4})$/.test(
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
