import React, { useState } from "react";
import { useSelector } from "react-redux";

const SeatAvailability = () => {
  const trainDet = useSelector((state) => state.trainDetail.trains[0]);
  const [activeDiv, setActiveDiv] = useState(null);

  const getContentForCoachType = (coachType) => {
    switch (coachType) {
      case "SL":
        return (
          // Content for SL coach type
          <div className="bg-green-400 w-full cursor-pointer rounded-md shadow-lg py-2 hover:bg-green-600">
            <p className="text-center text-lg  text-gray-700">AVAILABLE</p>
          </div>
        );
      case "1AC":
        return (
          // Content for 1AC coach type
          <div className="bg-green-400 w-full cursor-pointer rounded-md shadow-lg py-2">
            <p className="text-center text-lg  text-gray-700">AVAILABLE</p>
          </div>
        );
      case "2AC":
        return (
          // Content for 2AC coach type
          <div className="bg-green-400 w-full cursor-pointer  rounded-md shadow-lg py-2">
          <p className="text-center text-lg  text-gray-700">AVAILABLE</p>
        </div>
        );
      case "3AC":
        return (
          // Content for 3AC coach type
          <div className="bg-green-400 w-full cursor-pointer  rounded-md shadow-lg py-2">
          <p className="text-center text-lg  text-gray-700">AVAILABLE</p>
        </div>
        );
      default:
        return null;
    }
  };

  // Function to handle the div click event
  const handleDivClick = (id) => {
    setActiveDiv(id);
  };

  if (!trainDet) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-pink-100 w-full h-80 rounded-md flex flex-col justify-around p-10">
      <h1 className="text-2xl text-gray-600">
        {" "}
        Seat Availability:{" "}
        <span className="text-orange-500 font-bold">
          {trainDet.number} - {trainDet.name}
        </span>
      </h1>
      <div className="flex justify-between">
        <div className="flex">
          <h1 className="text-gray-700 font-extrabold">Running Days :</h1>
          <ul className="flex ml-4 text-orange-800">
            <li className="mr-3">Mon</li>
            <li className="mr-3">Tue</li>
            <li className="mr-3">Wed</li>
            <li className="mr-3">Thu</li>
            <li className="mr-3">Fri</li>
            <li className="mr-3">Sat</li>
            <li className="mr-3">Sun</li>
          </ul>
        </div>
        <div className="flex">
          <h1 className="text-gray-700 font-extrabold">
            Available Coach Type :
          </h1>
          <ul className="flex ml-4 text-orange-800">
            <li className="mr-3">GN</li>
            <li className="mr-3">SL</li>
            <li className="mr-3">3 AC</li>
            <li className="mr-3">2 AC</li>
            <li className="mr-3">1 AC</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between">
        <div
          className={`border border-orange-500 p-2 w-1/4 text-center cursor-pointer ${
            activeDiv === "SL" ? "bg-orange-500" : ""
          }`}
          onClick={() => handleDivClick("SL")}
        >
          SL
        </div>
        <div
          className={`border border-orange-500 p-2 w-1/4 text-center cursor-pointer ${
            activeDiv === "1AC" ? "bg-orange-500" : ""
          }`}
          onClick={() => handleDivClick("1AC")}
        >
          1AC
        </div>
        <div
          className={`border border-orange-500 p-2 w-1/4 text-center cursor-pointer ${
            activeDiv === "2AC" ? "bg-orange-500" : ""
          }`}
          onClick={() => handleDivClick("2AC")}
        >
          2AC
        </div>
        <div
          className={`border border-orange-500 p-2 w-1/4 text-center cursor-pointer ${
            activeDiv === "3AC" ? "bg-orange-500" : ""
          }`}
          onClick={() => handleDivClick("3AC")}
        >
          3AC
        </div>
      </div>
      {getContentForCoachType(activeDiv)}
    </div>
  );
};

export default SeatAvailability;
