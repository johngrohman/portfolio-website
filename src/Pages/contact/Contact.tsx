import React from 'react';
import SectionTitle from '../../Components/sectiontitle/section-title.tsx';

const Contact = () => {
    const width = window.innerWidth;

    const panel_one = (
        <div className='Panel' id='NamePanel'>
            <h1>Contact Me</h1>
            <p>Phone: (314) 313-4703<br></br>Email: grohmanjp@gmail.com</p>
        </div>
    )

    const panel_two = (
        <div className='Panel'>
        </div>
    )

    return (
        <div className='Contact' id='contact'>
            <SectionTitle title="contact" color="#00FF29" />
            <div className='panelrow'>
                {width>600?panel_one:panel_two}
                {width>600?panel_two:panel_one}
            </div>
            <hr></hr>
        </div>
    )
}

export default Contact;