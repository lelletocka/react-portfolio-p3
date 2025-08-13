import "../Project.css";


function Project(props) {

    return (
        <div className="project-div">
            <div className="title-div">
                <h2>{props.projectName}</h2>
                <p className="title-p tech-p">{props.tech}</p>
                <p className="title-p github-p"><a className="github-link" href={props.githubLink}>{props.githubLink}</a></p>
            </div>
            <img className="project-img" src={props.img} alt={"Screenshot of the " + props.projectName + " project"} />                       
            <div className="about-div">
                <h3 className="about-h">About the project</h3>
                <h4 className="subject_h">The Project</h4>
                <p className="subject_p">{props.answerProject}</p>
                <h4 className="subject_h">Role</h4>
                <p className="subject_p">{props.answerRole}</p>
                <h4 className="subject_h">Challenges</h4>
                <p className="subject_p">{props.answerChallenges}</p>
                <h4 className="subject_h">What I Learned</h4>
                <p className="subject_p">{props.answerLearned}</p>
            </div>


        </div>
    );
}

export default Project;