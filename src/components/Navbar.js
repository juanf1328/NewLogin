import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
 
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
           <Nav>
            
            <Bars />

            <NavMenu>
                <NavLink to="/" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/Signup" activeStyle>
                    Sign Up
                </NavLink>
                <NavLink to="/Login" activeStyle>
                    Login
                </NavLink>
               
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;