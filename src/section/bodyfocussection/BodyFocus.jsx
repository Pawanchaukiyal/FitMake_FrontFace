import React from 'react';
import BodyFocusCard from '../../components/cards/bodyfocuscard/BodyFocus';
import gym from './gym.png';
import abs from './abs.png';
import shoulder from './shoulder.png';
import leg from './leg.png';
import back from './back.png';
import abdomen from './abdomen.png';

const BodyFocus = () => {
  return (
    <>
      <h1 className="text-center mt-7 font-bold text-2xl">Body Focus</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 gap-y-6 mt-5 px-4 mb-10">
        <BodyFocusCard img_link={gym} text={"Chest"} />
        <BodyFocusCard img_link={abs} text={"Abs"} />
        <BodyFocusCard img_link={shoulder} text={"Shoulder"} />
        <BodyFocusCard img_link={leg} text={"Leg"} />
        <BodyFocusCard img_link={back} text={"Back"} />
        <BodyFocusCard img_link={abdomen} text={"Belly"} />
      </div>
    </>
  );
};

export default BodyFocus;
