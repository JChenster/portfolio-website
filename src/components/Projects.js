import React from "react";
import {generateProj} from "./Generate"

const Projects = () => {
    var http_skills = ["C++", "Networking"];
    var rucio_skills= ["Python", "Open Source"];
    var parallel_mcts_skills= ["C++", "OpenMP"];

    return (
        <div class="container proj-container">
            <div class="section-header proj-header">Projects</div>
            <div class="proj-row">
                {generateProj(
                    "proj-left",
                    "HTTP 1 Server",
                    "Fall 2023",
                    "https://github.com/JChenster/http_server",
                    "HTTP Server Compliant with RFC 9112. Supports GET, POST requests. Employs concurrent aymmetric multiplexing.",
                    http_skills
                )}
                {generateProj(
                    "proj-mid",
                    "Rucio Open Source Contribution",
                    "Fall 2023",
                    "https://github.com/rucio/rucio/commit/b2d8829aac987a7e496dc8e0cb317492d6918e97",
                    "Coded a pull request to address a ticket for CERN's Rucio, an open source scientific data management scheduler, that was reviewed, approved, and merged into production branch.",
                    rucio_skills
                )}
                {generateProj(
                    "proj-right",
                    "Parallel Monte Carlo Tree Search",
                    "Dec 2022",
                    "https://github.com/JChenster/parallel-monte-carlo-tree-search",
                    "Implemented Monte Carlo Tree Search in C++ to recommend moves for board games such as Connect Four. Implemented 4 parallel variations of the algorithm using OpenMP and benchmarked their performance against each other",
                    parallel_mcts_skills
                )}
            </div>
        </div>
    );
}

export default Projects;
