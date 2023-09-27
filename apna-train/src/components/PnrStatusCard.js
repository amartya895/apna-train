import React, { useState } from "react";

const PnrStatusCard = ({ checkFunction }) => {
  const [isChange, setIsChange] = useState(true);
  const handleChange = () => {
    checkFunction(false);
  };
  return (
    <div className="">
      <h1 className="text-4xl font-normal text-center">PNR Status </h1>
      <div className="bg-slate-200 rounded-sm mt-10 p-6 shadow-sm">
        <div className="flex items-center">
          <p className="text-2xl font-medium pr-8">PNR : 2849395468</p>
          <span
            className="text-orange-500 font-medium text-xl cursor-pointer"
            onClick={handleChange}
          >
            CHANGE PNR
          </span>
        </div>
        <div className="flex pr-8 mt-8 items-center">
          <p className="text-lg mr-2">16588 - BKN YPR EXP </p>
          <span className="w-14 h-10 bg-slate-400 ml-2 rounded-md flex justify-center items-center">
            <svg
              class="w-4 h-4 text-orange-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="text-white">4</p>
          </span>
        </div>
        <div className="text-base text-gray-500 mt-2 flex">
          <p>Vasai Road - BSR, 13:55</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-black ml-4 mr-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
          <p> Bangalore Yesvantpur Junction - YPR, 15:45</p>
        </div>
        <p className="text-base text-gray-500 mt-2">
          Mon, 20 Nov | 3A | GN | Expected platform : 7
        </p>
      </div>
      <div className="bg-slate-200 rounded-sm mt-10 p-6  shadow-sm">
        <div className="flex items-center justify-between">
          <p className="text-2xl font-medium pr-8">Passenger Status</p>
          <div className=" flex justify-center items-center">
            <span className="font-normal text-xl">Chart Prepared</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 ml-2 text-orange-500 cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </div>
        </div>

        <table className="w-full  mt-4 border-separate border-spacing-3">
          <thead className="text-gray-500 ">
            <tr>
              <th>S.No</th>
              <th>Current Status</th>
              <th>Booking Status </th>
              <th>Coach Position</th>
            </tr>
          </thead>
          <tbody className="text-center text-lg">
            <tr>
              <td>1</td>
              <td className="text-green-500">CNF | 27 | SL</td>
              <td>WL/28</td>
              <td>1A</td>
            </tr>
            <tr>
              <td>2</td>
              <td className="text-green-500">CNF | 28 | SL</td>
              <td>WL/29</td>
              <td>1A</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PnrStatusCard;
