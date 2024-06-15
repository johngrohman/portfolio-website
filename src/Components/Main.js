import React from 'react';
import "../App.css";
import Home from '../pages/Home.js';
import AboutMe from '../pages/AboutMe.js';
import ContactMe from '../pages/ContactMe.js';
import More from '../pages/More.js';
import ToggleNav from './ToggleNav';

const Main = () => (
    <div id="content">
        <main>
            <ToggleNav />
            <Home />
            <AboutMe />
            <ContactMe />
            <More />
        </main>
    </div>
)

export default Main;