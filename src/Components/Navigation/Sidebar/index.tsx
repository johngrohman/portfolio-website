import React from 'react';
import SidebarData from '../../../data/SidebarData.json';
import './Sidebar.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { HashLink } from 'react-router-hash-link';

function Sidebar() {

    return (
        <div className='Sidebar'>
            <img src={require('../../../assets/images/profile.jpg')} alt='profile' id='profile-picture' className='profilepicture'/>
            <h1 className='title'>John Grohman</h1>
            <h4 className='subtitle'>Software Developer</h4>
            <ul className='SidebarNav'>
                {SidebarData.map((val, key) => {
                    return (
                        <div className='SidebarNavRow' key={key}>
                            <HashLink
                                smooth
                                to={`#${val.link}`}
                            >
                                <div className='link'>{val.title}</div>
                            </HashLink>
                        </div>
                    );
                })}
            </ul>
            <div className='container'>
                <a href='https://www.linkedin.com/in/johngrohman/' target='_blank' rel='noreferrer'>
                    <i className="bi bi-linkedin"></i>
                </a>
                <a href='https://github.com/johngrohman' target='_blank' rel='noreferrer'>
                    <i className="bi bi-github"></i>
                </a>
            </div>
        </div>
    );
}

export default Sidebar;