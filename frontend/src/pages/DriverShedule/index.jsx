import { styleSheet } from "./style";
import { Component } from "react";
import { withStyles } from "@mui/styles";
import './driverShedule.css';
import carLogo from '../../assets/img/carLogo.png';
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
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import Search from '../../assets/img/search.png';
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import driverScheduleService from '../../service/driverSchedule';

import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';


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

const ariaLabel = { 'aria-label': 'description' };




const booking = [
  { label: 'Empty' },
];

const driver = [
  { label: 'Empty' },
];


class DriverShedulePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DriverScheduleFormData: {
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

        driver: {
          driver_NIC:'',
          licen:'',
          name:'',
          address:'',
          contact_No:'',
          salary:''
        }
      },
      alert: false,
      message: "",
      severity: "",
      btnLabelDriverScheduleSave: 'save',
      data:[]

    }
  }


  clearDriverScheduleTextFeild = (e) => {
    this.setState({
      DriverScheduleFormData: {
        status: '',
        date: '',
        time: '',

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

        driver: {
          driver_NIC:'',
          licen:'',
          name:'',
          address:'',
          contact_No:'',
          salary:''
        }
      }
    })
  }


  submitDriverSchedule = async () =>{
    console.log("load method Calling")
    let DriverScheduleFormData = this.state.DriverScheduleFormData;
    console.log("form data : " + JSON.stringify(DriverScheduleFormData))
    let resCar = await driverScheduleService.postDriverSchedule(DriverScheduleFormData);
    console.log(resCar)
    if (resCar.status === 201) {
      this.setState({
          alert: true,
          message: resCar.data.message,
          severity: "success"
      });
      this.clearDriverScheduleTextFeild();
  } else {
      this.setState({
          alert: true,
          message: resCar.response.data.message,
          severity: "error"
      });
  }
  }



  deleteDriverSchedule = async (id) => { 
    let params = {
      driver_NIC: id
    }
     let res = await driverScheduleService.deleteDriverSchedule(params);

     if(res.status === 200) {
        this.setState({
            alert: true,
            message: res.data.message,
            severity: 'success'
        });
        this.loadData();
     } else {
        this.setState({
            alert: true,
            message: res.data.message,
            severity: 'error'
        });
     }
   }; 

  exampleForMap = () =>{
    this.state.data.map((value,index) =>{
      console.log(value.index)
    });
  }

  loadData = async () =>{
    console.log("load method Calling")
    let res =await driverScheduleService.GetDriverSchedule();
    // console.log("rental data " + res.data.data);
  
    if(res.status === 200){
       this.setState({
      data :res.data.data
      });
    }
    console.log(this.state.data);

    this.exampleForMap();
   }

   componentDidMount() { 
    this.loadData();
 }








  render() {
    return (

      <>

        {/* --------------------------loging----------------------- */}
        
          <section>

            <div id="navivar"></div>

            <img src={carLogo} style={{ position: "absolute", left: "80px", top: "1.9%", zIndex: "1", width: "40px", height: "40px" }} />
            <h1 style={{ position: "absolute", left: "1360px", top: "2.8%", zIndex: "1", width: "40px", height: "40px", fontSize: "20px", fontWeight: "100", color: "white" }}>Back</h1>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ position: "absolute", left: "130px", top: "2.5%", zIndex: "1", color: "white" }}>
              <b>EXPERDIA Car Rental</b>
            </Typography>
            <Input placeholder="Search" inputProps={ariaLabel} style={{ position: "absolute", left: "886px", top: "10px", width: "30%", zIndex: "2" }} />
            <img src={Search} style={{ position: "absolute", left: "1295px", top: "10px", width: "2%" }} />
            
            {/* <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitDriverSchedule} >
            
            <section>
              <div id="driverSection">
                <Typography variant="h4" noWrap component="div" style={{ position: "absolute", left: "30px", top: "80px" }}>
                  Driver Shedule
                </Typography>
                <Autocomplete
                  size="small" sx={{ width: '40ch' }}
                  disablePortal
                  id="combo-box-demo"
                  options={booking}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Booking ID" />}
                  style={{ position: "relative", top: "13px", backgroundColor: "transparent", color: "white", left: "1000px", zIndex: "1", width: "25%" }}
                  value={this.state.DriverScheduleFormData.booking.booking_Id}
                  onChange={(e) => {
                    let DriverScheduleFormDatas = this.state.DriverScheduleFormData
                    DriverScheduleFormDatas.booking.booking_Id = e.target.value
                    this.setState({ DriverScheduleFormDatas })
                  }}
                  validators={['required']}
                />

                <Autocomplete
                  size="small" sx={{ width: '40ch' }}
                  disablePortal
                  id="combo-box-demo"
                  options={driver}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Driver NIC" />}
                  style={{ position: "relative", top: "-25px", backgroundColor: "transparent", color: "white", left: "650px", zIndex: "1", width: "25%" }}
                  value={this.state.DriverScheduleFormData.driver.driver_NIC}
                  onChange={(e) => {
                    let DriverScheduleFormDatas = this.state.DriverScheduleFormData
                    DriverScheduleFormDatas.driver.driver_NIC = e.target.value
                    this.setState({ DriverScheduleFormDatas })
                  }}
                  validators={['required']}
                />

                <TextField disabled size="small" sx={{ width: '40ch' }} id="outlined-disabled" label="PicUp Location" defaultValue="" style={{ position: "relative", top: "20px", backgroundColor: "white", color: "white", left: "20px", zIndex: "1", width: "38%" }} 
                value={this.state.DriverScheduleFormData.booking.picUpLocation}
                  onChange={(e) => {
                    let DriverScheduleFormDatas = this.state.DriverScheduleFormData
                    DriverScheduleFormDatas.booking.picUpLocation = e.target.value
                    this.setState({ DriverScheduleFormDatas })
                  }}
                  validators={['required']}
                />
                <TextField disabled size="small" sx={{ width: '40ch' }} id="outlined-disabled" label="PicUp Date" defaultValue="" style={{ position: "relative", top: "20px", backgroundColor: "white", color: "white", left: "38px", zIndex: "1", width: "38%" }} 
                value={this.state.DriverScheduleFormData.booking.picUp_Date}
                onChange={(e) => {
                  let DriverScheduleFormDatas = this.state.DriverScheduleFormData
                  DriverScheduleFormDatas.booking.picUp_Date = e.target.value
                  this.setState({ DriverScheduleFormDatas })
                }}
                validators={['required']}
                />
                <Button label={this.state.btnLabelDriverScheduleSave} type="submit" variant="contained" color="success" style={{ position: "relative", top: "20px", left: "48px", width: "10%", backgroundColor: "Green" }}>Save</Button>
                <TextField disabled size="small" sx={{ width: '40ch' }} id="outlined-disabled" label="PicUp Time" defaultValue="" style={{ position: "relative", top: "45px", backgroundColor: "white", color: "white", left: "20px", zIndex: "1", width: "38%" }} 
                value={this.state.DriverScheduleFormData.booking.picUp_Time}
                onChange={(e) => {
                  let DriverScheduleFormDatas = this.state.DriverScheduleFormData
                  DriverScheduleFormDatas.booking.picUp_Time = e.target.value
                  this.setState({ DriverScheduleFormDatas })
                }}
                validators={['required']}
                />
                <Button variant="contained" color="success" style={{ position: "relative", top: "45px", backgroundColor: "Blue", left: "570px", width: "10%", zIndex: "5" }}>Update</Button>
                <TextField size="small" sx={{ width: '40ch' }} id="outlined-basic" label="Status" variant="outlined" style={{ position: "relative", top: "45px", backgroundColor: "white", color: "white", left: "-97px", zIndex: "1", width: "38%" }}
                value={this.state.DriverScheduleFormData.status}
                onChange={(e) => {
                  let DriverScheduleFormDatas = this.state.DriverScheduleFormData
                  DriverScheduleFormDatas.status = e.target.value
                  this.setState({ DriverScheduleFormDatas })
                }}
                validators={['required']}
                /> */}
                {/* <Button variant="contained" color="success"style={{position: "relative",top:"-25px",backgroundColor:"red",left:"48px",width:"10%"}}>Delete</Button> */}

              {/* </div>
            </section>

        </ValidatorForm> */}

        {/* -------table--------- */}
        <section>
          <div>

            <div style={{ position: "absolute", left: "600px", top: "10px", zIndex: "2", color: "black" }}>

            </div>


            <TableContainer component={Paper} style={{ width: "94%", left: "30px", top: "300px", position: "relative", top: "10px" }}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>BookingId</StyledTableCell>
                    <StyledTableCell align="right">DriverNIC</StyledTableCell>
                    <StyledTableCell align="right">Status</StyledTableCell>
                    <StyledTableCell align="right">Date</StyledTableCell>
                    <StyledTableCell align="right">Time</StyledTableCell>
                    <StyledTableCell align="right">Action</StyledTableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                {
                  this.state.data.map((row) => (
                    <TableRow>
                    <TableCell>{row.booking_Id}</TableCell>
                    <StyledTableCell align="right">{row.driver_NIC}</StyledTableCell>
                    <StyledTableCell align="right">{row.status}</StyledTableCell>
                    <StyledTableCell align="right">{row.date}</StyledTableCell>
                    <StyledTableCell align="right">{row.time}</StyledTableCell>

                    
                     <StyledTableCell align="right">

                     <Tooltip title="Delete"><IconButton
                                        onClick={() => {
                                            this.deleteDriverSchedule(row.booking_Id)
                                        }}
                                    ><DeleteIcon color="error" /></IconButton>
                                    </Tooltip>

                                    {/* <Tooltip title="Edit"><IconButton
                                        onClick={() => {
                                            console.log("edit icon clicked!")
                                            this.updateRentalRate(row);
                                        }}
                                    ><EditIcon color='primary'/></IconButton>
                                    </Tooltip> */}
                     </StyledTableCell>
                  </TableRow>
                  ))

                 
                }
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

export default DriverShedulePage;