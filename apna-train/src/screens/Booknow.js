import React from "react";

const Booknow = () => {
  return (
    <div className="bg-gray-200  flex justify-center w-screen">
      <div className="w-2/3 p-4">
        <p className="text-xl font-medium text-orange-500">Passenger Details</p>
        <div className="flex justify-between  mt-3">
          <div className="bg-white shadow-sm w-2/3 h-24  p-4 rounded-md">
            <p className="text-base font-medium text-gray-600">IRCTC ID</p>
            <div className="mt-4">
              <span className="text-gray-400 mr-6">Amartya859</span>
              <span className="text-orange-300">Edit</span>
            </div>
          </div>
          <div className="w-1/3 bg-white shadow-sm ml-4 p-3 rounded-md">
            <p className="font-medium ">GOLDEN TEMPLE M</p>
            <span className="text-gray-800">Journey Date : </span>
            <span>31-12-2023</span>

            <div className="flex items-center mt-2 text-gray-600">
              <p className="mr-2">NZM</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-orange-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>

              <p className="ml-2">MMCT</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-sm w-2/3 h-24 mt-3 p-4 rounded-md">
          <p className="text-base font-medium text-gray-600">BOARDING POINT</p>
          <div className="mt-4">
            <span className="text-gray-400 mr-6">
              H NIZAMUDDIN ( NZM), 31 Dec , 04:00
            </span>
            <span className="text-orange-300">Edit</span>
          </div>
        </div>
        <div className="bg-white shadow-sm w-2/3 mt-4 p-4 rounded-md">
          <p className="text-base font-medium text-gray-600">
            PASSENGER DETAILS
          </p>
          <div className="flex items-center text-gray-600 my-4">
            <div className="flex items-center p-2">
              <input
                type="radio"
                name="gender"
                id=""
                className="mr-2 w-6 h-6 accent-orange-400 cursor-pointer"
              />
              <label htmlFor="">Male</label>
            </div>
            <div className="flex items-center p-2">
              <input
                type="radio"
                name="gender"
                id=""
                className="mr-2 w-6 h-6 accent-orange-400 cursor-pointer"
              />
              <label htmlFor="">Female</label>
            </div>
            <div className="flex items-center p-2">
              <input
                type="radio"
                name="gender"
                id=""
                className="mr-2 w-6 h-6 accent-orange-400 cursor-pointer"
              />
              <label htmlFor="">Transgender</label>
            </div>
          </div>

          <div className="flex">
            <div className="flex flex-col w-1/2 ">
              <label htmlFor="" className="text-sm text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                name="fName"
                id=""
                placeholder="Enter Full Name"
                className="outline-none bg-orange-100 py-4 px-3 rounded-md text-gray-400 text-base"
              />
              <p className="text-xs text-gray-400 mt-1">
                Note - Name should be the same as on Government ID proof
              </p>
            </div>
            <div className="flex flex-col w-1/2 ml-4">
              <label htmlFor="" className="text-sm text-gray-600">
                Age
              </label>
              <input
                type="text"
                name="age"
                placeholder="Enter Age"
                id=""
                className="outline-none bg-orange-100 py-4 px-3 rounded-md text-gray-400 text-base"
              />
            </div>
          </div>
          <div className="flex mt-6">
            <div className="flex flex-col w-1/2 ">
              <label htmlFor="" className="text-sm text-gray-600">
                Berth Preference
              </label>
              <select
                name=""
                id=""
                className="outline-none bg-orange-100 py-4 px-3 rounded-md text-gray-400 text-base"
              >
                <option value="No Preference">No Berth Preference</option>
                <option value="Lower Berth">Lower Berth</option>
                <option value="Middle Berth">Middle Berth</option>
                <option value="upper Berth">Upper Berth</option>
                <option value="Side Lower">Side Lower</option>
                <option value="Side Upper">Side Upper</option>
              </select>
            </div>
            <div className="flex flex-col w-1/2 ml-4">
              <label htmlFor="" className="text-sm text-gray-600">
                Nationality
              </label>
              <select
                name=""
                id=""
                className="outline-none bg-orange-100 py-4 px-3 rounded-md text-gray-400 text-base"
              >
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="Dubai">Dubai</option>
                <option value="Nepal">Nepal</option>
                <option value="Pakistan">Pakistan</option>
                <option value="China">China</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <button className="px-4 py-2 bg-red-100 rounded mr-2 text-red-600">
              Delete
            </button>
            <button className="px-4 py-2 bg-orange-400 rounded mr-2 text-white">
              Save
            </button>
          </div>
        </div>
        <div className="bg-white shadow-sm w-2/3 mt-4  p-4 rounded-md">
          <p className="text-base font-medium text-gray-600">CONTACT DETAILS</p>
          <p className="text-xs text-gray-400 mt-1">
            Your tickets will be sent to the below details
          </p>
          <div className="flex mt-4">
            <div className="flex flex-col w-1/2 ">
              <label htmlFor="" className="text-sm text-gray-600">
                Mobile Number
              </label>
              <input
                type="text"
                name="mob"
                id=""
                placeholder="Enter Mobile Number"
                className="outline-none bg-orange-100 py-4 px-3 rounded-md text-gray-400 text-base"
              />
            </div>
            <div className="flex flex-col w-1/2 ml-4">
              <label htmlFor="" className="text-sm text-gray-600">
                Email ID
              </label>
              <input
                type="text"
                name="email"
                placeholder="Enter Email ID"
                id=""
                className="outline-none bg-orange-100 py-4 px-3 rounded-md text-gray-400 text-base"
              />
            </div>
          </div>
        </div>
        <div className="bg-white shadow-sm w-2/3 mt-4  p-4 rounded-md">
          <span className="text-base font-medium text-gray-600 mr-2">
            PREFERENCES
          </span>
          <span className="text-gray-400">(Optional)</span>
          <div className="mt-4 flex items-center">
            <input type="checkbox" name="" id="" className="w-6 h-6" />
            <label htmlFor="" className="pl-4 text-gray-600 font-thin">
              Reservation Preference
            </label>
          </div>
          <div className="flex items-center mt-4">
            <input type="checkbox" name="" id="" className="w-6 h-6" />
            <label htmlFor="" className="pl-4 text-gray-600 font-thin">
              Enter GST Details
            </label>
          </div>
        </div>
        <div className="bg-white shadow-sm w-2/3 mt-4  px-4 py-6 rounded-md flex items-start">
          <input type="checkbox" name="" id="" className="w-6 h-6 " />
          <label htmlFor="" className="text-gray-400 text-sm ml-4">
            I agree to the{" "}
            <span className="text-orange-400 ">
              CANCELLATION & REFUND POLICY
            </span>
          </label>
        </div>
        <button className="bg-orange-400 text-white text-lg w-2/3 py-4 rounded-md mt-4">
          PROCEED
        </button>
      </div>
    </div>
  );
};

export default Booknow;