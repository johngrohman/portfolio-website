import React from 'react';
import Profile from '../../Components/Profile';
import './home.scss';

const Home = () => (
    <div className='Home' id='home'>
        <Profile />
        <div className='HomeText'>
            <h1>Hello</h1>
            <p>Welcome! I&apos;m John, a passionate software engineer dedicated to crafting innovative, efficient, and pixel perfect tools.</p>
        </div>
    </div>
);

export default Home;