import {allStations} from "../data/station.js"
import {allTrains} from "../data/train.js"

export const generateUniqueNo = (digitcount) => {
    const timestamp = new Date().getTime();
    const randomDigits = Math.floor(Math.random() * 100000);
    const uniqueNumber = `${timestamp}${randomDigits}`.substring(0, digitcount);
    return uniqueNumber.toString();
  };


export const generateNewLiveStatus= ()=>{

    const n = allStations.stations.length;

    const newStaion = allStations.stations[Math.floor(Math.random()*n)];

    return newStaion;

}

export const randomNumber = (limit)=>{

  return Math.floor(Math.random()*limit)
}

export const getTrainBetween=(fromStation , toStation)=>{

  let maxSize = 20;
  let minSize = 3;

  const subsetSize = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
  const shuffledArray = allTrains.trains.sort(() => Math.random() - 0.5);
  return shuffledArray.slice(0, subsetSize);
}