import React from 'react';
import './profile.scss';

function Profile() {
    return (
        <div className='Profile'>
            <img src={require('../../assets/images/profile.jpg')} alt="profile" id="main-profile-picture"/>
            <h1>John Grohman</h1>
            <div id="container">
                <a href="https://www.linkedin.com/in/johngrohman/" target="_blank" rel="noreferrer"><img src={'../../assets/images/linkedin_logo_icon_black.png'} alt="linkedin" /></a>
                <a href="https://github.com/johngrohman" target="_blank" rel="noreferrer"><img src={require('../../assets/images/github_logo_icon_black.png')} alt="github" /></a>
            </div>
        </div>
    );
}

export default Profile;