import React from "react";
import { Project } from "../Pages/Projects";

// Project: {name: string, desc: string, image: string | undefined, skills: string[]}

export default function ProjectCard({darkMode, project} : {darkMode:Boolean, project: Project}) {
    const skillBars = project.skills.map(prev => (<li className="card-skills">{prev}</li>))
    return (
        <div className={darkMode ? "projectcard--darkmode" : "projectcard"}>
            <img className="card-image" src={project.image} alt={project.name}/>
            <h2 className={darkMode ? "card-title--darkmode" : "card-title"}>{project.name}</h2>
            <p className={darkMode ? "card-desc--darkmode" : "card-desc"}>{project.desc}</p>
            <ul className={darkMode ? "card-list--darkmode" : "card-list"}>
                {skillBars}
            </ul>
        </div>
    )
}