import { SocialIcon } from "react-social-icons";

const generateGit = (git_link) => {
    return (
        <div class="git-link">
            <SocialIcon url={git_link} style={{height: 30, width: 30}} target="_blank"/>
        </div>
    )
}

const generateExp = (company, role, duration, git = false, git_link = "") => {
    return(
        <div>
            <div class="exp">
                {company}<br/>
                <i>{role}</i><br/>
                {duration}
                {git ? generateGit(git_link) : ""}
            </div>
            <div class="exp-line"></div>
        </div>
    );
}

export {generateExp, generateGit};