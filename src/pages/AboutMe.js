import React from 'react';
import "../App.css";
import AboutCard from '../Components/AboutCard';
import { AboutData } from '../Data/AboutData.js';
import Resume from '../assets/Resume.pdf';

function AboutMe() {
  return (
    <div className='AboutMe' id='aboutme'>
      <h1>About-Me</h1>
      <p className='bio'>Welcome! My name is John and I'm currently studying computer sciecne at Missouri S&T. Here's some more about my involvement on campus:</p>
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


      <a href={Resume} download='JohnGrohmanResume' className='ResumeDownload'><h2>Resume</h2></a>
    </div>
  )
}

export default  AboutMe;