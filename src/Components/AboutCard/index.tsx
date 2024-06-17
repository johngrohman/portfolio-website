import React from 'react';
import './aboutcard.scss';

function AboutCard ({image, title, role, bullets}: {image: string, title: string, role: string, bullets: Array<string>}, key: number) {
    return (
        <div className='AboutCard' key={key}>
            <div className='AboutCardHeader'>
                <img src={image} alt={title} className='AboutCardImage'/>
                <div className='AboutCardHeaderText'>
                    <h1>{title}</h1>
                    <h2>{role}</h2>
                </div>
            </div>
            <ul>
                {
                    bullets.map((bullet, index) => {
                        return (
                            <li key={index}>{bullet}</li>
                        );
                    })
                }
            </ul>
        </div>
    );
}


export default AboutCard;