import React from "react";
import "./NavBar.css";
import { Link, animateScroll as scroll } from "react-scroll";

const NavBar = () => {
    return (
        <nav className="nav" id="navbar">
            <div className="nav-content">
                <ul className="nav-items">
                    <li className="nav-item">
                        <Link activeClass="active" to="intro-container" spy={true} smooth={true} offset={-50} duration={500}>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link activeClass="active" to="edu-container" spy={true} smooth={true} offset={-50} duration={500}>
                            Education
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link activeClass="active" to="exp-container" spy={true} smooth={true} offset={-50} duration={500}>
                            Experience
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link activeClass="active" to="exp-container" spy={true} smooth={true} offset={-50} duration={500}>
                            Extracirriculars
                        </Link>
                    </li>
                    <li className="nav-item">Projects</li>
                    <li className="nav-item">Skills</li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;