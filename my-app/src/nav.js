import React from 'react';
import profileImage from './assets/images/profile.jpg';
import githubIcon from './assets/images/github_logo_icon_black.png';
import linkedinIcon from './assets/images/linkedin_logo_icon_black.png';
import codeIcon from './assets/images/code_icon_white.png';

const Nav = () => (
    <nav>
        <img src={profileImage} alt="profile" />
        <h2>John Grohman</h2>
        <img src={githubIcon} alt="github" />
        <img src={linkedinIcon} alt="linkedin" />
        <ol>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>More</li>
        </ol>
        <img src={codeIcon} alt="code" />
    </nav>
)

export default Nav;