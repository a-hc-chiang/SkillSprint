import '../App.css'
import React from 'react';
import Navbar from "./../Components/Navbar";
import HeroSection from "./../Components/HeroSection";
import landingpage from "./../images/landingpage.png";

function Home () {
    return (
        <>
            <Navbar />
            <HeroSection />
            <div style={{ backgroundImage: `url(${landingpage})`, height: '100vh', backgroundSize: 'cover' }}></div>

            
        </>
    )
}
export default Home;