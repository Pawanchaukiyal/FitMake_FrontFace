import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import InsideStart from "./InsideStart";
import Loader from "../components/loader/Loader";

const Start = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true); // Start with loading as true
  const [data, setData] = useState([]); // Initialize data state
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Simulate data fetching
    const fetchData = () => {
      // Simulate a delay
      setTimeout(() => {
        // Set data from location or mock data here
        setData(location.state?.data || []);
        setLoading(false); // Data is loaded, set loading to false
      }, 2000); // Adjust time as needed
    };

    fetchData();

    // Cleanup if needed
    return () => {
      // Any cleanup logic if required
    };
  }, [location.state?.data]);

  const handleSkip = () => {
    if (currentIndex + 1 < data.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      // Mark as completed or handle the end of the sequence
      console.log("All exercises completed!");
    }
  };

  if (loading) {
    return <Loader />; // Show loader while loading is true
  }

  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  const currentExercise = data[currentIndex];
  

  return (
    <div className="bg-gray-200 w-full h-screen">
      <InsideStart
        img={currentExercise.yogaImage||currentExercise.exerciseImage}
        name={currentExercise.name}
        instructions={currentExercise.instructions}
        duration={10} // Duration in seconds
        onSkip={handleSkip} // Handle skip
      />
    </div>
  );
};

export default Start;
