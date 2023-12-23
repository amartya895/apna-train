import express from "express";
import { addTravellerController } from "../controllers/addTravellerController.js";


const router = express.Router();

router.post("/addTraveller" , addTravellerController);

export default router;