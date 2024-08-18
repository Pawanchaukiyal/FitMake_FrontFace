import React, { useState, useEffect } from "react";

const BreakPage = ({ onBreakComplete }) => {
  const [breakTime, setBreakTime] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setBreakTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          onBreakComplete(); // Notify when break is complete
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onBreakComplete]);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-lg font-semibold">Take a 30-second break!</p>
        <p className="text-lg font-semibold mt-4">Break Time: {breakTime} seconds</p>
      </div>
    </div>
  );
};

export default BreakPage;
