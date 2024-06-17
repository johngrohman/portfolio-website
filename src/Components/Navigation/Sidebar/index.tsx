import React from 'react';
import { SidebarData } from '../../../Data/SidebarData.js';
import './Sidebar.scss';

function Sidebar() {
    return (
        <div className='Sidebar'>
            <img src={require('../../../assets/images/profile.jpg')} alt='profile' id='profile-picture'/>
            <h2 className='title'>John Grohman</h2>
            <div id='container'>
                <a href='https://www.linkedin.com/in/johngrohman/' target='_blank' rel='noreferrer'><img src={require('../../../assets/images/linkedin_logo_icon_white.png')} alt='linkedin' /></a>
                <a href='https://github.com/johngrohman' target='_blank' rel='noreferrer'><img src={require('../../../assets/images/github_logo_icon_white.png')} alt='github' /></a>
            </div>
            <ul className='SidebarNav'>
                {SidebarData.map((val, key) => {
                    return (
                        <li 
                            key={key} 
                            className='SidebarNavRow'
                            onClick={()=> {
                                window.location.hash = val.link;
                            }}
                        >
                            <div>{val.title}</div>
                        </li>
                    );
                })}
            </ul>
            <a href='https://github.com/johngrohman/Portfolio-Website' target='_blank' rel='noreferrer'><img src={require('../../../assets/images/code_white.png')} alt='code' id='code'/></a>
        </div>
    );
}

export default Sidebar;