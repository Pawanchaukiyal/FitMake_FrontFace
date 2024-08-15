import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BreakPage = ({ nextExerciseIndex }) => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          navigate(`/start/${nextExerciseIndex}`); // Navigate to the next exercise
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate, nextExerciseIndex]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="font-bold text-3xl font-mono text-red-500 mb-4">
        Take a break of 30 seconds...
      </h1>
      <p className="text-2xl font-mono text-gray-700">
        Time Left: {timeLeft} seconds
      </p>
    </div>
  );
};

export default BreakPage;
