
import './dashBoard.css';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Component } from "react";

import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import rentalRate from '../../../service/rentalRate';
import driver from '../../../service/driver';

const top100Films = [
  { label: 'Empty' },
  ];

  const car = [
    { label: 'Empty' },
    ];

class Home extends Component {
    constructor(props){
      super(props);

// --------------rental Rate---------------

      this.state = {
        FormData:{
          rate_Id:'',
          brand:'',
          type:'',
          daily_Rate:'',
          free_KM_Day:'',
          free_KM_Month:'',
          monthly_Rate:'',
          pricePerExtraKM:''
        },
        btnLabelSave:'save'
      }

// --------------Driver---------------

      // this.state = {
      //   driverData:{
      //     driver_NIC:'',
      //     date:'',
      //     time:'',
      //     licen:'',
      //     name:'',
      //     address:'',
      //     contact_No:'',
      //     salary:'',
         
      //   },
      //   btnLabelDriverSave:'save'
      // }




    }
    submitRentalRate = async () =>{
      let FormData = this.state.FormData;
      console.log("form data : " + JSON.stringify(FormData))
      let rest = await rentalRate.postRentalRate(FormData);
      console.log(rest);
    }

    // submitDriver = async () =>{
    //   let driverData = this.state.driverData;
    //   console.log("form data : " + JSON.stringify(driverData))
    // }


    




    
  render(){
    return (

      <>

{/* {/-------------------------------- payment details section --------------------------------------/} */}

<section>
        <div id="dashboardReectangle1">
        <Typography variant="h6" noWrap component="div" style={{position: "absolute",left:"28px",top:"25px"}}>
           Payment Details
          </Typography>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Booking ID" />}
              style={{position: "relative",top:"13px",backgroundColor:"transparent",color:"white",left:"240px",zIndex:"1",width:"25%",borderRadius:"7px",}}/>

        <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={car}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Car No" />}
              style={{position: "relative",top:"-43px",borderRadius:"7px",backgroundColor:"transparent",color:"white",left:"395px",zIndex:"1",width:"25%"}}/>

              <TextField id="outlined-basic" label="Payment ID" variant="outlined" style={{position: "relative",borderRadius:"7px",top:"-35px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}/>
              <TextField id="outlined-basic" label="currently KM" variant="outlined" style={{position: "relative",borderRadius:"7px",top:"-35px",backgroundColor:"white",color:"white",left:"25px",zIndex:"1",width:"35%"}}/>
              <Button variant="contained" color="success" style={{position: "relative",top:"-25px",left:"35px",width:"20%",backgroundColor:"Green"}}>Save</Button>
              <TextField id="outlined-basic" label="Ride KM" variant="outlined" style={{position: "relative",borderRadius:"7px",top:"-35px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}/>
              <TextField id="outlined-basic" label="Total KM" variant="outlined" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"25px",zIndex:"1",width:"35%"}}/>
              <Button variant="contained" color="success"style={{position: "relative",top:"-25px",backgroundColor:"Blue",left:"35px",width:"20%",zIndex:"1"}}>Update</Button>
              <TextField id="outlined-basic" label="Status" variant="outlined" style={{position: "relative",borderRadius:"7px",top:"-35px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}/>
              <TextField id="outlined-basic" label="Total Price" variant="outlined" style={{position: "relative",borderRadius:"7px",top:"-35px",backgroundColor:"white",color:"white",left:"25px",zIndex:"1",width:"35%"}}/>
              <Button variant="contained" color="success"style={{position: "relative",top:"-25px",backgroundColor:"red",left:"35px",width:"20%"}}>Delete</Button>
        </div>
  </section>

{/* 

{/--------------------------------   Car details section --------------------------------------/} */}


  
  <section id="dashboardReectangle2">
    <div>

    <Typography variant="h6" noWrap component="div" style={{position: "absolute",left:"28px",top:"25px"}}>
           Add Car Details
          </Typography>
    <TextField id="outlined-basic" label="Register ID" variant="outlined" style={{position: "relative",top:"13px",backgroundColor:"transparent",color:"white",left:"240px",zIndex:"1",width:"25%"}}/>
              
        <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={car}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Rate ID" />}
              style={{position: "relative",top:"-43px",borderRadius:"7px",backgroundColor:"transparent",color:"white",left:"395px",zIndex:"1",width:"25%"}}/>

              <TextField id="outlined-basic" label="Brand" variant="outlined" style={{position: "relative",borderRadius:"7px",top:"-35px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}/>
              <TextField id="outlined-basic" label="Type" variant="outlined" style={{position: "relative",borderRadius:"7px",top:"-35px",backgroundColor:"white",color:"white",left:"25px",zIndex:"1",width:"35%"}}/>
              <Button variant="contained" color="success" style={{position: "relative",top:"27px",left:"35px",width:"20%",backgroundColor:"Green"}}>Save</Button>
              <TextField id="outlined-basic" label="Passenger" variant="outlined" style={{position: "relative",top:"-35px",borderRadius:"7px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}/>
              <TextField id="outlined-basic" label="Transmission Type" variant="outlined" style={{position: "relative",top:"-35px",borderRadius:"7px",backgroundColor:"white",color:"white",left:"25px",zIndex:"1",width:"35%"}}/><br/>
             
             
              {/*  */}
              
              <TextField id="outlined-basic" label="Fuel" variant="outlined" style={{position: "relative",borderRadius:"7px",top:"-35px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"17%"}}/>
              <TextField id="outlined-basic" label="Color" variant="outlined" style={{position: "relative",borderRadius:"7px",top:"-35px",backgroundColor:"white",color:"white",left:"25px",zIndex:"1",width:"17%"}}/>
              <TextField id="outlined-basic" label="Loss Damage Price" variant="outlined" style={{position: "relative",borderRadius:"7px",top:"-35px",backgroundColor:"white",color:"white",left:"31px",zIndex:"1",width:"35%"}}/>
              <Button variant="contained" color="success"style={{position: "relative",top:"-25px",backgroundColor:"red",left:"44px",width:"20%"}}>Delete</Button>
              
              
              
    </div>
      

  </section>




{/* {/--------------------------------  Rental rate details section --------------------------------------/} */}
<ValidatorForm ref="form" className="pt-2" onSubmit={this.submitRentalRate} >
  <section id="dashboardReectangle3">
   
    <div>
    <Typography variant="h6" noWrap component="div" style={{position: "absolute",left:"28px",top:"25px"}}>
           Rental Rate Details
          </Typography>

         

          <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Rate ID" variant="outlined" style={{position: "relative",borderRadius:"7px",top:"25px",backgroundColor:"transparent",color:"white",left:"280px",zIndex:"1",width:"25%"}}
            value={this.state.FormData.rate_Id}
            onChange={(e) => {
                let formData = this.state.FormData
                formData.rate_Id = e.target.value
                this.setState({ formData })
            }}
            validators={['required']}  
          />
          <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Type" variant="outlined" style={{position: "absolute",borderRadius:"7px",top:"10%",backgroundColor:"transparent",color:"white",left:"440px",zIndex:"1",width:"25%"}}
          value={this.state.FormData.type}
          onChange={(e) => {
              let formData = this.state.FormData
              formData.type = e.target.value
              this.setState({ formData })
          }}
          validators={['required']}
          />
       
          <div id="driverBtn">
                  <Button label={this.state.btnLabelSave} type="submit" variant="contained" color="success" style={{position: "absolute",top:"90px",backgroundColor:"green",color:"white",right:"-10px",zIndex:"1",width:"20%"}}>Save</Button><br/><br/>
                  <Button variant="contained" color="success"style={{position: "absolute",top:"130px",backgroundColor:"blue",color:"white",right:"-10px",zIndex:"1",width:"20%"}}>Update</Button><br/><br/>
                  <Button variant="contained" color="success"style={{position: "absolute",top:"170px",backgroundColor:"red",color:"white",right:"-10px",zIndex:"1",width:"20%"}}>Delete</Button>
              </div>
  
          <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Brand" variant="outlined" style={{position: "absolute",top:"98px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}
          value={this.state.FormData.brand}
          onChange={(e) => {
              let formData = this.state.FormData
              formData.brand = e.target.value
              this.setState({ formData })
          }}
          validators={['required']}
          />
              <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Daily Rate" variant="outlined" style={{position: "absolute",borderRadius:"7px",top:"98px",backgroundColor:"white",color:"white",left:"39%",zIndex:"1",width:"35%"}}
              value={this.state.FormData.daily_Rate}
              onChange={(e) => {
                  let formData = this.state.FormData
                  formData.daily_Rate = e.target.value
                  this.setState({ formData })
              }}
              validators={['required']}
              />
              <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Free KM Day" variant="outlined" style={{position: "absolute",borderRadius:"7px",top:"140px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}
              value={this.state.FormData.free_KM_Day}
              onChange={(e) => {
                  let formData = this.state.FormData
                  formData.free_KM_Day = e.target.value
                  this.setState({ formData })
              }}
              validators={['required']}
              />
              <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Free KM Month" variant="outlined" style={{position: "absolute",borderRadius:"7px",top:"140px",backgroundColor:"white",color:"white",left:"39%",zIndex:"1",width:"35%"}}
              value={this.state.FormData.free_KM_Month}
              onChange={(e) => {
                  let formData = this.state.FormData
                  formData.free_KM_Month = e.target.value
                  this.setState({ formData })
              }}
              validators={['required']}
              /><br/>
              <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Monthly Rate" variant="outlined" style={{position: "absolute",borderRadius:"7px",top:"183px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}
              value={this.state.FormData.monthly_Rate}
              onChange={(e) => {
                  let formData = this.state.FormData
                  formData.monthly_Rate = e.target.value
                  this.setState({ formData })
              }}
              validators={['required']}
              />
              <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Price Per Extra KM" variant="outlined" style={{position: "absolute",borderRadius:"7px",top:"183px",backgroundColor:"white",color:"white",left:"39%",zIndex:"1",width:"35%"}}
              value={this.state.FormData.pricePerExtraKM}
              onChange={(e) => {
                  let formData = this.state.FormData
                  formData.pricePerExtraKM = e.target.value
                  this.setState({ formData })
              }}
              validators={['required']}
              />  

             
              
   
   
    </div>
   
  </section>
  </ValidatorForm>


{/* {/--------------------------------  Driver details section --------------------------------------/} */}

<ValidatorForm ref="form" className="pt-2" onSubmit={this.submitDriver} >
  <section id="dashboardReectangle4">
    
      
    <Typography variant="h6" noWrap component="div" style={{position: "absolute",left:"28px",top:"25px",zIndex:"2"}}>
           Add Driver Details
          </Typography>
    
            <div id="driverBtn">
                  <Button label={this.state.btnLabelDriverSave} type="submit" variant="contained" color="success" style={{position: "absolute",top:"110px",backgroundColor:"green",color:"white",right:"-10px",zIndex:"1",width:"20%"}}>Save</Button><br/><br/>
                  <Button variant="contained" color="success"style={{position: "absolute",top:"170px",backgroundColor:"blue",color:"white",right:"-10px",zIndex:"1",width:"20%"}}>Update</Button><br/><br/>
                  <Button variant="contained" color="success"style={{position: "absolute",top:"230px",backgroundColor:"red",color:"white",right:"-10px",zIndex:"1",width:"20%"}}>Delete</Button>
              </div>
        
              <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Driver NIC" variant="outlined" style={{position: "relative",borderRadius:"7px",top:"-25px",margin:"5px",backgroundColor:"white",color:"white",left:"13px",zIndex:"1",width:"35%"}}
              // value={this.state.driverData.driver_NIC}
              // onChange={(e) => {
              //     let formData = this.state.driverData
              //     formData.driver_NIC = e.target.value
              //     this.setState({ driverData })
              // }}
              // validators={['required']}  
              />
              <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="License No" variant="outlined" style={{position: "relative",borderRadius:"7px",top:"-25px",margin:"5px",backgroundColor:"white",color:"white",left:"25px",zIndex:"1",width:"35%"}}
              // value={this.state.driverData.licen}
              // onChange={(e) => {
              //     let formData = this.state.driverData
              //     formData.licen = e.target.value
              //     this.setState({ driverData })
              // }}
              // validators={['required']}  
              />
              <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Name" variant="outlined" style={{position: "relative",borderRadius:"7px",top:"-25px",margin:"5px",backgroundColor:"white",color:"white",left:"13px",zIndex:"1",width:"35%"}}
              // value={this.state.driverData.name}
              // onChange={(e) => {
              //     let formData = this.state.driverData
              //     formData.name = e.target.value
              //     this.setState({ driverData })
              // }}
              // validators={['required']}  
              />
              <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Address" variant="outlined" style={{position: "relative",borderRadius:"7px",top:"-25px",margin:"5px",backgroundColor:"white",color:"white",left:"25px",zIndex:"1",width:"35%"}}
              // value={this.state.driverData.address}
              // onChange={(e) => {
              //     let formData = this.state.driverData
              //     formData.address = e.target.value
              //     this.setState({ driverData })
              // }}
              // validators={['required']}  
              /><br/>
              <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Contact No" variant="outlined" style={{position: "relative",borderRadius:"7px",top:"-25px",margin:"5px",backgroundColor:"white",color:"white",left:"13px",zIndex:"1",width:"35%"}}
              // value={this.state.driverData.contact_No}
              // onChange={(e) => {
              //     let formData = this.state.driverData
              //     formData.contact_No = e.target.value
              //     this.setState({ driverData })
              // }}
              // validators={['required']}  
              />
              <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Salary" variant="outlined" style={{position: "relative",borderRadius:"7px",top:"-25px",margin:"5px",backgroundColor:"white",color:"white",left:"25px",zIndex:"1",width:"35%"}}
              // value={this.state.driverData.salary}
              // onChange={(e) => {
              //     let formData = this.state.driverData
              //     formData.salary = e.target.value
              //     this.setState({ driverData })
              // }}
              // validators={['required']}  
              />  

  
  </section>
  </ValidatorForm>
       
       </>

    );

}
}

export default Home;
