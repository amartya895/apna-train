import express from "express";

import { bookTicket } from "../controllers/bookTicket.js";

import { checkPnrStatus } from "../controllers/checkPnr.js";



const router = express.Router();



router.post("/booknow",bookTicket);

router.post("/pnrstatus" , checkPnrStatus);

export default router;