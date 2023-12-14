import React from "react";

const TrainView = ({ trainName, trainNo, fromStation, toStation }) => {
  const generateRandomPrice = () =>
    Math.floor(Math.random() * (2000 - 500 + 1) + 500);

  const generateRandomTime = () => {
    const hours = Math.floor(Math.random() * 24);
    const minutes = Math.floor(Math.random() * 60);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  };

  const generateRandomTimeTaken = () =>
    Math.floor(Math.random() * (10 - 1 + 1) + 1);

  const randomPrice = generateRandomPrice();
  const randomStartTime = generateRandomTime();
  const randomEndTime = generateRandomTime();
  const randomHr = generateRandomTimeTaken();
  const randomMin = generateRandomTimeTaken();
  return (
    <div className="w-4/5 bg-orange-50 h-64 mt-8 rounded-md shadow-sm p-6">
      <div className="flex justify-between">
        <div className="w-2/3 flex items-center">
          <p className="font-bold text-xl">{trainNo}</p>
          <p className="text-gray-400 text-2xl px-2">|</p>
          <p className="font-semibold text-gray-600">{trainName}</p>
        </div>
        <div className="flex justify-between w-1/3 items-center">
          <p>{randomStartTime}</p>
          <div className="flex items-center text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
            <p className="px-2">
              {randomHr > 9 ? randomHr : "0" + randomHr}h{" "}
              {randomMin > 9 ? randomMin : "0" + randomMin}m
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
          <p>{randomEndTime}</p>
        </div>
      </div>
      <div className="flex justify-between mt-2">
        <div className="w-2/3 flex items-center">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="24px"
            className="pl-4 text-gray-400"
          >
            <path d="M1 22c0 .54.45 1 1 1h13c.56 0 1-.46 1-1v-1H1v1M8.5 9C4.75 9 1 11 1 15h15c0-4-3.75-6-7.5-6m-4.88 4c1.11-1.55 3.47-2 4.88-2s3.77.45 4.88 2H3.62M1 17h15v2H1v-2M18 5V1h-2v4h-5l.23 2h9.56l-1.4 14H18v2h1.72c.84 0 1.53-.65 1.63-1.47L23 5h-5z" />
          </svg>
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            height="24px"
            className="pl-2 text-gray-400"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M5 11a2 2 0 012 2v2h10v-2a2 2 0 114 0v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4a2 2 0 012-2z" />
            <path d="M5 11V6a3 3 0 013-3h8a3 3 0 013 3v5M6 19v2M18 19v2" />
          </svg>
          <p className="pl-2 text-orange-400">M T W T F S S</p>
        </div>
        <div className="flex justify-between w-1/3 items-center text-gray-600 text-center text-sm font-medium">
          <p>{fromStation}</p>
          <p className="text-orange-400">View route</p>
          <p>{toStation}</p>
        </div>
      </div>

      <div className="flex mt-8 justify-center">
        <SeatType type="1A" price={randomPrice} />
        <SeatType type="2A" price={randomPrice - 205} />
        <SeatType type="3A" price={randomPrice - 299} />
        <SeatType type="3E" price={randomPrice - 403} />
        <SeatType type="SL" price={randomPrice - 510} />
      </div>
    </div>
  );
};

export default TrainView;

const SeatType = ({ type, price }) => {
  return (
    <div className="w-48 h-28 bg-red-100 rounded-md p-2 text-center cursor-pointer ml-4">
      <div className="flex items-center justify-between text-gray-500 pt-1 px-2">
        <p>{type}</p>
        <p>&#8377; {price}</p>
      </div>
      <p className="font-light mt-2">Tap to refresh</p>
      <p className="text-blue-400 font-normal text-sm mt-2">Book now</p>
    </div>
  );
};
