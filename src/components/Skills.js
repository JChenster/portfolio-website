import React from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const generateSkill = (value, text) => {
    let color = value > 50 ? "#50C878" : "#FFEA00";
    return (
        <CircularProgressbar value={value} text={text}
                            styles={buildStyles({
                                textColor:"black",
                                pathColor:color,
                                textSize:"1em"
                            })}
                            />
    );
}

const generateDummySkill = () =>{
    return (
        <CircularProgressbar value={0} id="dummy-skill"/>
    )
}

const Skills = () => {
    return (
        <div class="container skills-container">
            <div class="section-header">Skills</div>
            <div class="skills-row">
                <div class="skills-row-left">
                    <div class="skills-wrap">
                        <p class="skills-p">Programming Languages</p>
                    </div>
                </div>
                <div class="skills-row-right">
                    {generateSkill(90, "Python")}
                    {generateSkill(75, "C")}
                    {generateSkill(65, "R")}
                    {generateSkill(65, "Javascript")}
                    {generateSkill(65, "HTML/CSS")}
                    {generateSkill(65, "Java")}
                    {generateSkill(65, "SQL")}
                    {generateSkill(65, "Racket")}
                    {generateSkill(65, "LaTeX")}
                </div>
            </div>
            <div class="skills-row">
                <div class="skills-row-left">
                    <div class="skills-wrap">
                        <p class="skills-p">Frameworks & Developer Tools</p>
                    </div>
                </div>
                <div class="skills-row-right">
                    {generateSkill(65, "React")}
                    {generateSkill(65, "Node.js")}
                    {generateSkill(65, "Flask")}
                    {generateSkill(85, "Bash")}
                    {generateSkill(65, "Git")}
                    {generateSkill(65, "Heroku")}
                    {generateSkill(75, "VS Code")}
                    {generateSkill(65, "Azure")}
                    {generateDummySkill()}
                </div>
            </div>
        </div>
    );
}

export default Skills;