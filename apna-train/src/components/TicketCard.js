import React from "react";
import train from "../images/train.png";
import qrcode from "../images/qrcode.svg";
import logo from "../images/ApnaTrainLogo.png"
const TicketCard = () => {
  return (
    <div className="w-full h-72 mt-5 bg-blue-200 flex flex-col justify-between rounded-lg">
      <div className="w-full h-20 p-1 bg-red-200 rounded-t-lg flex justify-between items-center pl-20 pr-20 ">
        <h1 className="text-2xl font-normal ">Boarding Pass</h1>
        <div className="flex">
          <img src={train} className="pr-2 w-10" />
          <h1 className="text-2xl">Train Ticket</h1>
        </div>
      </div>
      <div className="h-full flex">
        <div className="p-2 text-right">
          <ul className="flex mb-1">
            <li className="w-24 text-gray-500  text-left">Name</li>
            <li className="font-mono ml-4">Amartya Sen</li>
          </ul>
          <ul className="flex mb-1">
            <li className="w-24 text-gray-500  text-left">From</li>
            <li className="font-mono ml-4">PATNA</li>
          </ul>
          <ul className="flex mb-1">
            <li className="w-24 text-gray-500  text-left">To</li>
            <li className="font-mono ml-4">New Delhi</li>
          </ul>
          <ul className="flex mb-1">
            <li className="w-24 text-gray-500  text-left">Class</li>
            <li className="font-mono ml-4">1A</li>
          </ul>
          <ul className="flex mb-1">
            <li className="w-24 text-gray-500  text-left">Date</li>
            <li className="font-mono ml-4">26-10-2023</li>
          </ul>

          <ul className="flex text-center">
            <li className="pr-6 flex flex-col">
              <span className=" text-gray-500">Seat</span>
              <span>A05</span>
            </li>
            <li className="pr-6 flex flex-col">
              <span className=" text-gray-500">Depart Time</span>
              <span>A05</span>
            </li>
            <li className="pr-6 flex flex-col">
              <span className=" text-gray-500">Seat</span>
              <span>20A</span>
            </li>
          </ul>
        </div>
        <img src={qrcode} alt="" className="mb-2 w-52 h-52 " />
        <div className=""></div>
      </div>
      <div className="w-full h-20 p-1 bg-blue-300 rounded-b-lg flex justify-around items-center">
      <img src={logo} alt="" width="100px" />
        <div className="flex">
         
          <h1 className="text-gray-500">@Apna Train Wish you a Happy and safe journey</h1>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
