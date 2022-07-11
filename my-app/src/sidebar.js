import React from 'react';
import profileImage from './assets/images/profile.jpg';
import githubIcon from './assets/images/github_logo_icon_white.png';
import linkedinIcon from './assets/images/linkedin_logo_icon_white.png';
import codeIcon from './assets/images/code_white.png';
import Nav from './nav.js';

const SideBar = () => (
    <div id='sidebar'>
        <img src={profileImage} alt="profile" id="profile-picture"/>
        <h2>John Grohman</h2>
        <div id="container">
            <img src={linkedinIcon} alt="linkedin" />
            <img src={githubIcon} alt="github" />
        </div>
        <Nav />
        <img src={codeIcon} alt="code" id="code"/>
    </div>
)

export default SideBar;