import React from 'react';
import { bodyfocusdata } from './bodyfocusdata';
import BodyFocusCard from '../../../components/cards/bodyfocuscard/BodyFocusCard';

const BodyFocus = () => {
  return (
    <>
      <h1 className="text-center font-medium font-mono text-2xl  mt-5 md:mt-8">
        Body Focus
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-2 mt-2">
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
