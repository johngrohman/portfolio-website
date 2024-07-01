import React, { useState, useEffect } from 'react';
import './toggle.scss';

export default function Toggle() {

    // Get current theme of system and set it as default value for dark mode state

    const getCurrentTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [isDark, setIsDark] = useState(getCurrentTheme());
    
    const mqListener = ((e: { matches: boolean | ((prevState: boolean) => boolean); }) => {setIsDark(e.matches);});


    // For detecting if the system preferences changes while rendered
    useEffect(() => {
        
        // Returns MediaQueryList object that we can use to determine if the document matches the query object
        const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Event listener waiting color scheme change
        darkThemeMq.addEventListener('change', mqListener);

        setIsDark(darkThemeMq.matches);
    }, []);

    // For CSS styling. Variables will be updated if dark is used
    useEffect(() => {

        if (isDark) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }

    }, [isDark]);

    return (
        <div className='toggle'>
            {
                isDark?(
                    <a onClick={() => setIsDark(false)} className='themebutton'>
                        <i className="ti bi-moon-fill"></i>
                    </a>
                ):(
                    <a onClick={() => setIsDark(true)} className='themebutton'>
                        <i className="ti bi-brightness-high"></i>
                    </a>
                )
            }
        </div>
    );
}