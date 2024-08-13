import React from 'react';
import { bodyfocusdata } from './bodyfocusdata';
import BodyFocusCard from '../../../components/cards/bodyfocuscard/BodyFocusCard';

const BodyFocus = () => {
  return (
    <>
      <h1 className="text-center mt-7 font-bold text-2xl">Body Focus</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 gap-y-6 mt-5 px-4 mb-10">
      {bodyfocusdata.map((item, index) => {
          return (
            <BodyFocusCard
              key={index}
              imglink={item.imglink}
              text={item.text}
            />
          );
        })}
      </div>
    </>
  );
};

export default BodyFocus;
