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
/* ! We should have just name */
    case "fname":
      console.log(document
        .getElementsByClassName('fname-error'));
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
    //  Citation : Email Validation RegExpression
    // link : https://www.w3resource.com/javascript/form/email-validation.php
    case "email":
      console.log(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        inputFieldContent));
      if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          inputFieldContent
        )
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

    /* message End */

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

    /* Credit Cart Number Input Start */
    //  Citation : Accept Digits Only RegExpression
    // link : https://stackoverflow.com/questions/9011524/regex-to-check-whether-a-string-contains-only-numbers
    
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
    
    /* Credit Cart Number Input end */
    
    /* Postal code start */
    
    
    // Citation : Postal code RegExpression for canadian postal code
    // @Link:https://regexlib.com/Search.aspx?k=canadian+postal+code&AspxAutoDetectCookieSupport=1
    case "postal":
      if (!/^[A-Za-z][0-9][A-Za-z]{0,1}[0-9][A-Za-z][0-9]$/.test(inputFieldContent)) {
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
    
    /* Postal code end  */
    
    /* City Name start  */    
    // Citation : City name RegExpression accepting space in the city name i.e san francisco
    // @Link:https://stackoverflow.com/questions/11757013/regular-expressions-for-city-name
    case "city":
      if (!/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/.test(inputFieldContent)) {
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
      
    /* city name end */
    
    /* Address start */
    // Address RegExpression   
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
    
    /* Address End */
    
    /* Mobile Number Start */
    // Citation :  Mobile Number RegExpression, Accept input in XXX-XXX-XXXX or XXX.XXX.XXXX or XXX XXX XXXX
    // Link : https://www.w3resource.com/javascript/form/phone-no-validation.php
    case "mobile":
      if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(inputFieldContent)) {
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
    /* Mobile Number end */
    
    
    
    

    default:
      return;
  }
}
