
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
import adminService from '../../service/admin';
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";


const top100Films = [ 
    {label: 'Administor'},
    { label: 'Driver'},
    
];


class SignUpPage extends Component{

        constructor(props){
            super(props);
            this.state = {
              AdminFormData:{
                admin_Id:'',
                type:'',
                userName:'',
                password:'',
                    // userLogin:{
                    //     user_Id:'',
                    //     type:'',
                    //     user_Name:'',
                    //     password:''
                        
                    //   }
              },
              btnLabelAdminSave:'save',
          }
        }



        submitAdminData = async () =>{
          console.log("load method Calling")
          let AdminFormData = this.state.AdminFormData;
          console.log("form data : " + JSON.stringify(AdminFormData))
          let resAdmin = await adminService.postAdmin(AdminFormData);
          console.log(resAdmin)
          if (resAdmin.status === 201) {
            this.setState({
                alert: true,
                message: resAdmin.data.message,
                severity: "success"
            });
            this.clearAdminTextFeild();
        } else {
            this.setState({
                alert: true,
                // message: resAdmin.response.data.message,
                severity: "error"
            });
        }

        }


        clearAdminTextFeild = (e) => {
          this.setState({
            AdminFormData:{
              admin_Id:'',
              type:'',
              userName:'',
              password:'',
                  // userLogin:{
                  //     user_Id:'',
                  //     type:'',
                  //     user_Name:'',
                  //     password:''
                      
                  //   }
            }
          })
        }


          
        render(){
          return (
      
            <>

            {/* --------------------------loging----------------------- */}
            <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitAdminData} >

            <section>
    
                <div id="navivar"></div>
    
                <img src={carLogo} style={{position: "absolute",left:"80px",top:"1.9%",zIndex:"1",width:"40px",height:"40px"}} />
                {/* <h1 style={{position: "absolute",left:"1360px",top:"2.8%",zIndex:"1",width:"40px",height:"40px",fontSize:"20px",fontWeight:"100",color:"white"}}>Back</h1> */}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{position: "absolute",left:"130px",top:"2.5%",zIndex:"1",color:"white"}}>
                <b>EXPERDIA Car Rental</b>
                </Typography>
    
                <div id="loginSection">
                    <h1>Create Account</h1>
    
                    <p style={{textAlign:"left",margin:"auto",left:"495px",position: "relative"}}>Use a minimum of 10 characters, including uppercase letters,<br/> lowercase letters and numbers.</p>
                    <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="ID" variant="outlined" style={{position: "relative",top:"85px",zIndex:"1",width:"380px"}}
                     value={this.state.AdminFormData.admin_Id}
                     onChange={(e) => {
                         let AdminFormDatas = this.state.AdminFormData
                         AdminFormDatas.admin_Id = e.target.value
                         this.setState({ AdminFormDatas })
                     }}
                     validators={['required']} 
                    /><br/>
                    <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="User Name" variant="outlined" style={{position: "relative",top:"80px",zIndex:"1",width:"380px"}}
                    value={this.state.AdminFormData.userName}
                    onChange={(e) => {
                        let AdminFormDatas = this.state.AdminFormData
                        AdminFormDatas.userName = e.target.value
                        this.setState({ AdminFormDatas })
                    }}
                    validators={['required']} 
                    /><br/>
                    <TextValidator
                     size="small" sx={{ width: '40ch'}}
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        style={{position: "relative",top:"75px",zIndex:"1",width:"380px"}}
                        value={this.state.AdminFormData.password}
                        onChange={(e) => {
                            let AdminFormDatas = this.state.AdminFormData
                            AdminFormDatas.password = e.target.value
                            this.setState({ AdminFormDatas })
                        }}
                        validators={['required']} 
                        
                        /><br/>
                    
                    <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Type" variant="outlined" 
                        style={{position: "relative",top:"70px",zIndex:"1",width:"380px",textAlign:"center",margin:"auto"}}
                         value={this.state.AdminFormData.type}
                        onChange={(e) => {
                            let AdminFormDatas = this.state.AdminFormData
                            AdminFormDatas.type = e.target.value
                            this.setState({ AdminFormDatas })
                        }}
                        validators={['required']} 
                        
                        />
                    
                    
                    
                    <Button label={this.state.btnLabelAdminSave} type="submit" variant="Create account" style={{position: "relative",top:"100px",backgroundColor:"lightBlue" ,zIndex:"1",width:"380px"}}>Create  Account</Button><br/>
                    
                
                    <div style={{position: "relative",top:"118px",zIndex:"1",width:"380px",height:"1px",left:"490px",backgroundColor:"rgb(212, 212, 212)"}}></div>
                    <p style={{position: "relative",fontSize:"14px",top:"135px"}}>By signing in or creating an account, you agree with our <b style={{color:"rgb(58, 87, 255)",cursor:"pointer"}}>Terms &<br/> conditions and Privacy statement</b></p>
                    <div style={{position: "relative",top:"150px",zIndex:"1",width:"380px",height:"1px",left:"490px",backgroundColor:"rgb(212, 212, 212)"}}></div>
                    <p style={{position: "relative",fontSize:"14px",top:"160px"}}>All rights reserved.<br/>Copyright (2022 - 2023) - Booking.com™</p>
                </div>
    
            </section>
            </ValidatorForm>
           
            </>
      
      );

    }
   
  
  
  }
export default SignUpPage;