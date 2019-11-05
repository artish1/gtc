import React from "react";
import "./DonationDisplay.scss";

const DonationDisplay = () => {
  return (
    <div className="info-card shadow">
      <h2>Donate</h2>
      <div className="donation">
        <i className="fas fa-wallet fa-2x"></i>
        <p>Card/Cash</p>
      </div>
      <div className="donation">
        <i className="fab fa-paypal fa-2x paypal"></i>
        <p>Paypal</p>
      </div>
    </div>
  );
};

export default DonationDisplay;
