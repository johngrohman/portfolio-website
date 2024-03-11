import React from 'react';
import "./home.css";
import { animated } from '@react-spring/web';

const Home = () => {

    const width = window.innerWidth;

    const panel_one = (
        <div className='Panel' id='NamePanel'>
            <h1>John Grohman</h1>
            <p>Computer Science Student at <br></br> Missouri University of Science and Technology</p>
        </div>
    )

    const panel_two = (
        <animated.div className='Panel'>
            
        </animated.div>
    )

    return (
        <div className='Home' id="home">
            <div className='panelrow'>
                {width>600?panel_one:panel_two}
                {width>600?panel_two:panel_one}
            </div>
            <hr></hr>
        </div>
    )
}

export default Home;