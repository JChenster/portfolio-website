import React from "react";
import {SocialIcon} from "react-social-icons";
import "./Footer.css"

const Footer = () =>{
    return(
        <div class="social-container">
            <SocialIcon url="mailto:jeffrey.chen@yale.edu" target="_blank" bgColor="#ea4335"/>
            <SocialIcon url="https://github.com/JChenster" target="_blank"/>
            <SocialIcon url="https://www.linkedin.com/in/jeffrey-z-chen" target="_blank"/>
        </div>
    );
};

export default Footer;