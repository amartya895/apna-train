import React from "react";
import { useSelector } from "react-redux";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const trainDet = useSelector((state) => state.trainDetail.trains[0]);
  const userReviews = trainDet.reviews[0].userReviews;

  return (
    <>
      <div className="bg-pink-100 w-full  rounded-md  p-10 flex justify-around">
        <div>
          <p> punctuality :</p>
          <p>{trainDet.reviews[0].punctuality}</p>
        </div>
        <div>
          <p> cleanliness :</p>
          <p>{trainDet.reviews[0].cleanliness}</p>
        </div>
        <div>
          <p> food :</p>
          <p>{trainDet.reviews[0].food}</p>
        </div>
      </div>
      {userReviews.map((review) => (
        <div className="" key={review.id}>
          <ReviewCard username={review.userName} review={review.comment} star={review.rating} time={review.dateOfReview} />
        </div>
      ))}
    </>
  );
};

export default Reviews;
