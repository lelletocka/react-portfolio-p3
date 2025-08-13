import React from "react";

const PopupProject = ({ projectName, img, tech, githubLink, answerProject, answerRole, answerChallenges, answerLearned, onClick }) => {
    return (
        <div className="popup-project">
            <div className="title-div">
                <h2>{projectName}</h2>
                <p className="title-p tech-p">{tech}</p>
                <p className="title-p github-p"><a className="github-link" href={githubLink}>{githubLink}</a></p>
            </div>
            <img className="project-img" src={img} alt={"Screenshot of the " + projectName + " project"} />                       
            <div className="about-div">
                <h3 className="about-h">About the project</h3>
                <h4 className="subject_h">The Project</h4>
                <p className="subject_p">{answerProject}</p>
                <h4 className="subject_h">Role</h4>
                <p className="subject_p">{answerRole}</p>
                <h4 className="subject_h">Challenges</h4>
                <p className="subject_p">{answerChallenges}</p>
                <h4 className="subject_h">What I Learned</h4>
                <p className="subject_p">{answerLearned}</p>
            </div>
            <button className="close-btn" onClick={onCLick}>
                Close
            </button>
        </div>
    )
} 

export default PopupProject;