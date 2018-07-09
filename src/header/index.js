import React from 'react';
import Inner from '../inner';
import Footer from '../footer';
import Particle from 'react-particles-js';

export default class Header extends React.Component {
    componentDidMount(){
    }
    render(){
        return <header id='header' >
            <Particle style={{ position: 'absolute', top: '0px', bottom: '0px', left: '0pp', right:'0px' }}  />

            <Inner />
            <Footer />
        </header>
    }
}
