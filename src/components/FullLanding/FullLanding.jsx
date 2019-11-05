import React from "react";

//Components
import Schedule from "../Schedule/Schedule";

import "./FullLanding.scss";
import DonationDisplay from "../DonationDisplay/DonationDisplay";

const FullLanding = () => {
  return (
    <div className="landing">
      <div className="landing-content">
        <div className="side-content"></div>
        <div className="vertical-content">
          <Schedule />
          <DonationDisplay />
        </div>
      </div>
    </div>
  );
};

export default FullLanding;
