import React from "react";
import "./Schedule.scss";

const Schedule = () => {
  return (
    <div className="schedule-wrapper shadow">
      <h2>Services</h2>

      <div className="service-day-wrapper">
        <h3>Sunday</h3>
        <div className="service-wrapper">
          <span className="service-type">Morning: </span>
          <span className="service-time">10am-12pm</span>
        </div>
        <div className="service-wrapper">
          <span className="service-type">Evening: </span>
          <span className="service-time">6pm-8pm</span>
        </div>
      </div>

      <div className="service-day-wrapper">
        <h3>Tuesday</h3>
        <div className="service-wrapper">
          <span className="service-type">Youth: </span>
          <span className="service-time">7:15pm-8:30pm</span>
        </div>
      </div>

      <div className="service-day-wrapper">
        <h3>Thursday</h3>
        <div className="service-wrapper">
          <span className="service-type">Evening: </span>
          <span className="service-time">6pm-8pm</span>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
