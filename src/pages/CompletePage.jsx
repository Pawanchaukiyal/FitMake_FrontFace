import React from 'react';
import { useNavigate } from 'react-router-dom';

const CompletePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div
      className="main-div h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605296867724-fa87a8ef53fd')" }}
    >
      <div className="text-center p-4  bg-opacity-75 rounded-lg shadow-lg absolute bottom-20">
        <h1 className="font-mono text-2xl text-white mb-4">Hurray You Completed the Exercise....</h1>
        <div>
          <button
            onClick={handleClick}
            className="w-24 rounded-full bg-blue-400 px-4 py-2 text-center font-bold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompletePage;
