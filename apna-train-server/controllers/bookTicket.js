import Ticket from "../models/ticketModel.js";

const generatePnr = () => {
  const timestamp = new Date().getTime();
  const randomDigits = Math.floor(Math.random() * 100000);
  const uniqueNumber = `${timestamp}${randomDigits}`.substring(0, 10); 
  return uniqueNumber.toString();
};

export const bookTicket = async (req, res) => {
  try {
    const PNR = generatePnr();
    const {
      fromStation,
      toStation,
      dateOfJourney,
      travellers,
      email,
      irctcId,
      mobileNo,
    } = req.body;

    const newTicket = new Ticket({
      PNR: PNR,
      fromStation,
      toStation,
      dateOfJourney,
      travellers,
      email,
      irctcId,
      mobileNo,
    });

    await newTicket.save();

    res.status(201).json({ message: "Your Ticket has been Booked" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
