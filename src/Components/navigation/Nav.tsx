import React from 'react';
import nav_bar_data from '../../Data/NavBarData.json';
import './Nav.css';

const NavBar = () => {

    const handleClick = (link: string) => {window.location.hash = link}

    return (
        <div className='NavBar'>
            <ul className='NavBarList'>
                {
                    nav_bar_data["data"].map((val, key) => {
                        return (
                            <li
                                key={key}
                                className='NavBarListItems'
                                onClick={() => handleClick(val.link)}
                            >
                                <a>{val.title}</a>
                            </li>
                        );
                    }
                )}
            </ul>
        </div>
    )
}

export default NavBar;