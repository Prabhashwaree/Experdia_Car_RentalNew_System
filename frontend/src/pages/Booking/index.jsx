import { styleSheet } from "./style";
import { Component } from "react";
import { withStyles } from "@mui/styles";
import './booking.css';
import carLogo from '../../assets/img/carLogo.png';
import bin from '../../assets/img/bin.png';
import update from '../../assets/img/update.png';
import cart from '../../assets/img/cart.png';
import orderBackGround from '../../assets/img/orderBackGround.jpeg';
import carSlide from '../../assets/img/carSlide.png';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Link } from 'react-router-dom';
import bookingService from '../../service/booking';
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

// import Input from '@mui/material/Input';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';

const booking = [
  { label: 'Empty' },
];

const driver = [
  { label: 'Empty' },
];



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



class BookingPage extends Component {
  constructor(props) {
    var today = new Date(),
      date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var today = new Date(),
      time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    super(props);
    this.state = {
      currentDate: date,
      currentTime: time,

      BookingFormData: {
        booking_Id: 'B001',
        picUp_Date: '',
        drop_Date: '',
        picUp_Time: '',
        drop_Time: '',
        bookingStatus: '',
        driverStatus: '',
        picUpLocation: '',
        lossDamagePrice: '',
        rent_Duration: '',
        car_Count: '',

        customer: {
          nic_Number: '995642816V',
          license_Id: 'n456',
          cus_Name: 'neth',
          address: 'pandaura',
          contact_No: '0774914870',
          email: 'neth@gmail.com',
          userName: 'nethmini',
          password: 'neth',
          nicImg: 'C:\fakepath\download.png',
          licenseImg: 'C:\fakepath\download.png',
        },
        payment: {
          payment_Id: 'P001',
          currently_Run_KM: '45',
          ride_A_KM: '62',
          total_KM: '856',
          status: 'pending',
          total_Price: '86953'
        },
        bookingDetails: [
          {
            booking_Id: 'B001',
            register_No: 'R001',
            date: date,
            time: time
          }
        ],
        driverSchedule: [
          {
            booking_Id: 'B001',
            driver_NIC: '995642815V',
            status: 'yes',
            date: date,
            time: time
          }
        ]

      },
      alert: false,
      message: "",
      severity: "",
      btnLabelBookingSave: 'save',
      data: []
    }
  }


  clearBookingTextFeild = (e) => {
    this.setState({
      BookingFormData: {
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
        car_Count: '',

      }

    })
  }



  submitBookingData = async () => {
    console.log("load method Calling")
    let BookingFormData = this.state.BookingFormData;
    console.log("form data : " + JSON.stringify(BookingFormData))
    let restBook = await bookingService.postBooking(BookingFormData);
    // console.log(restBook);
    if (restBook.status === 201) {
      this.setState({
        alert: true,
        message: restBook.data.message,
        severity: "success"

      });
      this.clearBookingTextFeild();
    } else {
      this.setState({
        alert: true,
        // message: restBook.response.data.message,
        severity: "error"
      });
    }
  }





  render() {
    return (

      <>

        {/* --------------------------loging----------------------- */}
        <section>

          <div id="navivar"></div>

          <img src={carLogo} style={{ position: "absolute", left: "80px", top: "1.9%", zIndex: "1", width: "40px", height: "40px" }} />
          {/* <Button variant="contained" color="success" style={{ position: "absolute", left: "1340px", top: "2%", zIndex: "1", width: "130px", height: "40px", fontSize: "13px", fontWeight: "100", color: "white", backgroundColor: "gray" }}>My Profile</Button> */}

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ position: "absolute", left: "130px", top: "2.5%", zIndex: "1", color: "white" }}>
            <b>EXPERDIA Car Rental</b>
          </Typography>






          <section>

            <img src={orderBackGround} id="bookingBackgroundSection" />
            <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitBookingData} >
              <div id="bookingTextSection">

                <p style={{ position: "absolute", zIndex: "5", color: "white", left: "890px", top: "-40px" }}><b>{this.state.currentDate}</b></p>
                <p style={{ position: "absolute", zIndex: "5", color: "white", left: "1000px", top: "-40px" }}><b>{this.state.currentTime}</b></p>

                <TextValidator size="small" sx={{ width: '40ch' }} id="outlined-helperText" variant="filled" label="Booking ID" defaultValue="B-" style={{ position: "relative", top: "34px", backgroundColor: "white", color: "white", left: "810px", zIndex: "1", borderRadius: "7px", width: "8%" }}
                  value={this.state.BookingFormData.booking_Id}
                  onChange={(e) => {
                    let BookingFormDatas = this.state.BookingFormData
                    BookingFormDatas.booking_Id = e.target.value
                    this.setState({ BookingFormDatas })
                  }}
                  validators={['required']}
                />
                <Typography variant="h4" noWrap component="div" style={{ position: "absolute", left: "30px", top: "50px", zIndex: "5", color: "white" }}>
                  Booking Now
                </Typography>



                <TextField size="small" sx={{ width: '40ch' }} id="outlined-disabled" label="Customer NIC" defaultValue="" style={{ position: "relative", top: "-15px", backgroundColor: "white", color: "white", left: "1105px", zIndex: "1", width: "13%", borderRadius: "7px" }}
                  value={this.state.BookingFormData.customer.nic_Number}
                  onChange={(e) => {
                    let BookingFormDatas = this.state.BookingFormData
                    BookingFormDatas.customer.nic_Number = e.target.value
                    this.setState({ BookingFormDatas })
                  }}
                  validators={['required']}
                />


                {/* <Autocomplete
                size="small" sx={{ width: '40ch'}} 
                disablePortal
                id="combo-box-demo"

                options={booking}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} variant="filled" label="Customer NIC" />}
                style={{ position: "relative", top: "-15px", backgroundColor: "white", color: "white", left: "1105px", zIndex: "1", width: "13%", borderRadius: "7px" }} 
                value={this.state.BookingFormData.customer.nic_Number}
                onChange={(e) => {
                    let BookingFormDatas = this.state.BookingFormData
                    BookingFormDatas.customer.nic_Number = e.target.value
                    this.setState({ BookingFormDatas })
                }}
                validators={['required']}
                /> */}

                {/* <Autocomplete
                size="small" sx={{ width: '40ch'}} 
                disablePortal
                id="combo-box-demo"
                options={driver}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} variant="filled" label="Payment ID" />}
                style={{ position: "relative", borderRadius: "7px", top: "-62px", backgroundColor: "white", color: "white", left: "928px", zIndex: "1", width: "13%" }} 
                value={this.state.BookingFormData.payment.payment_Id}
                onChange={(e) => {
                    let BookingFormDatas = this.state.BookingFormData
                    BookingFormDatas.payment.payment_Id = e.target.value
                    this.setState({ BookingFormDatas })
                }}
                validators={['required']} */}
                {/* /> */}



                <TextField  size="small" sx={{ width: '40ch' }} id="outlined-disabled" label="Payment ID" defaultValue="" style={{ position: "relative", borderRadius: "7px", top: "-62px", backgroundColor: "white", color: "white", left: "928px", zIndex: "1", width: "13%" }}
                  value={this.state.BookingFormData.payment.payment_Id}
                  onChange={(e) => {
                    let BookingFormDatas = this.state.BookingFormData
                    BookingFormDatas.payment.payment_Id = e.target.value
                    this.setState({ BookingFormDatas })
                  }}
                  validators={['required']}
                />
                {/* disabled */}

                <TextValidator
                  size="small" sx={{ width: '40ch' }}
                  label="PicUp Date"
                  id="date"
                  variant="filled"
                  type="date"

                  InputLabelProps={{
                    shrink: true,
                  }}

                  style={{ position: "relative", top: "-35px", backgroundColor: "white", color: "white", left: "20px", borderRadius: "7px", zIndex: "1", width: "25%" }}
                  value={this.state.BookingFormData.picUp_Date}
                  onChange={(e) => {
                    let BookingFormDatas = this.state.BookingFormData
                    BookingFormDatas.picUp_Date = e.target.value
                    this.setState({ BookingFormDatas })
                  }}
                  validators={['required']}
                />
                <TextValidator
                  size="small" sx={{ width: '40ch' }}
                  label="PicUp Time"
                  id="time"
                  variant="filled"
                  type="time"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                  style={{ position: "relative", top: "-83px", backgroundColor: "white", color: "white", left: "370px", borderRadius: "7px", zIndex: "1", width: "25%" }}
                  value={this.state.BookingFormData.picUp_Time}
                  onChange={(e) => {
                    let BookingFormDatas = this.state.BookingFormData
                    BookingFormDatas.picUp_Time = e.target.value
                    this.setState({ BookingFormDatas })
                  }}
                  validators={['required']}
                />
                <Button label={this.state.btnLabelBookingSave} type="submit" variant="contained" color="success" style={{ position: "relative", top: "-199px", left: "690px", width: "8%", backgroundColor: "Green", zIndex: "5" }}>Confirm</Button><br />
                <TextValidator
                  size="small" sx={{ width: '40ch' }}
                  label="Drop Date"
                  id="date"
                  variant="filled"
                  type="date"

                  InputLabelProps={{
                    shrink: true,
                  }}

                  style={{ position: "relative", top: "-115px", backgroundColor: "white", color: "white", left: "20px", borderRadius: "7px", zIndex: "1", width: "25%" }}
                  value={this.state.BookingFormData.drop_Date}
                  onChange={(e) => {
                    let BookingFormDatas = this.state.BookingFormData
                    BookingFormDatas.drop_Date = e.target.value
                    this.setState({ BookingFormDatas })
                  }}
                  validators={['required']}
                />
                <TextValidator
                  size="small" sx={{ width: '40ch' }}
                  label="Drop Time"
                  id="time"
                  variant="filled"
                  type="time"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                  style={{ position: "relative", top: "-163px", backgroundColor: "white", color: "white", left: "370px", borderRadius: "7px", zIndex: "1", width: "25%" }}
                  value={this.state.BookingFormData.drop_Time}
                  onChange={(e) => {
                    let BookingFormDatas = this.state.BookingFormData
                    BookingFormDatas.drop_Time = e.target.value
                    this.setState({ BookingFormDatas })
                  }}
                  validators={['required']}
                />
                <Button variant="contained" color="success" style={{ position: "relative", top: "-428px", color: "black", backgroundColor: "rgb(128, 128, 128)", left: "1150px", width: "1%", zIndex: "5", boxShadow: "none" }}><img src={cart} style={{ width: "30px" }} /></Button><br />
                <TextValidator size="small" sx={{ width: '40ch' }} id="outlined-basic" label="Booking Status" variant="filled" style={{ position: "relative", top: "-200px", backgroundColor: "white", color: "white", left: "20px", borderRadius: "7px", zIndex: "1", width: "25%" }}
                  value={this.state.BookingFormData.bookingStatus}
                  onChange={(e) => {
                    let BookingFormDatas = this.state.BookingFormData
                    BookingFormDatas.bookingStatus = e.target.value
                    this.setState({ BookingFormDatas })
                  }}
                  validators={['required']}
                />
                <TextValidator size="small" sx={{ width: '40ch' }} id="outlined-basic" label="Driver Status" variant="filled" style={{ position: "relative", top: "-248px", backgroundColor: "white", color: "white", left: "370px", borderRadius: "7px", zIndex: "1", width: "25%" }}
                  value={this.state.BookingFormData.driverStatus}
                  onChange={(e) => {
                    let BookingFormDatas = this.state.BookingFormData
                    BookingFormDatas.driverStatus = e.target.value
                    this.setState({ BookingFormDatas })
                  }}
                  validators={['required']}
                />
                <Button variant="contained" color="success" style={{ position: "relative", top: "-565px", color: "black", backgroundColor: "rgb(128, 128, 128)", left: "1198px", width: "1%", zIndex: "5", boxShadow: "none" }}><img src={update} style={{ width: "30px" }} /></Button><br />

                <TextValidator size="small" sx={{ width: '40ch' }} id="outlined-basic" label="PicUp Location" variant="filled" style={{ position: "relative", top: "-285px", backgroundColor: "white", color: "white", left: "20px", borderRadius: "7px", zIndex: "1", width: "25%" }}
                  value={this.state.BookingFormData.picUpLocation}
                  onChange={(e) => {
                    let BookingFormDatas = this.state.BookingFormData
                    BookingFormDatas.picUpLocation = e.target.value
                    this.setState({ BookingFormDatas })
                  }}
                  validators={['required']}
                />
                <TextValidator size="small" sx={{ width: '40ch' }} id="outlined-basic" label="Rent Duration" variant="filled" style={{ position: "relative", top: "-333px", backgroundColor: "white", color: "white", left: "370px", borderRadius: "7px", zIndex: "1", width: "25%" }}
                  value={this.state.BookingFormData.rent_Duration}
                  onChange={(e) => {
                    let BookingFormDatas = this.state.BookingFormData
                    BookingFormDatas.rent_Duration = e.target.value
                    this.setState({ BookingFormDatas })
                  }}
                  validators={['required']}
                />
                <Button variant="contained" color="success" style={{ position: "relative", top: "-702px", color: "black", backgroundColor: "rgb(128, 128, 128)", left: "1250px", width: "1%", zIndex: "5", boxShadow: "none" }}><img src={bin} style={{ width: "30px" }} /></Button><br />
                <TextValidator size="small" sx={{ width: '40ch' }} id="outlined-basic" label="Car Count" variant="filled" style={{ position: "relative", top: "-370px", backgroundColor: "white", color: "white", left: "20px", borderRadius: "7px", zIndex: "1", width: "25%" }}
                  value={this.state.BookingFormData.car_Count}
                  onChange={(e) => {
                    let BookingFormDatas = this.state.BookingFormData
                    BookingFormDatas.car_Count = e.target.value
                    this.setState({ BookingFormDatas })
                  }}
                  validators={['required']}
                />
                <TextValidator size="small" sx={{ width: '40ch' }} id="outlined-basic" label="Loss Damage Price" variant="filled" style={{ position: "relative", top: "-418px", backgroundColor: "white", color: "white", left: "370px", borderRadius: "7px", zIndex: "1", width: "25%" }}
                  value={this.state.BookingFormData.lossDamagePrice}
                  onChange={(e) => {
                    let BookingFormDatas = this.state.BookingFormData
                    BookingFormDatas.lossDamagePrice = e.target.value
                    this.setState({ BookingFormDatas })
                  }}
                  validators={['required']}
                />

                <Button variant="contained" component="label" style={{ position: "relative", top: "-455px", backgroundColor: "lightblue", left: "720px", width: "10%", color: "black", fontSize: "11px", zIndex: "5" }}> Upload pay Slip <input hidden accept="image/*" multiple type="file" /> </Button>
                {/* <IconButton color="primary" aria-label="upload picture" component="label" style={{ position: "relative", top: "-25px", backgroundColor: "lightblue", left: "35px", width: "10%" ,color:"black",fontSize:"11px"}}> <input 
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
                 /> <PhotoCamera /> </IconButton> */}
              </div>
            </ValidatorForm>
          </section>


          <div>
            <img id="sliderImg" src={carSlide} style={{ width: "35%", height: "55%" }} />
          </div>





          <section>
            <div className="BookingTable">

              <TableContainer component={Paper} style={{ width: "94%", left: "30px", position: "relative", top: "-810px" }}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Booking_Id</StyledTableCell>
                      <StyledTableCell align="right"> PicUp Date</StyledTableCell>
                      <StyledTableCell align="right">PicUp Time</StyledTableCell>
                      <StyledTableCell align="right">Loss Damage Price</StyledTableCell>
                      <StyledTableCell align="right">Rent Duration</StyledTableCell>
                      <StyledTableCell align="right">Car Count</StyledTableCell>
                      <StyledTableCell align="right">PicUpLocation</StyledTableCell>
                      <StyledTableCell align="right">Customer NIC</StyledTableCell>

                    </TableRow>
                  </TableHead>
                  <TableBody>

                  </TableBody>
                </Table>
              </TableContainer>

            </div>
          </section>

        </section>


      </>

    );

  }

}
export default BookingPage;