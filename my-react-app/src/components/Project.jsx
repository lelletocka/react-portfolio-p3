

function Project(props) {

    return (
        <div>
            <h2>{props.projectName}</h2>
            <img className="screenshot" src={props.img} alt="Screenshot of project" />
            <p>Tech: {props.tech}</p>
            <p>Github repo: <a className="github-link" href={props.githubLink}>{props.githubLink}</a></p>           
            <div>
                <h3>About the project</h3>
                <h4 className="subject_h">The Project</h4>
                <p className="subject_p">{props.answerOne}</p>
                <h4 className="subject_h">Role</h4>
                <p className="subject_p">{props.answerTwo}</p>
                <h4 className="subject_h">Challenges</h4>
                <p className="subject_p">{props.answerThree}</p>
                <h4 className="subject_h">What I Learned</h4>
                <p className="subject_p">{props.answerFour}</p>
            </div>


        </div>
    )
};

export default Project;