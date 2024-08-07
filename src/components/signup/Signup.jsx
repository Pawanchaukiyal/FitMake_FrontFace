import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signupUser } from "../../redux/reducers/authSlice";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    username: "",
    age: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // toast.dismiss(); 
    try {
      await dispatch(signupUser(formData)).unwrap();
      toast.success("User registered successfully!");
    } catch (error) {
      toast.error("Error registering user. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen dark:bg-gray-900">
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-2 sm:p-2 md:p-2 lg:p-2 w-full max-w-lg">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold dark:text-gray-400 text-center mb-6">
            Sign Up
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block mb-2 dark:text-gray-400">Full Name</label>
              <input
                id="fullName"
                type="text"
                placeholder="Full Name"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 dark:text-gray-400">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 dark:text-gray-400">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700"
              />
            </div>
            <div>
              <label htmlFor="username" className="block mb-2 dark:text-gray-400">Username</label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                required
                value={formData.username}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700"
              />
            </div>
            <div>
              <label htmlFor="age" className="block mb-2 dark:text-gray-400">Age</label>
              <input
                id="age"
                type="number"
                placeholder="Age"
                required
                value={formData.age}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700"
              />
            </div>
            <div>
              <label htmlFor="gender" className="block mb-2 dark:text-gray-400">Gender</label>
              <select
                id="gender"
                required
                value={formData.gender}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700"
              >
                <option value="" disabled>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-lg mt-4 hover:from-purple-500 hover:to-blue-500 transition duration-300"
            >
              Sign Up
            </button>
          </form>
          <div className="text-center mt-4 text-sm dark:text-gray-300">
            Already have an account?
            <a
              className="text-blue-400 hover:underline ml-1"
              href="/login"
            >
              Login..?
            </a>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
