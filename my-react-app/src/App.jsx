import Project from "./components/Project.jsx";
import DuckFormImage from "./images/duck-form-project.png";
import AnimationImage from "./images/animation-project.png";
import BookTrackerImage from "./images/book-tracker-project.png";


function App() {

  return (
    <>
      <Project 
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
        projectName=""
        img={AnimationImage}
        tech="Html, CSS"
        githubLink="https://github.com/lelletocka/animation-svg"
        answerProject="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        answerRole="Lorem"
        answerChallenges=" Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        answerLearned="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <Project 
        projectName="Book-tracker"
        img={BookTrackerImage}
        tech="JavaScript"
        githubLink="https://github.com/lelletocka/js_06"
        answerProject="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        answerRole="Lorem"
        answerChallenges=" Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        answerLearned="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
    </>
  ) 
  
}

export default App;
