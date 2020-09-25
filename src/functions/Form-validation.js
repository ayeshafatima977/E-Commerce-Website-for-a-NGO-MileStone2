import "../css/Form-validation.css";

/* Add more cases per the input types that you would like to validate */
/* We don't need to play with CSS */
export default function FormValidation(
  inputFieldContent,
  inputFieldType,
  inputFieldClassName,
  errorMessageClassName
) {
  let PassIndicator = true;
  switch (inputFieldType) {
    /* First Name Start */

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
          .getElementsByClassName(errorMessageClassName)[1]
          .classList.add("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[1]
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

      if (!/\S+@\S+\.\S+/.test(inputFieldContent)) {
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

    /* Subject End */

    /* Message Start */
    case "cc-number-input":
      if (inputFieldContent === "" || !/^\d+$/.test(inputFieldContent)) {
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
          .getElementsByClassName(errorMessageClassName)[1]
          .classList.add("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[1]
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
      if (!/^[A-Za-z]+$/.test(inputFieldContent)) {
        document
          .getElementsByClassName(errorMessageClassName)[1]
          .classList.add("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[1]
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
      if (!/^[a-zA-Z0-9\s,'-]*$/.test(inputFieldContent)) {
        document
          .getElementsByClassName(errorMessageClassName)[1]
          .classList.add("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[1]
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
