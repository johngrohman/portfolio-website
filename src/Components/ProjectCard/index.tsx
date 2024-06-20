import React from 'react';
import { CplusplusOriginal, PythonOriginal, JavascriptOriginal, TypescriptOriginal, Html5Original, Css3Original, RustOriginal, COriginal } from 'devicons-react';
import './projectcard.scss';

export default function ProjectCard({name, description, languages, url, color}: {name: string, description: string, languages: string[], url: string, color: string}) {

    const icon_size = 30;

    const languge_icons = {
        'C++': <CplusplusOriginal size={icon_size}/>,
        'C': <COriginal size={icon_size} />,
        'Python': <PythonOriginal size={icon_size}/>,
        'JavaScript': <JavascriptOriginal size={icon_size} />,
        'TypeScript': <TypescriptOriginal size={icon_size} />,
        'HTML': <Html5Original size={icon_size} />,
        'CSS': <Css3Original size={icon_size} />,
        'Rust': <RustOriginal size={icon_size} />,
    };

    if (!languages ){languages = [''];}
    
    return (
        <a href={url} target='blank'>
            <div className='ProjectCard'>
                <div className='colorBar' style={{backgroundColor: color}}></div>
                <h3>{name}</h3>
                <p style={{fontSize: '1em'}}>{description}</p>
                <div className='iconList'>
                    {
                        languages.map((language, index) => (
                            <p className='icon' key={index}>{languge_icons[language]}</p>
                        ))
                    }
                </div>
            </div>
        </a>
    );
}