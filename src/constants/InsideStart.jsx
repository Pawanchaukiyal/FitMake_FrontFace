import React from "react";
import play from "../section/common/play.svg";
import skip from "../section/common/skip.svg";

const InsideStart = ({ img, instructions, name, onSkip }) => {
  return (
    <div className="flex flex-col items-center p-4 md:p-6 lg:p-8 bg-white rounded-lg shadow-lg max-w-sm mx-auto">
      <div className="w-34 h-34 md:w-32 md:h-32 bg-yellow-200  flex items-center justify-center mb-4">
        <img
          className="w-24 h-20 md:w-28 md:h-28 object-cover"
          src="https://i.pinimg.com/originals/e0/d6/2e/e0d62e32eba3542552e83bdea5ff95e8.gif"
          alt={name}
        />
      </div>
      <p className="text-lg font-semibold mb-2 text-center">{name}</p>
      <div className="border-2 border-gray-300 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-700">{instructions}</p>
      </div>
      <div className="flex space-x-4">
        <img
          className="w-8 h-8 md:w-10 md:h-10 bg-yellow-200 p-2 rounded-full"
          src={play}
          alt="Play"
        />
        <img
          className="w-8 h-8 md:w-10 md:h-10 bg-yellow-200 p-2 rounded-full cursor-pointer"
          src={skip}
          alt="Skip"
          onClick={onSkip}
        />
      </div>
    </div>
  );
};

export default InsideStart;
