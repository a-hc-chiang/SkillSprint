import '../App.css'
import React from 'react';
import Navbar from "./../Components/Navbar";
import HeroSection from "./../Components/HeroSection";
import landingpage from "./../images/landingpage.png";
import Cards from './../Components/Cards';
import CardItem from './../Components/CardItem';

function Home () {
    return (
        <section className="hero">
            <Navbar buttonText="log in" backgroundColor = "#333bd4"/>
            <HeroSection />

            
        </section>
    )
}
export default Home;