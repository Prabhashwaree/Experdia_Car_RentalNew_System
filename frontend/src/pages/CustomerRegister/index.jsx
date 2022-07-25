
import {styleSheet} from  "./style";
import { Component } from "react";
import {withStyles} from "@mui/styles";
import './customerRegister.css';
import carLogo from '../../assets/img/carLogo.png';
import cam from '../../assets/img/cam.png';
import linkPhone from '../../assets/img/linkPhone.png';
import googel from '../../assets/img/googel.png';
import facebook from '../../assets/img/facebook.png';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const ariaLabel = { 'aria-label': 'description' };

const top100Films = [ 
    {label: 'Administor'},
    { label: 'Driver'},
    
];


 class CustomerRegisterPage extends Component{

    
    constructor(props){
        super(props);
      }
      
    render(){
      return (
  
        <>

        {/* --------------------------loging----------------------- */}
        <section>

            <div id="navivar"></div>

            <img src={carLogo} style={{position: "absolute",left:"80px",top:"1.9%",zIndex:"1",width:"40px",height:"40px"}} />
            <h1 style={{position: "absolute",left:"1360px",top:"2.8%",zIndex:"1",width:"40px",height:"40px",fontSize:"20px",fontWeight:"100",color:"white"}}>My Profile</h1>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{position: "absolute",left:"130px",top:"2.5%",zIndex:"1",color:"white"}}>
            <b>EXPERDIA Car Rental</b>
            </Typography>

            <div id="loginSection">
                <h1>Create Account</h1>

                {/* <p style={{textAlign:"left",margin:"auto",left:"570px",position: "relative"}}>Use a minimum of 10 characters, including uppercase letters,<br/> lowercase letters and numbers.</p> */}
                <IconButton color="primary" aria-label="upload picture" component="label" style={{position: "relative",left:"380px",top:"100px",width:"45px"}}> <input hidden accept="image/*" type="file" /> <PhotoCamera /> </IconButton>
                <TextField id="outlined-basic" label="NIC Number" variant="outlined" style={{position: "relative",left:"-56px",top:"95px",zIndex:"1",width:"380px"}}/>
                <IconButton color="primary" aria-label="upload picture" component="label" style={{position: "relative",left:"440px",top:"100px",width:"45px"}}> <input hidden accept="image/*" type="file" /> <PhotoCamera /> </IconButton>
                <TextField id="outlined-basic" label="License Number" variant="outlined" style={{position: "relative",left:"8px",top:"95px",zIndex:"1",width:"380px"}}/><br/>
                

                <TextField id="outlined-basic" label="Name" variant="outlined" style={{position: "relative",left:"-57px",top:"110px",zIndex:"1",width:"380px"}}/>
                <TextField id="outlined-basic" label="Address" variant="outlined" style={{position: "relative",left:"55px",top:"110px",zIndex:"1",width:"380px"}}/><br/>
                <TextField id="outlined-basic" label="Contact No" variant="outlined" style={{position: "relative",left:"-57px",top:"125px",zIndex:"1",width:"380px"}}/>
                <TextField id="outlined-basic" label="E_mail" variant="outlined" style={{position: "relative",left:"55px",top:"125px",zIndex:"1",width:"380px"}}/><br/>

                <TextField id="outlined-basic" label="User Name" variant="outlined" style={{position: "relative",left:"93px",top:"140px",zIndex:"1",width:"380px"}}/>
                <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" style={{position: "relative",left:"205px",top:"140px",zIndex:"1",width:"380px"}}/>
                <Input placeholder="Date" inputProps={ariaLabel} style={{position: "relative",top:"-185px",left:"220px",zIndex:"1",width:"150px",border:"none"}}/>
                <Input placeholder="Time" inputProps={ariaLabel} style={{position: "relative",top:"-185px",left:"225px",zIndex:"1",width:"150px",border:"none"}}/><br/>
                
                
                
                
                <Button variant="Create account" style={{position: "relative",top:"170px",backgroundColor:"lightBlue" ,zIndex:"1",width:"380px"}}>Create  Account</Button><br/>
                
            
                <div style={{position: "relative",top:"190px",zIndex:"1",width:"380px",height:"1px",left:"570px",backgroundColor:"rgb(212, 212, 212)"}}></div>
                <p style={{position: "relative",fontSize:"14px",top:"200px"}}>By signing in or creating an account, you agree with our <b style={{color:"rgb(58, 87, 255)",cursor:"pointer"}}>Terms &<br/> conditions and Privacy statement</b></p>
                <div style={{position: "relative",top:"220px",zIndex:"1",width:"380px",height:"1px",left:"570px",backgroundColor:"rgb(212, 212, 212)"}}></div>
                <p style={{position: "relative",fontSize:"14px",top:"245px"}}>All rights reserved.<br/>Copyright (2022 - 2023) - Booking.com™</p>
            </div>

        </section>

       
        </>
  
      );
  
    }


}
export default CustomerRegisterPage;