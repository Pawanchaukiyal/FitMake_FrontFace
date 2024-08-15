import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import InsideStart from "./InsideStart";
import Loader from "../components/loader/Loader";
import CompletePage from "../pages/CompletePage";

const Start = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize the navigate function
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setData(location.state?.data || []);
        setLoading(false);
      }, 2000);
    };

    fetchData();

    return () => {
      // Cleanup if needed
    };
  }, [location.state?.data]);

  const handleSkip = () => {
    if (currentIndex + 1 < data.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      // Redirect to CompletePage when all exercises are completed
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
