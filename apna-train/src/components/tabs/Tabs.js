import React, { useState } from "react";
import "./tabs.css";
import TabContent from "./TabContent";
import TabNavItem from "./TabNavitem";
import { allStations } from "../../data/station";
import { allTrains } from "../../data/train";
import Search from "../Search";

function Tabs() {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <div className="Tabs">
      <ul className="nav">
        <TabNavItem
          icon="train"
          title="Search By Station"
          id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          icon="train"
          title="Search By Train Name/No"
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          icon="train"
          title="Running Status"
          id="tab3"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          icon="train"
          title="Coach Position"
          id="tab4"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>

      <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
          <Firsttab />
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <Secondtab />
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <Thirdtab />
        </TabContent>
        <TabContent id="tab4" activeTab={activeTab}>
          <Fourthtab />
        </TabContent>
      </div>
    </div>
  );
}
export default Tabs;

const Firsttab = () => {
  return (
    <div className="flex px-4 items-center">
      <div className="">
        <Search
          searchData={allStations.stations}
          placeholderText="Enter From Station"
        />
      </div>
      <div className="bg-orange-100 p-2 rounded-full text-orange-500 mx-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
        />
      </svg>
      </div>

      <div className="">
        <Search
          searchData={allStations.stations}
          placeholderText="Enter To Station"
        />
      </div>
      <button className="bg-orange-400 p-3 text-gray-200 rounded-md shadow-sm hover:bg-orange-500 ml-2">SEARCH</button>
    </div>
  );
};

const Secondtab = () => {
  return (
   <div className="flex w-full px-2">
   <div className="w-full">
   <Search searchData={allTrains.trains} placeholderText="Enter Train No / Name"/>
   </div>
   <button className="bg-orange-400 p-3 text-gray-200 rounded-md shadow-sm hover:bg-orange-500 ml-2">SEARCH</button>
   </div>
  );
};
const Thirdtab = () => {
  return (
    <div className="flex w-full px-2">
   <div className="w-full">
   <Search searchData={allTrains.trains} placeholderText="Enter Train No / Name"/>
   </div>
   <button className="bg-orange-400 p-3 text-gray-200 rounded-md shadow-sm hover:bg-orange-500 ml-2">SEARCH</button>
   </div>
  );
};
const Fourthtab = () => {
  return (
    <div className="flex w-full px-2">
   <div className="w-full">
   <Search searchData={allTrains.trains} placeholderText="Enter Train No / Name"/>
   </div>
   <button className="bg-orange-400 p-3 text-gray-200 rounded-md shadow-sm hover:bg-orange-500 ml-2">SEARCH</button>
   </div>
  );
};
