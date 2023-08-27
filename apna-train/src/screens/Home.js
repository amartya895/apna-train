import React from "react";
import "./home.css";
import bangalore from "../images/bangalore.jpeg";
import chennai from "../images/chennai.jpeg";
import delhi from "../images/delhi.jpeg";

function Home() {
  return (
    <div className="des-sec">
      <div className="main-des">
        <div className="row1-des">
          <div className="row1-des-left">
            <h2>
              Still confused ?<br /> We'll find you the <br /> perfect
              destination
            </h2>
            <div className="cus-border"></div>
            <p>Discover your ideal experience</p>
          </div>
          <div className="row1-des-right">
            <div className="img-div">
                <h3>Chennai</h3>
            <img src={chennai} alt="" />
            </div>
            <div className="img-div">
                <h3>New Delhi</h3>
            <img src={delhi} alt="" />
            </div>
            <div className="img-div">
                <h3>Bangalore</h3>
            <img src={bangalore} alt="" />
            </div>
            
           
          </div>
        </div>
        <div className="row2-des"></div>
      </div>
    </div>
  );
}

export default Home;
