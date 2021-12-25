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
                </div>
            </div>
            <div class="skills-row">
                <div class="skills-row-left">
                    <div class="skills-wrap">
                        <p class="skills-p">Technical Tools & Frameworks</p>
                    </div>
                </div>
                <div class="skills-row-right">
                    {generateSkill(85, "Bash")}
                    {generateSkill(75, "Git")}
                    {generateSkill(75, "VS Code")}
                    {generateSkill(65, "ReactJS")}
                    {generateSkill(65, "NodeJS")}
                    {generateSkill(65, "LaTeX")}
                    {generateSkill(50, "Bootstrap")}
                    {generateDummySkill()}
                </div>
            </div>
        </div>
    );
}

export default Skills;