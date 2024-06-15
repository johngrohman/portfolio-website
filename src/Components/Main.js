import React from 'react';
import "../App.css";
import Home from '../Pages/Home.js';
import AboutMe from '../Pages/AboutMe.js';
import ContactMe from '../Pages/ContactMe.js';
import More from '../Pages/More.js';
import ToggleNav from './Navigation/ToggleNav/ToggleNav.js';

const Main = () => (
    <div id="content">
        <ToggleNav />
        <Home />
        <AboutMe />
        <ContactMe />
        <More />
    </div>
)

export default Main;