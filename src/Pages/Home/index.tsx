import React from 'react';
import Profile from '../../components/Profile';
import TypewriterComponent from 'typewriter-effect';
import './home.scss';

const Home = () => (
    <div className='Home' id='home'>
        <Profile />
        <div className='HomeText'>
            <h1>
                <TypewriterComponent
                    options={{
                        strings: ['Hello', 'Hola', 'Bonjour', 'Hallo', '你好', 'Ciao', 'नमस्ते'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h1>
            <p>Welcome! I&apos;m John, a passionate software engineer dedicated to crafting innovative, efficient, and pixel perfect experiences.</p>
        </div>
    </div>
);

export default Home;