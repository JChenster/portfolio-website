import { SocialIcon } from "react-social-icons";
import { FiExternalLink } from "react-icons/fi";

const generateGit = (git_link) => {
    return (
        <div>
            <SocialIcon url={git_link} style={{height: 40, width: 40}} target="_blank"/>
        </div>
    )
}

const generatePdf = (pdf_link) => {
    return(
        <div>
            <a href={pdf_link} target="_blank" rel="noreferrer">
                <FiExternalLink class="pdf-link"/>
            </a>
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

const generateProj = (id, name, date, external_link, description, proj_skills) => {
    var this_proj_skills = []
    for (let i = 0; i < proj_skills.length; i++){
        this_proj_skills.push(<span class="proj-skill">{proj_skills[i]}</span>);
    }
    // Assume that the only two things we want to insert are either a github link or a PDF link
    var is_git = external_link.includes("github");
    return (
        <div class="proj" id={id}>
            <div class="project-desc">
                <div class="proj-desc-left">
                    <b>{name}</b><br/>
                    <i>{date}</i><br/>
                </div>
                {is_git ? generateGit(external_link) : generatePdf(external_link)}
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