import React from 'react';
import "./HeroSection.css";
import '../App.css';
import { Button } from './Button';
import logo from './logo.png'; // Tell webpack this JS file uses this image
import landingpage from "./../images/landingpage.png";

// const handleClick = () => {
//   window.location.href = "www.google.com";
// }

export default function HeroSection() {
    
  return (
    <div className ='hero-container'>


        <img src={logo} alt="Logo" style={{ width: '75px', height: '75px' }} />
        <h1>skillsumo</h1>

        <p>Bringing a world of interests and friendships in front of you.</p>
        <div className="hero-btns">
            <Button
            link='/create-profile'
            className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            // onClick={{handleClick}}
            >
                Get Started
            </Button>

        </div>


    </div>
  )
}