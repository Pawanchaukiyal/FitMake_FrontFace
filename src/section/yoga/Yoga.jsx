import React from "react";
import YogaCard from "../../components/cards/yogacard1/YogaCard";
import { yogdata } from "../yoga/YogaData";
import { useNavigate } from "react-router-dom";

const Yoga = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="text-center font-bold text-2xl mt-4">
        Perform Yoga to the level
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5">
        {yogdata.map((item, index) => {
          return (
            <YogaCard
              key={index}
              heading={item.heading}
              imglink={item.imglink}
              level={item.level}
              text={item.text}
            />
          );
        })}
      </div>
    </>
  );
};

export default Yoga;
