import React from "react";
import Carousel from "../components/carousel/Carousel";
import Layout from "../components/layout/Layout";
import Yoga from "../section/HomeSection/yoga/Yoga";
import Exercise from "../section/HomeSection/exercise/Exercise";
import BodyFocus from "../section/HomeSection/bodyfocussection/BodyFocus";

import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Carousel />
      <Yoga />
      <Exercise />
      <BodyFocus />
      <span
        className="block rounded-xl m-4 bg-[#212432] text-white text-center p-4 font-serif mb-4 font-bold text-2xl cursor-pointer "
        onClick={() => navigate("/explore")}
      >
        Click Here To Discover More
      </span>
    </Layout>
  );
};

export default HomePage;
