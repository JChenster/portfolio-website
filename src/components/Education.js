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
                    <u> <b> <a class="edu-class"
                               href="https://www.yale.edu/"
                               target="_blank" rel="noreferrer">
                        Yale University
                    </a> </b> </u>
                    <br/>
                    <i> <a class="edu-class"
                           href="https://catalog.yale.edu/ycps/subjects-of-instruction/computer-science/"
                           target="_blank"
                           rel="noreferrer">
                        M.S. in Computer Science, B.S. in Computer Science (4 Year Joint Program)
                    </a> </i>
                    <br/>
                    GPA: 3.91/4.00
                    <ul>
                        <li>
                            <u> Computer Science Coursework:</u> Compilers, Distributed Systems, Networked Systems, Database Implementation, Systems Programming, Computer System Design, Parallel Programming, Data Structures, Intensive Algorithms, Randomized Algorithms, Computational Intelligence, Deep Learning
                        </li>
                        <li>
                            <u> Mathematics & Statistics Coursework:</u> Probability, Stochastic Processes, Linear Models, Statistical Methods, Data Analysis, Discrete Math, Real Analysis, Linear Algebra, Differential Equations
                        </li>
                        <li>
                            <u> Undergraduate Learning Assistant For:</u> Data Structures, Algorithms, Parallel Programming, Computational Intelligence for Games, Differential Equations
                        </li>
                        <li>
                            <u> Activities:</u> Volunteer Income Tax Club (Director of Training)
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
                    <i> <a class="edu-class"
                           href="https://stuy.enschool.org/academics/grad_require2.jsp"
                           target="_blank"
                           rel="noreferrer">
                        Stuyvesant-Endorsed Advanced Regents Diploma
                    </a> </i>
                    <br/>
                    GPA: 97.78/100
                    <br/>
                    <ul>
                        <li>
                            <u> Activities:</u> Policy Debate Captain (Qualifier to Tournament of Champions)
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Education;
