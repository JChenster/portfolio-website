import React from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./Skills.css";

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
        <div class="skills-container">
            <div class="section-header">Skills</div>
            <div class="skills-row">
                <div class="skills-row-left">Programming Languages</div>
                <div class="skills-row-right">
                    {generateSkill(85, "Python")}
                    {generateSkill(75, "R")}
                    {generateSkill(75, "C")}
                    {generateSkill(65, "Javascript")}
                    {generateSkill(65, "HTML/CSS")}
                </div>
            </div>
            <div class="skills-row">
                <div class="skills-row-left"></div>
                <div class="skills-row-right">
                    {generateSkill(65, "Java")}
                    {generateSkill(65, "Racket")}
                    {generateSkill(33, "LaTeX")}
                    {generateDummySkill()}
                    {generateDummySkill()}
                </div>
            </div>
            <div class="skills-row">
                <div class="skills-row-left">Frameworks</div>
                <div class="skills-row-right">
                    {generateSkill(65, "React")}
                    {generateSkill(50, "Bootstrap")}
                    {generateDummySkill()}
                    {generateDummySkill()}
                    {generateDummySkill()}
                </div>
            </div>
            <div class="skills-row">
                <div class="skills-row-left">Technical Tools</div>
                <div class="skills-row-right">
                    {generateSkill(85, "Bash")}
                    {generateSkill(75, "Github")}
                    {generateSkill(75, "VS Code")}
                    {generateDummySkill()}
                    {generateDummySkill()}
                </div>
            </div>
        </div>
    );
}

export default Skills;