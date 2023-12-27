import React, { useEffect, useState } from "react";
import train from "../images/train.png";
import QRCode from "react-qr-code";
import logo from "../images/ApnaTrainLogo.png";
import axios from "axios";
const TicketCard = () => {
  const [tickets, setTickets] = useState();
  const fetchTickets = async () => {
    try {
      const id = JSON.parse(localStorage.getItem("currentUser")).user._id;

      const result = await axios.post("/api/booking/getTickets", {
        userId: id,
      });

      if (result.status === 200) {
        // console.log(result.data.data)

        setTickets(result.data.data);
        console.log("Tickets fetched successfully");
      }
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  if (!tickets) {
    return <div>No ticket available</div>;
  }

  return (
    <div className="py-10 bg-orange-50">
      {tickets &&
        tickets.map((ticket) => {
          const qrDet = `
  PNR : ${ticket.PNR}
  Name : ${
    ticket.travellers.length > 1
      ? `${ticket.travellers[0].name} +${ticket.travellers.length - 1}`
      : ticket.travellers[0].name
  }
  Train : ${ticket.train}
  Coach Type : ${ticket.coachType}
  Price : ${ticket.ticketFair}
  From : ${ticket.fromStation}
  To : ${ticket.toStation}
  DOJ : ${ticket.dateOfJourney}
  Age : ${ticket.travellers[0].age}
  Id : ${ticket.travellers[0]._id}
  Gender : ${ticket.travellers[0].gender}
  Nationality : ${ticket.travellers[0].country}`;

          const formatDate = (dateString) => {
            const date = new Date(dateString);
            const formattedDate = `${date.getDate()}-${
              date.getMonth() + 1
            }-${date.getFullYear()}`;
            return formattedDate;
          };

          return (
            <div className="flex justify-center">
              <div className="w-2/3 my-5 bg-blue-200 flex flex-col justify-between rounded-lg shadow-md">
                <div className="w-full  p-1 bg-red-200 rounded-t-lg flex justify-between items-center pl-20 pr-20 ">
                  <h1 className="text-2xl font-normal ">Boarding Pass</h1>
                  <div className="flex">
                    <img src={train} alt="train" className="pr-2 w-10" />

                    <h1 className="text-2xl">Train Ticket</h1>
                  </div>
                </div>
                <div className="h-full flex justify-around items-center">
                  <div className="p-2 text-right">
                    <ul className="flex mb-1">
                      <li className="w-24 text-gray-500  text-left">Name</li>
                      <li className="font-mono ml-4">
                        {ticket.travellers.length > 1
                          ? `${ticket.travellers[0].name} +${
                              ticket.travellers.length - 1
                            }`
                          : ticket.travellers[0].name}
                      </li>
                    </ul>
                    <ul className="flex mb-1">
                      <li className="w-24 text-gray-500  text-left">From</li>
                      <li className="font-mono ml-4">{ticket.fromStation}</li>
                    </ul>
                    <ul className="flex mb-1">
                      <li className="w-24 text-gray-500  text-left">To</li>
                      <li className="font-mono ml-4">{ticket.toStation}</li>
                    </ul>
                    <ul className="flex mb-1">
                      <li className="w-24 text-gray-500  text-left">Class</li>
                      <li className="font-mono ml-4">{ticket.coachType}</li>
                    </ul>
                    <ul className="flex mb-1">
                      <li className="w-24 text-gray-500  text-left">Date</li>
                      <li className="font-mono ml-4">
                        {formatDate(ticket.dateOfJourney)}
                      </li>
                    </ul>

                    <ul className="flex text-center mt-4">
                      <li className="pr-6 flex flex-col">
                        <span className=" text-gray-500">Seat</span>
                        <span>
                          {ticket.travellers.map((passenger) => {
                            return (
                              <span className="ml-2">
                                {passenger.berth[0].seatNo} |{" "}
                                {passenger.berth[0].seatType}
                              </span>
                            );
                          })}
                        </span>
                      </li>
                      <li className="pr-6 flex flex-col">
                        <span className=" text-gray-500">Depart Time</span>
                        <span>{ticket.startTime}</span>
                      </li>
                    </ul>
                  </div>

                  <QRCode
                    size={200}
                    bgColor="white"
                    fgColor="black"
                    value={qrDet}
                    className="my-4 ml-6"
                  />
                  <div className=""></div>
                </div>
                <div className="w-full h-20 p-1 bg-blue-300 rounded-b-lg flex justify-around items-center">
                  <img src={logo} alt="qrcode" width="100px" />

                  <div className="">
                    <p className="font-bold text-xl text-gray-700">PNR : {ticket.PNR}</p>
                  </div>

                  <div className="flex">
                    <h1 className="text-gray-500">
                      @Apna Train Wish you a Happy and Safe journey
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default TicketCard;
