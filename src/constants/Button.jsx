import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/start', { state: { data } }); // Pass data to Start component
  };

  return (
    <div
      onClick={handleClick}
      className="border-2 border-purple-600 rounded-lg px-3 py-2 text-purple-400 cursor-pointer hover:bg-purple-600 hover:text-purple-200 text-center"
    >
      Start
    </div>
  );
};

export default Button;
