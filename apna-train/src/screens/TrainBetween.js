import React from "react";
import { useSelector } from "react-redux";

const TrainBetween = () => {
  const trainBetw = useSelector((state) => state.trainDetail.trainsBetween[0]);

  return (
    <div>
      {trainBetw &&
        trainBetw.map((train ,index) => (
          <div key={index}>
            {/* Render train information here */}
            <p>{train}</p>
           
            {/* Add other train properties as needed */}
          </div>
        ))}
    </div>
  );
};

export default TrainBetween;
