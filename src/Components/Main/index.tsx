import React from 'react';
import Home from '../../Pages/Home';
import AboutMe from '../../Pages/About';
import ContactMe from '../../Pages/Contact';
import More from '../../Pages/More';
import ToggleNav from '../Navigation/ToggleNav';
import './main.scss';

const Main = () => (
    <div className='main'>
        <ToggleNav />
        <Home />
        <AboutMe />
        <ContactMe />
        <More />
    </div>
);

export default Main;