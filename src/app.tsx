import React from 'react';
import SideBar from './components/Navigation/Sidebar';
import Main from './components/Main';
import Toggle from './components/Toggle';
import './index.scss';

export default function App() {

    return (
        <div className='app'>
            <Toggle />
            <SideBar />
            <Main />
        </div>
    );
}
