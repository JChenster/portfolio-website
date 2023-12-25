import React from "react";
import pfp from "../images/pfp.jpg";
import {SocialIcon} from "react-social-icons";

const Intro = () => {
    const about = (
        <div class="intro-about">
            <p> Hey there! I'm Jeffrey (also go by Jeff).</p>
            <p> I'm from Brooklyn, NY and I'm currently a first-gen student entering my last semester at Yale College studying Computer Science. I love learning and solving problems. </p>
            <p> My favorite topics to think about are all things systems programming and algorithms. </p>
        </div>
    );

    return (
        <div class="container intro-container">
            <div class="intro-left">
                <img src={pfp} alt = "Me" id="pfp"/>
            </div>
            <div class="intro-right">
                {about} <span> If you want to reach me: </span><a href="mailto:jeffrey.chen@yale.edu" target = "_blank" rel="noreferrer">jeffrey.chen@yale.edu</a>.<br/> <br/>
                <SocialIcon url="mailto:jeffrey.chen@yale.edu" target="_blank" rel="noreferrer" bgColor="#ea4335"/>
                <SocialIcon url="https://github.com/JChenster" target="_blank" rel="noreferrer" />
                <SocialIcon url="https://www.linkedin.com/in/jeffrey-z-chen" target="_blank" rel="noreferrer"/>
            </div>
        </div>
    );
};

export default Intro;
