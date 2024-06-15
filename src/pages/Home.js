import React from 'react';
import "../App.css";
import Profile from '../Components/Profile';

const Home = () => (
    <div className='Home' id='home'>
        <Profile />
        <div className='HomeText'>
            <h1>John Grohman</h1>
            <p>Computer Science Student at</p>
            <p>Missouri University of Science and Technology</p>
        </div>
    </div>
)

export default Home;