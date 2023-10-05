import React from 'react';
import { useSelector } from 'react-redux';


const TrainDetails = () => {
  // Use useSelector to access the trainDet data from the Redux store
  const trainDet = useSelector((state) => state.trainDetail.trains[0]);


  const handleClick = () => {
    console.log(trainDet); // Access trainDet data from the Redux store
  };

  return (
    <div>
      <h1>Hi, I'm Train Details</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default TrainDetails;
