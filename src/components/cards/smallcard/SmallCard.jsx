
import React from "react";

const SmallCard = ({ data }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg md:hover:shadow-yellow-400 transition-shadow duration-300 mb-4">
      <div className="flex flex-row items-center">
        {/* Popup effect */}
        <div className="relative group">
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity duration-300 flex items-center justify-center text-white text-sm font-semibold p-2 rounded-lg">
            {data.level} 
          </div>
          <div className="w-28 h-24 sm:w-56 sm:h-40 overflow-hidden rounded-lg">
            <img
              className="w-full h-full object-cover"
              src={data.img}  
              alt={data.name} 
            />
          </div>
        </div>
        <div className="m-auto ml-auto text-center sm:text-left">
          <p className="text-lg font-semibold font-mono">{data.name}</p>
          <p className="text-sm text-gray-700 mt-1 font-mono">{data.level}</p>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;

