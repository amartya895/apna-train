import React from "react";
import { useSelector } from "react-redux";
import ReviewCard from "./ReviewCard";
import { starCount } from "../utils/generalFunc";
import AddCommentCard from "./AddCommentCard";

const Reviews = () => {
  const trainDet = useSelector((state) => state.trainDetail.trains[0]);
  const userReviews = trainDet.reviews[0].userReviews;
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const userName = currentUser ? currentUser.user.username : null;

  return (
    <>
      <div className="bg-pink-100 w-full  rounded-md  p-10 flex justify-around items-center text-center">
        <div>
          <div className="text-lg font-semibold flex flex-col items-center">
            <p>Punctuality</p>
            <p className="flex mt-2">
              {starCount(trainDet.reviews[0].punctuality)}
            </p>
            <p className="w-12 h-12 p-2 bg-orange-200 rounded-full flex justify-center items-center mt-2">
              {Number(trainDet.reviews[0].punctuality).toFixed(1)}
            </p>
          </div>
        </div>
        <div>
          <div className="text-lg font-semibold flex flex-col items-center">
            <p>Cleanliness</p>
            <p className="flex mt-2">
              {starCount(trainDet.reviews[0].cleanliness)}
            </p>
            <p className="w-12 h-12 p-2 bg-orange-200 rounded-full flex justify-center items-center mt-2">
              {Number(trainDet.reviews[0].cleanliness).toFixed(1)}
            </p>
          </div>
        </div>
        <div>
          <div className="text-lg font-semibold flex flex-col items-center">
            <p>Food</p>
            <p className="flex mt-2">{starCount(trainDet.reviews[0].food)}</p>
            <p className="w-12 h-12 p-2 bg-orange-200 rounded-full flex justify-center items-center mt-2">
              {Number(trainDet.reviews[0].food).toFixed(1)}
            </p>
          </div>
        </div>
      </div>
      {userReviews.map((review) => (
        <div className="mb-9" key={review.dateOfReview}>
          <ReviewCard
            username={review.userName}
            review={review.comment}
            star={review.rating}
            time={review.dateOfReview}
          />
        </div>
      ))}
      <div className="px-10 mt-3">
        {userName && <AddCommentCard currentUser={userName} />}
      </div>
    </>
  );
};

export default Reviews;
