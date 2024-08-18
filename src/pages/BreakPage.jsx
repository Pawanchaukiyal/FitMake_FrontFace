import React, { useState, useEffect } from "react";

const BreakPage = ({ onSkipBreak }) => {
  const [breakTime, setBreakTime] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setBreakTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (breakTime === 0) {
      onSkipBreak(); // Trigger the skip break action when break time is over
    }
  }, [breakTime, onSkipBreak]);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-lg font-semibold">Take a 30-second break!</p>
        <p className="text-lg font-semibold mt-4">Break Time: {breakTime} seconds</p>
        <button
          onClick={onSkipBreak}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mt-4"
        >
          Skip Break
        </button>
      </div>
    </div>
  );
};

export default BreakPage;
