import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import InsideStart from "./InsideStart";
import Loader from "../components/loader/Loader";
import { playSound } from "../../public/utils";
import BreakPage from "../pages/BreakPage";
 // Adjust path if necessary

const Start = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [initialLoad, setInitialLoad] = useState(true); // To track if it's the first data load

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setData(location.state?.data || []);
        setLoading(false);
        playSound('start'); // Play start sound when data is first loaded
        setInitialLoad(false); // Set initial load to false after the first data load
      }, 2000);
    };

    fetchData();
  }, [location.state?.data]);

  useEffect(() => {
    if (!loading && !initialLoad) {
      playSound('whistle'); // Play whistle sound on new exercise, but not on first data load
    }
  }, [currentIndex, loading]);

  const handleSkip = () => {
    if (currentIndex + 1 < data.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      navigate('/complete'); // Ensure '/complete' matches the route in your router setup
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  const currentExercise = data[currentIndex];

  return (
    <div className="bg-gray-200 w-full h-screen">
      <InsideStart
        img={currentExercise.yogaImage || currentExercise.exerciseImage}
        name={currentExercise.name}
        instructions={currentExercise.instructions}
        duration={60} // Duration in seconds
        onSkip={handleSkip} // Handle skip
      />
    </div>
  );
};

export default Start;
