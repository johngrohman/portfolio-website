import React from 'react';
import ContactCard from '../../Components/ContactCard';
import './contact.scss';
import SectionTitle from '../../Components/SectionTitle';

const ContactMe = () => (
    <div className='ContactMe' id='contactme'>
        <SectionTitle title='contact' color='pink' />
        <h1>Contact-Me</h1>
        <ContactCard />
    </div>
);

export default ContactMe;