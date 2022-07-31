
import './dashBoard.css';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Component } from "react";
import Stack from '@mui/material/Stack';

import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import rentalRate from '../../../service/rentalRate';
import driverService from '../../../service/driver';
import carService from '../../../service/car';
import paymentService from '../../../service/payment';
import bookingDetailService from '../../../service/bookingDetail';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Alert from '@mui/material/Alert';

const top100Films = [
  { label: 'Empty' },
  ];

  const car = [
    { label: 'R0001' },
    { label: 'R0002' },
    { label: 'R0003' },
    { label: 'R0004' },
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
        alert: false,
        message: "",
        severity: "",

        btnLabelSave:'save',


        DriverFormData:{
          driver_NIC:'',
          licen:'',
          name:'',
          address:'',
          contact_No:'',
          salary:''
        },
        alert: false,
        message: "",
        severity: "",
        btnLabelDriverSave:'save',


        CarFormData:{
          register_No:'',
          brand:'',
          type:'',
          no_Passenger:'',
          transmission_Type:'',
          fuel:'',
          colour:'',
          lossDamagePrice:'',

                rentalRate:{
                  r_Id:'',
                  brand:'',
                  type:'',
                  daily_Rate:'',
                  free_KM_Day:'',
                  free_KM_Month:'',
                  monthly_Rate:'',
                  pricePerExtraKM:''
                }
          },
          alert: false,
        message: "",
        severity: "",
          btnLabelCarSave:'save',

                PaymentFormData:{
                  payment_Id:'',
                  currently_Run_KM:'',
                  ride_A_KM:'',
                  total_KM:'',
                  status:'',
                  total_Price:''
                },
                alert: false,
                message: "",
                severity: "",
                btnLabelPaymentSave:'save',

                BookingDetailFormData: {
                  status: '',
          
                  booking: {
                    booking_Id: '',
                    picUp_Date: '',
                    drop_Date: '',
                    picUp_Time: '',
                    drop_Time: '',
                    bookingStatus: '',
                    driverStatus: '',
                    picUpLocation: '',
                    lossDamagePrice: '',
                    rent_Duration: '',
                    car_Count: ''
                  },
          
                  car: {
                    register_No: '',
                    brand: '',
                    type: '',
                    no_Passenger: '',
                    transmission_Type: '',
                    fuel: '',
                    colour: '',
                    lossDamagePrice: '',
          
                  }
                },
                alert: false,
                message: "",
                severity: "",
                btnLabelBookingDetailSave:'save',


      }
  
    }




    clearRentalRateTextFeild = (e) => {
      this.setState({
        FormData:{
          rate_Id:'',
          brand:'',
          type:'',
          daily_Rate:'',
          free_KM_Day:'',
          free_KM_Month:'',
          monthly_Rate:'',
          pricePerExtraKM:''
        }
        
      })
  }

  clearDriverTextFeild = (e) => {
    this.setState({
     
      DriverFormData:{
        driver_NIC:'',
        licen:'',
        name:'',
        address:'',
        contact_No:'',
        salary:''
      }
    })
}

    clearCarTextFeild = (e) => {
      this.setState({
        CarFormData:{
          register_No:'',
          brand:'',
          type:'',
          no_Passenger:'',
          transmission_Type:'',
          fuel:'',
          colour:'',
          lossDamagePrice:''
        }
      })
    }

        
        clearPaymentTextFeild = (e) => {
          this.setState({
            PaymentFormData:{
              payment_Id:'',
              currently_Run_KM:'',
              ride_A_KM:'',
              total_KM:'',
              status:'',
              total_Price:''
            }
          })
        }
  



        clearBookingDetailextFeild = (e) => {
          this.setState({
            BookingDetailFormData: {
              status: '',
      
              booking: {
                booking_Id: '',
                picUp_Date: '',
                drop_Date: '',
                picUp_Time: '',
                drop_Time: '',
                bookingStatus: '',
                driverStatus: '',
                picUpLocation: '',
                lossDamagePrice: '',
                rent_Duration: '',
                car_Count: ''
              },
      
              car: {
                register_No: '',
                brand: '',
                type: '',
                no_Passenger: '',
                transmission_Type: '',
                fuel: '',
                colour: '',
                lossDamagePrice: '',
      
              }
            }
          })
        }



       


    submitRentalRate = async () =>{
      let FormData = this.state.FormData;
      console.log("form data : " + JSON.stringify(FormData))
      let rest = await rentalRate.postRentalRate(FormData);
      console.log(rest);
      if (rest.status === 201) {
        this.setState({
            alert: true,
            message: rest.data.message,
            severity: "success"
        });
        this.clearRentalRateTextFeild();
    } else {
        this.setState({
            alert: true,
            message: rest.response.data.message,
            severity: "error"
        });
    }
    }

    submitDriverData = async () =>{
      console.log("load method Calling")
      let DriverFormData = this.state.DriverFormData;
      console.log("form data : " + JSON.stringify(DriverFormData))
      let resDriver = await driverService.postDriver(DriverFormData);
      console.log(resDriver)
      if (resDriver.status === 201) {
        this.setState({
            alert: true,
            message: resDriver.data.message,
            severity: "success"
        });
        this.clearDriverTextFeild();
    } else {
        this.setState({
            alert: true,
            message: resDriver.response.data.message,
            severity: "error"
        });
    }
    }
 
    submitCarData = async () =>{
      console.log("load method Calling")
      let CarFormData = this.state.CarFormData;
      console.log("form data : " + JSON.stringify(CarFormData))
      let resCar = await carService.postCar(CarFormData);
      console.log(resCar)
      if (resCar.status === 201) {
        this.setState({
            alert: true,
            message: resCar.data.message,
            severity: "success"
        });
        this.clearCarTextFeild();
    } else {
        this.setState({
            alert: true,
            message: resCar.response.data.message,
            severity: "error"
        });
    }
    }


    submitPaymentData = async () =>{
      console.log("load method Calling")
      let PaymentFormData = this.state.PaymentFormData;
      console.log("form data : " + JSON.stringify(PaymentFormData))
      let resPay = await paymentService.postPayment(PaymentFormData);
      // console.log(resPay)
      if (resPay.status === 201) {
        this.setState({
            alert: true,
            message: resPay.data.message,
            severity: "success"
        });
        this.clearPaymentTextFeild();
    } else {
        this.setState({
            alert: true,
            message: resPay.response.data.message,
            severity: "error"
        });
    }
    }
    


    submitBookingDetailData = async () =>{
      console.log("load method Calling")
      let BookingDetailFormData = this.state.BookingDetailFormData;
      console.log("form data : " + JSON.stringify(BookingDetailFormData))
      let resDetail = await bookingDetailService.postBookingDetail(BookingDetailFormData);
      // console.log(resPay)
      if (resDetail.status === 201) {
        this.setState({
            alert: true,
            message: resDetail.data.message,
            severity: "success"
        });
        this.clearBookingDetailextFeild();
    } else {
        this.setState({
            alert: true,
            message: resDetail.response.data.message,
            severity: "error"
        });
    }
    }




// --------------------rental combo loard------------------
      // comboDataForSelect = async () => {
      //   const res = await carService.GetCar();
      //   let comboData = [];
      //   if (res.status == 200){
      //     res.data.data.map((value,index) => {
      //       typeData.push(value)
      //       console.log(value)

      //     })
      //     this.setState({
      //       typeData:typeData,
      //     })
      //   }
      // }





    
  render(){
    return (

      <>

{/* {/-------------------------------- payment details section --------------------------------------/} */}

<section>
        <div id="dashboardReectangle1">
        <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitBookingDetailData} >
        <Typography variant="h6" noWrap component="div" style={{position: "absolute",left:"28px",top:"25px"}}>
           Payment Details
          </Typography>
            <Autocomplete
            size="small" sx={{ width: '40ch'}}
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              // sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Booking ID" />}
              style={{position: "absolute",top:"8%",backgroundColor:"transparent",color:"white",left:"215px",zIndex:"1",width:"22%",borderRadius:"7px",}}
              value={this.state.BookingDetailFormData.booking.booking_Id}
               onChange={(e) => {
                   let BookingDetailFormDatas = this.state.BookingDetailFormData
                   BookingDetailFormDatas.booking.booking_Id = e.target.value
                   this.setState({ BookingDetailFormDatas })
               }}
               validators={['required']} 
              />

        <Autocomplete
            size="small" sx={{ width: '40ch'}}
              disablePortal
              id="combo-box-demo"
              options={car}
              // sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Car No" />}
              style={{position: "absolute",top:"8%",borderRadius:"7px",backgroundColor:"transparent",color:"white",left:"340px",zIndex:"1",width:"22%"}}
              value={this.state.BookingDetailFormData.car.register_No}
               onChange={(e) => {
                   let BookingDetailFormDatas = this.state.BookingDetailFormData
                   BookingDetailFormDatas.car.register_No = e.target.value
                   this.setState({ BookingDetailFormDatas })
               }}
               validators={['required']}
              />

</ValidatorForm>



    <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitPaymentData} >

              <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Payment ID" variant="outlined" style={{position: "absolute",borderRadius:"7px",top:"28%",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}
               value={this.state.PaymentFormData.payment_Id}
               onChange={(e) => {
                   let PaymentFormDatas = this.state.PaymentFormData
                   PaymentFormDatas.payment_Id = e.target.value
                   this.setState({ PaymentFormDatas })
               }}
               validators={['required']} 
              />
              <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="currently KM" variant="outlined" style={{position: "absolute",borderRadius:"7px",top:"28%",backgroundColor:"white",color:"white",left:"40%",zIndex:"1",width:"35%"}}
              value={this.state.PaymentFormData.currently_Run_KM}
              onChange={(e) => {
                  let PaymentFormDatas = this.state.PaymentFormData
                  PaymentFormDatas.currently_Run_KM = e.target.value
                  this.setState({ PaymentFormDatas })
              }}
              validators={['required']} 
              />
             
              <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Ride KM" variant="outlined" style={{position: "absolute",borderRadius:"7px",top:"48%",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}
              value={this.state.PaymentFormData.ride_A_KM}
              onChange={(e) => {
                  let PaymentFormDatas = this.state.PaymentFormData
                  PaymentFormDatas.ride_A_KM = e.target.value
                  this.setState({ PaymentFormDatas })
              }}
              validators={['required']} 
              />
              <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Total KM" variant="outlined" style={{position: "absolute",top:"48%",backgroundColor:"white",color:"white",left:"40%",zIndex:"1",width:"35%"}}
              value={this.state.PaymentFormData.total_KM}
              onChange={(e) => {
                  let PaymentFormDatas = this.state.PaymentFormData
                  PaymentFormDatas.total_KM = e.target.value
                  this.setState({ PaymentFormDatas })
              }}
              validators={['required']} 
              />
              
              <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Status" variant="outlined" style={{position: "absolute",borderRadius:"7px",top:"68%",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}
              value={this.state.PaymentFormData.status}
              onChange={(e) => {
                  let PaymentFormDatas = this.state.PaymentFormData
                  PaymentFormDatas.status = e.target.value
                  this.setState({ PaymentFormDatas })
              }}
              validators={['required']} 
              />
              <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Total Price" variant="outlined" style={{position: "absolute",borderRadius:"7px",top:"68%",backgroundColor:"white",color:"white",left:"40%",zIndex:"1",width:"35%"}}
              value={this.state.PaymentFormData.total_Price}
              onChange={(e) => {
                  let PaymentFormDatas = this.state.PaymentFormData
                  PaymentFormDatas.total_Price = e.target.value
                  this.setState({ PaymentFormDatas })
              }}
              validators={['required']} 
              />
              
              <Button label={this.state.btnLabelPaymentSave} type="submit" variant="contained" color="success" style={{position: "absolute",top:"28%",left:"77%",width:"20%",backgroundColor:"Green"}}>Save</Button>
              <Button variant="contained" color="success"style={{position: "absolute",top:"48%",backgroundColor:"Blue",left:"77%",width:"20%",zIndex:"1"}}>Update</Button>
              {/* <Button variant="contained" color="success"style={{position: "absolute",top:"68%",backgroundColor:"red",left:"77%",width:"20%"}}>Delete</Button> */}
    
    </ValidatorForm>
        
        </div>
  </section>

{/* 

{/--------------------------------   Car details section --------------------------------------/} */}

<ValidatorForm ref="form" className="pt-2" onSubmit={this.submitCarData} >
  
  <section id="dashboardReectangle2">
    <div>

    <Typography variant="h6" noWrap component="div" style={{position: "absolute",left:"28px",top:"25px"}}>
           Add Car Details
          </Typography>
    <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Register ID" variant="outlined" style={{position: "absolute",top:"8%",backgroundColor:"transparent",color:"white",left:"210px",zIndex:"1",width:"25%"}}
    value={this.state.CarFormData.register_No}
    onChange={(e) => {
        let CarFormDatas = this.state.CarFormData
        CarFormDatas.register_No = e.target.value
        this.setState({ CarFormDatas })
    }}
    validators={['required']} 
    />
              
        <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={car}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Rate ID" size="small"
              name = "RateID"
              value={this.state.CarFormData.rate_Id}
              onChange={(e) => {
                  let CarFormDatas = this.state.CarFormData
                  CarFormDatas.rate_Id = e.target.value
                  this.setState({ CarFormDatas })
              }}
              validators={['required']} 
              />}
              style={{position: "absolute",top:"8%",borderRadius:"7px",backgroundColor:"transparent",color:"white",left:"355px",zIndex:"1",width:"22%"}}/>

                {/* <TextValidator
                    select
                    lable = "Rate ID"
                    name = "rateID"
                    onChange={this.handleChange}
                    valuev={this.state.formData.type.rateId}
                    validators = {["required"]}
                    errorMessages = {["Tis field is required"]}
                    className = "w-full"
                    style={{position: "absolute",top:"8%",borderRadius:"7px",backgroundColor:"transparent",color:"white",left:"355px",zIndex:"1",width:"22%"}}
                >

                {this.state.typeData.map((option) => (
                  <MenuItem key = {option.rateID} value = {option.rateID}>
                    {option.type}
                    </MenuItem>
                ))}

                </TextValidator>   */}




              <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Brand" variant="outlined" style={{position: "absolute",borderRadius:"7px",top:"28%",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}
               value={this.state.CarFormData.brand}
               onChange={(e) => {
                   let CarFormDatas = this.state.CarFormData
                   CarFormDatas.brand = e.target.value
                   this.setState({ CarFormDatas })
               }}
               validators={['required']} 
              />
              <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Type" variant="outlined" style={{position: "absolute",borderRadius:"7px",top:"28%",backgroundColor:"white",color:"white",left:"40%",zIndex:"1",width:"35%"}}
               value={this.state.CarFormData.type}
               onChange={(e) => {
                   let CarFormDatas = this.state.CarFormData
                   CarFormDatas.type = e.target.value
                   this.setState({ CarFormDatas })
               }}
               validators={['required']} 
              />
             
              <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Passenger" variant="outlined" style={{position: "absolute",top:"48%",borderRadius:"7px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}
              value={this.state.CarFormData.no_Passenger}
              onChange={(e) => {
                  let CarFormDatas = this.state.CarFormData
                  CarFormDatas.no_Passenger = e.target.value
                  this.setState({ CarFormDatas })
              }}
              validators={['required']} 
              />
              <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Transmission Type" variant="outlined" style={{position: "absolute",top:"48%",borderRadius:"7px",backgroundColor:"white",color:"white",left:"40%",zIndex:"1",width:"35%"}}
              value={this.state.CarFormData.transmission_Type}
              onChange={(e) => {
                  let CarFormDatas = this.state.CarFormData
                  CarFormDatas.transmission_Type = e.target.value
                  this.setState({ CarFormDatas })
              }}
              validators={['required']} 
              /><br/>
             
             
              {/*  */}
              
              <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Fuel" variant="outlined" style={{position: "absolute",borderRadius:"7px",top:"68%",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"17%"}}
              value={this.state.CarFormData.fuel}
              onChange={(e) => {
                  let CarFormDatas = this.state.CarFormData
                  CarFormDatas.fuel = e.target.value
                  this.setState({ CarFormDatas })
              }}
              validators={['required']} 
              />
              <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Color" variant="outlined" style={{position: "absolute",borderRadius:"7px",top:"68%",backgroundColor:"white",color:"white",left:"118px",zIndex:"1",width:"17%"}}
              value={this.state.CarFormData.colour}
              onChange={(e) => {
                  let CarFormDatas = this.state.CarFormData
                  CarFormDatas.colour = e.target.value
                  this.setState({ CarFormDatas })
              }}
              validators={['required']} 
              />
              <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Loss Damage Price" variant="outlined" style={{position: "absolute",borderRadius:"7px",top:"68%",backgroundColor:"white",color:"white",left:"40%",zIndex:"1",width:"35%"}}
               value={this.state.CarFormData.lossDamagePrice}
               onChange={(e) => {
                   let CarFormDatas = this.state.CarFormData
                   CarFormDatas.lossDamagePrice = e.target.value
                   this.setState({ CarFormDatas })
               }}
               validators={['required']} 
              />
              {/* <Button variant="contained" color="success"style={{position: "absolute",top:"48%",backgroundColor:"red",left:"78%",width:"20%"}}>Delete</Button> */}
               <Button label={this.state.btnLabelCarSave} type="submit" variant="contained" color="success" style={{position: "absolute",top:"28%",left:"30px",width:"20%",backgroundColor:"Green",left:"78%"}}>Save</Button>
               <Button variant="contained" color="success"style={{position: "absolute",top:"48%",backgroundColor:"Blue",left:"77%",width:"20%",zIndex:"1"}}>Update</Button>
              
    </div>
      

  </section>

  </ValidatorForm>


{/* {/--------------------------------  Rental rate details section --------------------------------------/} */}
<ValidatorForm ref="form" className="pt-2" onSubmit={this.submitRentalRate} >
  <section id="dashboardReectangle3">
   
    <div>
    <Typography variant="h6" noWrap component="div" style={{position: "absolute",left:"28px",top:"25px"}}>
           Rental Rate Details
          </Typography>

         

          <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Rate ID" variant="outlined" style={{position: "absolute",borderRadius:"7px",top:"25px",backgroundColor:"transparent",color:"white",left:"210px",zIndex:"1",width:"25%"}}
            value={this.state.FormData.rate_Id}
            onChange={(e) => {
                let formData = this.state.FormData
                formData.rate_Id = e.target.value
                this.setState({ formData })
            }}
            validators={['required']}  
          />
          <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Type" variant="outlined" style={{position: "absolute",borderRadius:"7px",top:"10%",backgroundColor:"transparent",color:"white",left:"355px",zIndex:"1",width:"25%"}}
          value={this.state.FormData.type}
          onChange={(e) => {
              let formData = this.state.FormData
              formData.type = e.target.value
              this.setState({ formData })
          }}
          validators={['required']}
          />
       
          <div id="driverBtn">
                  <Button label={this.state.btnLabelSave} type="submit" variant="contained" color="success" style={{position: "absolute",top:"80px",backgroundColor:"green",color:"white",right:"-10px",zIndex:"1",width:"20%"}}>Save</Button><br/><br/>
                  <Button variant="contained" color="success"style={{position: "absolute",top:"133px",backgroundColor:"blue",color:"white",right:"-10px",zIndex:"1",width:"20%"}}>Update</Button><br/><br/>
                  {/* <Button variant="contained" color="success"style={{position: "absolute",top:"186px",backgroundColor:"red",color:"white",right:"-10px",zIndex:"1",width:"20%"}}>Delete</Button> */}
              </div>
  
          <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Brand" variant="outlined" style={{position: "absolute",top:"80px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}
          value={this.state.FormData.brand}
          onChange={(e) => {
              let formData = this.state.FormData
              formData.brand = e.target.value
              this.setState({ formData })
          }}
          validators={['required']}
          />
              <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Daily Rate" variant="outlined" style={{position: "absolute",borderRadius:"7px",top:"80px",backgroundColor:"white",color:"white",left:"39%",zIndex:"1",width:"35%"}}
              value={this.state.FormData.daily_Rate}
              onChange={(e) => {
                  let formData = this.state.FormData
                  formData.daily_Rate = e.target.value
                  this.setState({ formData })
              }}
              validators={['required']}
              />
              <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Free KM Day" variant="outlined" style={{position: "absolute",borderRadius:"7px",top:"133px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}
              value={this.state.FormData.free_KM_Day}
              onChange={(e) => {
                  let formData = this.state.FormData
                  formData.free_KM_Day = e.target.value
                  this.setState({ formData })
              }}
              validators={['required']}
              />
              <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Free KM Month" variant="outlined" style={{position: "absolute",borderRadius:"7px",top:"133px",backgroundColor:"white",color:"white",left:"39%",zIndex:"1",width:"35%"}}
              value={this.state.FormData.free_KM_Month}
              onChange={(e) => {
                  let formData = this.state.FormData
                  formData.free_KM_Month = e.target.value
                  this.setState({ formData })
              }}
              validators={['required']}
              /><br/>
              <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Monthly Rate" variant="outlined" style={{position: "absolute",borderRadius:"7px",top:"186px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}
              value={this.state.FormData.monthly_Rate}
              onChange={(e) => {
                  let formData = this.state.FormData
                  formData.monthly_Rate = e.target.value
                  this.setState({ formData })
              }}
              validators={['required']}
              />
              <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Price Per Extra KM" variant="outlined" style={{position: "absolute",borderRadius:"7px",top:"186px",backgroundColor:"white",color:"white",left:"39%",zIndex:"1",width:"35%"}}
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

<ValidatorForm ref="form" className="pt-2" onSubmit={this.submitDriverData} >
  <section id="dashboardReectangle4">
    
      
    <Typography variant="h6" noWrap component="div" style={{position: "absolute",left:"28px",top:"25px",zIndex:"2"}}>
           Add Driver Details
          </Typography>
    
            <div id="driverBtn1">
            <Button label={this.state.btnLabelDriverSave} type="submit" variant="contained" color="success" style={{position: "absolute",top:"110px",backgroundColor:"green",color:"white",right:"-10px",zIndex:"1",width:"20%"}}>Save</Button><br/><br/>    
                  <Button variant="contained" color="success"style={{position: "absolute",top:"160px",backgroundColor:"blue",color:"white",right:"-10px",zIndex:"1",width:"20%"}}>Update</Button><br/><br/>
                  {/* <Button variant="contained" color="success"style={{position: "absolute",top:"210px",backgroundColor:"red",color:"white",right:"-10px",zIndex:"1",width:"20%"}}>Delete</Button> */}
              </div>
        
              <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Driver NIC" variant="outlined" style={{position: "absolute",borderRadius:"7px",top:"80px",margin:"5px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}
              value={this.state.DriverFormData.driver_NIC}
              onChange={(e) => {
                  let DriverFormDatas = this.state.DriverFormData
                  DriverFormDatas.driver_NIC = e.target.value
                  this.setState({ DriverFormDatas })
              }}
              validators={['required']}   
              />
              <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="License No" variant="outlined" style={{position: "absolute",borderRadius:"7px",top:"80px",margin:"5px",backgroundColor:"white",color:"white",left:"40%",zIndex:"1",width:"35%"}}
              value={this.state.DriverFormData.licen}
              onChange={(e) => {
                  let DriverFormDatas = this.state.DriverFormData
                  DriverFormDatas.licen = e.target.value
                  this.setState({ DriverFormDatas })
              }}
              validators={['required']}   
              />
              <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Name" variant="outlined" style={{position: "absolute",borderRadius:"7px",top:"133px",margin:"5px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}
               value={this.state.DriverFormData.name}
               onChange={(e) => {
                   let DriverFormDatas = this.state.DriverFormData
                   DriverFormDatas.name = e.target.value
                   this.setState({ DriverFormDatas })
               }}
               validators={['required']}   
              />
              <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Address" variant="outlined" style={{position: "absolute",borderRadius:"7px",top:"133px",margin:"5px",backgroundColor:"white",color:"white",left:"40%",zIndex:"1",width:"35%"}}
              value={this.state.DriverFormData.address}
              onChange={(e) => {
                  let DriverFormDatas = this.state.DriverFormData
                  DriverFormDatas.address = e.target.value
                  this.setState({ DriverFormDatas })
              }}
              validators={['required']}   
              /><br/>
              <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Contact No" variant="outlined" style={{position: "absolute",borderRadius:"7px",top:"186px",margin:"5px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}
               value={this.state.DriverFormData.contact_No}
               onChange={(e) => {
                   let DriverFormDatas = this.state.DriverFormData
                   DriverFormDatas.contact_No = e.target.value
                   this.setState({ DriverFormDatas })
               }}
               validators={['required']}   
              />
              <TextValidator size="small" sx={{ width: '40ch'}} id="outlined-basic" label="Salary" variant="outlined" style={{position: "absolute",borderRadius:"7px",top:"186px",margin:"5px",backgroundColor:"white",color:"white",left:"40%",zIndex:"1",width:"35%"}}
               value={this.state.DriverFormData.salary}
               onChange={(e) => {
                   let DriverFormDatas = this.state.DriverFormData
                   DriverFormDatas.salary = e.target.value
                   this.setState({ DriverFormDatas})
               }}
               validators={['required']}  
              />  

  
  </section>
  </ValidatorForm>
  <Stack  sx={{ width: '50%' }} spacing={2}>
              <Alert
               icon={<CheckIcon fontSize="inherit" />} 
               open={this.state.alert}
                    onClose={() => {this.setState({alert: false})}}
                    message={this.state.message}
                    autoHideDuration={300000}
                    severity={this.state.severity}
                    variant="standard" >
                    This is a success alert — check it out!
              </Alert>
            </Stack> 
       </>

    );

}
}

export default Home;
