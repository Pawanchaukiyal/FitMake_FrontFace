import React from "react";
import play from "../section/common/play.svg";
import skip from "../section/common/skip.svg";

const InsideStart = ({ img, instructions, name, onSkip }) => {
  return (
    <div className="flex flex-col items-center p-4 md:p-6 lg:p-8 w-screen h-screen bg-blue-400">
      {/* Image Container */}
      <div className="flex items-center justify-center mb-4 mt-10 bg-yellow-200 rounded-lg">
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64">
          <img
            className="w-full h-full object-contain"
            src={img}
            alt={name}
          />
        </div>
      </div>
      
      {/* Name of the Yoga Pose */}
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-center">
        {name}
      </p>

      {/* Instructions Container */}
      <div className="border-2 border-gray-300 p-4 rounded-lg mb-4 w-full max-w-lg lg:max-w-xl">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">
          {instructions}
        </p>
      </div>

      {/* Play and Skip Buttons */}
      <div className="flex space-x-4">
        <img
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-yellow-200 p-2 rounded-full"
          src={play}
          alt="Play"
        />
        <img
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-yellow-200 p-2 rounded-full cursor-pointer"
          src={skip}
          alt="Skip"
          onClick={onSkip}
        />
      </div>
    </div>
  );
};

export default InsideStart;
