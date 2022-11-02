import React from "react";
import { Link } from "react-router-dom";

import "../App.css"


const NavBar = () => {

    return (
        <ul className="navbar">
                <Link className="general-button" to="/">Home</Link>
                <Link className="general-button" to="/results">Test Results</Link>
                <Link className="general-button" to="/diagnostic_images">Diagnostic Images</Link>
                <Link className="general-button"  to="/reports">Reports</Link>
                <Link className="general-button"  to="/advice">Advice</Link>
                <Link className="general-button"  to="/medication">Medication</Link>

                
        </ul>
    )

}
export default NavBar;