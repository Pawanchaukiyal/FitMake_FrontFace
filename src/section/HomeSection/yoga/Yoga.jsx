import React from "react";
import { yogdata } from "../yoga/YogaData";
import Card1 from "../../../components/cards/Card1";

const Yoga = () => {
  return (
    <>
      <h1 className="text-center font-medium font-mono text-2xl  mt-5 md:mt-8">
        Perform Yoga to the level
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5">
        {yogdata.map((item, index) => {
          return (
            <Card1
              key={index}
              heading={item.heading}
              imglink={item.imglink}
              value={item.level}
              text={item.text}
              description={item.description}
            />
          );
        })}
      </div>
    </>
  );
};

export default Yoga;
