import React from "react";
const TabNavitem = ({ id, title, activeTab, setActiveTab, icon }) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <li onClick={handleClick} className={activeTab === id ? "active" : ""}>
      <i className={`fa fa-${icon}`} aria-hidden="true"></i>
      <p>{title}</p>
    </li>
  );
};

export default TabNavitem;
