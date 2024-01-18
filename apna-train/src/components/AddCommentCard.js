import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addTrainReview } from "../utils/trainDetailSlice";
import "react-toastify/dist/ReactToastify.css";
const AddCommentCard = ({ currentUser }) => {
  const [text, setText] = useState();
  const trainNumber = useSelector((state) => state.trainDetail.trainno[0]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cUser = JSON.parse(localStorage.getItem("currentUser"));
  const userName = cUser ? cUser.user.username : null;
  const onSend = async () => {
    try {
      if (userName) {
        const reviewDet = {
          trainNo: trainNumber,
          userReviews: {
            userName: currentUser,
            comment: text,
          },
        };
        const resp = await axios.post("https://apna-train-service.onrender.com/api/train/comment", reviewDet);
        console.log(resp.status);
        
        dispatch(
          addTrainReview({
            userName: currentUser,
            comment: text,
            rating: 4,
            dateOfReview: Date.now(),
          })
        );

        setText("");

        toast.success(`Response: ${resp.data}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        navigate("/login");
      }
    } catch (error) {
      if (
        axios.isAxiosError(error) &&
        error.response &&
        error.response.status === 401
      ) {
        // Handle unauthorized access by navigating to the login page
        localStorage.removeItem("currentUser");
        window.location.href="/login";
      } else {
        // Handle other errors
        toast.error(`Error: ${error.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
  };

  return (
    <div className="sm:block hidden">
      <div className="flex bg-white p-6 rounded-lg shadow-md mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-12 h-12 mr-4"
        >
          <path
            fillRule="evenodd"
            d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            clipRule="evenodd"
          />
        </svg>
        <textarea
          autoFocus
          value={text}
          className="border-[1px] h-24 rounded-md resize-none w-full px-4 py-2 mr-4"
          placeholder="Add a comment..."
          onChange={(e) => setText(e.target.value)}
        />
        <div className="flex flex-col justify-center items-center">
          <button
            className="bg-orange-400 text-white w-32 h-10 rounded-lg hover:opacity-50 mb-2"
            onClick={onSend}
          >
            SEND
          </button>
          <button className="bg-orange-400 text-white w-32 h-10 rounded-lg hover:opacity-50">
            ADD PHOTOS
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCommentCard;
