import Ticket from "../models/ticketModel.js";

export const getTickets = async (req, resp) => {
  const {userId} = req.body; // assuming userId is in the request body

  try {
   
    const tickets = await Ticket.find({userId : userId});

    resp.status(200).json({
      success: true,
      data: tickets,
    });
  } catch (error) {
    console.error(error);
    resp.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
