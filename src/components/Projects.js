import React from "react";
import "./Projects.css";
import {generateProj} from "./Generate"

const Projects = () => {
    var large_world_skills = ["Python", "SQL", "R", "Matplotlib"];
    var this_website_skills = ["React", "Javascript", "HTML", "CSS"];
    var credit_card_skills = ["R"];
    var quizwiz_skills = ["C"];
    var discord_quiz_skills = ["Python", "Webhooks"];

    return (
        <div class="container proj-container">
            <div class="section-header proj-header">Projects</div>
            <div class="proj-row">
                {generateProj("proj-left", "Large Worlds", "May 2021 - Present", "https://github.com/JChenster/large-worlds",
                            `Computational economics research experiment conducted under the guidance of Professor Sunder simulating how artificially intelligent agents trade in double auction markets. 
                            Data is subsequently collected, analyzed, and synthesized.`, 
                            large_world_skills)
                }
                {generateProj("proj-mid", "Personal Website", "Jun 2021", "https://github.com/JChenster/portfolio-website",
                            "This website! This is my portfolio and the development of it enabled me to practice front-end development.", 
                            this_website_skills)}
                {generateProj("proj-right", "Can I Get a Credit Card?", "May 2021", "../../CreditCardProject.html",
                            ` A statistical analysis of the different variables that affect the acceptance of credit card applications.
                            Incorporates bootstrap testing, permutation testing, multiple regression, logistic regression, and ANOVA.
                            Collaborated with two other data analysts.
                            `,
                            credit_card_skills
                )}
            </div>
            <div class="proj-row">
                {generateProj("proj-left", "Quizwiz", "Jan 2020", "https://github.com/JChenster/quizwiz",
                            `Multi and single player trivia game designed for users logged into the same system. 
                            Incorporates advanced systems programming concepts (semaphores, pipes, shared memory). Collaborated with one other developer.`,
                            quizwiz_skills)}
                {generateProj("proj-mid", "Discord Quiz", "Summer 2018", "https://github.com/JChenster/discord_quiz",
                            `A Discord bot that allows a person to locally host an interactive multi-player timed multiple choice trivia quiz game with custom questions in their server. 
                            Used in a server with 60+ players.
                            `,
                            discord_quiz_skills
                )}
                <div class="proj-dummy" id="proj-right"></div>
            </div>
        </div>
    );
}

export default Projects;