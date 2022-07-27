import React from "react"
import { Link } from "react-router-dom"
import "../index.css";



export default function Navbar({darkMode, toggleDarkMode} : {darkMode:Boolean, toggleDarkMode:()=>void}) {
    const linkMode = darkMode ? "nav-link--darkmode" : "nav-link"

    return (
        <div className={`primary-header ${darkMode ? "navbar--darkmode" : "navbar"}`}>
            <h1 className="logo">William Wei</h1>
            <nav>
                <ul className="primary-navigation">
                    <li><Link to="/" className={`${linkMode}`}>Home</Link></li>
                    <li><Link to="/about" className={`${linkMode}`}>About</Link></li>
                    <li><Link to="/projects" className={`${linkMode}`}>Projects</Link></li>
                    <li><button onClick={()=>toggleDarkMode()}></button></li>
                </ul>
            </nav>
        </div>
    )
}