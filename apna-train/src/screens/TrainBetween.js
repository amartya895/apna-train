import React from "react";
import { useSelector } from "react-redux";

const TrainBetween = () => {
  const trainBetw = useSelector((state) => state.trainDetail.trainsBetween[0]);
  const [fromStation, toStation] = useSelector(
    (state) => state.trainDetail.journeyStations
  );

  return (
    <div>
      <h1>From Station : {fromStation}</h1>
      <h1>To Station : {toStation}</h1>
      {trainBetw &&
        trainBetw.map((train, index) => {
          // Splitting each train number and name using the '-' delimiter
          const [number, name] = train.split("-");
          
          return (
            <div key={index}>
              <p>Train Number: {number}</p>
              <p>Train Name: {name}</p>
            </div>
          );
        })}
    </div>
  );
};

export default TrainBetween;
