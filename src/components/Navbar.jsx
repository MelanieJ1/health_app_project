import React from "react";
import { Link } from "react-router-dom";

import "../App.css"


const NavBar = () => {

    return (
        <ul className="navbar">
                <Link className="general-button" to="/">Home</Link>
                <Link className="general-button" to="/results">Test Results</Link>
                <Link className="general-button" to="/images">Diagnostic Images</Link>
                <Link className="general-button"  to="/reports">Reports</Link>
                <Link className="general-button"  to="/advice">Advice</Link>
                <Link className="general-button"  to="/medications">Medication</Link>
                <Link className="general-button"  to="/supplements">Supplements</Link>

                
        </ul>
    )

}
export default NavBar;