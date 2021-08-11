import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video3.mp4' autoPlay loop muted/>
            <h1>LEND A BOOK </h1>
            <p>Do you want book or video? </p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='bts--outline' buttonSize='btm--large'>
                 GET STARTED
                </Button>
                
                
       
            </div>
            
        </div>
    )
}

export default HeroSection
