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
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-24 text-center "
>
  Start
</div>

  );
};

export default Button;
