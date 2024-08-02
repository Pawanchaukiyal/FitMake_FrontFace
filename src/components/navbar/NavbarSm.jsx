import React from 'react'
import DropDownMenu from './DropDownMenu';
import logo from "../../assets/logo.gif"
import { Link} from "react-router-dom";
const NavbarSm = () => {
  return (
   <nav className='flex justify-between items-center border-2 w-full nav_div'>
    <div className=' ml-2 img_div'>
        <img src={logo} alt="logo.gif" className='w-[145px] h-[65px]' />
    </div>
    <div className=' nav_link_div'>
        <ul className='flex justify-center items-center'>
        <li className='mr-8 p-4'>
         <Link to={'/'}>Home</Link>
        </li>

        <li>
        <Link to={'/explore'}>Explore</Link>
        </li>
        </ul>
    </div>
    <div className=' p-4 flex flex-end nav_dropdown_div'>
        <DropDownMenu/>
    </div>
   </nav>
  )
}

export default NavbarSm