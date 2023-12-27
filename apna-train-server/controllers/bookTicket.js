import Ticket from "../models/ticketModel.js";

import { generateUniqueNo } from "./genralController.js";

const allocateBerth = (age) => {
  const berthType = ["UB", "LB", "SL", "SU", "MB"];

  let seatNo;
  let berth;

  if (age <= 40) {
    seatNo = Math.floor(Math.random() * 72);
    berth = berthType[Math.floor(Math.random() * berthType.length)];
  } else if (age > 40 && age <= 90) {
    seatNo = Math.floor(Math.random() * 72);
    berth = "LB";
  }

  return { seatNo, berth };
};

export const bookTicket = async (req, res) => {
  try {
    const PNR = generateUniqueNo(10);
    const {
      train,
      fromStation,
      toStation,
      dateOfJourney,
      travellers,
      email,
      irctcId,
      mobileNo,
      ticketFair,
    } = req.body;

    const updatedTravellers = travellers.map((person) => {
      const { seatNo, berth } = allocateBerth(person.age);
      return {
        ...person,
        berth: [
          {
            seatNo: seatNo,
            seatType: berth,
          },
        ],
      };
    });

    const newTicket = new Ticket({
      PNR: PNR,
      train,
      fromStation,
      toStation,
      dateOfJourney,
      travellers: updatedTravellers,
      email,
      irctcId,
      mobileNo,
      ticketFair,
    });

    await newTicket.save();

    console.log("Ticket Saved Successfully");

    res.status(201).json({ message: "Your Ticket has been Booked" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
