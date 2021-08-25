import React from "react";
import {generateExp} from "./Generate";
import "./Experience.css"

const Experience = () => {
    return (
        <div class="exp-container">
            <div class="section-header">Experience</div>
            {generateExp(
                "Tsai CITY", 
                "Student Software Developer", 
                "Jun 2021 - Present"
            )}
            {generateExp(
                "Yale School of Management", 
                "Computational Economics Research Intern", 
                "May 2021 - Aug 2021", 
                true, 
                "https://github.com/JChenster/large-worlds"
            )}
            {generateExp(
                "New York City Urban Debate League", 
                "Debate Club Instructor / Summer Leader", 
                "Aug 2019 - Jun 2021"
            )}
            {generateExp(
                "Source Development Hub", 
                "Business Development Intern", 
                "Sep 2020 - Mar 2021"
            )}
        </div>
    );
};

export default Experience;