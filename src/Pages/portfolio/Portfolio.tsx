import React, { useState, useEffect } from 'react';
import './portfolio.css';
import SectionTitle from '../../Components/sectiontitle/section-title.tsx';
import ProjectCard from '../../Components/project-card/project-card.tsx';

interface DataItem {
    name: string,
    description: string,
    languages_url: string,
}

const Portfolio = () => {
    const [data, setData] = useState<DataItem[]>([]);

    const projects = ['VisSortAlgo', 'traceroutemapper', 'GroceryList', 'puck-parser']

    useEffect(() => {
        const repoloop = async () => {
            for (let i = 0; i < projects.length; i++) {
                try {
                    const response = await fetch('https://api.github.com/repos/johngrohman/' + projects[i]);
                    if (!response.ok) {
                      throw new Error('Network response was not ok');
                    }
                    const jsonData = await response.json();
                    setData(oldData => [
                        ...oldData,
                        {
                            name: jsonData["name"],
                            description: jsonData["description"],
                            languages_url: jsonData["languages_url"],
                        }]);
                  } catch (error) {
                    console.error('Error fetching data:', error);
                  }
            }
            console.log(data)
        }
        repoloop();
    }, []);


    return (
        <div>
        <div className='Portfolio' id="portfolio">
            <SectionTitle title="portfolio" color="#00FFFF" />
                <h1 className='PortfolioTitle'>Explore My Recent Projects</h1>
                <div className='cards'>
                {
                    data.map((project, index) => (
                        <ProjectCard name={project["name"]} description={project["description"]} key={index} />
                    ))
                }
                </div>
            
        </div>
        <hr></hr>
        </div>
    )
}

export default Portfolio;