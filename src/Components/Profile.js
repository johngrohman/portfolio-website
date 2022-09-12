import React from 'react';
import profileImage from '../assets/images/profile.jpg';
import githubIcon from '../assets/images/github_logo_icon_black.png';
import linkedinIcon from '../assets/images/linkedin_logo_icon_black.png';

function Profile() {
    return (
        <div className='Profile'>
            <img src={profileImage} alt="profile" id="main-profile-picture"/>
            <h1>John Grohman</h1>
            <div id="container">
                <a href="https://www.linkedin.com/in/johngrohman/" target="_blank" rel="noreferrer"><img src={linkedinIcon} alt="linkedin" /></a>
                <a href="https://github.com/johngrohman" target="_blank" rel="noreferrer"><img src={githubIcon} alt="github" /></a>
            </div>
        </div>
    )
}

export default Profile;