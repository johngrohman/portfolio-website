import React from 'react';
import './profile.scss';

function Profile() {
    return (
        <div className='Profile'>
            <img src={require('../../assets/images/profile.jpg')} alt="profile" id="main-profile-picture"/>
            <h1>John Grohman</h1>
            <div id="iconcontainer">
                <a href='https://www.linkedin.com/in/johngrohman/' target='_blank' rel='noreferrer'>
                    <i className="pi bi-linkedin"></i>
                </a>
                <a href='https://github.com/johngrohman' target='_blank' rel='noreferrer'>
                    <i className="pi bi-github"></i>
                </a>
            </div>
        </div>
    );
}

export default Profile;