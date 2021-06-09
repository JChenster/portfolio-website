import React from "react";
import "./Intro.css";
import pfp from "../images/pfp.jpg"
import {SocialIcon} from "react-social-icons"
import reactDom from "react-dom";

const Intro = () => {
    const about = `Hi there, welcome to my website!
                    I'm Jeffrey, a student at Yale College from Brooklyn, NYC. 
                    I'm studying Computer Science and Economics. 
                    Some of my interests include software engineering, AI/ML, data science, investing, personal finance, public policy, and international relations. 
                    I enjoy long walks and scooter rides while listening to music and podcasts, as well as playing soccer.`
    
    return (
        <div class="intro-container">
            <div class="left">
                <img src={pfp} alt = "Me" id="pfp"/>
            </div>
            <div class="right">
                {about} <br/> <br/>
                <SocialIcon url="mailto:jeffrey.chen@yale.edu" target="_blank" bgColor="#ea4335"/>
                <SocialIcon url="https://github.com/JChenster" target="_blank"/>
                <SocialIcon url="https://www.linkedin.com/in/jeffrey-z-chen" target="_blank"/>
            </div>
        </div>
    );
};

export default Intro;