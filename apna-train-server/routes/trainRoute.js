import express from "express";
import {trainDetail , addTrain , addComment ,getLiveStatus ,getSchedule ,checkSeatAvailability ,trainBetweenStations} from "../controllers/trainController.js";
import {restrictToLoggedinUserOnly} from "../middlewares/auth.js"

const router = express.Router();

router.post('/addtrain' , addTrain);

router.post('/details' , trainDetail);

router.post('/comment' ,restrictToLoggedinUserOnly, addComment);

router.post('/livestatus',getLiveStatus);

router.post('/schedule' , getSchedule);

router.post('/seatavailable' , checkSeatAvailability);

router.post('/trainbetweenstation' , trainBetweenStations);

export default router;