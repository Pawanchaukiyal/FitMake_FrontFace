import React from 'react';
import { useNavigate } from 'react-router-dom';

const ExerciseCard = ({ imglink, heading, text,exerciselevel }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative bg-white p-6 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:rounded-lg">
        <div className="mx-auto">
          <img src={imglink} className="w-full h-40 sm:h-48 md:h-56 lg:h-64 rounded-lg object-cover" alt="img" />
          <div className="divide-y divide-gray-300/50 mt-4">
            <div className="space-y-4 text-base leading-7 text-gray-600">
              <h1 className='text-2xl font-bold text-center text-purple-600'>{heading}</h1>
            </div>
            <div className="pt-4 text-base flex justify-center">
            <button
              onClick={() => navigate(`/level/${exerciselevel}`)}
              className="bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-2 px-4 border border-blue-700 rounded w-full"
            >
              {text}
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExerciseCard;