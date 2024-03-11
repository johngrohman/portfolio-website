import React from 'react';
import './section-title.css';

export default function SectionTitle({title, color}) {
    return (
        <div className='SectionTitle' style={{color: color}}>
            <h3 style={{color: color}}>{title}</h3>
        </div>
    )
}