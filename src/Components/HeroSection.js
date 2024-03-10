import React from 'react';
import "./HeroSection.css";
import '../App.css';
import { Button } from './Button';


export default function HeroSection() {
  return (
    <div className ='hero-container'>
        {/* <video src='/videos/video-2.mp4'  */}
        {/* autoPlay loop muted/> */}
        <h1>SkillSumo</h1>
        <p>Your next skill begins here</p>
        <div className="hero-btns">
            <Button
            className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            >
                GET STARTED
            </Button>

        </div>


    </div>
  )
}