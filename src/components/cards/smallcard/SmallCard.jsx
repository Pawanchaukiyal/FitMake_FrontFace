import React from "react";

const SmallCard = ({ data }) => {
  return (
    <div className="relative group bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg p-5 transition-transform transform hover:scale-105">
      <div className="relative bg-white p-6 rounded-lg shadow-lg overflow-hidden flex  items-center">
        {/* Popup effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-80 transition-opacity duration-500 rounded-lg"></div>

        <div className="flex flex-col items-center space-y-2 mt-4 relative z-10 md:mr-8 ">
          <img
            className="w-[90px] h-[60px] object-cover border-2 border-purple-600"
            src={data.img}
            alt={data.name}
          />
        </div>
        <div className="text-center mt-4 flex flex-col items-center justify-center space-y-2 relative z-10">
          <p className="text-md md:text-2xl lg:text-3xl font-bold text-slate-800">
            {data.name}
          </p>
          <p className="text-md md:text-xl lg:text-2xl text-slate-600 uppercase">
            {data.level}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
