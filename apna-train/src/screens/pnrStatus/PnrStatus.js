import React, { useState } from "react";
import PnrStatusCard from "../../components/PnrStatusCard";
import Accordian from "../../components/Accordian";
import { PNRFAQs } from "../../data/FAQs";
function PnrStatus() {
  const [checkPnr, setCheckPnr] = useState(false);

  const handlePnrSearch = (isCheck) => {
    setCheckPnr(isCheck);
  };

  return (
    <div className="bg-slate-50 w-2/3  ml-14 mt-14 mb-10 p-10 shadow-md flex-col justify-center items-center rounded-md">
      {checkPnr ? (
        <PnrStatusCard checkFunction={handlePnrSearch} />
      ) : (
        <>
          <h1 className="text-4xl font-normal text-center">PNR Status Check</h1>
          <div className=" bg-slate-100 shadow-md mt-2 p-5  rounded-sm">
            <p className="text-gray-500 pl-2">PNR Number</p>
            <input
              type="text"
              className="w-[100%] bg-transparent p-2 border-b-[1px] border-gray-600 outline-none"
              placeholder="Enter 10 digit PNR"
            />

            <button
              className="w-full mt-3 p-2 text-xl bg-orange-400 duration-300 text-white rounded-md border hover:bg-orange-300 "
              onClick={handlePnrSearch}
            >
              Search
            </button>
          </div>
          <Accordian FAQs={PNRFAQs} />
        </>
      )}
    </div>
  );
}

export default PnrStatus;
