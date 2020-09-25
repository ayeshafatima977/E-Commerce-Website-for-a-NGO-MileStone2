import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "../css/Volunteer-form.css";

const VolunteerFormComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const SubmitVolunteerForm = (e) => {
    e.preventDefault();
  }
  return (
    <>
      <h2>Volunteer Application</h2>
      <form onSubmit={SubmitVolunteerForm}>
        <div id="volunteer-info">
          <label htmlFor="volunteer-name">Name:</label>
          <br />
          <input type="text" id="volunteer-name" />
          <br />
          <label htmlFor="volunteer-birthdate">Birthdate:</label>
          <br />
          <DatePicker
            placeholderText="mm/dd/yy"
            onChange={(date) => setStartDate(date)}
          />
          <br />
          <label htmlFor="volunteer-address">Mailing Address:</label>
          <br />
          <input type="text" id="volunteer-address" />
          <br />
          <label htmlFor="volunteer-phone">Phone:</label>
          <br />
          <input type="text" id="volunteer-phone" />
          <br />
          <label htmlFor="volunteer-email">Email:</label>
          <br />
          <input type="text" id="volunteer-email" />
          <br />
          <label htmlFor="volunteer-reference">
            How did you hear about us?
          </label>
          <br />
          <input type="text" id="volunteer-reference" />
          <br />
        </div>
        <div id="emergency-info">
          <label htmlFor="emergency-contact">Emergency Contact:</label>
          <br />
          <input type="text" id="emergency-contact" />
          <br />
          <label htmlFor="emergency-relationship">Contact Relationship:</label>
          <br />
          <input type="text" id="emergency-relationship" />
          <br />
          <label htmlFor="emergency-phone">Emergency Phone Number:</label>
          <br />
          <input type="text" id="emergency-phone" />
          <br />
        </div>
        <input type="submit" />
      </form>
      <h3>Thank you for all that you do!!</h3>
    </>
  );
};

export default VolunteerFormComponent;
