import React from 'react';

const BodyFocusCard = ({ img_link, text }) => {
  return (
    <div className="main_div border-2 rounded-[16px] text-center mt-[60px] flex flex-col md:flex-row justify-between items-center gradient__bg p-4 md:p-8">
      <div className="w-[180px] h-[180px] overflow-hidden rounded-full mx-auto md:mx-0 bg-slate-500">
        <img src={img_link} alt="user-image" className="w-full h-full object-cover" />
      </div>
      <div className="card-info pb-[20px] flex-1 flex justify-center items-center mt-4 md:mt-0">
        <h2 className="font-bold text-4xl text-white text-center">{text}</h2>
      </div>
    </div>
  );
};

export default BodyFocusCard;
