import Train from "../models/trainModel.js";

import {
  generateNewLiveStatus,
  getTrainBetween,
  generateUniqueNo,
} from "./genralController.js";

export const addTrain = async (req, res) => {
  try {
    const {
      name,
      liveStatus,
      startStation,
      endStation,
      reviews,
      seatAvailability,
      totalReview,
      overallRating,
    } = req.body;

    const newTrain = await Train.create({
      number: generateUniqueNo(5),
      name,
      liveStatus,
      startStation,
      endStation,
      reviews,
      seatAvailability,
      totalReview,
      overallRating,
    });

    await newTrain.save();

    res.status(201).json({ message: "Train added successfully" });
  } catch (error) {
    res.status(403).json({ message: error.message });
  }
};

export const trainDetail = async (req, res) => {
  try {
    const { trainNo } = req.body;

    const train = await Train.findOne({ number: trainNo });

    res.status(200).json(train);
  } catch (error) {
    res.status(403).json({ message: error.message });
  }
};

export const addComment = async (req, res) => {
  try {
    const { trainNo, userReviews } = req.body;
    const train = await Train.findOne({ number: trainNo });

    if (train) {
      train.reviews[0].userReviews.push(userReviews);
      await train.save();

      res.status(200).json({ message: "Comment added successfully" });
    } else {
      res.status(404).json({ message: "Train not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getLiveStatus = async (req, res) => {
  try {
    const { trainNo } = req.body;
    const newLiveStatus = generateNewLiveStatus();

    const train = await Train.findOneAndUpdate(
      { number: trainNo },
      { liveStatus: newLiveStatus },
      { new: true }
    );

    if (train) {
      res.status(200).json({ liveStatus: train.liveStatus });
    } else {
      res.status(404).json({ message: "Train not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSchedule = async (req, res) => {};

export const checkSeatAvailability = async (req, res) => {
  try {
    const { trainNo } = req.body;

    const train = await Train.findOne({ number: trainNo });

    const available = train.seatAvailability[0];

    res.status(200).json({ available });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const trainBetweenStations = async (req, res) => {
  try {
    const { fromStation, toStation } = req.body;

    const trainBetween = getTrainBetween(fromStation, toStation);

    res.status(200).json(trainBetween);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
