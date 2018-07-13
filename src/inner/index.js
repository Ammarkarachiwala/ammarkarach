import React from 'react';
import image from '../images/avatar.jpg'
const Inner = () => {
    return 	<div className="inner">
    <a href="/" className="image avatar"><img src={image} alt="" /></a>
    <h1><strong>I am Ammar Karachiwala,</strong>
    <br/> Welcome to my website. Please feel free to read more <a href="#aboutme" >about me</a>, or <a href="#experience" >experience</a>, 
    or you can check out my <a href='#resume' >resume</a>, or <a href='#contactme' >contact me</a></h1>
</div>
}

export default Inner;