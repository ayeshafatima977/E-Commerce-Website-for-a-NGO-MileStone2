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
    639
  ];
  let PassIndicator = true;
  inputFieldContent = inputFieldContent.trim();
  switch (inputFieldType) {
    /* First Name Start */
    /* ! We should have just name */
    case "fname":
      if (!/^[A-Za-z]+$/.test(inputFieldContent)) {
        document
          .getElementsByClassName(errorMessageClassName)[0]
          .classList.add("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[0]
          .classList.add("input-error");
        PassIndicator = false;
      } else {
        document
          .getElementsByClassName(errorMessageClassName)[0]
          .classList.remove("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[0]
          .classList.remove("input-error");
      }

      return PassIndicator;

    /* First Name End */

    /* Last Name Start */

    case "lname":
      if (!/^[A-Za-z]+$/.test(inputFieldContent)) {
        document
          .getElementsByClassName(errorMessageClassName)[0]
          .classList.add("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[0]
          .classList.add("input-error");
        PassIndicator = false;
      } else {
        document
          .getElementsByClassName(errorMessageClassName)[0]
          .classList.remove("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[0]
          .classList.remove("input-error");
      }
      return PassIndicator;

    /* Last Name End */

    /* Email Start */

    case "email":
      // @Link:https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript

      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputFieldContent)) {
        // console.log(!/\S+@\S+\.\S+/.test(inputFieldContent));
        document
          .getElementsByClassName(errorMessageClassName)[0]
          .classList.add("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[0]
          .classList.add("input-error");
        PassIndicator = false;
      } else {
        document
          .getElementsByClassName(errorMessageClassName)[0]
          .classList.remove("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[0]
          .classList.remove("input-error");
      }
      return PassIndicator;

    /* Email End */

    /* Subject Start */

    case "subject":
      if (inputFieldContent === "") {
        document
          .getElementsByClassName(errorMessageClassName)[0]
          .classList.add("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[0]
          .classList.add("input-error");
        PassIndicator = false;
      } else {
        document
          .getElementsByClassName(errorMessageClassName)[0]
          .classList.remove("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[0]
          .classList.remove("input-error");
      }
      return PassIndicator;

    /* Subject End */

    /* Message Start */

    case "message":
      if (inputFieldContent === "") {
        document
          .getElementsByClassName(errorMessageClassName)[0]
          .classList.add("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[0]
          .classList.add("input-error");
        PassIndicator = false;
      } else {
        document
          .getElementsByClassName(errorMessageClassName)[0]
          .classList.remove("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[0]
          .classList.remove("input-error");
      }
      return PassIndicator;

    /* Message End */
    case "cc-number-input":
      if (!/^\(?([0-9]{4})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})?[-. ]?([0-9]{4})$/.test(inputFieldContent)) {
        document
          .getElementsByClassName(errorMessageClassName)[0]
          .classList.add("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[0]
          .classList.add("input-error");
        PassIndicator = false;
      } else {
        document
          .getElementsByClassName(errorMessageClassName)[0]
          .classList.remove("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[0]
          .classList.remove("input-error");
      }
      return PassIndicator;
    // @Link:https://stackoverflow.com/questions/15774555/efficient-regex-for-canadian-postal-code-function
    case "postal":
      if (!/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(inputFieldContent)) {
        document
          .getElementsByClassName(errorMessageClassName)[0]
          .classList.add("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[0]
          .classList.add("input-error");
        PassIndicator = false;
      } else {
        document
          .getElementsByClassName(errorMessageClassName)[0]
          .classList.remove("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[0]
          .classList.remove("input-error");
      }
      return PassIndicator;

    case "city":
      if (!/^[A-Za-z\s]+$/.test(inputFieldContent)) {
        document
          .getElementsByClassName(errorMessageClassName)[0]
          .classList.add("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[0]
          .classList.add("input-error");
        PassIndicator = false;
      } else {
        document
          .getElementsByClassName(errorMessageClassName)[0]
          .classList.remove("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[0]
          .classList.remove("input-error");
      }
      return PassIndicator;

    // @Link: https://stackoverflow.com/questions/3763820/javascript-regular-expression-to-validate-an-address
    case "address":
      if (
        inputFieldContent === "" ||
      !/^[a-zA-Z0-9\s,'-.]*$/.test(inputFieldContent)
      ) {
        document
          .getElementsByClassName(errorMessageClassName)[0]
          .classList.add("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[0]
          .classList.add("input-error");
        PassIndicator = false;
      } else {
        document
          .getElementsByClassName(errorMessageClassName)[0]
          .classList.remove("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[0]
          .classList.remove("input-error");
      }
      return PassIndicator;

    /* Mobile Number Start */
    // Citation :  Mobile Number RegExpression, Accept input in XXX-XXX-XXXX or XXX.XXX.XXXX or XXX XXX XXXX
    // Link : https://www.w3resource.com/javascript/form/phone-no-validation.php
    case "phone":
      const inputFieldContentPrefix = inputFieldContent.slice(0, 3);
      console.log(inputFieldContentPrefix);
     const aCanadianNbr = canadianMobilePrefix.includes(Number(inputFieldContentPrefix));
     console.log(aCanadianNbr);
     console.log(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
      inputFieldContent) )


     if (
        !(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          inputFieldContent) &&
        aCanadianNbr)
      ) {
        document
          .getElementsByClassName(errorMessageClassName)[0]
          .classList.add("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[0]
          .classList.add("input-error");
        PassIndicator = false;
      } else {
        document
          .getElementsByClassName(errorMessageClassName)[0]
          .classList.remove("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[0]
          .classList.remove("input-error");
      }
      return PassIndicator;
    /* Mobile Number end */

    case "cc-exp":
      if (!/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(inputFieldContent)) {
        document
          .getElementsByClassName(errorMessageClassName)[0]
          .classList.add("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[0]
          .classList.add("input-error");
        PassIndicator = false;
      } else {
        document
          .getElementsByClassName(errorMessageClassName)[0]
          .classList.remove("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[0]
          .classList.remove("input-error");
      }
      return PassIndicator;
      case "cc-cvc":
        if (!/^[0-9]{3,4}$/.test(inputFieldContent)) {
          document
            .getElementsByClassName(errorMessageClassName)[0]
            .classList.add("msg-show");
          document
            .getElementsByClassName(inputFieldClassName)[0]
            .classList.add("input-error");
          PassIndicator = false;
        } else {
          document
            .getElementsByClassName(errorMessageClassName)[0]
            .classList.remove("msg-show");
          document
            .getElementsByClassName(inputFieldClassName)[0]
            .classList.remove("input-error");
        }
        return PassIndicator;
    default:
      return;
  }
}
