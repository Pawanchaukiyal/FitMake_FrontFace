import { Link} from "react-router-dom";
import React from "react";
    // navList Data


   export const navList = (
    
        <ul className="flex gap-5 font-medium">
            {/* Home */}
            <li>
                <Link to={'/'}>Home</Link>
            </li>

            <li>
                <Link to={'/explore'}>Explore</Link>
            </li>

            {/* Signup */}
            <li>
                <Link to={'/signup'}>Signup</Link>
            </li> 

            {/* Signup */}
            <li>
                <Link to={'/login'}>Login</Link>
            </li> 

            {/* User */}
     
                {/* <Link to={'/user-dashboard'}>User</Link> */}
   

            {/* Admin */}

                {/* <Link to={'/admin-dashboard'}>Admin</Link> */}


            {/* logout */}
          <li className=" cursor-pointer" >
              <Link to={'/logout'}>
              Logout
              </Link>
            </li>

            {/* Cart
            <li>
                <Link to={'/cart'}>
                    Cart
                </Link>
            </li> */}
        </ul>
    )



