import React from "react";
import { useSelector } from "react-redux";

const RunningStatus = () => {
 
  const trainDet = useSelector((state) => state.trainDetail.trains[0]);
  return (
    <div className="bg-pink-100 w-full h-80 rounded-md  p-10">
      <h1 className="text-center text-3xl space-x-1">
        {trainDet.name} {trainDet.number} train running status
      </h1>
      <div className="blink">
        <p className="text-center mt-6 text-2xl text-red-600 font-bold">
          {trainDet.liveStatus}
        </p>
      </div>
    </div>
  );
};

export default RunningStatus;
