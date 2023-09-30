import Ticket from "../models/ticketModel.js";

const generatePnr = () => {
  const timestamp = new Date().getTime();
  const randomDigits = Math.floor(Math.random() * 100000);
  const uniqueNumber = `${timestamp}${randomDigits}`.substring(0, 10);
  return uniqueNumber.toString();
};

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

    const updatedTravellers = travellers.map((person) => {
      const { seatNo, berth } = allocateBerth(person.age);
      return {
        ...person,
        berth: [
          {
            seatNo:seatNo,
            seatType:berth,
          },
        ],
      };
    });
    
    const newTicket = new Ticket({
      PNR: PNR,
      fromStation,
      toStation,
      dateOfJourney,
      travellers: updatedTravellers,
      email,
      irctcId,
      mobileNo,
      ticketFair: Math.floor(Math.random() * 4000),
    });
    
    await newTicket.save();
    

  console.log("Ticket Saved Successfully");    

    res.status(201).json({ message: "Your Ticket has been Booked" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
