import {styleSheet} from  "./style";
import { Component } from "react";
import {withStyles} from "@mui/styles";
import './dashBoard.css';
import facebook from '../../assets/img/facebook.png';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import carLogo from '../../assets/img/carLogo.png';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Autocomplete from '@mui/material/Autocomplete';



const top100Films = [
  { label: 'Empty' },
  ];

  const car = [
    { label: 'Empty' },
    ];


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);




export default function DashBoardPage(){

            const theme = useTheme();
        const [open, setOpen] = React.useState(false);

        const handleDrawerOpen = () => {
            setOpen(true);
        };

        const handleDrawerClose = () => {
            setOpen(false);
        };




    
    return (

        <>

            <section>

            <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar id="appBar" position="fixed" open={open} style={{backgroundColor:"#rgb(128, 128, 128)"}}>
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <img src={carLogo} style={{position: "absolute",left:"80px",top:"19%",zIndex:"1",width:"40px",height:"40px"}} />
          <Typography variant="h6" noWrap component="div" style={{position: "absolute",left:"130px"}}>
          EXPERDIA Car Rental
          </Typography>
          <Typography variant="h7" noWrap component="div" style={{position: "relative",left:"1030px"}}>
         Date
          </Typography>
          <Typography variant="h7" noWrap component="div" style={{position: "relative",left:"1110px"}}>
          Time
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader id="toolBar">
          <IconButton onClick={handleDrawerClose} style={{backgroundColor:"white"}}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List id="toolBar">
          {['Driver Management', 'Car Management', 'Booking Management', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
               >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                  >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} id="toolBar"/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List id="toolBar">
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon  /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>


        <Divider />
        <List id="toolBar">
         
         <h1 style={{height:"195px",top:"80px"}} disablePadding sx={{ display: 'block' }}>Total</h1>
         <Typography variant="h6" noWrap component="div" style={{position:"relative",top:"-100px",left:"35px",fontSize:"30px"}}>
          000,000.00/=
          </Typography>
        </List>

      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }} style={{backgroundColor:"#F2F2F2",height:"694px"}}>
        <DrawerHeader />


{/*-------------------------------- payment details section --------------------------------------*/}

                <section id="dashboardReectangle1">
                      <div >
                      <Typography variant="h6" noWrap component="div" style={{position: "absolute",left:"28px",top:"25px"}}>
                         Payment Details
                        </Typography>
                          <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={top100Films}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Booking ID" />}
                            style={{position: "relative",top:"13px",backgroundColor:"transparent",color:"white",left:"250px",zIndex:"1",width:"25%"}}/>

                      <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={car}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Car No" />}
                            style={{position: "relative",top:"-43px",backgroundColor:"transparent",color:"white",left:"410px",zIndex:"1",width:"25%"}}/>

                            <TextField id="outlined-basic" label="Payment ID" variant="outlined" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}/>
                            <TextField id="outlined-basic" label="currently KM" variant="outlined" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"25px",zIndex:"1",width:"35%"}}/>
                            <TextField id="outlined-basic" label="Ride KM" variant="outlined" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}/>
                            <TextField id="outlined-basic" label="Total KM" variant="outlined" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"25px",zIndex:"1",width:"35%"}}/>
                            <TextField id="outlined-basic" label="Status" variant="outlined" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}/>
                            <TextField id="outlined-basic" label="Total Price" variant="outlined" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"25px",zIndex:"1",width:"35%"}}/>
                            <Button variant="contained" color="success" style={{position: "relative",top:"-140px",left:"37px",width:"20%",backgroundColor:"Green"}}>Save</Button>
                            <Button variant="contained" color="success"style={{position: "relative",top:"-136px",backgroundColor:"Blue",left:"481px",width:"20%"}}>Update</Button>
                            <Button variant="contained" color="success"style={{position: "relative",top:"-80px",backgroundColor:"red",left:"356px",width:"20%"}}>Delete</Button>
                            
      

                      </div>
                </section>



{/*--------------------------------   Car details section --------------------------------------*/}


                
                <section id="dashboardReectangle2">
                  <div>

                  <Typography variant="h6" noWrap component="div" style={{position: "absolute",left:"28px",top:"25px"}}>
                         Add Car Details
                        </Typography>
                  <TextField id="outlined-basic" label="Register ID" variant="outlined" style={{position: "relative",top:"13px",backgroundColor:"transparent",color:"white",left:"250px",zIndex:"1",width:"25%"}}/>
                            
                      <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={car}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Rental Rate ID" />}
                            style={{position: "relative",top:"-43px",backgroundColor:"transparent",color:"white",left:"410px",zIndex:"1",width:"25%"}}/>

                            <TextField id="outlined-basic" label="Payment ID" variant="outlined" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}/>
                            <TextField id="outlined-basic" label="currently KM" variant="outlined" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"25px",zIndex:"1",width:"35%"}}/>
                            <TextField id="outlined-basic" label="Ride KM" variant="outlined" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}/>
                            <TextField id="outlined-basic" label="Total KM" variant="outlined" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"25px",zIndex:"1",width:"35%"}}/>
                            <TextField id="outlined-basic" label="Status" variant="outlined" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}/>
                            <TextField id="outlined-basic" label="Total Price" variant="outlined" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"25px",zIndex:"1",width:"35%"}}/>
                            <Button variant="contained" color="success" style={{position: "relative",top:"-140px",left:"37px",width:"20%",backgroundColor:"Green"}}>Save</Button>
                            <Button variant="contained" color="success"style={{position: "relative",top:"-136px",backgroundColor:"Blue",left:"481px",width:"20%"}}>Update</Button>
                            <Button variant="contained" color="success"style={{position: "relative",top:"-80px",backgroundColor:"red",left:"356px",width:"20%"}}>Delete</Button>
                            
      



                  </div>
                </section>




                <section id="dashboardReectangle3">
                  <div></div>
                </section>

                <section id="dashboardReectangle4">
                  <div></div>
                </section>
      
      
      </Box>
    </Box>

            </section>

        </>
    
    );

}