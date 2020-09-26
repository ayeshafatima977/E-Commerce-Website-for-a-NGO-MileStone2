import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "../css/Volunteer-form.css";
import FormValidation from "../functions/Form-validation.js";

const VolunteerFormComponent = () => {
  const [volunteerName, setVolunteerName] = useState("");
  const [volunteerBirthdate, setVolunteerBirthdate] = useState("");
  const [volunteerAddress, setVolunteerAddress] = useState("");
  const [volunteerPhone, setVolunteerPhone] = useState("");
  const [volunteerEmail, setVolunteerEmail] = useState("");
  const [volunteerStartDate, setVolunteerStartDate] = useSate(new Date());
  const [volunteerReference, setVolunteerReference] = useState("Social Media");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [emergencyRelationship, setEmergencyRelationship] = useState(
    "Family member"
  );
  const [emergencyPhone, setEmergencyPhone] = useState("");

  const SubmitForm = (e) => {
    e.preventDefault();

    if (
      FormValidation(
        volunteerName,
        "fname",
        "volunteerName",
        "volunteerName-error"
      ) &&
      FormValidation(
        volunteerBirthdate,
        "dob",
        "volunteerDOB",
        "volunteerDOB-error"
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
        "fname",
        "volunteerEmergency",
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
        .getElementsByClassName(volunteer - thankyou - msg)[0]
        .classList.remove("msg-hide");
    }
  };
  return (
    <>
      <form onSubmit={SubmitForm} id="VolunteerForm">
        <h2>Volunteer Application</h2>
        <div id="volunteer-info">
          <label htmlFor="volunteer-name">Name</label>
          <input
            type="text"
            id="volunteer-name"
            className="volunteerName"
            placeholder="e.g., Johnny Bravo"
            onChange={() => {
              setVolunteerName(e.target.value);
            }}
          />
          <p className="volunteerName-error msg-hide">
            Please enter correct Name
          </p>

          <label htmlFor="volunteer-birthdate">Birthday</label>
       <DatePicker
            placeholderText="mm/dd/yy"
            onChange={(date) => setVolunteerBirthdate(date)}
            className="volunteerDOB"
          />
          <p className="volunteerDOB-error msg-hide">
            Volunteer must be older than 18 years.
          </p>
          
          <label htmlFor="volunteer-address">Mailing Address</label>
          <input
            type="text"
            id="volunteer-address"
            placeholder="e.g., 123st SW Your City-Name, Province "
            className="volunteerAddress"
            onChange={() => {
              setVolunteerAddress(e.target.value);
            }}
          />
          <p className="volunteerAddress-error msg-hide">
            Please enter a valid address
          </p>
          
          <label htmlFor="volunteer-phone">Phone</label>
          <input
            type="text"
            id="volunteer-phone"
            className="volunteerPhone"
            placeholder="e.g., 780-123-1234"
            onChange={() => {
              setVolunteerPhone(e.target.value);
            }}
          />
          <p className="volunteerPhone-error msg-hide">
            Please enter a valid phone number
          </p>

          <label htmlFor="volunteer-email">Email</label>
          <input
            type="text"
            id="volunteer-email"
            className="volunteerEmail"
            onChange={() => {
              setVolunteerEmail(e.target.value);
            }}
          />
          <p className="volunteerEmail-error msg-hide">
            Please enter valid email Id
          </p>

          <label htmlFor="volunteer-reference">
            How did you hear about us?
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
          <DatePicker
            placeholderText="mm/dd/yy"
            onChange={(date) => setStartDate(date)}
            className="volunteer-start-date"
          />
          <p className="volunteer-start-date-error msg-hide">
          </p>

        </div>
        <div id="emergency-info">
          <label htmlFor="emergency-contact">Emergency Contact</label>
          <input
            type="text"
            id="emergency-contact"
            className="emergencyContact"
            onChange={() => {
              setEmergencyContact(e.target.value);
            }}
          />
          <p className="volunteerEmergency-error msg-hide">
            Please enter your Emergency Contact name
          </p>
          
          <label htmlFor="emergency-relationship">Contact Relationship</label>
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

          <label htmlFor="emergency-phone">Emergency Phone Number</label>
          <input
            type="text"
            id="emergency-phone"
            className="volunteerEmergencyPhone"
            onChange={() => {
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
