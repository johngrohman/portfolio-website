import React from 'react';
import "../App.css";
import AboutCard from '../Components/AboutCard';
import { AboutData } from '../Data/AboutData.js';

function AboutMe() {
  return (
    <div className='AboutMe' id='aboutme'>
      <h1>About-Me</h1>
      <p className='bio'>Welcome! My name is John and I'm currently studying computer scicne at Missouri S&T. Here's some more about my involvement on campus:</p>
      { AboutData.map((val, key) => {
        return (
        <AboutCard
        title = {val.title}
        timeframe = {val.timeframe}
        role = {val.role}
        image = {val.image}
        bullets = {val.bullets}
        />

        );
        })}


      <h2>Resume</h2>
    </div>
  )
}

export default  AboutMe;