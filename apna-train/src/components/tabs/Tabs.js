import React, { useState } from "react";
import "./tabs.css";
import TabContent from "./TabContent";
import TabNavItem from "./TabNavitem";
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
  const allStations = {
    stations: ['NDLS-New Delhi', 'KGG-Khagaria', 'XYZ-SomeStation', /* ...other stations... */],
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStations, setFilteredStations] = useState([]);

  const handleSearchTrain = () => {
    // Convert the station names to lowercase for case-insensitive search
    const lowercaseSearchQuery = searchQuery.toLowerCase();

    // Filter the stations based on the search query
    const filtered = allStations.stations.filter((stationName) =>
      stationName.toLowerCase().includes(lowercaseSearchQuery)
    );

    // Update the filtered stations in state
    setFilteredStations(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter station name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearchTrain}>Search</button>

      {filteredStations.length > 0 ? (
        <div>
          <p>Matching Stations:</p>
          <ul>
            {filteredStations.map((station, index) => (
              <li key={index}>{station}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No matching stations found.</p>
      )}
    </div>
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
