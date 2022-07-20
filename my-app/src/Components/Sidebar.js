import React from 'react';
import profileImage from '../assets/images/profile.jpg';
import githubIcon from '../assets/images/github_logo_icon_white.png';
import linkedinIcon from '../assets/images/linkedin_logo_icon_white.png';
import codeIcon from '../assets/images/code_white.png';
import "../App.css";
import { SidebarData } from '../Data/SidebarData.js';

function Sidebar() {
    return (
        <div className="Sidebar">
            <img src={profileImage} alt="profile" id="profile-picture"/>
            <h2>John Grohman</h2>
            <div id="container">
            <a href="https://www.linkedin.com/in/johngrohman/" target="_blank" rel="noreferrer"><img src={linkedinIcon} alt="linkedin" /></a>
            <a href="https://github.com/johngrohman" target="_blank" rel="noreferrer"><img src={githubIcon} alt="github" /></a>
         </div>
            <ul className="SidebarNav">
                {SidebarData.map((val, key) => {
                    return (
                        <li 
                            key={key} 
                            className='SidebarNavRow'
                            onClick={()=> {
                                window.location.hash = val.link
                            }}
                        >
                        <div>{val.title}</div>
                        </li>
                    );
                })}
            </ul>
            <a href="https://github.com/johngrohman/Portfolio-Website" target="_blank" rel="noreferrer"><img src={codeIcon} alt="code" id="code"/></a>
        </div>
    );
}

export default Sidebar;