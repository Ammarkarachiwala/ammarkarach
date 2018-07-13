import React from 'react';
import Position from './position';
import Company from './company';
import EOG from '../images/eog.png';
import EM from '../images/em.png';

const Experience = () => {
    return <section >
        <header className='major' >
            <h2>Experience</h2>
            <div >
                <Company image={EOG} name={'EOG Resources'} />
                <Position
                    position={'Sr. Software Engineer'}
                    date={'Aug 2017'}
                />
                <Position
                    position={'Sr. Apps Developer'}
                    date={'Aug 2015'}
                />
                <Position
                    position={'Apps Developer'}
                    date={'Nov 2014'}
                />
                <Position
                    position={'Sr. Asso. Apps Developer'}
                    date={'Sep 2012'}
                />
                <p>
                Build and design applications from the ground up. 
                Involved in creating user requests and translate to software requirements. 
                Currently building a suite of applications to manage, design and plan EOG's equipment management system. 
                </p>  
            </div>
            <hr className='minor' />
            <div>
                <Company image={EM} name={'Erdos Miller'} />
                <Position
                    position={'Developer'}
                    date={'Dec 2011'}
                />
                <p>
                   Maintained and enhanced micro controller code on Measurement While Drilling devices. 
                   Built applications that read the data generated by these devices to visualize them
                </p>
            </div>
        </header>
    </section>
}

export default Experience;