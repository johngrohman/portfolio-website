import React from 'react';
import './sectiontitle.scss';

export default function SectionTitle({title, color}: {title: string, color: string}) {
    return (
        <div className='SectionTitle' style={{color: color}}>
            <h4 className='sectionHeaderText' style={{color: color}}>{title}</h4>
        </div>
    );
}