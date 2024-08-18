import React from 'react';
import logo from '../assets/logo.gif';
import StartLoader from '../components/loader/StartLoader';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/'); // Navigate to the root route which will be redirected to HomePage for non-small screens
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center">Welcome To Fit Maker</h1>
      <h2 className="text-xl text-gray-600 mb-4 text-center">We help you to make yourself better.</h2>
      <div className="w-full max-w-xs mb-4">
        <img src={logo} alt="logo" className="w-full" />
      </div>
      <div className="mb-4">
        <StartLoader />
      </div>
      <div>
        <button 
          className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleButtonClick}
        >
          Let's go..
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
