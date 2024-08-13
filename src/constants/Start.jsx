import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import InsideStart from "./InsideStart";

const Start = () => {
  const location = useLocation();
  const { data } = location.state || {}; // Get data from location state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleSkip = () => {
    if (currentIndex + 1 < data.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      setCompleted(true); // Mark as completed
    }
  };

  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  if (completed) {
    return <p>All exercises completed!</p>;
  }

  const currentExercise = data[currentIndex];

  return (
    <div className="bg-gray-200 w-full h-screen">
      <div>
        <InsideStart
          img={currentExercise.yogaImage}
          name={currentExercise.name}
          instructions={currentExercise.instructions}
          duration={10} // Duration in seconds
          onSkip={handleSkip} // Automatically handle skip
        />
      </div>
    </div>
  );
};

export default Start;
