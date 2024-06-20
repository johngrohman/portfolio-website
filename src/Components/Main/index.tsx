import React from 'react';
import Home from '../../pages/Home';
import Portfolio from '../../pages/Portfolio';
import ContactMe from '../../pages/Contact';
import More from '../../pages/More';
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