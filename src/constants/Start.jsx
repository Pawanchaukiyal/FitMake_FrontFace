import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import InsideStart from "./InsideStart";

const Start = () => {
  const location = useLocation();
  const { data } = location.state || {}; // Get data from location state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (data && data.length > 0 && !completed) {
      const timer = setInterval(() => {
        handleSkip();
      }, 10000); // 10 seconds

      return () => clearInterval(timer);
    }
  }, [data, completed]);

  const handleSkip = () => {
    if (currentIndex + 1 >= data.length) {
      setCompleted(true);
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
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
    <div>
      <p>Next exercise in: 10 seconds</p>
      <InsideStart
        img={currentExercise.yogaImage}
        name={currentExercise.name}
        instructions={currentExercise.instructions}
        onSkip={handleSkip}
      />
    </div>
  );
};

export default Start;
