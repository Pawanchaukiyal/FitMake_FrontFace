import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import InsideStart from "./InsideStart";
import Loader from "../components/loader/Loader";
import BreakPage from "../pages/BreakPage";
import { playSound } from "../../public/utils.js"
const Start = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [initialLoad, setInitialLoad] = useState(true); // To track if it's the first data load
  const [isOnBreak, setIsOnBreak] = useState(false); // State to handle break period

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setData(location.state?.data || []);
        setLoading(false);
        // playSound("start"); // Play start sound when data is first loaded
        setInitialLoad(false); // Set initial load to false after the first data load
      }, 2000);
    };

    fetchData();
  }, [location.state?.data]);

  useEffect(() => {
    if (!loading && !initialLoad) {
      playSound("whistle"); // Play whistle sound on new exercise, but not on first data load
    }
  }, [currentIndex, loading]);

  const handleSkip = () => {
    if (currentIndex + 1 < data.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setIsOnBreak(true); // Start break period
    } else {
      navigate("/complete"); // Ensure '/complete' matches the route in your router setup
    }
  };

  const handleBreakComplete = () => {
    setIsOnBreak(false); // End break period
  };

  if (loading) {
    return <Loader />;
  }

  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  if (isOnBreak) {
    return <BreakPage onBreakComplete={handleBreakComplete} />;
  }

  const currentExercise = data[currentIndex];

  return (
    <div className="w-full h-screen">
      <InsideStart
        img={currentExercise.yogaImage || currentExercise.exerciseImage}
        name={currentExercise.name}
        instructions={currentExercise.instructions}
        duration={60} // Duration in seconds
        onSkip={handleSkip} // Handle skip
        onBreak={() => setIsOnBreak(true)} // Set break period
      />
    </div>
  );
};

export default Start;
