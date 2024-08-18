
import React from "react";
import logo from "../../assets/logo.gif";
import { navList } from "./NavData";
import DropDownMenu from "./DropDownMenu";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useScreenSize from "./useScreenSize";

const Navbar = () => {
  const isLargeScreen = useScreenSize();

  return (
    <>
      <nav className="flex items-center justify-between px-4 py-3  shadow-lg">
        <div className="flex items-center">
        <a href="/">
        <img src={logo} alt="logo.gif" className="w-12 h-10  opacity-1" />
        </a>
        </div>

        {/* Large Screen Navbar */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-6">
          {navList.map((item, index) => (
            <Link key={index} to={item.href} className="hover:text-indigo-300 transition-colors duration-300">
              {item.label}
            </Link>
          ))}
        </div>



        {/* Small Screen Navbar */}
        <div className="flex md:hidden items-center w-full justify-between">
          <div className="nav_link_div flex-1 flex justify-center items-center">
            <Link to="/" className="hover:text-indigo-800 transition-colors duration-300 ml-auto mr-auto ">
              Home
            </Link>
            <Link to="/explore" className="hover:text-indigo-800 transition-colors duration-300 mr-auto">
              Explore
            </Link>
          </div>
          <DropDownMenu />
        </div>

        {/* Dropdown Menu for Large Screen */}
        <div className="hidden md:block">
          <DropDownMenu />
        </div>
      </nav>

      {/* Render ToastContainer only on large screens */}
      {isLargeScreen && <ToastContainer />}
    </>
  );
};

export default Navbar;
