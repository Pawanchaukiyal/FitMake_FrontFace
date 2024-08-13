import React from "react";
import logo from "../../assets/logo.gif";
import { navList } from "./NavData";
import DropDownMenu from "./DropDownMenu";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useScreenSize from "./useScreenSize"; // Import the custom hook

const Navbar = () => {
  const isLargeScreen = useScreenSize(); // Determine if the screen is large

  return (
    <>
      <nav className="main_div flex justify-between items-center px-4 md:px-8 lg:px-16 py-2">
        <div className="logo">
          <img
            src={logo}
            alt="logo.gif"
            className="w-28 h-28 object-fill md:w-[145px] md:h-[65px]"
          />
        </div>

        {/* Large Screen Navbar */}
        <div className="hidden md:flex flex-1 justify-center items-center">
          {navList}
        </div>

        {/* Small Screen Navbar */}
        <div className="flex md:hidden justify-between items-center w-full">
          <div className="nav_link_div flex-1 flex justify-center items-center">
            <ul className="flex justify-center items-center">
              <li className="mr-8 p-4">
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/explore"}>Explore</Link>
              </li>
            </ul>
          </div>
          <div className="p-4 flex-end">
            <DropDownMenu />
          </div>
        </div>

        {/* Dropdown Menu for Large Screen */}
        <div className="hidden md:block mr-4 p-5">
          <DropDownMenu />
        </div>
      </nav>

      {/* Render ToastContainer only on large screens */}
      {isLargeScreen && <ToastContainer />}
    </>
  );
};

export default Navbar;
