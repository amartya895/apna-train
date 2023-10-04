import React, { useState } from "react";

const Search = ({ searchData, placeholderText }) => {
  const [searchQuery, setSearchQuery] = useState();

  const handleOnChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <div className="flex justify-center items-center border-gray-300 border-2 bg-slate-50 mx-1 px-2 rounded-md ">
        <input
          type="text"
          className="w-full border-none outline-none pl-2 pt-3 pb-3 bg-transparent"
          placeholder={placeholderText}
          value={searchQuery}
          onChange={handleOnChange}
        />
        {searchQuery && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-gray-400 cursor-pointer hover:text-orange-400"
            onClick={(e) => setSearchQuery("")}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </div>
      {searchQuery && (
        <div className="w-1/2  px-2 py-2 bg-orange-50">
          {searchData
            .filter((item) => {
              const query = searchQuery ? searchQuery.toLowerCase() : "";
              const itemName = item ? item.toLowerCase() : "";

              return query && itemName.includes(query);
            })
            .slice(0, 5)
            .map((item) => {
              const [itemName, itemCode] = item.split(" - ");
              return (
                <div key={item} className="flex cursor-pointer border-b-2">
                  <span className="bg-orange-300 p-4 w-auto flex justify-center items-center rounded-lg mr-3 my-2">
                    {itemCode}
                  </span>
                  <span className="flex justify-center items-center">
                    {itemName.toUpperCase()}
                  </span>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};

export default Search;
