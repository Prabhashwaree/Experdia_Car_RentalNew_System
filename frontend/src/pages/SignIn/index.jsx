import {styleSheet} from  "./style";
import { Component } from "react";
import {withStyles} from "@mui/styles";
import './login.css';
import carLogo from '../../assets/img/carLogo.png';
import linkPhone from '../../assets/img/linkPhone.png';
import googel from '../../assets/img/googel.png';
import facebook from '../../assets/img/facebook.png';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



export default function SignInPage(){

    
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
                <h1>Sign in</h1>
                <TextField id="outlined-basic" label="User Name" variant="outlined" style={{position: "relative",top:"55px",zIndex:"1",width:"380px"}}/><br/>
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    style={{position: "relative",top:"70px",zIndex:"1",width:"380px"}}/><br/>
                <Button variant="Continue with account" style={{position: "relative",top:"85px",backgroundColor:"lightBlue" ,zIndex:"1",width:"380px"}}>Continue with account</Button><br/>
                <div style={{position: "relative",top:"115px",zIndex:"1",width:"98.5px",height:"1px",left:"570px",backgroundColor:"rgb(212, 212, 212)"}}></div>
                <p style={{}}>or use one of these options</p>
                <div style={{position: "relative",top:"96.1px",zIndex:"1",width:"98.5px",height:"1px",left:"850px",backgroundColor:"rgb(212, 212, 212)"}}></div>
                
                <img src={facebook} style={{position: "relative",top:"115px",zIndex:"1",width:"98.5px",height:"1px",left:"-10px",zIndex:"1",width:"50px",height:"50px",cursor:"pointer"}}/>
                <img src={googel} style={{position: "relative",top:"125px",zIndex:"1",width:"98.5px",height:"1px",left:"2px",zIndex:"1",width:"100px",height:"70px",cursor:"pointer"}}/>
                <img src={linkPhone} style={{position: "relative",top:"115px",zIndex:"1",width:"98.5px",height:"1px",left:"9px",zIndex:"1",width:"50px",height:"48px",cursor:"pointer"}}/>
                <p style={{color:"rgb(25, 60, 173)",top:"130px",cursor:"pointer"}}><Button variant="Continue with account" style={{backgroundColor:"transparent"}}><b>Create a New Account</b></Button></p>
                <div style={{position: "relative",top:"162px",zIndex:"1",width:"380px",height:"1px",left:"570px",backgroundColor:"rgb(212, 212, 212)"}}></div>
                <p style={{position: "relative",fontSize:"14px",top:"180px"}}>By signing in or creating an account, you agree with our <b style={{color:"rgb(58, 87, 255)",cursor:"pointer"}}>Terms &<br/> conditions and Privacy statement</b></p>
                <div style={{position: "relative",top:"198px",zIndex:"1",width:"380px",height:"1px",left:"570px",backgroundColor:"rgb(212, 212, 212)"}}></div>
                <p style={{position: "relative",fontSize:"14px",top:"227px"}}>All rights reserved.<br/>Copyright (2022 - 2023) - Booking.com™</p>
            </div>

        </section>

       
        </>

    );



}
