import React from "react";
import "./pnrStatus.css";
function PnrStatus() {
  return (
    <div className="bg-slate-50 w-1/2 h-screen m-6 p-10 shadow-md flex-col justify-center items-center rounded-md">
      <h1 className="text-4xl font-normal text-center">PNR Status Check</h1>
      <div className=" bg-slate-100 shadow-md mt-2 p-5  rounded-sm">
        <p className="text-gray-500 pl-2">PNR Number</p>
        <input
          type="text"
          className="w-[100%] bg-transparent p-2 border-b-[1px] border-gray-600 outline-none"
          placeholder="Enter 10 digit PNR"
        />

        <button className="w-full mt-3 p-2 text-xl bg-orange-400  text-white rounded-md border hover:bg-orange-300 ">
          Search
        </button>
      </div>
    </div>
  );
}

export default PnrStatus;
