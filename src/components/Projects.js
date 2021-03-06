import React from "react";
import {generateProj} from "./Generate"

const Projects = () => {
    var microchess_skills = ["Python"];
    var large_world_skills = ["Python", "SQL", "R"];
    var this_website_skills = ["React", "Javascript", "HTML", "CSS"];
    var credit_card_skills = ["R"];
    var quizwiz_skills = ["C"];
    var discord_quiz_skills = ["Python", "Webhooks"];

    return (
        <div class="container proj-container">
            <div class="section-header proj-header">Projects</div>
            <div class="proj-row">
                {generateProj(
                    "proj-left",
                    "MicroChess Artificial Intelligence",
                    "Dec 2021",
                    "https://github.com/JChenster/microchess_artificial_intelligence",
                    ` Implemented and tuned a genetic algorithm to develop an optimal heuristic for minimax search.
                    Programmed the rules of Micro Chess from scratch using object oriented design.`,
                    microchess_skills
                )}
                {generateProj(
                    "proj-mid", 
                    "Large Worlds", 
                    "May 2021 - Aug 2021", 
                    "https://github.com/JChenster/large-worlds",
                    `Computational economics research project conducted under the guidance of Professor Sunder simulating how artificially intelligent agents trade Arrow-Debreu securities in double auction markets. 
                    Large volumes of data were collected in a comprehensive database system and then subsequently statistically analyzed.`, 
                    large_world_skills
                )}
                {generateProj(
                    "proj-right", 
                    "Discord Quiz", 
                    "Summer 2018, Updated Jun 2021", 
                    "https://github.com/JChenster/discord_quiz",
                    `A Discord bot that allows a person to locally host a fully-customizable interactive multi-player timed multiple choice trivia quiz game with custom questions in their server. 
                    Used in a server with 60+ players.`,
                    discord_quiz_skills
                )}
            </div>
            <div class="proj-row">
                {generateProj(
                    "proj-left", 
                    "Personal Website", 
                    "Jun 2021", 
                    "https://github.com/JChenster/portfolio-website",
                    "This website! This is my portfolio and the development of it enabled me to practice front-end development.", 
                    this_website_skills
                )}
                {generateProj(
                    "proj-mid", 
                    "Can I Get a Credit Card?", 
                    "May 2021", 
                    "https://drive.google.com/file/d/1vrByd0DhRZBZTZVehkwNDkJYfuUG3vx4/view?usp=sharing",
                    ` A statistical analysis of the different variables that affect the acceptance of credit card applications.
                    Incorporates bootstrap testing, permutation testing, multiple regression, logistic regression, and ANOVA.
                    Collaborated with two other data analysts.`,
                    credit_card_skills
                )}
                {generateProj(
                    "proj-right", 
                    "Quizwiz", 
                    "Jan 2020", 
                    "https://github.com/JChenster/quizwiz",
                    `Multi and single player trivia game designed for users logged into the same system. 
                    Incorporates advanced systems programming concepts (semaphores, pipes, shared memory). Collaborated with one other developer.`,
                    quizwiz_skills
                )}
            </div>
        </div>
    );
}

export default Projects;