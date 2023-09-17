import React from "react";
import { Link } from "react-scroll";

const NavBar = () => {
    return (
        <nav className="nav container" id="navbar">
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
                        <Link activeClass="active" to="exp-container" spy={true} smooth={true} offset={-50} duration={750}>
                            Experience
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link activeClass="active" to="proj-container" spy={true} smooth={true} offset={-50} duration={750}>
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link activeClass="active" to="skills-container" spy={true} smooth={true} offset={-50} duration={1000}>
                            Skills
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
