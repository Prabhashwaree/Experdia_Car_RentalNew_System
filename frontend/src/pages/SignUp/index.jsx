
import {styleSheet} from  "./style";
import { Component } from "react";
import {withStyles} from "@mui/styles";
import './signUp.css';
import carLogo from '../../assets/img/carLogo.png';
import linkPhone from '../../assets/img/linkPhone.png';
import googel from '../../assets/img/googel.png';
import facebook from '../../assets/img/facebook.png';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';


const top100Films = [ 
    {label: 'Administor'},
    { label: 'Driver'},
    { label: 'Customer'},
];


export default function SignUpPage(){

    
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

            <div id="loginSection">
                <h1>Create Account</h1>

                <p style={{textAlign:"left",margin:"auto",left:"570px",position: "relative"}}>Use a minimum of 10 characters, including uppercase letters,<br/> lowercase letters and numbers.</p>

                <TextField id="outlined-basic" label="User Name" variant="outlined" style={{position: "relative",top:"95px",zIndex:"1",width:"380px"}}/><br/>
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    style={{position: "relative",top:"110px",zIndex:"1",width:"380px"}}/><br/>
                
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Movie" />}
                    style={{position: "relative",top:"128px",zIndex:"1",width:"380px",textAlign:"center",margin:"auto"}}/>
                
                
                
                <Button variant="Continue with account" style={{position: "relative",top:"145px",backgroundColor:"lightBlue" ,zIndex:"1",width:"380px"}}>Contained</Button><br/>
                
            
                <div style={{position: "relative",top:"162px",zIndex:"1",width:"380px",height:"1px",left:"570px",backgroundColor:"rgb(212, 212, 212)"}}></div>
                <p style={{position: "relative",fontSize:"14px",top:"180px"}}>By signing in or creating an account, you agree with our <b style={{color:"rgb(58, 87, 255)"}}>Terms &<br/> conditions and Privacy statement</b></p>
                <div style={{position: "relative",top:"198px",zIndex:"1",width:"380px",height:"1px",left:"570px",backgroundColor:"rgb(212, 212, 212)"}}></div>
                <p style={{position: "relative",fontSize:"14px",top:"227px"}}>All rights reserved.<br/>Copyright (2022 - 2023) - Booking.com™</p>
            </div>

        </section>

       
        </>

    );



}
