import React from 'react';
import Email from '../email';
import Tel from '../telephone';

const Contact = () => {
    return <section>
        <header className='major' >
            <h2>Contact</h2>
            <Email />
            <Tel />
        </header>
    </section>
}

export default Contact;