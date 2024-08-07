import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { server } from "../../constants/config";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.post(`${server}/api/v1/users/logout`, {}, { withCredentials: true });
      
      // Handle successful logout (e.g., clear tokens, redirect user)
      toast.success("Logout successful");

      // Example: Clear tokens from local storage (if necessary)
      // localStorage.removeItem('accessToken');
      // localStorage.removeItem('refreshToken');

      // Redirect to the login page
      navigate("/login");
    } catch (error) {
      // Handle logout errors
      toast.error(error.response?.data?.message || "Logout failed");
    }
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded-lg">
      Logout
    </button>
  );
};

export default Logout;
