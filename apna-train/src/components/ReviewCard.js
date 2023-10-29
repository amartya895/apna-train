import React from "react";
import { timeConvert, starCount } from "../utils/generalFunc.js";

const ReviewCard = ({ username, review, star, time }) => {
  const reviewDate = timeConvert(time);
  return (
    <div className="max-h-screen bg-gray-100 flex mt-10 justify-center">
      <div className="px-10">
        <div className="bg-white  rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-10"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clipRule="evenodd"
            />
          </svg>

          <div className="mt-4">
            <h1 className="text-lg text-gray-700 font-semibold hover:underline cursor-pointer">
              {username}
            </h1>
            <div className="flex mt-2">{starCount(star)}</div>
            <p className="mt-4 text-md text-gray-600">
              {review}
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human happines.
            </p>
          </div>
          <div className="mt-2 text-gray-500 font-normal ">{reviewDate}</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
