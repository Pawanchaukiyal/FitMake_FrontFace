// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Button = ({ data }) => {
//   console.log(data);
  
//   // Ensure data[1] exists and has the level property
//   const level = data[1] ? data[1].level : "defaultLevel";

//   return (
//     <div
//       onClick={() => navigate(`/start/${level}`)}
//       className="border-2 border-purple-600 rounded-lg px-3 py-2 text-purple-400 cursor-pointer hover:bg-purple-600 hover:text-purple-200 text-center"
//     >
//       start
//     </div>
//   );
// };

// export default Button;
import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ data }) => {
  console.log(data);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/start', { state: { data } });
  };

  return (
    <div
      onClick={handleClick}
      className="border-2 border-purple-600 rounded-lg px-3 py-2 text-purple-400 cursor-pointer hover:bg-purple-600 hover:text-purple-200 text-center"
    >
      start
    </div>
  );
};

export default Button;


