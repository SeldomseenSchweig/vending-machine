import React from "react";
import {NavLink } from "react-router-dom";

const NavBar = () => {

    return (
        <nav>

        <NavLink exact to='/'> VendingMachine</NavLink> |
        <NavLink exact to='/Cookies'> Cookies</NavLink> |
        <NavLink exact to='/Chips'> Chips</NavLink> |
        <NavLink exact to='/Chocolate'> Chocolate</NavLink>
    
        </nav>


    )

}

export default NavBar;