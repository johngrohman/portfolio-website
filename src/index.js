import React from 'react';
import ReactDOM from 'react-dom/client';
import SideBar from './Components/Sidebar.js';
import Main from './Components/Main.js';

const App = () => (
    <div className='app'>
        <SideBar />
        <Main />
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);