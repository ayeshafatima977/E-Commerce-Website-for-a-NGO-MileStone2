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
    case "fname":
      if (!/^[A-Za-z]+$/.test(inputFieldContent)) {
        document
          .getElementsByClassName("fname-error")[0]
          .classList.add("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[0]
          .classList.add("input-error");
        PassIndicator = false;
      } else {
        document
          .getElementsByClassName("fname-error")[0]
          .classList.remove("msg-show");
      }

      return PassIndicator;

    case "lname":
      if (!/^[A-Za-z]+$/.test(inputFieldContent)) {
        document
          .getElementsByClassName("lname-error")[0]
          .classList.add("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[0]
          .classList.add("input-error");
        PassIndicator = false;
      } else {
        document
          .getElementsByClassName("lname-error")[0]
          .classList.remove("msg-show");
      }
      return PassIndicator;

    case "email":
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
    case "subject":
      if (!/^[A-Za-z]+$/.test(inputFieldContent)) {
        document
          .getElementsByClassName("subject-error")[0]
          .classList.add("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[0]
          .classList.add("input-error");
        PassIndicator = false;
      } else {
        document
          .getElementsByClassName("subject-error")[0]
          .classList.remove("msg-show");
      }
      return PassIndicator;
    case "message":
      if (!/^[A-Za-z]+$/.test(inputFieldContent)) {
        document
          .getElementsByClassName("msg-error")[0]
          .classList.add("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[0]
          .classList.add("input-error");
        PassIndicator = false;
      } else {
        document
          .getElementsByClassName("msg-error")[0]
          .classList.remove("msg-show");
      }
      return PassIndicator;

    default:
      return;
  }
}
