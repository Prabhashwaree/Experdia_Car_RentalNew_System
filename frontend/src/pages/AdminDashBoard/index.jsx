import * as React from 'react';
import { Button } from "@material-ui/core";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
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
import { NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./page/home"
import ManagePayment from "./page/managePayment";
import ManageBooking from "./page/manageBooking";
import ManageRate from "./page/manageRate";
import Management from "./page/management";
import ManageCar from "./page/manageCar";
import ManageCustomerBooking from "./page/manageCustomerBooking";
import ManageDriver from "./page/manageDriver";
import carLogo from '../../assets/img/carLogo.png';
import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HandymanIcon from '@mui/icons-material/Handyman';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';


 
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

export default function AdminDashBoardPages() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  

  const listItemData1 = [
    {label: "Home", link: "/", icon:<HomeIcon />},
    {label: "Manage Payment", link: "/ManagePayment", icon:<AttachMoneyIcon />},
    {label: "Manage Driver", link: "/ManageDriver", icon:<HandymanIcon />},
    {label: "Manage Rate", link: "/ManageRate", icon:<TrendingUpIcon />},
    
   ]
  

   const listItemData2 = [
    {label: "Manage Car", link: "/ManageCar", icon:<DirectionsCarIcon />},
    {label: "Manage Customer Booking", link: "/ManageCustomerBooking", icon:<SupportAgentIcon />},
    {label: "Management", link: "/Management", icon:<ManageAccountsIcon />},
    {label: "Manage Booking", link: "/ManageBooking", icon:<LibraryBooksIcon />}, 
    
   ]



  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar id="appBar" position="fixed" open={open} style={{backgroundColor:"#rgb(128, 128, 128)"}}>
        <Toolbar>
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
          <Button variant="Create account" style={{position: "relative",backgroundColor:"gray",left:"980px",zIndex:"1",width:"120px"}}>Log Out</Button>
          
        </Toolbar>

                

      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader id="toolBar">
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List id="toolBar">
              {listItemData1.map((item, i) => (
                
                <Button size="small"  style={{display:"block"}}onClick={() => handleDrawerClose()}>
                    <ListItem
                    exact
                    component={NavLink}
                    to={item.link}
                    key={i}
                    >
                    <ListItemIcon id="toolBar">{item.icon}</ListItemIcon>
                    <ListItemText id="toolBar">{item.label}</ListItemText>
                </ListItem>
                </Button>      
            ))}
      </List>

     
      <Divider />
        



      <Divider />
        <List id="toolBar">
              {listItemData2.map((item, i) => (
                
                <Button size="small"  style={{display:"block"}}onClick={() => handleDrawerClose()}>
                    <ListItem
                    exact
                    component={NavLink}
                    to={item.link}
                    key={i}
                    >
                    <ListItemIcon id="toolBar">{item.icon}</ListItemIcon>
                    <ListItemText id="toolBar">{item.label}</ListItemText>
                </ListItem>
                </Button>      
            ))}
      </List>

     
      <Divider />



        <List id="toolBar">
         
         <h1 style={{height:"138px",top:"80px",fontSize:"25px"}} disablePadding sx={{ display: 'block' }}>Total</h1>
         <Typography variant="h6" noWrap component="div" style={{position:"relative",top:"-55px",left:"65px",fontSize:"30px"}}>
          000.00/=
          </Typography>
        </List>

      </Drawer>

     

                
      <Box component="main" sx={{ flexGrow: 1, p: 3 }} style={{backgroundColor:"#F2F2F2",height:"694px"}}>
        <DrawerHeader />
 
                    <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/ManagePayment" element={<ManagePayment/>}/>
                    <Route exact path="/ManageDriver" element={<ManageDriver/>}/>
                    <Route exact path="/ManageCar" element={<ManageCar/>}/>
                    <Route exact path="/ManageRate" element={<ManageRate/>}/>
                    <Route exact path="/ManageCustomerBooking" element={<ManageCustomerBooking/>}/>
                    <Route exact path="/Management" element={<Management/>}/>
                    <Route exact path="/ManageBooking" element={<ManageBooking/>}/>
                    

                   </Routes>
      
      </Box>
    </Box>
  );
}
