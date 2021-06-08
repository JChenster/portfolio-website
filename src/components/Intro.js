import React from "react";
import "./Intro.css";
import pfp from "../images/pfp.jpg"

const Intro = () => {
    const about = `Hi there! Welcome to my website! 
                    I'm Jeffrey, a rising sophomore at Yale College from Brooklyn, NYC. 
                    I'm studying Computer Science and Economics. 
                    Some of my interests include software engineering, AI/ML, data science, investing, personal finance, public policy, and international relations. 
                    I enjoy long walks and scooter rides while listening to music and podcasts, as well as playing soccer.`
    
    return (
        <div class="container">
            <div class="left">
                <img src={pfp} alt = "Me" id="pfp"/>
            </div>
            <div class="right">
                {about}
            </div>
        </div>
    );
};

export default Intro;