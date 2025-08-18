import { useState } from "react";
import Project from "../components/Project.jsx";
import PopupProject from "../components/Popup.jsx";

import DuckFormImage from "../images/duck-form-project.png";
import AnimationImage from "../images/animation-project.png";
import BookTrackerImage from "../images/book-tracker-project.png";




function Portfolio() {
        
        const [popupIntro, setPopupInfo] = useState({
            popupIntro: "This is a popup window for",
        });
        const [popupContent, setPopupContent] = useState(null);

        const closePopup = () => { setPopupContent(null); 
        };
        
        const projects = [
            {
                projectName: "Duck Form",
                img: DuckFormImage,
                tech: "Html, CSS",
                githubLink: "https://github.com/lelletocka/duck-form",
                answerProject: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                answerRole: "Lorem",
                answerChallenges: " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat.",
                answerLearned: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
            {
                projectName: "Animation and SVG",
                img: AnimationImage,
                tech: "Html, CSS",
                githubLink: "https://github.com/lelletocka/animation-svg",
                answerProject: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                answerRole: "Lorem",
                answerChallenges: " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                answerLearned: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",                    
            },
            {
                projectName: "Book-tracker",
                img: BookTrackerImage,
                tech: "JavaScript",
                githubLink: "https://github.com/lelletocka/js_06",
                answerProject: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                answerRole: "Lorem",
                answerChallenges: " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                answerLearned: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
        ];  
        
        return (
            <div>
                {projects.map((project, index) => (
                    <div key={index} onClick={() => setPopupContent(project)}>
                        <Project    
                            projectName={project.projectName}
                            img={project.img} 
                            tech={project.tech} 
                            githubLink={project.githubLink}
                            answerProject={project.answerProject}
                            answerRole={project.answerRole}
                            answerChallenges={project.answerChallenges}
                            answerLearned={project.answerLearned}
                        />
                    </div>
                ))}

                {popupContent && (
                   <PopupProject 
                        popupIntro={popupIntro.popupIntro}
                        projectName={popupContent.projectName}
                        tech={popupContent.tech}
                        onClick={closePopup}
                    />
                )}                
            </div>
        );
    
    }




function PortfolioBtn() {

    const [showPortfolio, setShowPortfolio] = useState(false);

    const togglePortfolio = () => setShowPortfolio(prev => !prev);        
    

    return (
        <div>
            <button className="portfolio-btn" onClick={togglePortfolio}>
                {showPortfolio ? "Hide Portfolio" : "Show Portfolio"}
            </button>
            <div>
                {showPortfolio && <Portfolio />}
            </div>
             
        </div>
    );
}



export default PortfolioBtn;