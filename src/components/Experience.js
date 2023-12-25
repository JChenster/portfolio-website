import React from "react";
import five_rings_logo from "../images/five_rings_logo.jpeg";
import aws_logo from "../images/aws_logo.jpeg";
import som_logo from "../images/yale_som_logo.jpeg";

const Experience = () => {
    return (
        <div class="container exp-container">
            <div class="section-header">Experience</div>

            <div class="edu-school">
                <div class="edu-school-left">
                    <img src={five_rings_logo} alt = "Five Rings logo" class="logo"/>
                </div>
                <div class="edu-school-right">
                <u> <b>
                    <a class="edu-class"
                       href="https://fiverings.com/"
                       target="_blank"
                       rel="noreferrer">
                        Five Rings
                    </a>
                </b> </u>
                <br/>
                <i> Software Development Intern </i> (Jun 2023 - Aug 2023)
                <ul>
                    <li> Skills: C++, Python</li>
                </ul>
                </div>
            </div>


            <div class="edu-school">
                <div class="edu-school-left">
                    <img src={aws_logo} alt = "AWS logo" class="logo"/>
                </div>
                <div class="edu-school-right">
                <u> <b>
                    <a class="edu-class"
                       href="https://aws.amazon.com/"
                       target="_blank"
                       rel="noreferrer">
                        Amazon Web Services
                    </a>
                </b> </u>
                <br/>
                <i> Software Development Engineer Intern </i> (May 2022 - Aug 2022)
                <ul>
                    <li> AWS Console Mobile App Platform (Backend) Team </li>
                    <li> Skills: Java, Kotlin, Android Development </li>
                </ul>
                </div>
            </div>

            <div class="edu-school">
                <div class="edu-school-left">
                    <img src={som_logo} alt = "Yale SOM logo" class="logo"/>
                </div>
                <div class="edu-school-right">
                <u> <b>
                    <a class="edu-class"
                       href= "https://som.yale.edu/"
                       target="_blank"
                       rel="noreferrer">
                        Yale School of Management
                    </a>
                </b> </u>
                <br/>
                    <i> Computational Economics Research Intern </i> (May 2021 – Aug 2021)
                    <ul>
                        <li> Research Mentor:&nbsp;
                            <a class="edu-class"
                               href="https://som.yale.edu/faculty-research/faculty-directory/shyam-sunder"
                               target="_blank"
                               rel="noreferrer">
                                Professor Shyam Sunder
                            </a>
                        </li>
                        <li> Skills: Python, R </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Experience;
