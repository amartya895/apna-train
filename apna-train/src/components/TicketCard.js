import React from "react";
import train from "../images/train.png";
import QRCode from "react-qr-code";
import logo from "../images/ApnaTrainLogo.png";
import { useSelector } from "react-redux";
const TicketCard = () => {
  const {
    trainName,
    type,
    price,
    fromStation,
    toStation,
    doj,
    passengers,
   

    randomStartTime,
  } = useSelector((state) => state.trainDetail.tickets[0]);

  let name, age, gender, nationality ,berthPref;

  if (passengers.length > 1) {
    name = `${passengers[0].name} +${passengers.length - 1}`;
    age = passengers[0].age;
    gender = passengers[0].gender;
    nationality = passengers[0].country;
    berthPref=passengers[0].berthPref;
  } else {
    name = passengers[0].name;
    age = passengers[0].age;
    gender = passengers[0].gender;
    nationality = passengers[0].country;
    berthPref=passengers[0].berthPref;
  }

  const qrDet = `
  Name : ${name}
  Train : ${trainName}
  Coach Type : ${type}
  Price : ${price}
  From : ${fromStation}
  To : ${toStation}
  DOJ : ${doj}
  Age : ${age}
  Berth : ${berthPref}
  Gender : ${gender}
  Nationality : ${nationality}`;

  return (
    <div className="w-full h-72 mt-5 bg-blue-200 flex flex-col justify-between rounded-lg">
      <div className="w-full h-20 p-1 bg-red-200 rounded-t-lg flex justify-between items-center pl-20 pr-20 ">
        <h1 className="text-2xl font-normal ">Boarding Pass</h1>
        <div className="flex">
          <img src={train} alt="train" className="pr-2 w-10" />

          <h1 className="text-2xl">Train Ticket</h1>
        </div>
      </div>
      <div className="h-full flex">
        <div className="p-2 text-right">
          <ul className="flex mb-1">
            <li className="w-24 text-gray-500  text-left">Name</li>
            <li className="font-mono ml-4">{name}</li>
          </ul>
          <ul className="flex mb-1">
            <li className="w-24 text-gray-500  text-left">From</li>
            <li className="font-mono ml-4">{fromStation}</li>
          </ul>
          <ul className="flex mb-1">
            <li className="w-24 text-gray-500  text-left">To</li>
            <li className="font-mono ml-4">{toStation}</li>
          </ul>
          <ul className="flex mb-1">
            <li className="w-24 text-gray-500  text-left">Class</li>
            <li className="font-mono ml-4">{type}</li>
          </ul>
          <ul className="flex mb-1">
            <li className="w-24 text-gray-500  text-left">Date</li>
            <li className="font-mono ml-4">{doj}</li>
          </ul>

          <ul className="flex text-center">
            <li className="pr-6 flex flex-col">
              <span className=" text-gray-500">Seat</span>
              <span>A05</span>
            </li>
            <li className="pr-6 flex flex-col">
              <span className=" text-gray-500">Depart Time</span>
              <span>{randomStartTime}</span>
            </li>
            <li className="pr-6 flex flex-col">
              <span className=" text-gray-500">Seat</span>
              <span>20A</span>
            </li>
          </ul>
        </div>

        <QRCode
          size={180}
          bgColor="white"
          fgColor="black"
          value={qrDet}
          className="mt-2"
        />
        <div className=""></div>
      </div>
      <div className="w-full h-20 p-1 bg-blue-300 rounded-b-lg flex justify-around items-center">
        <img src={logo} alt="qrcode" width="100px" />

        <div className=""></div>

        <div className="flex">
          <h1 className="text-gray-500">
            @Apna Train Wish you a Happy and safe journey
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
