import React from "react";
import "./home.css";
import bangalore from "../images/bangalore.jpeg";
import chennai from "../images/chennai.jpeg";
import delhi from "../images/delhi.jpeg";
import mumbai from "../images/mumbai.jpeg";
import ahmedabad from "../images/ahmedabad.png";
import lucknow from "../images/lucknow.png";
import patna from "../images/patna.png";
import kolkata from "../images/kolkata.png";
import varanasi from "../images/varanasi.png";
import jaipur from "../images/jaipur.png";
import agra from "../images/agra.png";
import kerala from "../images/kerala.png";

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
        <div className="row2-des">
          <div className="row2-des-l">
            <div className="img-div">
              <h3>Mumbai</h3>
              <img src={mumbai} alt="" />
            </div>
          </div>
          <div className="row2-des-r">
            <div className="cols-row2-r">
              <div className="img-div">
                <h3>Ahmedabad</h3>
                <img src={ahmedabad} alt="" />
              </div>

              <div className="img-div">
                <h3>Lucknow</h3>
                <img src={lucknow} alt="" />
              </div>
              <div className="img-div">
                <h3>Patna</h3>
                <img src={patna} alt="" />
              </div>
            </div>
            <div className="cols-row2-r">
              <div className="img-div">
                <h3>Jaipur</h3>
                <img src={jaipur} alt="" />
              </div>
              <div className="img-div">
                <h3>Agra</h3>
                <img src={agra} alt="" />
              </div>
              <div className="img-div">
                <h3>Kolkata</h3>
                <img src={kolkata} alt="" />
              </div>
            </div>
            <div className="cols-row2-r">
            <div className="img-div">
                <h3>Kerala</h3>
                <img src={kerala} alt="" />
              </div>
            <div className="img-div">
                <h3>Varanasi</h3>
                <img src={varanasi} alt="" />
              </div>
              
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
