import React,{useState , useEffect} from "react";
import "./navbar.css";
import logo from "../../images/ApnaTrainLogo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  console.log("Begining")
  const [currentUser,setCurrentUser] = useState(JSON.parse(localStorage.getItem("currentUser")))

  const [name , setName]= useState(currentUser?.user?.username);
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
  };
  console.log("before use useEffect")
  useEffect(() => {
    console.log("useEffect")
    setName(currentUser?.user?.username)
  }, [currentUser]); // Empty dependency array ensures it only runs on mount

  // const name = currentUser?.user?.username;
  return (
    <nav>
      <div className="row-1">
        <Link to="/">
          <div className="logo-img">
            <img src={logo} alt="" width="150px" />
          </div>
        </Link>

        <div className="row1-left">
          <div className="search-div">
            <input type="text" placeholder="Search your train " />
            <i className="fa fa-search" aria-hidden="true"></i>
          </div>
          <a href="/myBooking">
            <div className="nav-txt-div">
              <p>My Booking</p>
            </div>
          </a>

          <div className="nav-txt-div">
            {currentUser ? (
              <Link to="/profile">
                <p>{name}</p>
              </Link>
            ) : (
              <Link to="/login">
                <p>Login</p>
              </Link>
            )}
            <span>
              <i className="fa fa-user"></i>
            </span>
          </div>

          {name && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer text-green-400 hover:text-red-500"
              onClick={handleLogout}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
              />
            </svg>
          )}
        </div>
      </div>
      <div className="row-1 row-2">
        <Link to="/pnr-status">
          <div className="nav-txt-div">
            <p>PNR Status</p>
            <span>
              <i className="fa fa-ticket"></i>
            </span>
          </div>
        </Link>
        <a href="/coach-position">
          <div className="nav-txt-div">
            <p>Coach Position</p>
            <span>
              <i className="fa fa-train"></i>
            </span>
          </div>
        </a>
        <a href="/running-status">
          <div className="nav-txt-div">
            <p>Running Status</p>
            <span>
              <i className="fa fa-location-arrow"></i>
            </span>
          </div>
        </a>
        <a href="/seat-availability">
          <div className="nav-txt-div">
            <p>Seat Availability</p>
            <span>
              <i className="fa fa-bed"></i>
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
