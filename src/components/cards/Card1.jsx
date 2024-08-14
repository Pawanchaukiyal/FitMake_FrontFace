// This card1 takes the value from yoga and exercises on the base of level.
// Redirect common 
// value receive from yoga and exercise.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Card1 = ({ imglink, heading, text, value, exerciselevel, description }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (exerciselevel) {
      navigate(`/exerciselevel/${exerciselevel}`);
    } else {
      navigate(`yogalevel/${value}`);
    }
  };

  return (
    <div className="relative bg-white p-4 shadow-xl ring-1 ring-gray-900/5 sm:rounded-lg sm:max-w-lg sm:mx-auto lg:max-w-xl xl:max-w-2xl ">
      <div className="w-full">
        <img
          src={imglink}
          className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 rounded-lg sm:object-cover"
          alt={heading}
        />
        <div className="divide-y divide-gray-300/50 mt-4">
          <div className="space-y-4 text-base leading-7 text-gray-600">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-purple-600">
              {heading}
            </h1>
          </div>
          <div className="pt-4 text-base flex justify-center">
            <button
              onClick={handleNavigation}
              className="bg-blue-500 hover:bg-blue-700 text-white text-lg sm:text-xl font-bold py-2 px-4 border border-blue-700 rounded w-full"
            >
              {text}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;

