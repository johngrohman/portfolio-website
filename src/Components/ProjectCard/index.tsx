import React, {useState, useEffect } from 'react';
import { CplusplusOriginal, PythonOriginal, JavascriptOriginal, TypescriptOriginal, Html5Original, Css3Original, RustOriginal, COriginal } from 'devicons-react';
import './projectcard.scss';

export default function ProjectCard({name, description}: {name: string, description: string}) {

    const [languages, setLanguages] = useState([]);

    const languge_icons = {
        'C++': <CplusplusOriginal size={35}/>,
        'C': <COriginal size={35} />,
        'Python': <PythonOriginal size={35}/>,
        'JavaScript': <JavascriptOriginal size={35} />,
        'TypeScript': <TypescriptOriginal size={35} />,
        'HTML': <Html5Original size={35} />,
        'CSS': <Css3Original size={35} />,
        'Rust': <RustOriginal size={35} />,
    }

    useEffect(() => {
        const languagesLookUp = async () => {
            try {
                const response = await fetch('https://api.github.com/repos/johngrohman/' + name + '/languages');
                if (!response.ok) {
                  throw new Error('Network response was not ok' + response);
                }
                const jsonData = await response.json();
                const dataArray = Object.keys(jsonData)
                setLanguages(dataArray);
              } catch (error) {
                console.error('Error fetching data:', error);
              }
        }
        languagesLookUp();
    }, [])

    return (
        <a href={'https://github.com/johngrohman/'+name} target='blank'>
            <div className='ProjectCard'>
                <h3>{name}</h3>
                <p style={{fontSize: "1em"}}>{description}</p>
                {
                    languages.map((language, index) => (
                        <p className='icon'>{languge_icons[language]}</p>
                    ))
                }
            </div>
        </a>
    )
}