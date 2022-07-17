import {styleSheet} from  "./style";
import { Component } from "react";
import {withStyles} from "@mui/styles";
import './home.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import carLogo from '../../assets/img/carLogo.png';


import * as React from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';



export default function HomePage(){
    
    const [anchorEl, setAnchorEl] = React.useState(null);
  
   
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    

    

    
        // const{classes}=this.props;
        return(


            // ---------------------------(Main Section)------------------------
            //App bar section 
            // style={{position: "absolute",right:"80px",top:"7px"}}>
            <section>
               <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" id="appBar">
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src={carLogo} style={{width:"40px",height:"40px"}} />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{position: "absolute",left:"130px"}}>
                        <b>EXPERDIA Car Rental</b>
                    </Typography>
                    

                    {/* //right... */}
                    <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                style={{position: "absolute",right:"80px",top:"7px"}}>
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
               anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
                    



                    
                    {/* <Button color="inherit" style={{position: "absolute",right:"80px"}}>Login</Button> */}
                    </Toolbar>
                </AppBar>
                </Box>
            </section>
           
        );
    
}
