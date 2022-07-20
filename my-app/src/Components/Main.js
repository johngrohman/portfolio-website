import React from 'react';
import "../App.css";
import Home from '../pages/Home.js';
import AboutMe from '../pages/AboutMe.js';
import ContactMe from '../pages/ContactMe.js';
import More from '../pages/More.js';

const Main = () => (
    <div id="content">
        <main>
            <Home />
            <AboutMe />
            <ContactMe />
            <More />
        </main>
    </div>
)

export default Main;