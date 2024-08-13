import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import InsideStart from "./InsideStart";

const Start = () => {
  const location = useLocation();
  const { data } = location.state || {}; // Get data from location state
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSkip = () => {
    if (currentIndex + 1 < data.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      // Mark as completed or handle the end of the sequence
      console.log("All exercises completed!");
    }
  };

  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  const currentExercise = data[currentIndex];

  return (
    <div className="bg-gray-200 w-full h-screen">
      <InsideStart
        img={currentExercise.yogaImage}
        name={currentExercise.name}
        instructions={currentExercise.instructions}
        duration={10} // Duration in seconds
        onSkip={handleSkip} // Handle skip
      />
    </div>
  );
};

export default Start;
