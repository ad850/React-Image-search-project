import React from 'react';
import { NavLink } from 'react-router-dom';
import './Index.css'

const Navbar = () => {


    return (<>



        <div id="container">


            <div id="nav">


                <NavLink to="/" activeClassName="One">Home</NavLink>
                <NavLink to="/User/aditya/sharma" activeClassName="One">User</NavLink>
                <NavLink to="/Contact" activeClassName="One">Contact</NavLink>
                <NavLink to="/AboutUs" activeClassName="One">AboutUs</NavLink>
                <NavLink to="/Search" activeClassName="One">Search</NavLink>

            </div>
        </div>
    </>)
}

export default Navbar;