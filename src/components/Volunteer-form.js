import React, { useState } from "react";
import DatePickerDobComponent from "./Date-picker-dob";
import DatePickerComponent from "./Date-picker";
import "../css/Volunteer-form.css";
import FormValidation from "../functions/Form-validation.js";
import { useHistory } from "react-router-dom";

/* Creating Local state for using it in Form validation */

const VolunteerFormComponent = () => {
  const [volunteerName, setVolunteerName] = useState("");
  const [volunteerAddress, setVolunteerAddress] = useState("");
  const [volunteerPhone, setVolunteerPhone] = useState("");
  const [volunteerEmail, setVolunteerEmail] = useState("");
  const [volunteerReference, setVolunteerReference] = useState("Social Media");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [emergencyPhone, setEmergencyPhone] = useState("");
  const [emergencyRelationship, setEmergencyRelationship] = useState(
    "Family Member"
  );
  const history = useHistory();
  const SubmitForm = (e) => {
    e.preventDefault();

    /* Calling Global function for Form validation */
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
      // document
      //   .getElementsByClassName("volunteer-thankyou-msg")[0]
      //   .classList.remove("msg-hide");
      history.push("/volnterconf");
    }
  };
  return (
    <>
      <form onSubmit={SubmitForm} id="volunteer-form">
        <h2>Volunteer Application</h2>
        <div id="volunteer-info">
          <div className="label-input-container">
            <label htmlFor="volunteer-name">
              Name<sup className="required-field">*</sup>
            </label>
            <input
              type="text"
              id="volunteer-name"
              className="volunteerName"
              placeholder="Full Name"
              onChange={(e) => {
                setVolunteerName(e.target.value);
              }}
            />
            <p className="volunteerName-error msg-hide">
              Please enter correct name
            </p>
          </div>
          <div className="label-input-container">
            <label htmlFor="volunteer-birthdate">
              Birth Date{/* <sup className="required-field">*</sup> */}
            </label>

            {/* Date Picker component is used for the user to select the dates.Here we are allowing the dates to be shown up only 
            from year 2000 so as to satisfy the condition volunteer being 18 years or older*/}

            <DatePickerDobComponent />
            {/*             <p className="volunteerAddress-error msg-hide">
              Enter valid Birthday date
            </p> */}
          </div>
          <div className="label-input-container">
            <label htmlFor="volunteer-address">
              Mailing Address<sup className="required-field">*</sup>
            </label>
            <input
              type="text"
              id="volunteer-address"
              placeholder="123st SW Your City-Name, Province "
              className="volunteerAddress"
              onChange={(e) => {
                setVolunteerAddress(e.target.value);
              }}
            />
            <p className="volunteerAddress-error msg-hide">
              Please enter a valid address
            </p>
          </div>
          <div className="label-input-container">
            <label htmlFor="volunteer-phone">
              Phone<sup className="required-field">*</sup>
            </label>
            <input
              type="text"
              maxLength="10"
              id="volunteer-phone"
              className="volunteerPhone"
              placeholder="780-123-1234"
              onChange={(e) => {
                setVolunteerPhone(e.target.value);
              }}
            />
            <p className="volunteerPhone-error msg-hide">
              Please enter a valid phone number
            </p>
          </div>
          <div className="label-input-container">
            <label htmlFor="volunteer-email">
              Email<sup className="required-field">*</sup>
            </label>
            <input
              type="text"
              id="volunteer-email"
              className="volunteerEmail"
              placeholder="example@domain.com"
              onChange={(e) => {
                setVolunteerEmail(e.target.value);
              }}
            />
            <p className="volunteerEmail-error msg-hide">
              Please enter valid email Id
            </p>
          </div>
          <div className="label-input-container">
            <label htmlFor="volunteer-reference">
              How did you hear about us?
              {/* <sup className="required-field">*</sup> */}
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
          </div>
          <div className="label-input-container">
            <label htmlFor="volunteer-start-date">Start Date</label>
            {/* Date Picker component is used for the user to select the dates
             which is present date/yesr for Start Date whereas disabling the past dates
             */}
            <DatePickerComponent
              placeholderText="mm/dd/yy"
              className="volunteer-start-date"
            />
            <p className="volunteer-start-date-error msg-hide"></p>
          </div>
        </div>
        <div id="emergency-info">
          <div className="label-input-container">
            <label htmlFor="emergency-contact">
              Emergency Contact<sup className="required-field">*</sup>
            </label>
            <input
              type="text"
              id="emergency-contact"
              placeholder="Full Name"
              className="emergencyContact"
              onChange={(e) => {
                setEmergencyContact(e.target.value);
              }}
            />
            <p className="volunteerEmergency-error msg-hide">
              Please enter your Emergency Contact name
            </p>
          </div>
          <div className="label-input-container">
            <label htmlFor="emergency-relationship">
              Contact Relationship
              {/* <sup className="required-field">*</sup> */}
            </label>
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
          </div>
          <div className="label-input-container">
            <label htmlFor="emergency-phone">
              Emergency Phone Number<sup className="required-field">*</sup>
            </label>
            <input
              type="text"
              id="emergency-phone"
              className="volunteerEmergencyPhone"
              placeholder="780-123-1234"
              maxLength="10"
              onChange={(e) => {
                setEmergencyPhone(e.target.value);
              }}
            />
            <p className="volunteerEmergencyPhone-error msg-hide">
              Please enter a valid phone number
            </p>
          </div>
          <div id="submit-required-note">
            <input type="submit" />
            <sup className="required-field note">* Required Field</sup>
          </div>
        </div>

        <p className="volunteer-thankyou-msg msg-hide">
          Thank you for all that you do!!
        </p>
      </form>
    </>
  );
};

export default VolunteerFormComponent;
