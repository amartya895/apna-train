import React from "react";

const PnrInfo = () => {
  return (
    <div className="mt-14 ml-9 w-1/3 mr-8 shadow-md rounded-md h-96 bg-orange-100 p-6">
      <h1 className="text-center text-2xl font-medium text-gray-500 mb-4">
        References
      </h1>
      <ul className="">
        <li><Reference title="CAN" desc="Your ticket status is cancelled" color="red" /></li>
        <li><Reference title="CNF" desc="Your ticket status is confirmed" color="green" /></li>
        <li><Reference title="WL" desc="Your ticket status is in waiting list" color="yellow" /></li>
      </ul>
    </div>
  );
};

export default PnrInfo;

const Reference = ({title , desc , color}) => {
  return (
    <>
      <div className="flex justify-between items-center pb-4">
        <span className={`bg-${color}-500 w-1/4 h-8 rounded-full`}></span>
        <span className={`text-${color}-500 text-left ml-10  w-1/4 text-xl font-bold`}>{title}</span>
        <p className="text-gray-600 text-left w-4/5">{desc}</p>
      </div>
    </>
  );
};
