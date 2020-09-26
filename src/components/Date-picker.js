import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../css/Date-picker.css";

const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      minDate={new Date()}
      dateFormat="dd/MM/yyyy"  
      inline
    
    />
  );
};

export default DatePickerComponent;
