import React from "react";
import {generateGit, generateExp} from "./Generate";
import "./Experience.css"

const Experience = () => {
    return (
        <div class="exp-container">
            <div class="section-header">Experience</div>
            {generateExp("Yale School of Management", "Computational Economics Research Intern", "May 2021 - Present", true, "https://github.com/JChenster/large-worlds")}
            {generateExp("Tsai CITY", "Student Developer", "Jun 2021 - Present")}
            {generateExp("New York City Urban Debate League", "Debate Club Instructor / Summer Leader", "Aug 2019 - Present")}
            {generateExp("Source Development Hub", "Business Development Intern", "Sep 2020 - Mar 2021")}
            {generateExp("Leap Education", "Student Teacher", "Feb 2020 - Aug 2020")}
            {generateExp("Assemblyman Harvey Epstein's Office", "Policy Intern", "Jun 2019 - Aug 2019")}
            {generateExp("Margaret Chin for City Council", "Campaign Intern", "Jul 2017 - Sep 2017")}
        </div>
    );
};

export default Experience;