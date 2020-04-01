import React from 'react';
import {Link} from "react-router-dom";

function Header() {
    return(
        <div className="header d-flex justify-content-between align-items-center border-bottom">
           <Link to="/">
               Logo
           </Link>
            <Link to="/login">
                Login
            </Link>
        </div>
    );
}

export default Header;