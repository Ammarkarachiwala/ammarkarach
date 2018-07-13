import React from 'react';
import UH from '../images/uh.png';
import MU from '../images/mu.png';
import Company from '../experience/company';
import Position from '../experience/position';

const Education = () => {
    return <section>
            <header className='major' >
                <h2>Education</h2>
                <div>
                    <Company image={UH} name={'University of Houston'} />
                    <Position
                        position={"Master's Degree Computer Science"}
                        date={'2009 - 2011'} 
                     />
                </div>
                <hr className="minor" />
                <div>
                    <Company image={MU} name={'Mumbai University'} />
                    <Position
                        position={"Bacherlor of Engineering, Computer Engineering"}
                        date={'2005 - 2009'} 
                     />
                </div>
            </header>
        </section>
}

export default Education;