import {styleSheet} from  "./style";
import { Component } from "react";
import {withStyles} from "@mui/styles";
import './login.css';
import carLogo from '../../assets/img/carLogo.png';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



export default function SingInPage(){

    
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
                <Button variant="Continue with account" style={{position: "relative",top:"85px",backgroundColor:"lightBlue" ,zIndex:"1",width:"380px"}}>Contained</Button><br/>
                <div style={{position: "relative",top:"115px",zIndex:"1",width:"98.5px",height:"1px",left:"570px",backgroundColor:"rgb(212, 212, 212)"}}></div>
                <p>or use one of these options</p>
                <div style={{position: "relative",top:"96.1px",zIndex:"1",width:"98.5px",height:"1px",left:"850px",backgroundColor:"rgb(212, 212, 212)"}}></div>
            </div>

        </section>

       
        </>

    );



}
