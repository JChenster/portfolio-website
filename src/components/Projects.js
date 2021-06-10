import React from "react";
import "./Projects.css";
import {generateProj} from "./Generate"

const Projects = () => {
    var large_world_skills = ["Python", "SQL", "Matplotlib"];
    var this_website_skills = ["React", "Javascript", "HTML", "CSS"]
    var quizwiz_skills = ["C"]
    return (
        <div class="proj-container">
            <div class="section-header">Projects</div>
            <div class="proj-row">
                {generateProj("proj-left", "Large Worlds", "May 2020 - Present", "https://github.com/JChenster/large-worlds",
                            "Computational economics research experiment conducted under the guidance of Professor Sunder simulating how artificially intelligent agents trade in double aunction markets.", 
                            large_world_skills)
                }
                {generateProj("proj-mid", "Personal Website", "Jun 2020 - Present", "https://github.com/JChenster/JChenster.github.io",
                            "This website! Designed to be a portfolio and in the process, practice web development.", 
                            this_website_skills)}
                {generateProj("proj-right", "Quizwiz", "Jan 2020", "https://github.com/JChenster/quizwiz",
                            "Multi and single player trivia game designed for users logged into the same system. Collaborated with one other developer.", 
                            quizwiz_skills)}
            </div>
        </div>
    );
}

export default Projects;