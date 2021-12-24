import React, {useState} from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container"></div>
                    <Link to="/" className="navbar-logo">
                        TRVL <i className="fab fa-typo3" />
                    </Link>
            </nav>
        </>
    )
}

export default Navbar;