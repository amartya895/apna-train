import React, { useEffect, useState } from "react";
import "./tabs.css";
import TabContent from "./TabContent";
import TabNavItem from "./TabNavitem";
import axios from 'axios';
import { allStations } from "../../data/station";

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

  useEffect(()=>{
    handleSearchStation();
  },[]);

  const handleSearchStation =async()=>{

    const options = {
      method: 'GET',
      url: 'https://irctc1.p.rapidapi.com/api/v1/searchStation',
      params: {query: 'NDLS'},
      headers: {
        'X-RapidAPI-Key': 'e7c413ef13msh7bd5b78f0648133p168b27jsn5fae32df1da9',
        'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <>
    </>
    // <div>
    //   <input
    //     type="text"
    //     placeholder="Enter station name"
    //     value={searchQuery}
    //     onChange={(e) => setSearchQuery(e.target.value)}
    //   />
    //   <button onClick={handleSearchTrain}>Search</button>

    //   {filteredStations.length > 0 ? (
    //     <div>
    //       <p>Matching Stations:</p>
    //       <ul>
    //         {filteredStations.map((station, index) => (
    //           <li key={index}>{station}</li>
    //         ))}
    //       </ul>
    //     </div>
    //   ) : (
    //     <p>No matching stations found.</p>
    //   )}
    // </div>
  );
};

const Secondtab = () => {
  return (
    <div className="FirstTab">
      <p>Second Tab!! Hurray!!</p>
      {/* First tab content will go here */}
    </div>
  );
};
const Thirdtab = () => {
  return (
    <div className="FirstTab">
      <p>Third Tab!! Hurray!!</p>
      {/* First tab content will go here */}
    </div>
  );
};
const Fourthtab = () => {
  return (
    <div className="FirstTab">
      <p>Fourthtab Tab!! Hurray!!</p>
      {/* First tab content will go here */}
    </div>
  );
};
