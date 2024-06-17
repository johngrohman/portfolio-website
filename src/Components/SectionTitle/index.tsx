import React from 'react';
import './sectiontitle.scss';

export default function SectionTitle({title, color}: {title: string, color: string}) {
    return (
        <div className='SectionTitle' style={{color: color}}>
            <h3 style={{color: color}}>{title}</h3>
        </div>
    );
}