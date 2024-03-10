import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from './logo.png'; // Tell webpack this JS file uses this image;
import { useNavigate } from "react-router-dom";



export default function ButtonAppBar() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/login"); 
  }

  return (
    <div className ='navbar-container'>
 <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton 
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ mr: 2 }}
          >
            <img src={logo} alt="Logo" style={{ width: '50px', height: '50px' }} />

          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            skillsumo
          </Typography>
          <Button color="inherit" onClick={handleSubmit}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>


    </div>
   
  );
}