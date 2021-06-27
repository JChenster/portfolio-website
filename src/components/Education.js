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
                    <i>B.S. Computer Science and Applied Mathematics;</i> GPA: 4.0/4.0<br/>
                    Coursework in Data Structures & Programming Techniques, Data Analysis, Microeconomics, Multivariate Calculus
                </div>
                <div class="schooldesc" id="stuydesc">
                    <b>Stuyvesant High School</b><br/>
                    Class of 2020<br/>
                    <i>Regents Diploma with Honors;</i> GPA: 97.78/100<br/>
                    Coursework in Systems Level Programming, Data Structures & Algorithms, Microeconomics, Macroeconomics, Calculus I & II
                </div>
                <img src={stuybg} alt="Stuy" class="school-bg"/>
            </div>
        </div>
    );
};

export default Education;