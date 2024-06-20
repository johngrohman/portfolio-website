import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './contactcard.scss';

const ContactCard = () => (
    <div className='ContactCard'>
        <ul className='contactList'>
            <li className='contactRow'><a href='mailto:grohmanjp@gmail.com'><i className="bi-envelope"></i> Email: grohmanjp@gmail.com</a></li>
            <li className='contactRow'><a href='tel:+1 314-313-4703'><i className="bi-telephone"></i> Call: (314) 313-4703</a></li>
            <li className='contactRow'><a href='sms:+1 314-313-4703'><i className="bi-chat"></i> Text: (314) 313-4703</a></li>
            <li className='contactRow'><a href='https://www.linkedin.com/in/johngrohman/' target='_blank' rel='noreferrer'><i className="bi-linkedin"></i> Connect: Linkedin</a></li>
        </ul>
    </div>
);

export default ContactCard;