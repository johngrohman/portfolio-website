import React from 'react';

// Styling
import './about.css'
import SectionTitle from '../../Components/sectiontitle/section-title.tsx';

const About = () => {
    const width = window.innerWidth;

    const panel_one = (
        <div className='Panel'>
            <img src={require('../../assets/images/ProgLangs.png')} alt='ProgLangs' id="imageid" />
        </div>
    )

    const panel_two = (
        <div className='Panel' id='AboutPanel'>
          <img src={require('../../assets/images/profile.jpg')} alt='Profile' id='profileimage' />
          <p>Hello! I'm John, a Software Engineer based in St. Louis, MO. The vast majority of my work is done in JavaScript, Python, and C++</p>
        </div>
    )

    return (
        <div className='About' id="about">
            <SectionTitle title="about" color="#EB00FF" />
            <div className='panelrow'>
                {width>600?panel_one:panel_two}
                {width>600?panel_two:panel_one}
            </div>
            <hr></hr>
        </div>
    )
}

export default About;