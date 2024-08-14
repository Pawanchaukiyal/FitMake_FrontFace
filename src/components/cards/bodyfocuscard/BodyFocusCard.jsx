import React from 'react';
import { useNavigate } from 'react-router-dom';

const BodyFocusCard = ({ imglink, text }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/exerciseaot/${text.toLowerCase()}`); // Assuming your route structure matches this
  };
  return (
    <div 
    onClick={handleClick}
    className="main_div border-2 rounded-[16px] text-center mt-[20px] flex flex-col md:flex-row justify-between items-center gradient__bg p-4 md:p-2 cursor-pointer">
      <div className="w-[150px] h-[130px] overflow-hidden rounded-full mx-auto md:mx-0 bg-slate-500">
        <img src={imglink} alt="user-image" className="w-full h-full object-cover" />
      </div>
      <div className="card-info pb-[20px] flex-1 flex justify-center items-center mt-4 md:mt-0">
        <h2 className="font-bold text-4xl text-white hover:underline hover:text-yellow-300 text-center">{text}</h2>
      </div>
    </div>
  );
};

export default BodyFocusCard;
