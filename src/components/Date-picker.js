import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../css/Date-picker.css";

/* 
React date picker library used to manage date inputs in the site forms 
This is customized to handle the user bought products pickup date, and volunteer
application start date
*/

const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => {
        setStartDate(date);
      }}
      minDate={new Date()}
      dateFormat="dd/MM/yyyy"
    />
  );
};

export default DatePickerComponent;
