import React, { useState } from "react";
import DatePickerDobComponent from "./Date-picker-dob";
import DatePickerComponent from "./Date-picker";
import "../css/Volunteer-form.css";
import FormValidation from "../functions/Form-validation.js";

const VolunteerFormComponent = () => {
  const [volunteerName, setVolunteerName] = useState("");
  const [volunteerAddress, setVolunteerAddress] = useState("");
  const [volunteerPhone, setVolunteerPhone] = useState("");
  const [volunteerEmail, setVolunteerEmail] = useState("");
  const [volunteerReference, setVolunteerReference] = useState("Social Media");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [emergencyPhone, setEmergencyPhone] = useState("");
  const [emergencyRelationship, setEmergencyRelationship] = useState(
    "Family member"
  );

  const SubmitForm = (e) => {
    e.preventDefault();

    if (
      FormValidation(
        volunteerName,
        "name",
        "volunteerName",
        "volunteerName-error"
        ) &&
      FormValidation(
        volunteerAddress,
        "address",
        "volunteerAddress",
        "volunteerAddress-error"
      ) &&
      FormValidation(
        volunteerPhone,
        "phone",
        "volunteerPhone",
        "volunteerPhone-error"
      ) &&
      FormValidation(
        volunteerEmail,
        "email",
        "volunteerEmail",
        "volunteerEmail-error"
      ) &&
      FormValidation(
        emergencyContact,
        "name",
        "emergencyContact",
        "volunteerEmergency-error"
      ) &&
      FormValidation(
        emergencyPhone,
        "phone",
        "volunteerEmergencyPhone",
        "volunteerEmergencyPhone-error"
      )
    ) {
      document
        .getElementsByClassName("volunteer-thankyou-msg")[0]
        .classList.remove("msg-hide");
    }
  };
  return (
    <>
      <form onSubmit={SubmitForm} id="VolunteerForm">
        <h2>Volunteer Application</h2>
        <div id="volunteer-info">
          <label htmlFor="volunteer-name">Name<span className="required-field">*</span> </label>
          <input
            type="text"
            id="volunteer-name"
            className="volunteerName"
            placeholder="e.g., Johnny Bravo"
            onChange={(e) => {
              setVolunteerName(e.target.value);
            }}
          />
          <p className="volunteerName-error msg-hide">
            Please enter correct Name
          </p>

          <label htmlFor="volunteer-birthdate">Birthday<span className="required-field">*</span> </label>
          <DatePickerDobComponent      
          />
          <p className="volunteerAddress-error">Enter valid Birthday date</p>
          <label htmlFor="volunteer-address">Mailing Address<span className="required-field">*</span></label>
          <input
            type="text"
            id="volunteer-address"
            placeholder="e.g., 123st SW Your City-Name, Province "
            className="volunteerAddress"
            onChange={(e) => {
              setVolunteerAddress(e.target.value);
            }}
          />
          <p className="volunteerAddress-error msg-hide">
            Please enter a valid address
          </p>

          <label htmlFor="volunteer-phone">Phone<span className="required-field">*</span></label>
          <input
            type="text"
            maxLength="10"
            id="volunteer-phone"
            className="volunteerPhone"
            placeholder="e.g., 780-123-1234"
            onChange={(e) => {
              setVolunteerPhone(e.target.value);
            }}
          />
          <p className="volunteerPhone-error msg-hide">
            Please enter a valid phone number
          </p>

          <label htmlFor="volunteer-email">Email<span className="required-field">*</span> </label>
          <input
            type="text"
            id="volunteer-email"
            className="volunteerEmail"
            placeholder="e.g., example@domain.com"
            onChange={(e) => {
              setVolunteerEmail(e.target.value);
            }}
          />
          <p className="volunteerEmail-error msg-hide">
            Please enter valid email Id
          </p>

          <label htmlFor="volunteer-reference">
            How did you hear about us?<span className="required-field">*</span> 
          </label>
          <select
            onChange={(e) => setVolunteerReference(e.target.value)}
            value={volunteerReference}
          >
            <option value="Social Media">Social Media</option>
            <option value="Friends/Family">Friends/Family</option>
            <option value="Local Community">Local Community</option>
            <option value="Events / Campaigns">Events / Campaigns</option>
            <option value="Newsletter">Newsletter </option>
            <option value="Previous Volunteer">Previous Volunteer</option>
          </select>

          <label htmlFor="volunteer-start-date">Start Date</label>
          <DatePickerComponent
            placeholderText="mm/dd/yy"
            className="volunteer-start-date"
          />
          <p className="volunteer-start-date-error msg-hide"></p>
        </div>
        <div id="emergency-info">
          <label htmlFor="emergency-contact">Emergency Contact<span className="required-field">*</span></label>
          <input
            type="text"
            id="emergency-contact"
            placeholder="e.g., Johnny Bravo"
            className="emergencyContact"
            onChange={(e) => {
              setEmergencyContact(e.target.value);
            }}
          />
          <p className="volunteerEmergency-error msg-hide">
            Please enter your Emergency Contact name
          </p>

          <label htmlFor="emergency-relationship">Contact Relationship<span className="required-field">*</span></label>
          <select
            id="emergency-relationship"
            onChange={(e) => setEmergencyRelationship(e.target.value)}
            value={emergencyRelationship}
          >
            <option value="Spouse">Spouse</option>
            <option value="Family member">Family member</option>
            <option value="Friend">Friend</option>
            <option value="Other">Other</option>
          </select>

          <label htmlFor="emergency-phone">Emergency Phone Number<span className="required-field">*</span></label>
          <input
            type="text"
            id="emergency-phone"
            className="volunteerEmergencyPhone"
            placeholder="e.g., 780-123-1234"
            maxLength="10"
            onChange={(e) => {
              setEmergencyPhone(e.target.value);
            }}
          />
          <p className="volunteerEmergencyPhone-error msg-hide">
            Please enter a valid phone number
          </p>
        </div>
        <input type="submit" />
      </form>
      <p className="volunteer-thankyou-msg msg-hide">
        Thank you for all that you do!!
      </p>
    </>
  );
};

export default VolunteerFormComponent;
