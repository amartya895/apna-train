import fs from "fs";
import { allTrains } from "./train.js";
import {allStations} from "./station.js"
import {randomNumber} from "../controllers/genralController.js"


const trainDataWithoutReviews = allTrains.trains.map(trainName => {

    let stationLen = allStations.stations.length;
   
  const [number, name] = trainName.split(" - ");
  const trainData = {
    number: number,
    name: name,
    liveStatus: allStations.stations[randomNumber(stationLen)], // You can set default values for other fields if needed
    startStation: allStations.stations[randomNumber(stationLen)],
    endStation: allStations.stations[randomNumber(stationLen)],
    seatAvailability: [
      {
        SL: true,
        AC1: true,
        AC2: true,
        AC3: true
      }
    ],
    reviews:[
       {
        punctuality: 4,
        cleanliness: 5,
        food: 3,
        userReviews:[]
       }
        
    ],
    totalReview: 0,
    overallRating: 0
  };
  return trainData;
});

const jsonData = JSON.stringify(trainDataWithoutReviews, null, 2);

fs.writeFile('addtrainData.json', jsonData, (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('Train data without reviews has been successfully written to trainDataWithoutReviews.json');
  }
});

