import React from 'react';
import ContactCard from '../../components/ContactCard';
import './contact.scss';
import SectionTitle from '../../components/SectionTitle';

const ContactMe = () => (
    <div className='ContactMe' id='contactme'>
        <SectionTitle title='Contact' color='#4CBB17' />
        <h1>Get in touch!</h1>
        <ContactCard />
    </div>
);

export default ContactMe;