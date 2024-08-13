import React, { useState, useEffect } from "react";
import play from "../section/common/play.svg";
import skip from "../section/common/skip.svg";
import pause from "../section/common/pause.svg";

const InsideStart = ({ img, instructions, name, onSkip, duration = 10 }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true); // Start playing by default

  useEffect(() => {
    let timer;
    let progressInterval;

    if (isPlaying && timeLeft > 0) {
      // Timer to count down seconds
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      // Interval to update progress bar
      progressInterval = setInterval(() => {
        setProgress((prevProgress) => prevProgress + (100 / duration));
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(timer);
      clearInterval(progressInterval);
      onSkip(); // Automatically skip to the next exercise when time ends
    }

    return () => {
      clearInterval(timer);
      clearInterval(progressInterval);
    };
  }, [isPlaying, timeLeft, duration, onSkip]);

  useEffect(() => {
    // Reset timeLeft and progress when a new exercise starts
    setTimeLeft(duration);
    setProgress(0);
  }, [duration]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col items-center p-4 md:p-6 lg:p-8 w-screen h-screen bg-blue-400">
      {/* Image Container */}
      <div className="w-full h-full rounded-lg sm:w-10 sm:h-10 md:w-15 md:h-15 lg:w-20 lg:h-20 bg-yellow-200 flex items-center justify-center mb-4 mt-10">
        <img className="w-24 h-20 object-contain" src={img} alt={name} />
      </div>
      
      {/* Name of the Exercise */}
      <p className="text-lg font-semibold mb-2 text-center">{name}</p>
      
      {/* Instructions Container */}
      <div className="border-2 h-72 border-gray-300 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-700">{instructions}</p>
      </div>
      
      {/* Slider */}
      <div className="w-full max-w-lg bg-gray-200 rounded-full h-2.5 mb-4">
        <div
          className="bg-green-500 h-2.5 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="flex space-x-4">
        <img
          className="w-8 h-8 md:w-10 md:h-10 bg-yellow-200 p-2 rounded-full cursor-pointer"
          src={isPlaying ? pause : play}
          alt="Play/Pause"
          onClick={handlePlayPause}
        />
        <img
          className="w-8 h-8 md:w-10 md:h-10 bg-yellow-200 p-2 rounded-full cursor-pointer"
          src={skip}
          alt="Skip"
          onClick={onSkip} // Trigger onSkip directly
        />
      </div>
      
      {/* Display Time Left */}
      <p className="mt-4 text-lg font-semibold text-gray-700">
        Time Left: {timeLeft} seconds
      </p>
    </div>
  );
};

export default InsideStart;
