
import React from 'react';
import { useNavigate } from 'react-router-dom';

const EquipmentCard = () => {
  const navigate = useNavigate();
  const handleClick = () => {
      navigate('/equip/{equip}');
  };
  return (
    <div className="relative bg-white p-6 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:rounded-lg min-w-[300px] md:min-w-[350px] lg:min-w-[400px]">
      <div className="mx-auto">
        <img src="https://i.etsystatic.com/19837560/r/il/378e3d/2260593265/il_fullxfull.2260593265_ed9x.jpg" className="w-full h-40 sm:h-48 md:h-56 lg:h-64 rounded-lg object-cover" alt="img" />
        <div className="divide-y divide-gray-300/50 mt-4">
          <div className="space-y-4 text-base leading-7 text-gray-600">
            <h1 className='text-2xl font-bold text-center text-purple-600'>Let's do exercises with some equipment.</h1>
          </div>
          <div className="pt-4 text-base flex justify-center">
            <button onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-2 px-4 border border-blue-700 rounded w-full">
              Go with Equipment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentCard;
