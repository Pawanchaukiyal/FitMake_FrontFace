import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import InsideStart from "./InsideStart";
import Loader from "../components/loader/Loader";
import BreakPage from "../pages/BreakPage";
import { playSound } from "../../public/utils.js";

const Start = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [initialLoad, setInitialLoad] = useState(true);
  const [isOnBreak, setIsOnBreak] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setData(location.state?.data || []);
        setLoading(false);
        setInitialLoad(false);
      }, 2000);
    };

    fetchData();
  }, [location.state?.data]);

  useEffect(() => {
    if (!loading && !initialLoad) {
      playSound("whistle");
    }
  }, [currentIndex, loading]);

  const handleSkip = () => {
    if (currentIndex + 1 < data.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setIsOnBreak(true);
    } else {
      navigate("/complete");
    }
  };

  const handleSkipBreak = () => {
    setIsOnBreak(false);
  };

  if (loading) {
    return <Loader />;
  }

  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  if (isOnBreak) {
    return (
      <BreakPage 
        onSkipBreak={handleSkipBreak} 
      />
    );
  }

  const currentExercise = data[currentIndex];

  return (
    <div className="w-full h-screen">
      <InsideStart
        img={currentExercise.yogaImage || currentExercise.exerciseImage}
        name={currentExercise.name}
        instructions={currentExercise.instructions}
        duration={60}
        onSkip={handleSkip}
        onBreak={() => setIsOnBreak(true)}
      />
    </div>
  );
};

export default Start;
