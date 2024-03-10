// import logo from './logo.svg';
import React from 'react';

import {useState} from 'react'; 
import {useEffect} from 'react';
import Navbar from "./Components/Navbar";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/AppBar';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import HeroSection from './Components/HeroSection';

function App() {
  return (
    <>
    <Navbar />
    <h1> hi</h1>
    <HeroSection />
    </>
  );
}

export default App;

