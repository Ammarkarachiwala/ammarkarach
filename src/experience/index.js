import React from 'react';
import Position from './position';
import Company from './company';
import EOG from '../images/eog.png';
import EM from '../images/em.png';

const Experience = () => {
    return <section >
        <header class='major' >
            <h2>Experience</h2>
            <div >
                <Company image={EOG} name={'EOG Resources'} />
                <Position
                    position={'Senior Software Engineer'}
                    date={'Aug 2015 - present'}
                />
                <Position
                    position={'Application Developer'}
                    date={'Nov 2014 - Aug 2015'}
                />
                <Position
                    position={'Senior Associate Apps Developer'}
                    date={'Sep 2012 - Oct 2014'}
                />
                <p>
                Build and design application from the ground up. Involved in creating user requests and translate to software requirements. Currently building a suite of applications to manage, design and plan EOG's equipment management system. 
                </p>  
            </div>
            <div>
                <Company image={EM} name={'Erdos Miller'} />
            </div>
        </header>
    </section>
}

export default Experience;