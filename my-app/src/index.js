import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav.js';

const App = () => (
    <div className='app'>
        <Nav />
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);