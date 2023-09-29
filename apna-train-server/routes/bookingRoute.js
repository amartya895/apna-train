import express from "express";

import { bookTicket } from "../controllers/bookTicket.js";



const router = express.Router();



router.post("/booknow",bookTicket);

export default router;