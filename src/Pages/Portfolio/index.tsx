import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import ProjectCard from '../../Components/ProjectCard';
import 'bootstrap-icons/font/bootstrap-icons.css';
import repodata from '../../Data/PortfolioData.json';
import './portfolio.scss';

const Portfolio: React.FC = () => {

    return (
        <div className='portfolio' id='portfolio'>
            <SectionTitle title='Portfolio' color='#ff69b4 ' />
            <h1 className='PortfolioTitle'>Explore My Recent Projects</h1>
            <div className='cards'>
                {
                    repodata.map((project, index) => (
                        <ProjectCard name={project['name']} description={project['description']} languages={project['languages']} color={project['color']} key={index} />
                    ))
                }
            </div>
            <div className='projectarchive'>
                <a href='apple.com' target='_blank'>
                    <p>Project Archive <i className="rightarrow bi-arrow-right"></i></p>
                </a>
            </div>
        </div>
    );
};

export default Portfolio;
