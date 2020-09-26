import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { subYears } from "date-fns";

import "react-datepicker/dist/react-datepicker.css";
import "../css/Date-picker.css";

/* const handleOnBlur = ({ target: { value } }) => {
  const date = new Date(value);
  if (isValid(date)) {
    console.log("value: %s", date);}
  
}; */

const DatePickerDobComponent = () => {
  const [startDate, setStartDate] = useState(new Date("01/01/2000"));
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      peekNextMonth
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      maxDate={subYears(new Date(), 18)}
      dateFormat="dd/MM/yyyy"
      /* onBlur={handleOnBlur} */
    />
  );
};

export default DatePickerDobComponent;
