import React from 'react';
import { SidebarData } from '../../../Data/SidebarData.js';
import './Sidebar.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Sidebar() {
    return (
        <div className='Sidebar'>
            <img src={require('../../../assets/images/profile.jpg')} alt='profile' id='profile-picture'/>
            <h2 className='title'>John Grohman</h2>
            <div id='container'>
                <a href='https://www.linkedin.com/in/johngrohman/' target='_blank' rel='noreferrer'>
                    <i className="bi bi-linkedin"></i>
                </a>
                <a href='https://github.com/johngrohman' target='_blank' rel='noreferrer'>
                    <i className="bi bi-github"></i>
                </a>
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
            <a href='https://github.com/johngrohman/Portfolio-Website' target='_blank' rel='noreferrer'><i className="code bi-code-slash"></i></a>
        </div>
    );
}

export default Sidebar;