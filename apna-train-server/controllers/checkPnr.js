import Ticket from "../models/ticketModel.js";

export const checkPnrStatus=async(req , res)=>{

    try {
      const {pnr} = req.body;
  
      console.log(pnr);
  
      if(!pnr)
      {
        return res.status(400).json({ message: "PNR number is required." });
      }
  
      const ticket = await Ticket.findOne({PNR:pnr});
  
      if(!ticket)
      {
        return res.status(404).json({ message: "Ticket not found for the provided PNR number." });
  
      }

      const pnrInfo = {
        PNR : ticket.PNR,
        trainName :"120018 - AVADH ASSAM EXP",
        fromStation : ticket.fromStation,
        toStation : ticket.toStation,
        dateOfJourney : ticket.dateOfJourney,
        seatInfo : ticket.travellers.map((person)=>{
          return person.berth[0];
        }),

      }
  
      res.status(200).json(pnrInfo);
  
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  
  }