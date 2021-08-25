import React from "react";
import "./Education.css";
import yalebg from "../images/yalebg.jpg";
import stuybg from "../images/stuybg.jpg";

const Education = () =>{
    return (
        <div>
            <div class="container edu-container">
                <div class="section-header">Education</div>
                <img src={yalebg} alt="Yale" class="school-bg"/>
                <div class="circle" id="edu-circle1"></div>
                <div class="circle" id="edu-circle2"></div>
                <div class="schooldesc" id="yaledesc">
                    <b>Yale University</b><br/>
                    Class of 2024 <br/>
                    <i> B.S. in Computer Science and Applied Mathematics;</i> GPA: 3.97/4.00<br/>
                    <i> Computer Science Coursework:</i> Data Structures, Computational Intelligence for Games, Systems Programming and Computer Organization, Discrete Mathematics <br/>
                    <i> Applied Mathematics Coursework:</i> Probability Theory, Data Analysis, Linear Algebra, Multivariable Calculus, Microeconomics
                </div>
                <div class="schooldesc" id="stuydesc">
                    <b>Stuyvesant High School</b><br/>
                    Class of 2020<br/>
                    <i>Regents Diploma with Honors;</i> GPA: 97.78/100<br/>
                    Coursework: Systems Level Programming, Data Structures & Algorithms, Microeconomics, Macroeconomics, Calculus I & II
                </div>
                <img src={stuybg} alt="Stuy" class="school-bg"/>
            </div>
        </div>
    );
};

export default Education;