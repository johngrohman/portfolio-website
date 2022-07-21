import React from 'react';
import "../App.css";
import profileImage from '../assets/images/profile.jpg';

const ContactCard = () => (
    <div className='ContactCard'>
        <img src={profileImage} alt='profilepic' />
        <p>John Grohman</p>
        <p>(314) 313-4703</p>
        <p>grohmanjp@gmail.com</p>
    </div>
)

export default ContactCard;