import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../css/Date-picker.css";

/* 
React date picker library used to manage date inputs in the site forms 
This is customized to handle the credit card expiration date
*/

const DatePickerCCExpComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat="MM/yyyy"
      showMonthYearPicker
      minDate={new Date()}
    />
  );
};

export default DatePickerCCExpComponent;
