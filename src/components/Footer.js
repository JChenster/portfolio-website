import React from "react";
import {SocialIcon} from "react-social-icons";
import "./Footer.css"

const Footer = () =>{
    return(
        <div class="social-container">
            <SocialIcon url="https://github.com/JChenster"/>
            <SocialIcon url="https://www.linkedin.com/in/jeffrey-z-chen"/>
        </div>
    );
};

export default Footer;