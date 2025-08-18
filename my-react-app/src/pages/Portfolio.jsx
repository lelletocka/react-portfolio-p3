import Project from "../components/Project.jsx";
import DuckFormImage from "../images/duck-form-project.png";
import AnimationImage from "../images/animation-project.png";
import BookTrackerImage from "../images/book-tracker-project.png";
import { useState } from "react";
import PopupProject from "../components/Popup.jsx";




function Portfolio() {
        
        const [popupOne, setPopupOne] = useState({
            projectName: "Duck Form",
            tech: "Html, CSS",
        });
        const [popupTwo, setPopupTwo] = useState({
            projectName: "Animation and SVG",
            tech: "Html, CSS",
        });
        const [popupThree, setPopupThree] = useState({
            projectName: "Book-tracker",
            tech: "JavaScript",
        });

//       
        const [isPopOneOpen, setIsPopOneOpen] = useState(false); 
        const [isPopTwoOpen, setIsPopTwoOpen] = useState(false);
        const [isPopThreeOpen, setIsPopThreeOpen] = useState(false);

        const closePopOne = () => {
            setIsPopOneOpen(false);
        };
        const closePopTwo = () => {
            setIsPopTwoOpen(false);
        };
        const closePopThree = () => {
            setIsPopThreeOpen(false);
        };

        const projects = [
            {
                projectName: "Duck Form",
                img: {DuckFormImage},
                tech: "Html, CSS",
                githubLink: "https://github.com/lelletocka/duck-form",
                answerProject: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                answerRole: "Lorem",
                answerChallenges: " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat.",
                answerLearned: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
            {
                projectName: "Animation and SVG",
                img: {AnimationImage},
                tech: "Html, CSS",
                githubLink: "https://github.com/lelletocka/animation-svg",
                answerProject: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                answerRole: "Lorem",
                answerChallenges: " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                answerLearned: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",                    
            },
            {
                projectName: "Book-tracker",
                img: {BookTrackerImage},
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
                    <div key={index} >
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


               
                
                {isPopOneOpen && (
                   <PopupProject 
                        projectName={popupOne.projectName}
                        tech={popupOne.tech}
                        onClick={closePopOne}
                    />
                )}
                {isPopTwoOpen && (
                    <PopupProject 
                        projectName={popupTwo.projectName}
                        tech={popupTwo.tech}
                        onClick={closePopTwo}
                    />
                )}
                {isPopThreeOpen && (
                    <PopupProject 
                        projectName={popupThree.projectName}
                        tech={popupThree.tech}
                        onClick={closePopThree}
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