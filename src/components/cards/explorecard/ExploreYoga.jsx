import React from 'react';
import { useNavigate } from 'react-router-dom';

const ExploreYoga = ({ imglink, heading, value }) => {
  const navigate = useNavigate();

  const handleClick = () => {
      navigate(`/yogaaot/${value}`);
  };

  return (
    <div className="relative p-4 shadow-xl ring-1 ring-gray-900/10 rounded-lg sm:mx-auto sm:rounded-lg bg-gray-100 transition-transform transform hover:scale-105
    min-w-[250px] md:min-w-[300px] lg:min-w-[350px] 
    sm:mb-4 sm:mr-4 mr-6 flex-shrink-0">
      <div className="mx-auto">
        <img src={imglink} className="w-full h-40 sm:h-48 md:h-56 lg:h-64 rounded-lg object-cover" alt="img" />
        <div className="divide-y divide-gray-300/50 mt-4">
          <div className="space-y-4 text-base leading-7 text-gray-600">
            <h1 className='text-2xl font-bold text-center text-purple-600'>{heading}</h1>
          </div>
          <div className="pt-4 text-base flex justify-center">
            <button 
              onClick={handleClick}
              className="bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-2 px-4 border border-blue-700 rounded w-full">
              Click it..
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreYoga;
