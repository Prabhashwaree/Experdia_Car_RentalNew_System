import {styleSheet} from  "./style";
import { Component } from "react";
import {withStyles} from "@mui/styles";
import './home.css';
import Item from './Item';
import Carousel from "react-elastic-carousel";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import carLogo from '../../assets/img/carLogo.png';
import carSlide from '../../assets/img/carSlide.png';
import petrol from '../../assets/img/petrol.png';
import user from '../../assets/img/user.png';
import mainCarSet from '../../assets/img/mainCarSet.png';
import * as React from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';


const breakPoints=[{ width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },];
    // { width: 1200, itemsToShow: 4 },

export default function HomePage(){

    // ---------------------------(Main Section)------------------------
        //App bar section 

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        >
        <MenuItem>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="error">
                <MailIcon />
            </Badge>
            </IconButton>
            <p>Messages</p>
        </MenuItem>
        <MenuItem>
            <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
            >
            <Badge badgeContent={17} color="error">
                <NotificationsIcon />
            </Badge>
            </IconButton>
            <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            >
            <AccountCircle />
            </IconButton>
            <p>Profile</p>
        </MenuItem>
        </Menu>
    );



    

    return (

        <>
        
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" id="appBar">
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
            >



            
                
                <MenuIcon />
            </IconButton>
            <img src={carLogo} style={{width:"40px",height:"40px"}} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{position: "absolute",left:"130px"}}>
            <b>EXPERDIA Car Rental</b>
            </Typography>
            
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="error">
                    <MailIcon />
                </Badge>
                </IconButton>
                <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                >
                <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                </Badge>
                </IconButton>
                <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                >
                <AccountCircle />
                </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
                >
                <MoreIcon />
                </IconButton>
            </Box>
            </Toolbar>

            


            {/* --------------------container----------------------- */}

            <section>
                <div style={{position: "absolute",top:"65px",backgroundColor:"#22394E",width:"100%",height:"58vh"}}></div>
                <img id="mainCar" src={mainCarSet} style={{position: "absolute",top:"-80px",left:"50px",zIndex:"1" ,width:"1300px",height:"640px"}} />
                {/* <h1 style={{position: "absolute",top:"80px",left:"10px",zIndex:"1",color:"#5585D0"}}>CAR RENTAL DEALS IN SRI LANKA</h1> */}
                <Typography id="carRentalTopic" variant="h3" gutterBottom component="div">
                <b><i>CAR RENTAL DEALS <br/>IN SRI LANKA</i></b></Typography>

                <Typography variant="body1" gutterBottom style={{position: "absolute",top:"610px",left:"140px",zIndex:"1",color:"gray"}}>
                <b>EXPERDIA</b> is delighted to help you continue your journey in Sri Lanka with our premium fleet of up-to-date vehicles. We offer affordable rates on a diverse variety <br/>of different models to suit your budget and travel plans. Choose from our convertibles
                 and sports cars, sedans and compact cars, SUVs and vans.
                Use <br/> the quick-and-easy booking form above in order to instantly compare all vehicles and offers and make your car rental resevation today!
                </Typography>
            </section>




        {/* --------------------Car Rental Rate----------------------- */}
            <section>

            <div id="mainseperator"></div>
            <Typography variant="h3" gutterBottom component="div" style={{position: "absolute",top:"785px",left:"578px",zIndex:"1",color:"Black"}}>
                Car Rental Rate</Typography>

            
            <div className="rentalSlider">
                <Carousel breakPoints={breakPoints}>
                    <Item id="slideRectangles1">
                    <img src={carSlide} style={{position: "absolute",width:"4%",height:"58%",left:"5%"}} />
                    <Typography variant="h5" gutterBottom component="div" style={{position: "absolute",top:"7%",left:"1%",zIndex:"1"}}><b>Genaral Car</b></Typography>
                    <Typography variant="h6" gutterBottom component="div" style={{position: "absolute",top:"18%",left:"1%",zIndex:"1"}}>Suzuki Alto - Premium</Typography>
                    <Typography variant="subtitle1" gutterBottom component="div" style={{position: "absolute",top:"28%",left:"1%",zIndex:"1"}}>Manual</Typography>
                    <img src={user} style={{position: "absolute",left:"1%"}} />
                    <Typography variant="subtitle1" gutterBottom component="div" style={{position: "absolute",top:"46%",left:"1.8%",zIndex:"1"}}>5 Peoples</Typography>
                    {/* <Typography variant="subtitle1" gutterBottom component="div">Daily Rate Rs.2,500.00</Typography>
                    <Typography variant="subtitle1" gutterBottom component="div">Monthly Rate Rs.64,350.00</Typography>
                    <Typography variant="subtitle1" gutterBottom component="div">Free Km Day 100</Typography>
                    <Typography variant="subtitle1" gutterBottom component="div">Free Km Month 2400</Typography>
                    <Typography variant="subtitle1" gutterBottom component="div">Price per Extre Km Rs.30.00</Typography> */}
                        
                        </Item>



                    <Item id="slideRectangles2">Two</Item>
                    <Item id="slideRectangles3">Three</Item>
                    <Item id="slideRectangles4">Four</Item>
                    <Item id="slideRectangles5">Five</Item>
                    <Item id="slideRectangles6">Six</Item>
                    <Item id="slideRectangles7">Seven</Item>
                    <Item id="slideRectangles8">Eight</Item>
                    <Item id="slideRectangles9">Eight</Item>
                    <Item id="slideRectangles10">Eight</Item>
                </Carousel>
            </div>
            
            </section>



            {/* --------------------footer----------------------- */}
            <section>
                <div id="footerSeperator"></div>
                <Typography id="footerFirstLineWord"  variant="caption" display="block" gutterBottom>
                    Experdia, Inc. is not responsible for content on external Web sites.
                </Typography>
                <Typography id="footerSecondLineWord" variant="caption" display="block" gutterBottom>
                    © 2022 Experdia, Inc., an Expedia Group company. All rights reserved. 
                    Experdia and the internatinal Logo are trademarks or registered trademarks of Expedia,
                     Inc. CST# 2029030-50.
                </Typography>

                <div id="endFooterSeperator"></div>
            </section>

        </AppBar>
        {renderMobileMenu}
        {renderMenu}
        </Box>   

        <section>
            <h1 id="neth">nethmini</h1>
        </section>


</>

    );



}
