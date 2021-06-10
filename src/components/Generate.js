import { SocialIcon } from "react-social-icons";
import "./Generate.css"

const generateGit = (git_link) => {
    return (
        <div class="git-link">
            <SocialIcon url={git_link} style={{height: 40, width: 40}} target="_blank"/>
        </div>
    )
}

const generateExp = (company, role, duration, git = false, git_link = "") => {
    return(
        <div>
            <div class="exp">
                <b>{company}</b><br/>
                <i>{role}</i><br/>
                {duration}
                {git ? generateGit(git_link) : ""}
            </div>
            <div class="exp-line"></div>
        </div>
    );
}

const generateProj = (id, name, date, git_link, description, proj_skills) => {
    var this_proj_skills = []
    for (let i = 0; i < proj_skills.length; i++){
        this_proj_skills.push(<span class="proj-skill">{proj_skills[i]}</span>);
    }
    return (
        <div class="proj" id={id}>
            <div class="project-desc">
                <div class="proj-desc-left">
                    <b>{name}</b><br/>
                    <i>{date}</i><br/>
                </div>
                {generateGit(git_link)}
            </div>
            <hr/>
            {description}<br/>
            <hr/>
            <div class="proj-skills">
                {this_proj_skills}
            </div>
        </div>
    );
}

export {generateExp, generateGit, generateProj};