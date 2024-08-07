import React from "react";
import play from "../section/common/play.svg";
import skip from "../section/common/skip.svg";

const InsideStart = ({ img, instructions, name, onSkip }) => {
  return (
    <>
      <div>
        <div className="">
          <img className="w-8 h-8 bg-yellow-200" src={img} alt=""></img>
        </div>
        <p>{name}</p>
        <div className="border-2">
          <p>{instructions}</p>
        </div>
        <img className="w-8 h-8 bg-yellow-200" src={play} alt=""></img>
        <img
          className="w-8 h-8 bg-yellow-200 cursor-pointer"
          src={skip}
          alt=""
          onClick={onSkip}
        ></img>
      </div>
    </>
  );
};

export default InsideStart;
