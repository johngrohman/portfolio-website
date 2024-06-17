import React from 'react';
import AboutCard from '../../Components/AboutCard';
import JSON_data from '../../Data/AboutData.json';
import './about.scss';

const AboutMe: React.FC = () => {
    // const [aboutDataJson, setAboutDataJson] = useState();

    return (
        <div className='AboutMe' id='aboutme'>
            <h1>About-Me</h1>
            <p className='bio'>Welcome! My name is John and I&apos;m currently studying computer science at Missouri S&T. Here&apos;s some more about my involvement on campus:</p>
            {
                JSON_data.map((val, index) => {
                    return (
                        <AboutCard
                            {...val}
                            key={index}
                        />
                    );
                })
            }
        </div>
    );
};

export default AboutMe;
