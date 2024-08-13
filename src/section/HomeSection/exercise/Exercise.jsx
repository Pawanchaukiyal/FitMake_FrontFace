import React from "react";
import { Exercisedata } from "./ExerciseData";
import Card1 from "../../../components/cards/Card1";

const Exercise = () => {
  return (
    <>
      <h1 className="text-center font-bold text-2xl mt-4">
        Perform Yoga to the level
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5">
        {Exercisedata.map((item, index) => {
          return (
            <Card1
              key={index}
              heading={item.heading}
              imglink={item.imglink}
              exerciselevel={item.level}
              text={item.text}
              description={item.description}
            />
          );
        })}
      </div>
    </>
  );
};

export default Exercise;
