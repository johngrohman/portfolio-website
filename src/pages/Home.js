import React from 'react';
import "../App.css";
import Profile from '../Components/Profile';

const Home = () => (
    <div className='Home' id='home'>
        <Profile />
        <div className='HomeText'>
            <h1>John Grohman</h1>
            <p>Software Engineer</p>
        </div>
    </div>
)

export default Home;