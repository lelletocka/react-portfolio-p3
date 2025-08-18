//import React from "react";
import "../popup.css";


const PopupProject = ({ popupIntro, projectName, tech, onClick }) => {
    return (
        <div className="popup-project">
            <p className="pop-pre-p">{popupIntro}</p>
            <h1 className="pop-h1">{projectName}</h1> 
            <p className="pop-tech-p">{tech}</p> 
            <button onClick={onClick}>Close</button>
        </div>
        /* I read the assignment and thought it meant to include basically the whole
        project component in the popup, but searching the internet the recommendations
        seem to be to use as few props as possible in a popup. I feel quite lost at this
        very moment, but that is what I will do. */
             
            
    );
}; 

export default PopupProject;