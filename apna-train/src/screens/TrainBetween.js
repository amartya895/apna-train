import React from "react";
import { useSelector } from "react-redux";
import TrainView from "../components/TrainView";
import { Firsttab } from "../components/tabs/Tabs";
import { useParams } from "react-router-dom";

const TrainBetween = () => {
  const trainBetw = useSelector((state) => state.trainDetail.trainsBetween[0]);
  const [fromStation, toStation] = useSelector(
    (state) => state.trainDetail.journeyStations
  );
  const { date } = useParams();

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="">
        <h1 className="my-4 text-3xl">
          Showing total {trainBetw.length} train from {fromStation} to {toStation} on {date}
        </h1>
      </div>
      <div className="mt-4 w-full">
        <Firsttab />
      </div>
      {trainBetw &&
        trainBetw.map((train, index) => {
          const [number, name] = train.split("-");

          return (
            <TrainView
              key={index}
              trainName={name}
              trainNo={number}
              fromStation={fromStation}
              toStation={toStation}
            />
          );
        })}
    </div>
  );
};

export default TrainBetween;
