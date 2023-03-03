import React from 'react';
import './Navbar.css';
import logo from '../assets/Swasthey.jpg';
import Slider from 'react-slick';


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="Logo" />
                
            </div>
            <ul className="nav-links">
                <li>
                    <div className="nav-link">
                        Home
                    </div>
                </li>
                <li>
                    <div className="nav-link">
                        About
                    </div>
                </li>
                <li>
                    <div className="nav-link">
                        Services
                    </div>
                </li>
                <li>
                    <div className="nav-link">
                        Contact
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
