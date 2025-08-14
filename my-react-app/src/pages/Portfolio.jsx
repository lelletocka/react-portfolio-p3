import Project from "../components/Project.jsx";
import DuckFormImage from "../images/duck-form-project.png";
import AnimationImage from "../images/animation-project.png";
import BookTrackerImage from "../images/book-tracker-project.png";
import { useState } from "react";
import PopupProject from "../components/Popup.jsx";


function PortfolioBtn() {


    
        // 

    function Portfolio() {
        
        const [popupOne, setPopupOne] = useState({
            projectName: "Duck Form",
            img: {DuckFormImage}, 
            tech: "Html, CSS", 
            githubLink: "https://github.com/lelletocka/duck-form",
            answerProject: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            answerRole: "Lorem",
            answerChallenges: " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            answerLearned: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    });
        const [popupTwo, setPopupTwo] = useState({
            projectName: "Animation and SVG",
            img: {AnimationImage},
            tech: "Html, CSS",
            githubLink: "https://github.com/lelletocka/animation-svg",
            answerProject: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            answerRole: "Lorem",
            answerChallenges: " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            answerLearned: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

        });
        const [popupThree, setPopupThree] = useState({
            projectName: "Book-tracker",
            img: {BookTrackerImage},
            tech: "JavaScript",
            githubLink: "https://github.com/lelletocka/js_06",
            answerProject: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            answerRole: "Lorem",
            answerChallenges: " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            answerLearned: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

        });

        //const [isOpen, setIsOpen] = useState(false);   
        const [isPopOneOpen, setIsPopOneOpen] = useState(false); 
        const [isPopTwoOpen, setIsPopTwoOpen] = useState(false);
        const [isPopThreeOpen, setIsPopThreeOpen] = useState(false);
    
        const closePopup = () => {
           // setIsOpen(false);
            //test:
            /*setIsPopOneOpen(false);
            setIsPopTwoOpen(false);
            setIsPopThreeOpen(false);*/
            if (isPopOneOpen && isPopTwoOpen && isPopThreeOpen) {
                setIsPopOneOpen(false);
                setIsPopTwoOpen(false);
                setIsPopThreeOpen(false);
            } else if (isPopOneOpen) {
                setIsPopTwoOpen(false);
                setIsPopThreeOpen(false);
                return (
                    <PopupProject 
                        {...popupOne}
                        onClick={closePopup}
                    />
                );
            } else if (isPopTwoOpen) {
                setIsPopOneOpen(false);
                setIsPopThreeOpen(false);
                return (
                    <PopupProject 
                        {...popupTwo}
                        onClick={closePopup}
                    />
                );
            } else if (isPopThreeOpen) {
                setIsPopOneOpen(false);
                setIsPopTwoOpen(false);
                return (
                    <PopupProject 
                        {...popupThree}
                        onClick={closePopup}
                    />
                );
            }   
                
        }; 
          
        
        return (
            <div>
                <Project 
                    //onClick={() => setIsOpen(true)}
                    onClick={() => setIsPopOneOpen(true)}
                    projectName="Duck Form"
                    img={DuckFormImage} 
                    tech="Html, CSS" 
                    githubLink="https://github.com/lelletocka/duck-form"
                    answerProject="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                    answerRole="Lorem"
                    answerChallenges=" Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    answerLearned="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />
                <Project 
                    onClick={() => setIsPopTwoOpen(true)}
                    projectName="Animation and SVG"
                    img={AnimationImage}
                    tech="Html, CSS"
                    githubLink="https://github.com/lelletocka/animation-svg"
                    answerProject="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                    answerRole="Lorem"
                    answerChallenges=" Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    answerLearned="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />
                <Project 
                    onClick={() => setIsPopThreeOpen(true)}
                    projectName="Book-tracker"
                    img={BookTrackerImage}
                    tech="JavaScript"
                    githubLink="https://github.com/lelletocka/js_06"
                    answerProject="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                    answerRole="Lorem"
                    answerChallenges=" Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    answerLearned="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />
                
            </div>
        );
    
    }


    const [showPortfolio, setShowPortfolio] = useState(false);

    const togglePortfolio = () => {
        if (showPortfolio) {
            setShowPortfolio(false);
        } else {
            setShowPortfolio(true); 
            return (
                Portfolio()
            );
        }
    };


    return (
        <div>
            <button className="portfolio-btn" onClick={togglePortfolio}>
                {showPortfolio ? "Hide Portfolio" : "Show Portfolio"}
            </button>
            <div>
                {showPortfolio ? Portfolio() : null}
                
                
                    <PopupProject 
                        projectName={popupOne.projectName}
                        img={popupOne.img}
                        tech={popupOne.tech}
                        githubLink={popupOne.githubLink}
                        answerProject={popupOne.answerProject}
                        answerRole={popupOne.answerRole}
                        answerChallenges={popupOne.answerChallenges}
                        answerLearned={popupOne.answerLearned}
                        onClick={closePopup}
                    />
                
                {isPopTwoOpen && (
                    <PopupProject 
                        {...popupTwo}
                        onClick={closePopup}
                    />
                )}
                {isPopThreeOpen && (
                    <PopupProject 
                        {...popupThree}
                        onClick={closePopup}
                    />
                )}
            
            </div>
        </div>
    );
}



export default PortfolioBtn;