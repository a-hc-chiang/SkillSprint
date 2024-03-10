import React from 'react';
import "./HeroSection.css";
import '../App.css';
import { Button } from './Button';
import logo from './logo.png'; // Tell webpack this JS file uses this image
import landingpage from "./../images/landingpage.png";
import mascot from './mascot.png';

// '// const handleClick = () => {
//   window.location.href = "www.google.com";
// }

export default function HeroSection() {
    
  return (
    <div className = 'background'>

<div className = 'flex-container'>


<div className ='hero-container'>
<img src={logo} alt="Logo" style={{ width: '135px', height: '130px' }} />
<h1>rizzsumo</h1>
<p>Bringing a world of interests and friendships in front of you.</p>
<div className="hero-btns">
    <Button
    link='/create-profile'
    className='btns' 
    buttonStyle='btn--outline'
    buttonSize='btn--large'
    >
        Get Started
    </Button>
</div>
</div>


<div className='mascot-container'>
  <img src={mascot} alt="mascot" style={{ width: '893px', height: '845px' }} />
  </div>


</div>

    </div>

     

 

  )
}