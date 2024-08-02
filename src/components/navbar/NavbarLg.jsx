import React from 'react';
import logo from "../../assets/logo.gif";
import { navList } from "./NavData";
import DropDownMenu from './DropDownMenu';

const NavbarLg = () => {
  return (
    <nav className='main_div flex justify-between items-center px-4 md:px-8 lg:px-16 py-2'>
      <div className='logo'>
        <img src={logo} alt="logo.gif" className='w-28 h-28 object-fill' />
      </div>

      <div className='nav_list flex-1 flex justify-center items-center '>
        {navList}
      </div>

      <div className='drop_menu mr-4 p-5'>
        <DropDownMenu />
      </div>
    </nav>
  );
}

export default NavbarLg;
