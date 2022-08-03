import {styleSheet} from  "./style";
import { Component } from "react";
import {withStyles} from "@mui/styles";
import './home.css';
import Item from '../Home/Item';
import Carousel from "react-elastic-carousel";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SuzukiAltoPremium1 from '../../assets/img/SuzukiAltoPremium1.jpg';
import SuzukiAltoPremium2 from '../../assets/img/SuzukiAltoPremium2.jpg';
import SuzukiAltoPremium3 from '../../assets/img/SuzukiAltoPremium3.jpg';
import SuzukiAltoPremium4 from '../../assets/img/SuzukiAltoPremium4.jpg';

import SuzukiAltoK1 from '../../assets/img/SuzukiAltoK1.jpg';
import SuzukiAltoK2 from '../../assets/img/SuzukiAltoK2.jpg';
import SuzukiAltoK3 from '../../assets/img/SuzukiAltoK3.jpg';
import SuzukiAltoK4 from '../../assets/img/SuzukiAltoK4.jpg';

import SuzukiCelerioPremium1 from '../../assets/img/SuzukiCelerioPremium1.jpg';
import SuzukiCelerioPremium2 from '../../assets/img/SuzukiCelerioPremium2.jpg';
import SuzukiCelerioPremium3 from '../../assets/img/SuzukiCelerioPremium3.jpg';
import SuzukiCelerioPremium4 from '../../assets/img/SuzukiCelerioPremium4.jpg';

import PeroduaAxia1 from '../../assets/img/PeroduaAxia1.jpg';
import PeroduaAxia2 from '../../assets/img/PeroduaAxia2.jpg';
import PeroduaAxia3 from '../../assets/img/PeroduaAxia3.jpg';
import PeroduaAxia4 from '../../assets/img/PeroduaAxia4.jpg';

import ToyotaPriusAqua1 from '../../assets/img/ToyotaPriusAqua1.jpg';
import ToyotaPriusAqua2 from '../../assets/img/ToyotaPriusAqua2.jpg';
import ToyotaPriusAqua3 from '../../assets/img/ToyotaPriusAqua3.jpg';
import ToyotaPriusAqua4 from '../../assets/img/ToyotaPriusAqua4.jpg';

import ToyotaCorollaAxio1 from '../../assets/img/ToyotaCorollaAxio1.jpg';
import ToyotaCorollaAxio2 from '../../assets/img/ToyotaCorollaAxio2.jpg';
import ToyotaCorollaAxio3 from '../../assets/img/ToyotaCorollaAxio3.jpg';
import ToyotaCorollaAxio4 from '../../assets/img/ToyotaCorollaAxio4.jpg';

import PeroduaBezzPrime1 from '../../assets/img/PeroduaBezzPrime1.jpg';
import PeroduaBezzPrime2 from '../../assets/img/PeroduaBezzPrime2.jpg';
import PeroduaBezzPrime3 from '../../assets/img/PeroduaBezzPrime3.jpg';
import PeroduaBezzPrime4 from '../../assets/img/PeroduaBezzPrime4.jpg';

import ToyotaAllionNZT1 from '../../assets/img/ToyotaAllionNZT1.jpg';
import ToyotaAllionNZT2 from '../../assets/img/ToyotaAllionNZT2.jpg';
import ToyotaAllionNZT3 from '../../assets/img/ToyotaAllionNZT3.jpg';
import ToyotaAllionNZT4 from '../../assets/img/ToyotaAllionNZT4.jpg';

import ToyotaAxioNKR1 from '../../assets/img/ToyotaAxioNKR1.jpg';
import ToyotaAxioNKR2 from '../../assets/img/ToyotaAxioNKR2.jpg';
import ToyotaAxioNKR3 from '../../assets/img/ToyotaAxioNKR3.jpg';
import ToyotaAxioNKR4 from '../../assets/img/ToyotaAxioNKR4.jpg';

import ToyotaPremio1 from '../../assets/img/ToyotaPremio1.jpg';
import ToyotaPremio2 from '../../assets/img/ToyotaPremio2.jpg';
import ToyotaPremio3 from '../../assets/img/ToyotaPremio3.jpg';
import ToyotaPremio4 from '../../assets/img/ToyotaPremio4.jpg';

import MercedesBMWi1 from '../../assets/img/MercedesBMWi1.jpg';
import MercedesBMWi2 from '../../assets/img/MercedesBMWi2.jpg';
import MercedesBMWi3 from '../../assets/img/MercedesBMWi3.jpg';
import MercedesBMWi4 from '../../assets/img/MercedesBMWi4.jpg';

import carLogo from '../../assets/img/carLogo.png';
import orderBackGround from '../../assets/img/orderBackGround.jpeg';
import carDiscrip from '../../assets/img/carDiscrip.png';
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
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Autocomplete from '@mui/material/Autocomplete';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';




const top100Films = [ 
    {label: 'Yes'},
    { label: 'No'},
    
];


const ariaLabel = { 'aria-label': 'description' };


const breakPoints=[{ width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },];
    // { width: 1200, itemsToShow: 4 },




export default function HomePage(){

    // ---------------------------(Main Section)------------------------
        //App bar section 

    // const [value, setValue] = React.useState(new Date());

    const [value, setValue] = React.useState('B-');
    const handleChange = (event) => {
        setValue(event.target.value);
      };

    
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
        <MenuItem onClick={handleMenuClose}><Link to = "/SignInPage"> Sign in </Link></MenuItem>
        <MenuItem onClick={handleMenuClose}>My Profile</MenuItem>
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
        <AppBar position="fixed" id="appBar">
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

            
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
        </Box>  


            {/* --------------------container----------------------- */}

            <section>
                
                <div style={{position: "absolute",top:"65px",backgroundColor:"#ff5f00",width:"100%",height:"58vh"}}></div>
                <img id="mainCar" src={mainCarSet} style={{position: "absolute",top:"-60px",left:"50px",zIndex:"1" ,width:"1300px",height:"640px"}} />
                
                {/* <TextField id="filled-basic" label="Date" variant="filled" style={{position: "relative",top:"158px",backgroundColor:"transparent",color:"white",left:"1000px",zIndex:"1",width:"11%"}}/>
                <TextField id="filled-basic" label="Time" variant="filled" style={{position: "relative",top:"158px",backgroundColor:"transparent",color:"white",left:"1020px",zIndex:"1",width:"11%"}}/>
                <div style={{position: "absolute",top:"65px",backgroundColor:"white",width:"80%",border:"1px solid black" ,height:"55vh",zIndex:"1",top:"210px",left:"150px"}}></div>
                    <img src={orderBackGround} style={{position: "absolute",top:"65px",width:"80%",border:"5px solid black" ,height:"55vh",zIndex:"1",top:"210px",left:"150px"}}/>
                
                    
                    <TextField id="outlined-multiline-flexible" label="Booking ID" multiline maxRows={4} value={value} onChange={handleChange} style={{position: "relative",border:"5px solid white",borderRadius:"5px",top:"230px",width:"6%",backgroundColor:"white",left:"-120px",zIndex:"1"}}/>
                    
                    <Button variant="contained" style={{position: "relative",top:"250px",backgroundColor:"green",width:"8%",left:"730px",zIndex:"1"}}>Conform</Button>
                    <Button variant="contained" style={{position: "relative",top:"250px",width:"8%",left:"480px",zIndex:"1"}}>Book</Button>
                    
                    <TextField id="outlined-basic" label="PicUp Location" variant="outlined"  style={{position: "relative",border:"5px solid white",borderRadius:"5px",top:"320px",backgroundColor:"white",left:"-450px",zIndex:"1"}}/>
                    <TextField id="outlined-basic" label="PicUp Date" variant="outlined"  style={{position: "relative",border:"5px solid white",borderRadius:"5px",top:"320px",backgroundColor:"white",left:"-418px",zIndex:"1"}}/>
                    <TextField id="outlined-basic" label="PicUp Time" variant="outlined"  style={{position: "relative",border:"5px solid white",borderRadius:"5px",top:"320px",backgroundColor:"white",left:"-388px",zIndex:"1"}}/>
                    <Autocomplete disablePortal id="combo-box-demo" options={top100Films} sx={{ width: 300 }} renderInput={(params) => <TextField {...params} label="Do you need a driver?" />} style={{position: "relative",border:"5px solid white",width:"16%",borderRadius:"5px",top:"254px",backgroundColor:"white",left:"995px",zIndex:"1"}}/>
                 
                    <TextField id="outlined-basic" label="Drop Date" variant="outlined"  style={{position: "relative",border:"5px solid white",borderRadius:"5px",top:"268px",backgroundColor:"white",left:"210px",zIndex:"1"}}/>
                    <TextField id="outlined-basic" label="Drop Time" variant="outlined"  style={{position: "relative",border:"5px solid white",borderRadius:"5px",top:"268px",backgroundColor:"white",left:"239px",zIndex:"1"}}/>
                    <TextField id="outlined-basic" label="Rent Duration" variant="outlined"  style={{position: "relative",border:"5px solid white",borderRadius:"5px",top:"268px",backgroundColor:"white",left:"269px",zIndex:"1"}}/>
                    <TextField id="outlined-basic" label="Car Count" variant="outlined"  style={{position: "relative",border:"5px solid white",borderRadius:"5px",top:"268px",backgroundColor:"white",left:"299px",zIndex:"1"}}/><br/>


                    <TextField id="outlined-basic" label="LossDamagePrice" variant="outlined"  style={{position: "relative",border:"5px solid white",borderRadius:"5px",top:"280px",backgroundColor:"white",left:"210px",zIndex:"1"}}/>
                    <TextField id="outlined-basic" label="Customer NIC" variant="outlined"  style={{position: "relative",border:"5px solid white",borderRadius:"5px",top:"280px",backgroundColor:"white",left:"239px",zIndex:"1"}}/>
                    <TextField id="outlined-basic" label="Payment ID" variant="outlined"  style={{position: "relative",border:"5px solid white",borderRadius:"5px",top:"280px",backgroundColor:"white",left:"269px",zIndex:"1"}}/>
                    <TextField id="outlined-basic" label="Booking Status" variant="outlined"  style={{position: "relative",border:"5px solid white",borderRadius:"5px",top:"280px",backgroundColor:"white",left:"299px",zIndex:"1"}}/>

                     */}
                    {/* <TextField id="outlined-basic" label="PicUp Date" variant="outlined"  style={{position: "relative",border:"5px solid white",borderRadius:"5px",top:"320px",backgroundColor:"white",left:"705px",zIndex:"1"}}/> */}
                    





                    {/* <DesktopDatePicker
                            label="For desktop"
                            value={value}
                            minDate={new Date('2017-01-01')}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                            /> */}

                   

                <Typography id="carRentalTopic" variant="h3" gutterBottom component="div">
                <b><i>CAR RENTAL DEALS <br/>IN SRI LANKA</i></b></Typography>

            
            </section>

 {/* --------------------select  car discription----------------------- */}

            <section id="selectDiscription">
                        <Typography id="carRentalTopic" variant="h5" gutterBottom component="div" style={{position: "relative",top:"10px",left:"20px",zIndex:"1",color:"rgb(146, 145, 145)"}}>
                                <b>Choose the vehicle of your choice from the above vehicles,<br/> fill in your relevant details and book now.</b>
                            </Typography>
                        
                        </section>

            
            


        {/* --------------------Car Rental Rate----------------------- */}
            <section>

            {/* <div id="mainseperator"></div> */}
            <Typography variant="h4" gutterBottom component="div" style={{position: "absolute",top:"695px",left:"190px",zIndex:"1",color:"#025502"}}>
                Car Rental Rate</Typography>

            
            <div>
                    
                        <div class="sliderDiv">
                       
                        <h1 style={{position: "relative",top:"5px",left:"220px",top:"540px"}}><b>Genaral Car</b></h1>
                        <div class="mainTopic1">  
                            <h6>Suzuki Alto - Premium</h6>
                            <h4>Manual</h4>
                         </div> 
                         <Button variant="contained" style={{position: "relative",top:"580px",width:"6%",left:"239px",zIndex:"1",backgroundColor:"#08a042"}}><Link to = "BookingPage">Booking</Link></Button> 
                         
                         <span  class="pepoleImg"> 
                            <img src={user} style={{position: "relative",top:"530px",left:"420px"}}/>
                            <p style={{position: "relative",top:"500px",left:"560px"}}>5 Peoples</p>
                         </span>

                         <span class="filingStationImg">
                            <img src={petrol} style={{width:"",height:"8%",position: "relative",top:"10px",left:"12px"}}/>
                            <p style={{position: "relative",top:"-12px",left:"69.5px"}}>Petrol</p>
                         </span>  
                        <div class="paymentRs">
                            <h5>Daily Rate <b>Rs.2,500.00</b></h5> 

                            <span class="monthlyRate">  
                                <h5>Monthly Rate <b>Rs.64,350.00</b></h5>
                                <p>Free Km Month <b>2400</b></p>
                            </span>


                            <span class="freeDay">  
                                <h5>Free Km Day <b>100</b></h5>
                                <p>Extre Km <b>Rs.30.00</b></p>
                            </span>
                         </div>

                        </div>

                        
                    



                    
                        <div class="sliderDiv">
                       
                        <h1 style={{position: "relative",top:"5px",left:"220px",top:"540px"}}><b>Genaral Car</b></h1>  
                        
                         <div class="mainTopic2">  
                            <h6>Suzuki Alto K10</h6>
                            <h4>Auto</h4> 
                         </div> 
                         <Button variant="contained" style={{position: "relative",top:"580px",width:"6%",left:"239px",zIndex:"1",backgroundColor:"#08a042"}}><Link to = "BookingPage">Booking</Link></Button> 
                         
                         
                         <span  class="pepoleImg"> 
                            <img src={user} style={{position: "relative",top:"530px",left:"420px"}}/>
                            <p style={{position: "relative",top:"500px",left:"560px"}}>5 Peoples</p>
                         </span>

                         <span class="filingStationImg">
                            <img src={petrol} style={{width:"",height:"8%",position: "relative",top:"10px",left:"12px"}}/>
                            <p style={{position: "relative",top:"-12px",left:"69.5px"}}>Petrol</p>
                         </span>   
                         <div class="paymentRs">
                            <h5>Daily Rate <b>Rs.3,000.00</b></h5> 

                            <span class="monthlyRate">  
                                <h5>Monthly Rate <b>Rs.71,390.00</b></h5>
                                <p>Free Km Month <b>2400</b></p>
                            </span>


                            <span class="freeDay">  
                                <h5>Free Km Day <b>100</b></h5>
                                <p>Extre Km <b>Rs.35.00</b></p>
                            </span>
                            </div>
                        </div>

                   

                    

                    
                        <div class="sliderDiv">
                       
                        <h1 style={{position: "relative",top:"5px",left:"220px",top:"520px"}}><b>Genaral Car</b></h1>

                         <div class="mainTopic3">  
                            <h6>Suzuki Celerio - Premium</h6>
                            <h4>Auto</h4> 
                         </div> 
                         <Button variant="contained" style={{position: "relative",top:"560px",width:"6%",left:"239px",zIndex:"1",backgroundColor:"#08a042"}}><Link to = "BookingPage">Booking</Link></Button> 
                         
                         
                         <span  class="pepoleImg"> 
                            <img src={user} style={{position: "relative",top:"530px",left:"420px"}}/>
                            <p style={{position: "relative",top:"500px",left:"560px"}}>5 Peoples</p>
                         </span>

                         <span class="filingStationImg">
                            <img src={petrol} style={{width:"",height:"8%",position: "relative",top:"10px",left:"12px"}}/>
                            <p style={{position: "relative",top:"-12px",left:"69.5px"}}>Petrol</p>
                         </span>
                         <div class="paymentRs">
                            <h5>Daily Rate <b>Rs.3,300.00</b></h5> 

                            <span class="monthlyRate">  
                                <h5>Monthly Rate <b>Rs.77,220.00</b></h5>
                                <p>Free Km Month <b>2400</b></p>
                            </span>


                            <span class="freeDay">  
                                <h5>Free Km Day <b>100</b></h5>
                                <p>Extre Km <b>Rs.35.00</b></p>
                            </span>
                            </div>
                        </div>
        
                    




                    
                        <div class="sliderDiv">
                       
                        <h1 style={{position: "relative",top:"5px",left:"220px",top:"510px"}}><b>Genaral Car</b></h1>  

                         <div class="mainTopic4">  
                            <h6>Perodua (Daihatsu) Axia</h6>
                            <h4>Auto</h4> 
                         </div> 
                         <Button variant="contained" style={{position: "relative",top:"550px",width:"6%",left:"239px",zIndex:"1",backgroundColor:"#08a042"}}><Link to = "BookingPage">Booking</Link></Button> 
                         
                         <span  class="pepoleImg"> 
                            <img src={user} style={{position: "relative",top:"500px",left:"420px"}}/>
                            <p style={{position: "relative",top:"468px",left:"560px"}}>5 Peoples</p>
                         </span>

                         <span class="filingStationImg">
                            <img src={petrol} style={{width:"",height:"8%",position: "relative",top:"-20px",left:"12px"}}/>
                            <p style={{position: "relative",top:"-40px",left:"69.5px"}}>Petrol</p>
                         </span>  
                         <div class="paymentRs">
                            <h5>Daily Rate <b>Rs.3,800.00</b></h5> 

                            <span class="monthlyRate">  
                                <h5>Monthly Rate <b>Rs.90,200.00</b></h5>
                                <p>Free Km Month <b>2400</b></p>
                            </span>


                            <span class="freeDay">  
                                <h5>Free Km Day <b>100</b></h5>
                                <p>Extre Km <b>Rs.35.00</b></p>
                            </span>
                        </div>
                        </div>
 
                    



                   
                        <div class="sliderDiv">
                        
                        <h1 style={{position: "relative",top:"5px",left:"220px",top:"500px"}}><b>Genaral Car</b></h1>
 
                         <div class="mainTopic5">  
                            <h6>Toyota Prius Aqua</h6>
                            <h4>Auto</h4> 
                         </div> 
                         <Button variant="contained" style={{position: "relative",top:"540px",width:"6%",left:"239px",zIndex:"1",backgroundColor:"#08a042"}}><Link to = "BookingPage">Booking</Link>g</Button> 
                         
                         <span  class="pepoleImg"> 
                            <img src={user} style={{position: "relative",top:"500px",left:"420px"}}/>
                            <p style={{position: "relative",top:"468px",left:"560px"}}>5 Peoples</p>
                         </span>

                         <span class="filingStationImg">
                            <img src={petrol} style={{width:"",height:"8%",position: "relative",top:"-20px",left:"12px"}}/>
                            <p style={{position: "relative",top:"-40px",left:"69.5px"}}>Petrol</p>
                         </span>     
                         <div class="paymentRs1">
                            <h5>Daily Rate <b>Rs.5,000.00</b></h5> 

                            <span class="monthlyRate">  
                                <h5>Monthly Rate <b>Rs.110,330.00</b></h5>
                                <p>Free Km Month <b>2400</b></p>
                            </span>


                            <span class="freeDay">  
                                <h5>Free Km Day <b>100</b></h5>
                                <p>Extre Km <b>Rs.49.50</b></p>
                            </span>
                        </div>
                        </div>

                    



                    
                        <div class="sliderDiv">
                        
                        <h1 style={{position: "relative",top:"5px",left:"220px",top:"490px"}}><b>Premium Car</b></h1> 

                         <div class="mainTopic6">  
                            <h6>Toyota Corolla Axio</h6>
                            <h4>Manual</h4>  
                         </div> 
                         <Button variant="contained" style={{position: "relative",top:"530px",width:"6%",left:"239px",zIndex:"1",backgroundColor:"#08a042"}}><Link to = "BookingPage">Booking</Link></Button> 
                         
                         <span  class="pepoleImg"> 
                            <img src={user} style={{position: "relative",top:"500px",left:"420px"}}/>
                            <p style={{position: "relative",top:"468px",left:"560px"}}>5 Peoples</p>
                         </span>

                         <span class="filingStationImg">
                            <img src={petrol} style={{width:"",height:"8%",position: "relative",top:"-20px",left:"12px"}}/>
                            <p style={{position: "relative",top:"-40px",left:"69.5px"}}>Petrol</p>
                         </span>      
                         <div class="paymentRs1">
                            <h5>Daily Rate <b>Rs.5,500.00</b></h5> 

                            <span class="monthlyRate">  
                                <h5>Monthly Rate <b>Rs.120,330.00</b></h5>
                                <p>Free Km Month <b>2400</b></p>
                            </span>


                            <span class="freeDay">  
                                <h5>Free Km Day <b>100</b></h5>
                                <p>Extre Km <b>Rs.49.50</b></p>
                            </span>
                        </div>
                        </div>

                    



                    
                        <div class="sliderDiv">
                       
                        <h1 style={{position: "relative",top:"5px",left:"220px",top:"480px"}}><b>Premium Car</b></h1> 

                         <div class="mainTopic7">  
                            <h6>Perodua Bezza Prime</h6>
                            <h4>Auto</h4>    
                         </div> 
                         <Button variant="contained" style={{position: "relative",top:"530px",width:"6%",left:"239px",zIndex:"1",backgroundColor:"#08a042"}}><Link to = "BookingPage">Booking</Link></Button> 
                         
                         <span  class="pepoleImg"> 
                            <img src={user} style={{position: "relative",top:"500px",left:"420px"}}/>
                            <p style={{position: "relative",top:"468px",left:"560px"}}>5 Peoples</p>
                         </span>

                         <span class="filingStationImg">
                            <img src={petrol} style={{width:"",height:"8%",position: "relative",top:"-20px",left:"12px"}}/>
                            <p style={{position: "relative",top:"-40px",left:"69.5px"}}>Petrol</p>
                         </span>    
                         <div class="paymentRs1">
                            <h5>Daily Rate <b>Rs.5,500.00</b></h5> 

                            <span class="monthlyRate">  
                                <h5>Monthly Rate <b>Rs.120,330.00</b></h5>
                                <p>Free Km Month <b>2400</b></p>
                            </span>


                            <span class="freeDay">  
                                <h5>Free Km Day <b>100</b></h5>
                                <p>Extre Km <b>Rs.49.50</b></p>
                            </span>
                        </div>
                        </div>

                    




                    
                        <div class="sliderDiv">
                       
                        <h1 style={{position: "relative",top:"5px",left:"220px",top:"470px"}}><b>Premium Car</b></h1> 

                         <div class="mainTopic8">  
                            <h6>Toyota Allion NZT</h6>
                            <h4>Manual</h4>   
                         </div> 
                         <Button variant="contained" style={{position: "relative",top:"520px",width:"6%",left:"239px",zIndex:"1",backgroundColor:"#08a042"}}><Link to = "BookingPage">Booking</Link></Button> 
                         
                         <span  class="pepoleImg"> 
                            <img src={user} style={{position: "relative",top:"470px",left:"420px"}}/>
                            <p style={{position: "relative",top:"437px",left:"560px"}}>5 Peoples</p>
                         </span>

                         <span class="filingStationImg">
                            <img src={petrol} style={{width:"",height:"8%",position: "relative",top:"-50px",left:"12px"}}/>
                            <p style={{position: "relative",top:"-70px",left:"69.5px"}}>Petrol</p>
                         </span>  
                         <div class="paymentRs1">
                         <h5>Daily Rate <b>Rs.5,800.00</b></h5> 

                         <span class="monthlyRate">  
                            <h5>Monthly Rate <b>Rs.155,760.00</b></h5>
                            <p>Free Km Month <b>2400</b></p>
                         </span>


                         <span class="freeDay">  
                            <h5>Free Km Day <b>100</b></h5>
                            <p>Extre Km <b>Rs.60.00</b></p>
                         </span>
                    </div>
                        </div>

                    




                    
                        <div class="sliderDiv">
                        
                        <h1 style={{position: "relative",top:"5px",left:"220px",top:"460px"}}><b>Premium Car</b></h1> 

                         <div class="mainTopic9">  
                            <h6>Toyota Axio NKR</h6>
                            <h4>Manual</h4>   
                         </div> 
                         <Button variant="contained" style={{position: "relative",top:"501px",width:"6%",left:"239px",zIndex:"1",backgroundColor:"#08a042"}}><Link to = "BookingPage">Booking</Link></Button> 
                         
                         <span  class="pepoleImg"> 
                            <img src={user} style={{position: "relative",top:"470px",left:"420px"}}/>
                            <p style={{position: "relative",top:"437px",left:"560px"}}>5 Peoples</p>
                         </span>

                         <span class="filingStationImg">
                            <img src={petrol} style={{width:"",height:"8%",position: "relative",top:"-50px",left:"12px"}}/>
                            <p style={{position: "relative",top:"-70px",left:"69.5px"}}>Petrol</p>
                         </span>
                         <div class="paymentRs2">
                            <h5>Daily Rate <b>Rs.6,000.00</b></h5> 

                            <span class="monthlyRate">  
                                <h5>Monthly Rate <b>Rs.175,230.00</b></h5>
                                <p>Free Km Month <b>2400</b></p>
                            </span>


                            <span class="freeDay">  
                                <h5>Free Km Day <b>100</b></h5>
                                <p>Extre Km <b>Rs.65.00</b></p>
                            </span>
                            </div>
                        </div>

                    




                    
                        <div class="sliderDiv">
                       
                        <h1 style={{position: "relative",top:"5px",left:"220px",top:"450px"}}><b>Luxury Car</b></h1> 

                    
                         <div class="mainTopic10">  
                            <h6>Toyota Premio</h6>
                            <h4>Manual</h4>  
                         </div> 
                         <Button variant="contained" style={{position: "relative",top:"490px",width:"6%",left:"239px",zIndex:"1",backgroundColor:"#08a042"}}><Link to = "BookingPage">Booking</Link></Button> 
                         
                         <span  class="pepoleImg"> 
                            <img src={user} style={{position: "relative",top:"440px",left:"420px"}}/>
                            <p style={{position: "relative",top:"408px",left:"560px"}}>5 Peoples</p>
                         </span>

                         <span class="filingStationImg">
                            <img src={petrol} style={{width:"",height:"8%",position: "relative",top:"-70px",left:"12px"}}/>
                            <p style={{position: "relative",top:"-90px",left:"69.5px"}}>Petrol</p>
                         </span> 
                         <div class="paymentRs2">
                            <h5>Daily Rate <b>Rs.10,000.00</b></h5> 

                            <span class="monthlyRate">  
                                <h5>Monthly Rate <b>Rs.227,150.00</b></h5>
                                <p>Free Km Month <b>2400</b></p>
                            </span>


                            <span class="freeDay">  
                                <h5>Free Km Day <b>100</b></h5>
                                <p>Extre Km <b>Rs.85.00</b></p>
                            </span>
                        </div>
                        </div>

                    


                    
                        <div class="sliderDiv">
                        
                        <h1 style={{position: "relative",top:"5px",left:"220px",top:"430px"}}><b>Luxury Car</b></h1> 

                         <div class="mainTopic11">  
                            <h6>Mercedes BMW i8</h6>
                            <h4>Manual</h4>  
                         </div> 
                         <Button variant="contained" style={{position: "relative",top:"480px",width:"6%",left:"239px",zIndex:"1",backgroundColor:"#08a042"}}><Link to = "BookingPage">Booking</Link></Button> 
                         
                         <span  class="pepoleImg"> 
                            <img src={user} style={{position: "relative",top:"440px",left:"420px"}}/>
                            <p style={{position: "relative",top:"408px",left:"560px"}}>5 Peoples</p>
                         </span>

                         <span class="filingStationImg">
                            <img src={petrol} style={{width:"",height:"8%",position: "relative",top:"-70px",left:"12px"}}/>
                            <p style={{position: "relative",top:"-90px",left:"69.5px"}}>Petrol</p>
                         </span>
                         <div class="paymentRs2">
                                    <h5>Daily Rate <b>Rs.18,000.00</b></h5> 

                                    <span class="monthlyRate">  
                                    <h5>Monthly Rate <b>Rs.300,000.00</b></h5>
                                    <p>Free Km Month <b>2400</b></p>
                                </span>


                                <span class="freeDay">  
                                    <h5>Free Km Day <b>100</b></h5>
                                    <p>Extre Km <b>Rs.100.00</b></p>
                                </span>
                            </div>
                        </div>

                    </div>
                
                



                

                <div id="footerSeperator1"></div> 
                    <div class="carImgSlider">
                        <Carousel breakPoints={breakPoints}>
                            <Item><img class='sliderCar' src={SuzukiAltoPremium1}/></Item>
                            <Item><img class='sliderCar' src={SuzukiAltoPremium2}/></Item>
                            <Item><img class='sliderCar' src={SuzukiAltoPremium3}/></Item>
                            <Item><img class='sliderCar' src={SuzukiAltoPremium4}/></Item>
                        </Carousel>
                    </div>


                    <div id="footerSeperator1"></div>
                    <div class="carImgSlider">
                        <Carousel breakPoints={breakPoints}>
                            <Item><img class='sliderCar' src={SuzukiAltoK1}/></Item>
                            <Item><img class='sliderCar' src={SuzukiAltoK2}/></Item>
                            <Item><img class='sliderCar' src={SuzukiAltoK3}/></Item>
                            <Item><img class='sliderCar' src={SuzukiAltoK4}/></Item>
                        </Carousel>
                    </div>



                    <div id="footerSeperator1"></div>
                    <div class="carImgSlider">
                        <Carousel breakPoints={breakPoints}>
                        <Item><img class='sliderCar' src={SuzukiCelerioPremium1}/></Item>
                            <Item><img class='sliderCar' src={SuzukiCelerioPremium2}/></Item>
                            <Item><img class='sliderCar' src={SuzukiCelerioPremium3}/></Item>
                            <Item><img class='sliderCar' src={SuzukiCelerioPremium4}/></Item>
                        </Carousel>
                    </div>



                    <div id="footerSeperator1"></div>
                    <div class="carImgSlider">
                        <Carousel breakPoints={breakPoints}>
                             <Item><img class='sliderCar' src={PeroduaAxia1}/></Item>
                            <Item><img class='sliderCar' src={PeroduaAxia2}/></Item>
                            <Item><img class='sliderCar' src={PeroduaAxia3}/></Item>
                            <Item><img class='sliderCar' src={PeroduaAxia4}/></Item>
                        </Carousel>
                    </div>


                    <div id="footerSeperator1"></div>
                    <div class="carImgSlider">
                        <Carousel breakPoints={breakPoints}>
                        <Item><img class='sliderCar' src={ToyotaPriusAqua1}/></Item>
                            <Item><img class='sliderCar' src={ToyotaPriusAqua2}/></Item>
                            <Item><img class='sliderCar' src={ToyotaPriusAqua3}/></Item>
                            <Item><img class='sliderCar' src={ToyotaPriusAqua4}/></Item>
                        </Carousel>
                    </div>


                    <div id="footerSeperator1"></div>
                    <div class="carImgSlider">
                        <Carousel breakPoints={breakPoints}>
                        <Item><img class='sliderCar' src={ToyotaCorollaAxio1}/></Item>
                            <Item><img class='sliderCar' src={ToyotaCorollaAxio2}/></Item>
                            <Item><img class='sliderCar' src={ToyotaCorollaAxio3}/></Item>
                            <Item><img class='sliderCar' src={ToyotaCorollaAxio4}/></Item>
                        </Carousel>
                    </div>


                    <div id="footerSeperator1"></div>
                    <div class="carImgSlider">
                        <Carousel breakPoints={breakPoints}>
                        <Item><img class='sliderCar' src={PeroduaBezzPrime1}/></Item>
                            <Item><img class='sliderCar' src={PeroduaBezzPrime2}/></Item>
                            <Item><img class='sliderCar' src={PeroduaBezzPrime3}/></Item>
                            <Item><img class='sliderCar' src={PeroduaBezzPrime4}/></Item>
                        </Carousel>
                    </div>


                    <div id="footerSeperator1"></div>
                    <div class="carImgSlider">
                        <Carousel breakPoints={breakPoints}>
                        <Item><img class='sliderCar' src={ToyotaAllionNZT1}/></Item>
                            <Item><img class='sliderCar' src={ToyotaAllionNZT2}/></Item>
                            <Item><img class='sliderCar' src={ToyotaAllionNZT3}/></Item>
                            <Item><img class='sliderCar' src={ToyotaAllionNZT4}/></Item>
                        </Carousel>
                    </div>



                    <div id="footerSeperator1"></div>
                    <div class="carImgSlider">
                        <Carousel breakPoints={breakPoints}>
                        <Item><img class='sliderCar' src={ToyotaAxioNKR1}/></Item>
                            <Item><img class='sliderCar' src={ToyotaAxioNKR2}/></Item>
                            <Item><img class='sliderCar' src={ToyotaAxioNKR3}/></Item>
                            <Item><img class='sliderCar' src={ToyotaAxioNKR4}/></Item>
                        </Carousel>
                    </div>


                    <div id="footerSeperator1"></div>
                    <div class="carImgSlider">
                        <Carousel breakPoints={breakPoints}>
                        <Item><img class='sliderCar' src={ToyotaPremio1}/></Item>
                            <Item><img class='sliderCar' src={ToyotaPremio2}/></Item>
                            <Item><img class='sliderCar' src={ToyotaPremio3}/></Item>
                            <Item><img class='sliderCar' src={ToyotaPremio4}/></Item>
                        </Carousel>
                    </div>



                    <div id="footerSeperator1"></div>
                    <div class="carImgSlider">
                        <Carousel breakPoints={breakPoints}>
                        <Item><img class='sliderCar' src={MercedesBMWi1}/></Item>
                            <Item><img class='sliderCar' src={MercedesBMWi2}/></Item>
                            <Item><img class='sliderCar' src={MercedesBMWi3}/></Item>
                            <Item><img class='sliderCar' src={MercedesBMWi4}/></Item>
                        </Carousel>
                    </div>
                   


                    {/* <Typography variant="body1" gutterBottom style={{position: "absolute",top:"4030px",left:"145px",textAlign:"justify",zIndex:"1",color:"gray"}}>
                <b>EXPERDIA</b> is delighted to help you continue your journey in Sri Lanka with our premium fleet of up-to-date vehicles. We offer affordable rates on a diverse variety <br/>of different models to suit your budget and travel plans. Choose from our convertibles
                 and sports cars, sedans and compact cars, SUVs and vans.
                Use <br/> the quick-and-easy booking form above in order to instantly compare all vehicles and offers and make your car rental resevation today!
                </Typography> */}
            
            </section>
 



{/* --------------------Experdiya  car discription----------------------- */}

<section id="carDiscription">

                
<Typography id="carRentalTopic" variant="h4" gutterBottom component="div" style={{position: "relative",top:"-2120px",left:"110px",zIndex:"1",color:"rgb(241, 136, 75)"}}>
    <b>ENJOY A ROAD TRIP THROUGH<br/> PARADISE WITH CAR RENTAL IN<br/> SRI LANKA</b>
</Typography>

<Typography variant="body1" gutterBottom style={{position: "relative",top:"-2073px",left:"110px",zIndex:"1",color:"black"}}>
    Whichever model you choose for your Sri Lanka car rental you<br/> can enhance your experience with our useful extras. Great deals <br/>on numerous upgrades are available to help you have an optimal<br/>
     drive. Prearrange your rental online or over the phone and include<br/> optional features as you book.
     You can tack on a child seat, GPS,<br/> additional driver coverage and more. Please note Experdia cannot<br/> guarantee you to receive an exact car model, but you will receive an <br/>equivalent vehicle in your
      chosen car category.
</Typography>

<img src={carDiscrip} style={{position: "relative",top:"-2530px",left:"680px",zIndex:"1",width:"50%",height:"60%"}}/>

</section>










            {/* --------------------footer----------------------- */}
            <section>
                <div id="sliderSeperetor1"></div>
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
 



</>

    );



}
