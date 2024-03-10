import '../App.css'
import React from 'react';
import Navbar from "./../Components/Navbar";
import HeroSection from "./../Components/HeroSection";
import landingpage from "./../images/landingpage.png";

function Home () {
    return (
        <section className="hero">

            <Navbar />
            <HeroSection />

            
        </section>
    )
}
export default Home;