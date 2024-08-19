import React, { useState, useEffect } from "react";
import play from "../section/common/play.svg";
import skip from "../section/common/skip.svg";
import pause from "../section/common/pause.svg";
import Loader from "../components/loader/Loader";
import { playSound } from "../../public/utils.js";

const InsideStart = ({ img, instructions, name, onSkip, duration = 10, onBreak }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = () => {
      setTimeout(() => {
        setLoading(false); // Set loading to false after data is "loaded"
        // playSound("start"); // Play start sound
      }, 2000);
    };

    loadData();
  }, []);

  useEffect(() => {
    setTimeLeft(duration);
    setProgress(0);
    setIsPlaying(true);
  }, [img, duration]);

  useEffect(() => {
    let timer;
    let progressInterval;

    if (isPlaying && !loading) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            clearInterval(progressInterval);
            // Use a timeout to avoid updating state directly during rendering
            setTimeout(() => {
              onBreak(); // Start the break period
            }, 0);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      progressInterval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prevProgress + 100 / duration;
        });
      }, 1000);
    }

    return () => {
      clearInterval(timer);
      clearInterval(progressInterval);
    };
  }, [isPlaying, duration, loading]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSkipInternal = () => {
    setTimeLeft(duration);
    setProgress(0);
    setIsPlaying(false);
    // Use a timeout to avoid updating state directly during rendering
    setTimeout(() => {
      onSkip();
      playSound("whistle"); // Play skip sound
    }, 0);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col items-center p-4 md:p-6 lg:p-8 w-screen h-screen overflow-hidden">
      <div className="mt-12  max-w-[90%] sm:max-w-[70%] md:max-w-[50%] lg:max-w-[40%] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden  hover:scale-105 transform transition-transform duration-300 shadow-lg img_div">
        <img className="w-full h-full object-contain  rounded-md" src={img} alt={name} />
      </div>

      <p className="text-lg font-semibold font-mono mt-4 mb-4 underline text-center">
        {name}
      </p>

      <div className="border-2 h-72 border-gray-300 p-8 rounded-lg mb-7 overflow-y-auto box-border inst_div">
        <p className="text-lg sm:text-2xl font-mono font-bold">
          {instructions}
        </p>
      </div>

      <div className="w-full max-w-lg bg-gray-200 rounded-full h-2.5 mb-4">
        <div
          className="bg-green-500 h-2.5 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex space-x-4">
        <img
          className="w-10 h-10 md:w-10 md:h-10 bg-yellow-200 p-2 rounded-full cursor-pointer"
          src={isPlaying ? pause : play}
          alt="Play/Pause"
          onClick={handlePlayPause}
        />
        <img
          className="w-10 h-10 md:w-10 md:h-10 bg-yellow-200 p-2 rounded-full cursor-pointer"
          src={skip}
          alt="Skip"
          onClick={handleSkipInternal}
        />
      </div>

      <p
        className={`mt-4 text-lg font-semibold p_time ${
          timeLeft < 20 ? "text-red-500" : ""
        }`}
      >
        Time Left: {timeLeft} seconds
      </p>
    </div>
  );
};

export default InsideStart;
