import React from "react";
import avatar from "../images/avatar.png"
import githubLight from "../images/GitHub-Black.png"
import githubDark from "../images/GitHub-White.png"
import linkedinDark from "../images/Linkedin-White.png"
import linkedinLight from "../images/Linkedin-Black.png"


export default function Home({darkMode} : {darkMode:Boolean}) 
{

    return(
        <div className={darkMode ? "page--darkmode" : "page"}>
            <div className="content-container">
                <div className={darkMode ? "circle--darkmode" : "circle"}>
                    <img className="circle-image" src={avatar} alt="Portrait of William Wei"/>
                </div>
                <div className="about-container">
                    <h2 className={darkMode ? "about-text--darkmode" : "about-text"}>About Me</h2>
                    <p className={darkMode ? "about-text--darkmode" : "about-text"}>Hello! My name is William Wei, I am a rising sophomore studying Statistics and Machine Learning (it's the name of the major) and Computer Science
                        at Carnegie Mellon University.
                    </p>
                </div>
                <div className="logos">
                    <a href="https://www.linkedin.com/in/william-wei-0196a7209/">
                        <img className="logo-link" src={darkMode ? linkedinDark : linkedinLight} alt="Link to Linkedin"/>
                    </a>
                    <a href="https://github.com/weiwi21">
                        <img className="logo-link" src={darkMode ? githubDark : githubLight} alt="Link to github"/>
                    </a>
                    <a href="https://github.com/weiwi21/weiwi21.github.io/tree/master">
                        <img className="logo-link" src={darkMode ? githubDark : githubLight} alt="Link to github"/>
                    </a>
                </div>
            </div>
        </div>
    )
}