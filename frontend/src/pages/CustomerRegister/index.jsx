
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

import customerService from '../../service/customer';
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { Link } from 'react-router-dom';

const ariaLabel = { 'aria-label': 'description' };

const top100Films = [ 
    {label: 'Administor'},
    { label: 'Driver'},
    
];


 class CustomerRegisterPage extends Component{

    
    constructor(props){
        super(props);

        this.state = {
          CustomerFormData:{
            nic_Number:'',
            license_Id:'',
            cus_Name:'',
            address:'',
            contact_No:'',
            email:'',
            userName:'',
            password:'',
            nicImg:'',
            licenseImg:'',
          },
          alert: false,
          message: "",
          severity: "",
          btnLabelCustomerSave:'save',
  
        }

    }


    clearCustomerTextFeild = (e) => {
        this.setState({
            CustomerFormData:{
                nic_Number:'',
                license_Id:'',
                cus_Name:'',
                address:'',
                contact_No:'',
                email:'',
                userName:'',
                password:''
          }
        })
    }



    submitCustomerData = async () =>{
      console.log("load method Calling")
      let CustomerFormData = this.state.CustomerFormData;
      console.log("form data : " + JSON.stringify(CustomerFormData))
      let resCustomer = await customerService.postCustomer(CustomerFormData);
      console.log(resCustomer)
      if (resCustomer.status === 201) {
        this.setState({
            alert: true,
            message: resCustomer.data.message,
            severity: "success"
        });
        this.clearCustomerTextFeild();
    } else {
        this.setState({
            alert: true,
            message: resCustomer.response.data.message,
            severity: "error"
        });
    }
   
    }



      
    render(){
      return (
  
        <>

        {/* --------------------------loging----------------------- */}
        
        <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitCustomerData} >
        <section>

            <div id="navivar"></div>

            <img src={carLogo} style={{position: "absolute",left:"80px",top:"1.9%",zIndex:"1",width:"40px",height:"40px"}} />
            {/* <h1 style={{position: "absolute",left:"1360px",top:"2.8%",zIndex:"1",width:"40px",height:"40px",fontSize:"20px",fontWeight:"100",color:"white"}}>My Profile</h1> */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{position: "absolute",left:"130px",top:"2.5%",zIndex:"1",color:"white"}}>
            <b>EXPERDIA Car Rental</b>
            </Typography>

            <div id="loginSection">
                <h1>Create Account</h1>

                {/* <p style={{textAlign:"left",margin:"auto",left:"570px",position: "relative"}}>Use a minimum of 10 characters, including uppercase letters,<br/> lowercase letters and numbers.</p> */}
                <IconButton color="primary" aria-label="upload picture" component="label" style={{position: "relative",left:"-9%",top:"70px",width:"225px"}}> <input 
                 type="file" 
                 name="file"
                 onChange={(e) => {
                    let CustomerFormDatas = this.state.CustomerFormDatas
                    CustomerFormDatas.nicImg = e.target.value
                    this.setState({ CustomerFormDatas })
                     this.setState({
                        nicImg: e.target.value
                  })
                  }
                }
                 /> <PhotoCamera /> </IconButton>
                <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="NIC Number" variant="outlined" style={{position: "relative",left:"-17%",top:"65px",zIndex:"1",width:"380px"}}
                value={this.state.CustomerFormData.nic_Number}
                onChange={(e) => {
                    let CustomerFormDatas = this.state.CustomerFormData
                    CustomerFormDatas.nic_Number = e.target.value
                    this.setState({ CustomerFormDatas })
                }}
                validators={['required']}  
                />
               
                <IconButton color="primary" aria-label="upload picture" component="label" style={{position: "relative",left:"25%",top:"-10px",width:"225px"}}> <input
                type="file" 
                name="file"
                // onChange={(event) => {
                //     let CustomerFormDatas = this.state.CustomerFormData
                //     CustomerFormDatas.licenseImg = event.target.value
                //     this.setState({CustomerFormDatas})
                //     this.setState({
                //         licenseImg:event.target.value
                //     })
                // }}
                onChange={(e) => {
                    let CustomerFormDatas = this.state.CustomerFormDatas
                    CustomerFormDatas.licenseImg = e.target.value
                    this.setState({ CustomerFormDatas })
                     this.setState({
                        licenseImg: e.target.value
                  })
                  }
                }
                /> <PhotoCamera /> </IconButton>
                <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="License Number" variant="outlined" style={{position: "relative",left:"17%",top:"-16px",zIndex:"1",width:"380px"}}
                value={this.state.CustomerFormData.license_Id}
                onChange={(e) => {
                    let CustomerFormDatas = this.state.CustomerFormData
                    CustomerFormDatas.license_Id = e.target.value
                    this.setState({ CustomerFormDatas })
                }}
                validators={['required']} 
                /><br/>
                

                <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Name" variant="outlined" style={{position: "relative",left:"-17%",top:"-23px",zIndex:"1",width:"380px"}}
                value={this.state.CustomerFormData.cus_Name}
                onChange={(e) => {
                    let CustomerFormDatas = this.state.CustomerFormData
                    CustomerFormDatas.cus_Name = e.target.value
                    this.setState({ CustomerFormDatas })
                }}
                validators={['required']} 
                />
                <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Address" variant="outlined" style={{position: "relative",left:"17%",top:"-65px",zIndex:"1",width:"380px"}}
                value={this.state.CustomerFormData.address}
                onChange={(e) => {
                    let CustomerFormDatas = this.state.CustomerFormData
                    CustomerFormDatas.address = e.target.value
                    this.setState({ CustomerFormDatas })
                }}
                validators={['required']}
                /><br/>
                <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Contact No" variant="outlined" style={{position: "relative",left:"-17%",top:"-70px",zIndex:"1",width:"380px"}}
                value={this.state.CustomerFormData.contact_No}
                onChange={(e) => {
                    let CustomerFormDatas = this.state.CustomerFormData
                    CustomerFormDatas.contact_No = e.target.value
                    this.setState({ CustomerFormDatas })
                }}
                validators={['required']}
                />
                <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="E_mail" variant="outlined" style={{position: "relative",left:"17%",top:"-113px",zIndex:"1",width:"380px"}}
                value={this.state.CustomerFormData.email}
                onChange={(e) => {
                    let CustomerFormDatas = this.state.CustomerFormData
                    CustomerFormDatas.email = e.target.value
                    this.setState({ CustomerFormDatas })
                }}
                validators={['required']}
                /><br/>

                <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="User Name" variant="outlined" style={{position: "relative",left:"-17%",top:"-118px",zIndex:"1",width:"380px"}}
                value={this.state.CustomerFormData.userName}
                onChange={(e) => {
                    let CustomerFormDatas = this.state.CustomerFormData
                    CustomerFormDatas.userName = e.target.value
                    this.setState({ CustomerFormDatas })
                }}
                validators={['required']}
                />
                <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-password-input" label="Password" type="password" autoComplete="current-password" style={{position: "relative",left:"17%",top:"-160px",zIndex:"1",width:"380px"}}
                value={this.state.CustomerFormData.password}
                onChange={(e) => {
                    let CustomerFormDatas = this.state.CustomerFormData
                    CustomerFormDatas.password = e.target.value
                    this.setState({ CustomerFormDatas })
                }}
                validators={['required']}
                />
                {/* <Input placeholder="Date" inputProps={ariaLabel} style={{position: "relative",top:"-185px",left:"220px",zIndex:"1",width:"150px",border:"none"}}/>
                <Input placeholder="Time" inputProps={ariaLabel} style={{position: "relative",top:"-185px",left:"225px",zIndex:"1",width:"150px",border:"none"}}/><br/>
                 */}
                
                
                
                <Button label={this.state.btnLabelCustomerSave} type="submit" variant="Create account" style={{position: "relative",top:"-135px",backgroundColor:"lightBlue" ,zIndex:"1",width:"380px"}}><Link to = "/BookingPage">Create  Account</Link></Button><br/>
                
                {/* <Link to = "/BookingPage">Create  Account</Link> */}

                <div style={{position: "relative",top:"-120px",zIndex:"1",width:"380px",height:"1px",left:"480px",backgroundColor:"rgb(212, 212, 212)"}}></div>
                <p style={{position: "relative",fontSize:"14px",top:"-100px"}}>By signing in or creating an account, you agree with our <b style={{color:"rgb(58, 87, 255)",cursor:"pointer"}}>Terms &<br/> conditions and Privacy statement</b></p>
                <div style={{position: "relative",top:"-80px",zIndex:"1",width:"380px",height:"1px",left:"480px",backgroundColor:"rgb(212, 212, 212)"}}></div>
                <p style={{position: "relative",fontSize:"14px",top:"-60px"}}>All rights reserved.<br/>Copyright (2022 - 2023) - Booking.com™</p>
            </div>

        </section>
        </ValidatorForm>
       
        </>
  
      );
  
    }


}
export default CustomerRegisterPage;