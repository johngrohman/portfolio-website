import React from 'react';
import ReactDOM from 'react-dom/client';
import SideBar from './Components/Navigation/Sidebar/Sidebar.js';
import Main from './Components/Main.js';

const App = () => (
    <div className='app'>
        <SideBar />
        <Main />
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <App />
);