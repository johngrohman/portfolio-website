import React, { useState } from 'react';
import SidebarData from '../../../Data/SidebarData.json';
import './togglenav.scss';

function ToggleNav() {
    const [hiddenMenu, setHiddenMenu] = useState(true);

    return (
        <div className='ToggleNav'>
            <button onClick={() => setHiddenMenu(!hiddenMenu)}>    
                {hiddenMenu? '<' : '>'}
                
            </button>
            <div className='Menu'>
                <div className={(hiddenMenu ? 'hidden' : '') + '-menu'}>
                    <ul className='ToggleNavList'>
                        {SidebarData.map((val, key) => {
                            return (
                                <li 
                                    key={key} 
                                    className='SidebarNavListRow' 
                                    onClick={()=> {
                                        window.location.hash = val.link;
                                        setHiddenMenu(!hiddenMenu);
                                    }}
                                >
                                    <div>{val.title}</div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ToggleNav;