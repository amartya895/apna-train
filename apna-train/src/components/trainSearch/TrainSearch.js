import React from "react";
import "./trainSearch.css";
import irctcLogo from "./irctcLogo.png";
import Tabs from "../tabs/Tabs";
const TrainSearch = () => {
  return (
    <div className="findTrain-bg">
      <div className="findTrain-content">
        <div className="irctc-partner">
          <p>
            <img src={irctcLogo} alt="" />
            IRCTC Authorised Partner
          </p>
          <h1>Easy Train Tickets Booking</h1>
        </div>
        <div className="findTrainBy">
          <Tabs />
        </div>
        <div className="at-features">
          <div className="feature-det">
            <div className="feature-icon">
              <i className="fa fa-download" aria-hidden="true"></i>
            </div>
            <p>10 Millions+ download</p>
          </div>
          <div className="feature-det">
            <div className="feature-icon">
              <i className="fa fa-download" aria-hidden="true"></i>
            </div>
            <p>1 Millions+ &nbsp; Bookings</p>
          </div>
          <div className="feature-det">
            <div className="feature-icon">
              <i className="fa fa-download" aria-hidden="true"></i>
            </div>
            <p>Instant Refund</p>
          </div>
          <div className="feature-det">
            <div className="feature-icon">
              <i className="fa fa-download" aria-hidden="true"></i>
            </div>
            <p>94% Accurate Prediction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainSearch;
