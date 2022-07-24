import {styleSheet} from  "./style";
import { Component } from "react";
import {withStyles} from "@mui/styles";
import './driverShedule.css';
import carLogo from '../../assets/img/carLogo.png';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';


const booking = [
    { label: 'Empty' },
    ];
  
    const driver = [
      { label: 'Empty' },
      ];


export default function DriverShedulePage(){

    
    return (

        <>

        {/* --------------------------loging----------------------- */}
        <section>

            <div id="navivar"></div>

            <img src={carLogo} style={{position: "absolute",left:"80px",top:"1.9%",zIndex:"1",width:"40px",height:"40px"}} />
            <h1 style={{position: "absolute",left:"1360px",top:"2.8%",zIndex:"1",width:"40px",height:"40px",fontSize:"20px",fontWeight:"100",color:"white"}}>Back</h1>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{position: "absolute",left:"130px",top:"2.5%",zIndex:"1",color:"white"}}>
            <b>EXPERDIA Car Rental</b>
            </Typography>

            <section>
        <div id="driverSection">
        <Typography variant="h4" noWrap component="div" style={{position: "absolute",left:"30px",top:"80px"}}>
           Driver Shedule
          </Typography>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={booking}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Booking ID" />}
              style={{position: "relative",top:"13px",backgroundColor:"transparent",color:"white",left:"630px",zIndex:"1",width:"25%"}}/>

        <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={driver}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Driver NIC" />}
              style={{position: "relative",top:"-43px",backgroundColor:"transparent",color:"white",left:"395px",zIndex:"1",width:"25%"}}/>

              <TextField id="outlined-basic" label="Date" variant="outlined" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}/>
              <TextField id="outlined-basic" label="Time" variant="outlined" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"25px",zIndex:"1",width:"35%"}}/>
              <Button variant="contained" color="success" style={{position: "relative",top:"-25px",left:"35px",width:"20%",backgroundColor:"Green"}}>Save</Button>
              <TextField id="outlined-basic" label="Status" variant="outlined" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}/>
              <TextField id="outlined-basic" label="Total KM" variant="outlined" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"25px",zIndex:"1",width:"35%"}}/>
              <Button variant="contained" color="success"style={{position: "relative",top:"-25px",backgroundColor:"Blue",left:"35px",width:"20%",zIndex:"1"}}>Update</Button>
              <TextField id="outlined-basic" label="Status" variant="outlined" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}/>
              <TextField id="outlined-basic" label="Total Price" variant="outlined" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"25px",zIndex:"1",width:"35%"}}/>
              <Button variant="contained" color="success"style={{position: "relative",top:"-25px",backgroundColor:"red",left:"35px",width:"20%"}}>Delete</Button>
        
              
              
              
       
       
       
        </div>
  </section>

        </section>

       
        </>

    );



}
