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

                <Typography variant="body1" gutterBottom style={{position: "absolute",top:"630px",left:"145px",zIndex:"1",color:"gray"}}>
                <b>EXPERDIA</b> is delighted to help you continue your journey in Sri Lanka with our premium fleet of up-to-date vehicles. We offer affordable rates on a diverse variety <br/>of different models to suit your budget and travel plans. Choose from our convertibles
                 and sports cars, sedans and compact cars, SUVs and vans.
                Use <br/> the quick-and-easy booking form above in order to instantly compare all vehicles and offers and make your car rental resevation today!
                </Typography>
            </section>




        {/* --------------------Car Rental Rate----------------------- */}
            <section>

            {/* <div id="mainseperator"></div> */}
            <Typography variant="h3" gutterBottom component="div" style={{position: "absolute",top:"785px",left:"578px",zIndex:"1",color:"black"}}>
                Car Rental Rate</Typography>

            
            <div className="rentalSlider">
                <Carousel breakPoints={breakPoints}>
                    <Item>
                        <div class="sliderDiv">
                        <img class='imgcar' src={carSlide}/>
                        <p><b>Genaral Car</b></p>  
                        <h6>Suzuki Alto - Premium</h6>
                         <h4>Manual</h4>  
                         <span  class="pepoleImg"> 
                            <img src={user}/>
                            <p>5 Peoples</p>
                         </span>

                         <span class="filingStationImg">
                            <img src={petrol} style={{width:"",height:"8%"}}/>
                            <p>Petrol</p>
                         </span>  

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

                        
                    </Item>



                    <Item>
                        <div class="sliderDiv">
                        <img class='imgcar' src={carSlide}/>
                        <p><b>Genaral Car</b></p>  
                        <h6>Suzuki Alto K10</h6>
                         <h4>Auto</h4>  
                         <span  class="pepoleImg"> 
                            <img src={user}/>
                            <p>4 Peoples</p>
                         </span>

                         <span class="filingStationImg">
                            <img src={petrol} style={{width:"",height:"8%"}}/>
                            <p>Petrol</p>
                         </span>  

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

                    </Item>

                    

                    <Item>
                        <div class="sliderDiv">
                        <img class='imgcar' src={carSlide}/>
                        <p><b>Genaral Car</b></p>  
                        <h6>Suzuki Celerio - Premium</h6>
                         <h4>Auto</h4>  
                         <span  class="pepoleImg"> 
                            <img src={user}/>
                            <p>4 Peoples</p>
                         </span>

                         <span class="filingStationImg">
                            <img src={petrol} style={{width:"",height:"8%"}}/>
                            <p>Petrol</p>
                         </span>  

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
        
                    </Item>




                    <Item>
                        <div class="sliderDiv">
                        <img class='imgcar' src={carSlide}/>
                        <p><b>Genaral Car</b></p>  
                        <h6>Perodua (Daihatsu) Axia</h6>
                         <h4>Auto</h4>  
                         <span  class="pepoleImg"> 
                            <img src={user}/>
                            <p>5 Peoples</p>
                         </span>

                         <span class="filingStationImg">
                            <img src={petrol} style={{width:"",height:"8%"}}/>
                            <p>Petrol</p>
                         </span>  

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
 
                    </Item>



                    <Item>
                        <div class="sliderDiv">
                        <img class='imgcar' src={carSlide}/>
                        <p><b>Genaral Car</b></p>  
                        <h6>Toyota Prius Aqua</h6>
                         <h4>Auto</h4>  
                         <span  class="pepoleImg"> 
                            <img src={user}/>
                            <p>5 Peoples</p>
                         </span>

                         <span class="filingStationImg">
                            <img src={petrol} style={{width:"",height:"8%"}}/>
                            <p>Petrol</p>
                         </span>  

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

                    </Item>



                    <Item>
                        <div class="sliderDiv">
                        <img class='imgcar' src={carSlide}/>
                        <p><b>Premium Car</b></p>  
                        <h6>Toyota Corolla Axio</h6>
                         <h4>Manual</h4>  
                         <span  class="pepoleImg"> 
                            <img src={user}/>
                            <p>5 Peoples</p>
                         </span>

                         <span class="filingStationImg">
                            <img src={petrol} style={{width:"",height:"8%"}}/>
                            <p>Petrol</p>
                         </span>  

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

                    </Item>



                    <Item>
                        <div class="sliderDiv">
                        <img class='imgcar' src={carSlide}/>
                        <p><b>Premium Car</b></p>  
                        <h6>Perodua Bezza Prime</h6>
                         <h4>Auto</h4>  
                         <span  class="pepoleImg"> 
                            <img src={user}/>
                            <p>5 Peoples</p>
                         </span>

                         <span class="filingStationImg">
                            <img src={petrol} style={{width:"",height:"8%"}}/>
                            <p>Petrol</p>
                         </span>  

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

                    </Item>




                    <Item>
                        <div class="sliderDiv">
                        <img class='imgcar' src={carSlide}/>
                        <p><b>Premium Car</b></p>  
                        <h6>Toyota Allion NZT</h6>
                         <h4>Manual</h4>  
                         <span  class="pepoleImg"> 
                            <img src={user}/>
                            <p>5 Peoples</p>
                         </span>

                         <span class="filingStationImg">
                            <img src={petrol} style={{width:"",height:"8%"}}/>
                            <p>Petrol</p>
                         </span>  

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

                    </Item>




                    <Item>
                        <div class="sliderDiv">
                        <img class='imgcar' src={carSlide}/>
                        <p><b>Premium Car</b></p>  
                        <h6>Toyota Axio NKR</h6>
                         <h4>Manual</h4>  
                         <span  class="pepoleImg"> 
                            <img src={user}/>
                            <p>5 Peoples</p>
                         </span>

                         <span class="filingStationImg">
                            <img src={petrol} style={{width:"",height:"8%"}}/>
                            <p>Petrol</p>
                         </span>  

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

                    </Item>




                    <Item>
                        <div class="sliderDiv">
                        <img class='imgcar' src={carSlide}/>
                        <p><b>Luxury Car</b></p>  
                        <h6>Toyota Premio</h6>
                         <h4>Manual</h4>  
                         <span  class="pepoleImg"> 
                            <img src={user}/>
                            <p>5 Peoples</p>
                         </span>

                         <span class="filingStationImg">
                            <img src={petrol} style={{width:"",height:"8%"}}/>
                            <p>Petrol</p>
                         </span>  

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

                    </Item>


                    <Item>
                        <div class="sliderDiv">
                        <img class='imgcar' src={carSlide}/>
                        <p><b>Luxury Car</b></p>  
                        <h6>Mercedes BMW i8</h6>
                         <h4>Manual</h4>  
                         <span  class="pepoleImg"> 
                            <img src={user}/>
                            <p>5 Peoples</p>
                         </span>

                         <span class="filingStationImg">
                            <img src={petrol} style={{width:"",height:"8%"}}/>
                            <p>Petrol</p>
                         </span>  

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

                    </Item>


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
