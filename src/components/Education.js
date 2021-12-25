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
                    <i> <a class="edu-class" href= "http://catalog.yale.edu/ycps/subjects-of-instruction/computer-science/" target="_blank" rel="noreferrer"> B.S. in Computer Science;  </a> </i>
                    <i> <a class="edu-class" href= "http://catalog.yale.edu/ycps/subjects-of-instruction/applied-mathematics/" target="_blank" rel="noreferrer"> B.S. in Applied Mathematics;  </a> </i>
                    GPA: 3.97/4.0 <br/>
                    <ul>
                        <li>
                            <i> CS Coursework: </i> 
                            <a class="edu-class" href= "https://courses.yale.edu/?keyword=cpsc%20223&srcdb=202101" target="_blank" rel="noreferrer"> Data Structures, </a>
                            <a class="edu-class" href= "https://courses.yale.edu/?keyword=cpsc%20323&srcdb=202103" target="_blank" rel="noreferrer"> Systems Programming, </a>
                            <a class="edu-class" href= "https://courses.yale.edu/?keyword=cpsc%20474&srcdb=202103" target="_blank" rel="noreferrer"> AI for Games, </a>
                            <a class="edu-class" href= "https://courses.yale.edu/?keyword=math%20s244&srcdb=202102" target="_blank" rel="noreferrer"> Discrete Math </a>
                            <br/>
                        </li>
                        <li>
                            <i> Applied Math Coursework: </i> 
                            <a class="edu-class" href= "https://courses.yale.edu/?keyword=math%20241&srcdb=202103" target="_blank" rel="noreferrer"> Probability Theory, </a>
                            <a class="edu-class" href= "https://courses.yale.edu/?keyword=math%20s222&srcdb=202102" target="_blank" rel="noreferrer"> Linear Algebra, </a>
                            <a class="edu-class" href= "https://courses.yale.edu/?keyword=math%20120&srcdb=202003" target="_blank" rel="noreferrer"> Multivariable Calculus, </a>
                            <a class="edu-class" href= "https://courses.yale.edu/?keyword=s&ds%20230&srcdb=202101" target="_blank" rel="noreferrer"> Data Exploration, </a>
                            <a class="edu-class" href= "https://courses.yale.edu/?keyword=econ%20121&srcdb=202101" target="_blank" rel="noreferrer"> Microeconomics, </a>
                            <a class="edu-class" href= "https://courses.yale.edu/?keyword=phys%20260&srcdb=202103" target="_blank" rel="noreferrer"> Intensive Mechanics </a>
                        </li>
                        <li>
                            <i> Activities: </i> 
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