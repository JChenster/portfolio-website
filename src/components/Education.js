import React from "react";
import yalelogo from "../images/yalelogo.svg";
import stuylogo from "../images/stuylogo.png";

const Education = () =>{
    return (
        <div class="container edu-container">
            <div class="section-header">Education</div>

            <div class="edu-school">
                <div class="edu-school-left">
                    <img src={yalelogo} alt = "Yale logo" class="logo"/>
                </div>
                <div class="edu-school-right">
                    <u> <b> <a class="edu-class" href= "https://www.yale.edu/" target="_blank" rel="noreferrer"> Yale University </a> </b></u> <br/>
                    <i> <a class="edu-class" href= "http://catalog.yale.edu/ycps/subjects-of-instruction/computer-science-mathematics/" target="_blank" rel="noreferrer"> B.S. Computer Science and Mathematics; </a> </i>
                    GPA: 3.93/4.00 <br/>
                    <ul>
                        <li>
                            <u><i> CS Coursework: </i></u> Data Structures, Intensive Algorithms, Systems Programming, AI for Games
                            <br/>
                        </li>
                        <li>
                            <u> <i> Math Coursework:</i></u> Intensive Analysis, Calculus I-III, Linear Algebra, Discrete Math
                        </li>
                        <li>
                            <u><i> Data Science Coursework:</i></u> Statistical Methods for Science and Finance, Probability Theory, Data Analysis in R
                        </li>
                        <li>
                            <u><i>Miscellaneous Coursework:</i></u> Intermediate Microeconomics, Intensive Introduction to Mechanics, Intermediate Chinese
                        </li>
                        <li>
                            <u><i> Activities: </i> </u>
                            <a class="edu-class" href="https://yhhap.org/vita" target="_black" rel="nonreferrer">Volunteer Income Tax Assistance (Director of Training), </a>
                            <a class="edu-class" href="https://branford.yalecollege.yale.edu/resources/housing" target="_black" rel="nonreferrer">Branford Housing Committee (Class Representative),</a>
                        </li>           
                    </ul>
                    
                </div>
            </div>

            <div class="edu-school">
                <div class="edu-school-left">
                    <img src={stuylogo} alt = "Stuy logo" class="logo"/>
                </div>
                <div class="edu-school-right">
                <u> <b> <a class="edu-class" href= "https://stuy.enschool.org/" target="_blank" rel="noreferrer"> Stuyvesant High School </a> </b></u> <br/>
                    <i> Advanced Regents Diploma; </i> GPA: 97.78/100 <br/>
                    <ul>
                        <li><i> Activities: </i> Policy Debate (Captain, Qualifier to Tournament of Champions)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Education;