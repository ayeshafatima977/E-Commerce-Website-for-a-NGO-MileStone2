import React, { useState } from "react";

const DonationFormComponent = () => {
  const [donationAmount, setDonationAmount] = useState(0);
  const [fundType, setFundType] = useState("General");
  const [donationFreq, setDonationFreq] = useState("Donate Now");

  return (
    <>
      <h1>Donation Details</h1>
      <h2> Amount </h2>
      <label htmlFor="donation-freq" className="screen-reader-text">
        Donation Frequency
      </label>
      <select
        id="donation-freq"
        onChange={(e) => setDonationFreq(e.target.value)}
        value={donationFreq}
      >
        <option value="Donate Now">Donate Now </option>
        <option value="Donate Monthly">Donate Monthly </option>
      </select>
      <label htmlFor="donation-amount" className="screen-reader-text">
        Donation Amount
      </label>
      <input
        id="donation-amount"
        type="number"
        onChange={(e) => setDonationAmount(e.target.value)}
        placeholder="Donation Amount"
        holder="Enter Amount"
        value={donationAmount}
      ></input>
      <h2>Fund</h2>
      <label htmlFor="func-type" className="screen-reader-text">
        Fund Type
      </label>
      <select
        id="func-type"
        onChange={(e) => setFundType(e.target.value)}
        value={fundType}
      >
        <option value="General">General </option>
        <option value="Kids Sports and Arts Fund">
          Kids Sports and Arts Fund{" "}
        </option>
        <option value="Help to Feed a Kid">Help to Feed a Kid </option>
        <option value="Kids Education Fund">Kids Education Fund </option>
        <option value="Kids Clothing Fund">Kids Clothing Fund </option>
      </select>
      <label htmlFor="donation-message" className="screen-reader-text">
        Message
      </label>
      <input
        id="donation-message"
        type="textarea"
        placeholder="Send us a message"
      ></input>
    </>
  );
};

export default DonationFormComponent;
