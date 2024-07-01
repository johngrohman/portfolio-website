import React, { useState } from 'react';
import SidebarData from '../../../data/SidebarData.json';
import './togglenav.scss';

function ToggleNav() {
    const [hiddenMenu, setHiddenMenu] = useState(true);

    return (
        <div className='ToggleNav'>
            <button onClick={() => setHiddenMenu(!hiddenMenu)}>    
                {hiddenMenu? <i className="ni bi-list"></i> : <i className="ni bi-x"></i>}
                
            </button>
            <div className={`menu${hiddenMenu?'-hidden':''}`}>
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
        // <Navbar className='navbar'>
        //     <NavDropdown
        //         title={hiddenMenu?<i className="ni bi-list"></i>:<i className="ni bi-x"></i>} 
        //         id='nav-dropdown'          
        //     >
        //         <div id='dropdownitemcontainer' className='collapse'>
        //             {
        //                 SidebarData.map((val, index) => {
        //                     return (
        //                         <NavDropdown.Item href={`#${val.link}`} key={index}>
        //                             {val.title}
        //                         </NavDropdown.Item>
        //                     );
        //                 })
        //             }
        //         </div>
        //     </NavDropdown>
        // </Navbar>
    );
}

export default ToggleNav;