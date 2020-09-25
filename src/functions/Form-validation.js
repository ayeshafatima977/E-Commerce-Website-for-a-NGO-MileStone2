import "../css/Form-validation.css";

/* Add more cases per the input types that you would like to validate */
/* We don't need to play with CSS */
export default function FormValidation (
  inputFieldContent,
  inputFieldType,
  inputFieldClassName,
  errorMsgClassName
) {
  let PassIndicator = true;
  switch (inputFieldType) {
    
    /* First Name Start */
    
    
    case "fname":
      if (!/^[A-Za-z]+$/.test(inputFieldContent)) {
        document
          .getElementsByClassName(errorMsgClassName)[0]
          .classList.add("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[0]
          .classList.add("input-error");
        PassIndicator = false;
      } else {
        document
          .getElementsByClassName(errorMsgClassName)[0]
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
          .getElementsByClassName(errorMsgClassName)[1]
          .classList.add("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[1]
          .classList.add("input-error");
        PassIndicator = false;
      } else {
        document
          .getElementsByClassName(errorMsgClassName)[0]
          .classList.remove("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[0]
          .classList.remove("input-error");
      }
      return PassIndicator;

      
      /* Last Name End */
      
      
      /* Email Start */     

    case "email":
      console.log(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        inputFieldContent));
      if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          inputFieldContent
        )
      ) {
        document
          .getElementsByClassName(errorMsgClassName)[0]
          .classList.add("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[0]
          .classList.add("input-error");
        PassIndicator = false;
      } else {
        document
          .getElementsByClassName(errorMsgClassName)[0]
          .classList.remove("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[0]
          .classList.remove("input-error");
      }
      return PassIndicator;
      
      /* Email End */
      
      /* Subject Start */     
      
      
    case "subject":
      if (inputFieldContent==='') {
        document
          .getElementsByClassName(errorMsgClassName)[0]
          .classList.add("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[0]
          .classList.add("input-error");
        PassIndicator = false;
      } else {
        document
          .getElementsByClassName(errorMsgClassName)[0]
          .classList.remove("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[0]
          .classList.remove("input-error");
      }
      return PassIndicator;
      
      /* Subject End */
      
      
    case "message":
      if (inputFieldContent==='') {
        document
          .getElementsByClassName(errorMsgClassName)[0]
          .classList.add("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[0]
          .classList.add("input-error");
        PassIndicator = false;
      } else {
        document
          .getElementsByClassName(errorMsgClassName)[0]
          .classList.remove("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[0]
          .classList.remove("input-error");
      }
      return PassIndicator;
      
      /* Subject End */
      
      /* Message Start */    
      

    case "message":
      if (inputFieldContent==='') {
        document
          .getElementsByClassName(errorMsgClassName)[0]
          .classList.add("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[0]
          .classList.add("input-error");
        PassIndicator = false;
      } else {
        document
          .getElementsByClassName(errorMsgClassName)[0]
          .classList.remove("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[0]
          .classList.remove("input-error");
      }
      return PassIndicator;
        
        /* Message End */
    case "cc-number-input":
      if (inputFieldContent==='' || (!/^\d+$/.test(
          inputFieldContent))
      ) {
        document
          .getElementsByClassName(errorMsgClassName)[0]
          .classList.add("msg-show");
        document
          .getElementsByClassName(inputFieldClassName)[0]
          .classList.add("input-error");
        PassIndicator = false;
      } else {
        document
          .getElementsByClassName(errorMsgClassName)[0]
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
