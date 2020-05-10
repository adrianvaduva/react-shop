import React from 'react';
import {Link} from "react-router-dom";
import logo from '../assets/images/logo.png'
import './Header.css'
import '../utils/utility-classes.css'

function Header() {
    return (
        <div
            className="header container-fluid container-min-max-width d-flex justify-content-between align-items-center border-bottom">
            <Link to="/">
                <img src={logo} alt="logo"/>
            </Link>
            <Link to="/login">
                Login
            </Link>
        </div>
    );
}

export default Header;