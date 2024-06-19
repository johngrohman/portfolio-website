import React from 'react';
import ReactDOM from 'react-dom/client';
import SideBar from './Components/Navigation/Sidebar';
import Main from './Components/Main';
// import ErrorBoundary from './Components/ErrorBoundary';
import './index.scss';

const App = () => (
    <div className='app'>
        <SideBar />
        <Main />
    </div>
);

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <App />
    );
} else {
    console.log('Element with id root not found in the document');
}
