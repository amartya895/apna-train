import React from "react";
import "./navbar.css";
import logo from "../../images/ApnaTrainLogo.png";
const Navbar = () => {
  return (
    <nav>
      <div className="row-1">
        <div className="logo-img">
          <img src={logo} alt="" width="150px" />
        </div>
        <div className="row1-left">
          <div className="search-div">
            <input type="text" />
          </div>
          <div className="nav-txt-div">
            <p>My Booking</p>
          </div>
          <div className="nav-txt-div">
            <p>Login</p>
            <span>
              <i class="fa fa-user"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="row-1 row-2">
        <div className="nav-txt-div">
          <p>PNR Status</p>
          <span>
            <i class="fa fa-ticket"></i>
          </span>
        </div>
        <div className="nav-txt-div">
          <p>Coach Position</p>
          <span>
            <i class="fa fa-train"></i>
          </span>
        </div>
        <div className="nav-txt-div">
          <p>Running Status</p>
          <span>
            <i class="fa fa-location-arrow"></i>
          </span>
        </div>
        <div className="nav-txt-div">
          <p>Seat Availability</p>
          <span>
          <i class="fa fa-bed"></i>
          
          </span>
        </div>
        <div className="nav-txt-div">
          <p>Train Facts</p>
        </div>
        <div className="nav-txt-div">
          <p>More Features</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
