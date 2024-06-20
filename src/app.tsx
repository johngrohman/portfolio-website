import React from 'react';
import SideBar from './components/Navigation/Sidebar';
import Main from './components/Main';

export default function App() {
    return (
        <div className='app'>
            <SideBar />
            <Main />
        </div>
    );
}