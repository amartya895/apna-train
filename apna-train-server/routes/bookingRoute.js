import express from "express";

import { bookTicket } from "../controllers/bookTicket.js";

import { checkPnrStatus } from "../controllers/checkPnr.js";
import { getTickets } from "../controllers/getTicketController.js";



const router = express.Router();



router.post("/booknow",bookTicket);

router.post("/pnrstatus" , checkPnrStatus);

router.post("/getTickets" ,getTickets);

export default router;