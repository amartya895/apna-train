import React from "react";
import "./navbar.css";
import logo from "../../images/ApnaTrainLogo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div className="row-1">
        <div className="logo-img">
          <img src={logo} alt="" width="150px" />
        </div>
        <div className="row1-left">
          <div className="search-div">
            <input type="text" placeholder="Search your train " />
            <i class="fa fa-search" aria-hidden="true"></i>
          </div>
          <a href="/my-booking">
          <div className="nav-txt-div">
            <p>My Booking</p>
          </div>
          </a>
          <a href="/login">
          <div className="nav-txt-div">
            <p>Login</p>
            <span>
              <i class="fa fa-user"></i>
            </span>
          </div>
          </a>
        </div>
      </div>
      <div className="row-1 row-2">
        <Link to="/pnr-status">
          <div className="nav-txt-div">
            <p>PNR Status</p>
            <span>
              <i class="fa fa-ticket"></i>
            </span>
          </div>
        </Link>
        <a href="/coach-position">
        <div className="nav-txt-div">
          <p>Coach Position</p>
          <span>
            <i class="fa fa-train"></i>
          </span>
        </div>
        </a>
        <a href="/running-status">
        <div className="nav-txt-div">
          <p>Running Status</p>
          <span>
            <i class="fa fa-location-arrow"></i>
          </span>
        </div>
        </a>
        <a href="/seat-availability">
        <div className="nav-txt-div">
          <p>Seat Availability</p>
          <span>
            <i class="fa fa-bed"></i>
          </span>
        </div>
        </a>
        <a href="/train-facts">
        <div className="nav-txt-div">
          <p>Train Facts</p>
        </div>
        </a>
        <a href="/more-features">
        <div className="nav-txt-div">
          <p>More Features</p>
        </div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
