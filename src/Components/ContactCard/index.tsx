import React from 'react';
import './contactcard.scss';

const ContactCard = () => (
    <div className='ContactCard'>
        <img src={require('../../assets/images/profile.jpg')} alt='profilepic' />
        <p>John Grohman</p>
        <p>(314) 313-4703</p>
        <p>grohmanjp@gmail.com</p>
    </div>
);

export default ContactCard;