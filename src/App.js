// import logo from './logo.svg';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/AppBar';

import {useState} from 'react'; 
import {useEffect} from 'react';
import Navbar from "./Components/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';



function App() {
  return (
    <Navbar />
    // <React.Fragment>
    //   <AppBar position="fixed">
    //     <Toolbar>{"skillsumo"}</Toolbar>
    //   </AppBar>
    //   <Toolbar />
    // </React.Fragment>
  );
}

export default App;

