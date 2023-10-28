import React from "react";
import { useSelector } from "react-redux";
import timetable from "../images/traintimetable.png";
const Timetable = () => {
  const trainDet = useSelector((state) => state.trainDetail.trains[0]);

  return (
    <>
    <div ></div>
    <div className="w-full  rounded-md  p-10">
      <h1 className="text-center text-3xl space-x-1 text-orange-500">
        {trainDet.name} {trainDet.number} train route
      </h1>
      <div className="flex justify-center items-center  text-xl font-semibold mt-5 mb-3 text-yellow-800">
        <p className="pr-5">{trainDet.startStation}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8 rounded-full text-blue-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
          />
        </svg>

        <p className="pl-5">{trainDet.endStation}</p>
      </div>
      <div className="flex justify-center items-center mt-5">
        <img src={timetable} alt="time-table" />
      </div>
    </div>
    </>
  );
};

export default Timetable;
