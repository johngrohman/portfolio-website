import React from 'react';
import { CplusplusOriginal, PythonOriginal, JavascriptOriginal, TypescriptOriginal, Html5Original, Css3Original, RustOriginal, COriginal } from 'devicons-react';
import { Link } from 'react-router-dom';
import data from '../../data/FullProjects.json';
import './projects.scss';

export default function Projects()
{

    const icon_size = 25;

    const languge_icons = {
        'C++': <CplusplusOriginal size={icon_size} />,
        'C': <COriginal size={icon_size} />,
        'Python': <PythonOriginal size={icon_size}/>,
        'JavaScript': <JavascriptOriginal size={icon_size} />,
        'TypeScript': <TypescriptOriginal size={icon_size} />,
        'HTML': <Html5Original size={icon_size} />,
        'CSS': <Css3Original size={icon_size} />,
        'Rust': <RustOriginal size={icon_size} />,
    };

    return (
        <div className='projects'>
            <Link to='/' className='backarrow'><i className="rightarrow bi-arrow-left"></i> John Grohman</Link>
            <h1>Projects</h1>
            <br></br>
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Project</th>
                        <th>Description</th>
                        <th>Built with</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((project, index) => {
                            return (
                                <tr key={index} className='tablerow'>
                                    <td>{project.year}</td>
                                    <td className='projectName'><h4>{project.name}</h4></td>
                                    <td className='a' style={{color: 'gray'}}>{project.description}</td>
                                    <td className='a'>{project.languages.map((language, index) => (
                                        <p className='icon' key={index}>{languge_icons[language]}</p>
                                    ))}
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}