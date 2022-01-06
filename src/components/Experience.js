import React from "react";
import amazon_logo from "../images/amazon_logo.png";
import yale_logo from '../images/yalelogo.svg';
import tsai_city_logo from "../images/tsai_city_logo.png";
import som_logo from "../images/yale_som_logo.jpeg";
import nycudl_logo from "../images/nycudl_logo.jpeg";

const Experience = () => {
    return (
        <div class="container exp-container">
            <div class="section-header">Experience</div>

            <div class="edu-school">
                <div class="edu-school-left">
                    <img src={amazon_logo} alt = "Amazon logo" class="logo"/>
                </div>
                <div class="edu-school-right">
                <u> <b> <a class="edu-class" href= "https://www.amazon.com/" target="_blank" rel="noreferrer"> Amazon </a> </b></u> <br/>
                    <i> Incoming Software Development Engineer Intern </i> (Summer 2022) <br/>
                </div>
            </div>

            <div class="edu-school">
                <div class="edu-school-left">
                    <img src={yale_logo} alt = "Yale logo" class="logo"/>
                </div>
                <div class="edu-school-right">
                <u> <b> <a class="edu-class" href= "https://cpsc.yale.edu/" target="_blank" rel="noreferrer"> Yale Department of Computer Science </a> </b></u> <br/>
                    <i> Undergraduate Learning Assistant </i> (Sep 2021 – Present)
                    <ul>
                        <li> Host 6 hours of office hours each week for CPSC 223 (Data Structures & Programming Techniques) with 200+ students. </li>
                        <li> Lead problem set walk-throughs and supplementary workshops on course material and advanced topics related to data structure implementation and usage, C programming, and debugging.</li>
                    </ul>
                </div>
            </div>

            <div class="edu-school">
                <div class="edu-school-left">
                    <img src={tsai_city_logo} alt = "Tsai CITY logo" class="logo"/>
                </div>
                <div class="edu-school-right">
                <u> <b> <a class="edu-class" href= "https://city.yale.edu/" target="_blank" rel="noreferrer"> Tsai Center for Innovative Thinking </a> </b></u> <br/>
                    <i> Student Software Developer </i> (Jun 2021 – Oct 2021)
                    <ul>
                        <li> Led back-end development of an interactive chatbot in Node.js to answer questions and display catered content using natural language processing and machine learning. </li>
                        <li> Orchestrated unit testing using Mocha and cloud deployment using Microsoft Azure.</li>
                        <li> Managed front-end integration of chatbot with existing technology stack managed in Drupal.</li>
                    </ul>
                </div>
            </div>

            <div class="edu-school">
                <div class="edu-school-left">
                    <img src={som_logo} alt = "Yale SOM logo" class="logo"/>
                </div>
                <div class="edu-school-right">
                <u> <b> <a class="edu-class" href= "https://som.yale.edu/" target="_blank" rel="noreferrer"> Yale School of Management </a> </b></u> <br/>
                    <i> Computational Economics Research Intern </i> (May 2021 – Aug 2021)
                    <ul>
                        <li> Coded a comprehensive simulation project in Python under the guidance of Professor Sunder to emulate artificially intelligent agents trading in double auction markets.</li>
                        <li> Implemented an extensive SQLite database system to store and query large data sets collected during simulation iterations.</li>
                        <li> Performed statistical tests utilizing R to formulate insights on how traders can aggregate disparate information and succeed in uncertain market conditions.</li>
                    </ul>
                </div>
            </div>

            <div class="edu-school">
                <div class="edu-school-left">
                    <img src={nycudl_logo} alt = "NYCUDL logo" class="logo"/>
                </div>
                <div class="edu-school-right">
                <u> <b> <a class="edu-class" href= "https://debate.nyc/" target="_blank" rel="noreferrer"> New York City Urban Debate League </a> </b></u> <br/>
                    <i> Debate Club Instructor </i> (Aug 2019 - Jun 2021)
                    <ul>
                        <li> Designed and taught a comprehensive 10-week curriculum to multiple debate classes of 8 students each. </li>
                        <li>Prepared 51 debaters for competitions by guiding research and judging practice rounds, resulting in a 100% tournament participation rate.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Experience;