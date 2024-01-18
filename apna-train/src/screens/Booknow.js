import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
import { getTickets } from "../utils/trainDetailSlice";

const Booknow = () => {

  const id = JSON.parse(localStorage.getItem("currentUser")).user._id;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [passengers, setPassengers] = useState([]);
  const [fName, setFName] = useState("");
  const [age, setAge] = useState("");
  const [berthPref, setBerthPref] = useState("No Preference");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("India");
  const [mobNum, setMobNum] = useState("");
  const [email, setEmail] = useState("");
  const [hoveredPassenger, setHoveredPassenger] = useState(null);

  const {
    trainNo,
    trainName,
    type,
    price,
    fromStation,
    toStation,
    doj,
    randomStartTime,
    randomEndTime,
  } = useSelector((state) => state.trainDetail.bookTrainDet[0]);

  const userId = JSON.parse(localStorage.getItem("currentUser")).user._id;

  const handleSaveTraveller = async () => {
    console.log(userId);
    try {
      const travellerDetails = {
        FullName: fName,
        Age: age,
        Gender: gender,
        Nationality: nationality,
        BerthPref: berthPref,
      };

      const result = await axios.post("https://apna-train-service.onrender.com/api/user/addTraveller", {
        userId,
        travellerDetails,
      });

      if (result.status === 200) {
        setPassengers((prevPassengers) => [
          ...prevPassengers,
          {
            id: prevPassengers.length + 1,
            name: fName,
            age: Number(age),
            gender: gender,
            country: nationality,
            berthPref :berthPref,
          },
        ]);
        setAge("");
        setFName("");
        setNationality("India");
        setBerthPref("No Preference");
        console.log("Traveller details saved successfully");

        alert("Traveller details saved successfully");
      } else {
        console.error("Error saving traveller details");
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle other errors
    }
  };

  const handleClick = async () => {
    dispatch(
      getTickets({
        trainNo,
        trainName,
        type,
        price,
        fromStation,
        toStation,
        doj,
        passengers,
        nationality,
        mobNum,
        email,
        randomStartTime,
        randomEndTime,
      })
    );

    try {
      const ticketData = {
        userId:id,
        train:`${trainNo} - ${trainName}`,
        fromStation: fromStation,
        toStation: toStation,
        dateOfJourney: doj,
        travellers: passengers,
        email: email,
        irctcId: "abc@2345",
        mobileNo: mobNum,
        ticketFair: Number(price),
        startTime:randomStartTime,
        endTime:randomEndTime,
        coachType:type,
      };

      const result = await axios.post("https://apna-train-service.onrender.com/api/booking/booknow", ticketData);
      if (result.status === 200) {
        alert("Ticket booked successfully");
      }
    } catch (error) {
      console.log("Booking failed");
    }

    navigate("/myBooking");
  };

  const handleHover = (id) => {
    setHoveredPassenger(id);
  };

  const handleLeave = () => {
    setHoveredPassenger(null);
  };

  const handleDeletePassenger = (id) => {
    setPassengers((prevPassengers) =>
      prevPassengers.filter((passenger) => passenger.id !== id)
    );
    alert("Traveller deleted successfully");
  };

  return (
    <div className="bg-gray-200  flex justify-center w-screen">
      {/* <button onClick={handleClick}>click me</button> */}
      <div className="w-2/3 p-4">
        <p className="text-xl font-medium text-orange-500">Passenger Details</p>
        <div className="flex justify-between  mt-3">
          <div className="bg-white shadow-sm w-2/3 h-24  p-4 rounded-md">
            <p className="text-base font-medium text-gray-600">IRCTC ID</p>
            <div className="mt-4">
              <span className="text-gray-400 mr-6">Amartya859</span>
              <span className="text-orange-300">Edit</span>
            </div>
          </div>
          <div className="w-1/3 bg-white shadow-sm ml-4 p-3 rounded-md">
            <p className="font-medium ">{trainName}</p>
            <span className="text-gray-800">Journey Date : </span>
            <span>{doj}</span>

            <div className="flex items-center mt-2 text-gray-600">
              <p className="mr-2">{fromStation}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-orange-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>

              <p className="ml-2">{toStation}</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-sm w-2/3 h-24 mt-3 p-4 rounded-md">
          <p className="text-base font-medium text-gray-600">BOARDING POINT</p>
          <div className="mt-4">
            <span className="text-gray-400 mr-6">
              {fromStation}, {doj} , {randomStartTime}
            </span>
            <span className="text-orange-300">Edit</span>
          </div>
        </div>
        <div className="flex mt-4">
          {passengers.map((passenger) => (
            <div
              key={passenger.id}
              className="p-6 rounded-md bg-orange-50  shadow-sm mr-3 cursor-pointer  font-semibold text-orange-700  flex justify-center items-center  relative"
              onMouseEnter={() => handleHover(passenger.id)}
              onMouseLeave={handleLeave}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-1 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>

              <p>{passenger.name}</p>
              {hoveredPassenger === passenger.id && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 ml-4 text-black"
                  onClick={() => handleDeletePassenger(passenger.id)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white shadow-sm w-2/3 mt-4 p-4 rounded-md">
          <p className="text-base font-medium text-gray-600">
            PASSENGER DETAILS
          </p>
          <div className="flex items-center text-gray-600 my-4">
            <div className="flex items-center p-2">
              <input
                type="radio"
                name="gender"
                id=""
                checked={gender === "Male"}
                onChange={() => setGender("Male")}
                className="mr-2 w-6 h-6 accent-orange-400 cursor-pointer"
              />
              <label htmlFor="">Male</label>
            </div>
            <div className="flex items-center p-2">
              <input
                type="radio"
                name="gender"
                id=""
                checked={gender === "Female"}
                onChange={() => setGender("Female")}
                className="mr-2 w-6 h-6 accent-orange-400 cursor-pointer"
              />
              <label htmlFor="">Female</label>
            </div>
            <div className="flex items-center p-2">
              <input
                type="radio"
                name="gender"
                id=""
                checked={gender === "Transgender"}
                onChange={() => setGender("Transgender")}
                className="mr-2 w-6 h-6 accent-orange-400 cursor-pointer"
              />
              <label htmlFor="">Transgender</label>
            </div>
          </div>

          <div className="flex">
            <div className="flex flex-col w-1/2 ">
              <label htmlFor="" className="text-sm text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                name="fName"
                id=""
                value={fName}
                onChange={(e) => setFName(e.target.value)}
                placeholder="Enter Full Name"
                className="outline-none bg-orange-100 py-4 px-3 rounded-md text-gray-400 text-base"
              />
              <p className="text-xs text-gray-400 mt-1">
                Note - Name should be the same as on Government ID proof
              </p>
            </div>
            <div className="flex flex-col w-1/2 ml-4">
              <label htmlFor="" className="text-sm text-gray-600">
                Age
              </label>
              <input
                type="text"
                name="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter Age"
                id=""
                className="outline-none bg-orange-100 py-4 px-3 rounded-md text-gray-400 text-base"
              />
            </div>
          </div>
          <div className="flex mt-6">
            <div className="flex flex-col w-1/2 ">
              <label htmlFor="" className="text-sm text-gray-600">
                Berth Preference
              </label>
              <select
                name=""
                id=""
                value={berthPref}
                onChange={(e) => setBerthPref(e.target.value)}
                className="outline-none bg-orange-100 py-4 px-3 rounded-md text-gray-400 text-base"
              >
                <option value="No Preference">No Berth Preference</option>
                <option value="Lower Berth">Lower Berth</option>
                <option value="Middle Berth">Middle Berth</option>
                <option value="upper Berth">Upper Berth</option>
                <option value="Side Lower">Side Lower</option>
                <option value="Side Upper">Side Upper</option>
              </select>
            </div>
            <div className="flex flex-col w-1/2 ml-4">
              <label htmlFor="" className="text-sm text-gray-600">
                Nationality
              </label>
              <select
                name=""
                id=""
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                className="outline-none bg-orange-100 py-4 px-3 rounded-md text-gray-400 text-base"
              >
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="Dubai">Dubai</option>
                <option value="Nepal">Nepal</option>
                <option value="Pakistan">Pakistan</option>
                <option value="China">China</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <button className="px-4 py-2 bg-red-100 rounded mr-2 text-red-600">
              Delete
            </button>
            <button
              className="px-4 py-2 bg-orange-400 rounded mr-2 text-white"
              onClick={handleSaveTraveller}
            >
              Save
            </button>
          </div>
        </div>
        <div className="bg-white shadow-sm w-2/3 mt-4  p-4 rounded-md">
          <p className="text-base font-medium text-gray-600">CONTACT DETAILS</p>
          <p className="text-xs text-gray-400 mt-1">
            Your tickets will be sent to the below details
          </p>
          <div className="flex mt-4">
            <div className="flex flex-col w-1/2 ">
              <label htmlFor="" className="text-sm text-gray-600">
                Mobile Number
              </label>
              <input
                type="text"
                name="mob"
                id=""
                value={mobNum}
                onChange={(e) => setMobNum(e.target.value)}
                placeholder="Enter Mobile Number"
                className="outline-none bg-orange-100 py-4 px-3 rounded-md text-gray-400 text-base"
              />
            </div>
            <div className="flex flex-col w-1/2 ml-4">
              <label htmlFor="" className="text-sm text-gray-600">
                Email ID
              </label>
              <input
                type="text"
                name="email"
                placeholder="Enter Email ID"
                id=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="outline-none bg-orange-100 py-4 px-3 rounded-md text-gray-400 text-base"
              />
            </div>
          </div>
        </div>
        <div className="bg-white shadow-sm w-2/3 mt-4  p-4 rounded-md">
          <span className="text-base font-medium text-gray-600 mr-2">
            PREFERENCES
          </span>
          <span className="text-gray-400">(Optional)</span>
          <div className="mt-4 flex items-center">
            <input type="checkbox" name="" id="" className="w-6 h-6" />
            <label htmlFor="" className="pl-4 text-gray-600 font-thin">
              Reservation Preference
            </label>
          </div>
          <div className="flex items-center mt-4">
            <input type="checkbox" name="" id="" className="w-6 h-6" />
            <label htmlFor="" className="pl-4 text-gray-600 font-thin">
              Enter GST Details
            </label>
          </div>
        </div>
        <div className="bg-white shadow-sm w-2/3 mt-4  px-4 py-6 rounded-md flex items-start">
          <input type="checkbox" name="" id="" className="w-6 h-6 " />
          <label htmlFor="" className="text-gray-400 text-sm ml-4">
            I agree to the{" "}
            <span className="text-orange-400 ">
              CANCELLATION & REFUND POLICY
            </span>
          </label>
        </div>
        <button
          className="bg-orange-400 text-white text-lg w-2/3 py-4 rounded-md mt-4"
          onClick={handleClick}
        >
          PROCEED
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default Booknow;
