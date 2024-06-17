import React from 'react';
import Home from '../../Pages/Home';
import Portfolio from '../../Pages/Portfolio';
import ContactMe from '../../Pages/Contact';
import More from '../../Pages/More';
import ToggleNav from '../Navigation/ToggleNav';
import './main.scss';

const Main = () => (
    <div className='main'>
        <ToggleNav />
        <Home />
        <Portfolio />
        <ContactMe />
        <More />
    </div>
);

export default Main;