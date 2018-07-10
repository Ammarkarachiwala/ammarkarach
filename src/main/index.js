import React from 'react';
import AboutMe from '../about-me';
import Experience from '../experience';
import Education from '../education';
import ResumeButton from '../resume-button';
import Contact from '../contact';

const Main = () => {
    return <div id='main' >
        <AboutMe />
        <Experience />
        <Education />
        <ResumeButton />
        <Contact />
</div>
}

export default Main;