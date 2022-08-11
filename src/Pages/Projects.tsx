import React from "react";
import ProjectCard from "../components/ProjectCard";
import testImage from "../images/gradient.jpeg";

export interface Project {
    name: string;
    desc: string;
    image: string | undefined;
    skills: string[];
}

export default function Projects({darkMode} : {darkMode:Boolean}) {
    const testObject : Project = {name: "Test",
                                  desc:"This is a test object blah blah blah blah",
                                  image: testImage,
                                  skills: ["Javascript", "React", "CSS", "HTML", "Java", "Python", "C++", "C"]
                                  }

    return (
        <div className={darkMode ? "page--darkmode" : "page"}>
            <h1>Projects</h1>
            <div className="cards">
                <ProjectCard darkMode={darkMode} project={testObject}/>
                <ProjectCard darkMode={darkMode} project={testObject}/>
                <ProjectCard darkMode={darkMode} project={testObject}/>
            </div>
        </div>
    )
}