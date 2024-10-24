import React from "react";
import './header.css'
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="header">
            <Link to="/" className="header-title">FITBOT</Link>
            <ul className="header-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tracker">Tracker</Link></li>
                <li><Link to="/community">Community</Link></li>
                <li><Link to="/chatbot">Chatbot</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </div>
    )
}

export default Header