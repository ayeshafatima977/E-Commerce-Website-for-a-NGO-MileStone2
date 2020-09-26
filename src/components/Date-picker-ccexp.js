import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { subYears } from "date-fns";

import "react-datepicker/dist/react-datepicker.css";
import "../css/Date-picker.css";

const DatePickerCCExpComponent = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        dateFormat="MM/yyyy"
        showMonthYearPicker
        minDate={new Date()}
        inline
      />
    );
  };
  
  export default DatePickerCCExpComponent;
  

