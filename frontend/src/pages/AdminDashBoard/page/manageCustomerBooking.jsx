import * as React from 'react';
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
import Search from '../../../assets/img/search.png';
import { Component } from "react";


import customerService from '../../../service/customer';
import bookingDetailService from '../../../service/bookingDetail';

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


class ManageCustomerBooking extends Component {
  constructor(props) {
    super(props)
    this.state = {
      CustomerFormData: {
        nic_Number: '',
        license_Id: '',
        cus_Name: '',
        address: '',
        contact_No: '',
        email: '',
        userName: '',
        password: '',
      },
      alert: false,
      message: "",
      severity: "",
      data: [],



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
      data: []



    }
  }



  deleteCustomer = async (id) => {
    let params = {
      nic_Number: id
    }
    let res = await customerService.deleteCustomer(params);

    if (res.status === 200) {
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




  exampleForMap = () => {
    this.state.data.map((value, index) => {
      console.log(value.index)
    });
  }

  loadData = async () => {
    console.log("load method Calling")
    let res = await customerService.GetCustomer();
    console.log("rental data " + res.data.data);

    if (res.status === 200) {
      this.setState({
        data: res.data.data
      });
    }
    console.log(this.state.data);

    this.exampleForMap();
  }

  componentDidMount() {
    this.loadData();
  }




  // -------------------booking Details----------------

deleteBookingDetail = async (id) => {
    let params = {
      booking_Id: id
    }
    let res = await bookingDetailService.deleteBookingDetail(params);

    if (res.status === 200) {
      this.setState({
        alert: true,
        message: res.data.message,
        severity: 'success'
      });
      this.loadDataBookingDetail();
    } else {
      this.setState({
        alert: true,
        message: res.data.message,
        severity: 'error'
      });
    }
  };




  exampleForMap = () => {
    this.state.data.map((value, index) => {
      console.log(value.index)
    });
  }

  loadDataBookingDetail = async () => {
    console.log("load method Calling")
    let res = await bookingDetailService.GetBookingDetail();
    console.log("rental data " + res.data.data);

    if (res.status === 200) {
      this.setState({
        data: res.data.data
      });
    }
    console.log(this.state.data);

    this.exampleForMap();
  }

  componentDidMount() {
    this.loadDataBookingDetail();
  }





  render() {
    return (
      <>

        {/* ------------------------Customer -------------------------------------- */}

        <section>
          <div>
            <div style={{ position: "absolute", left: "600px", top: "118px", zIndex: "2", color: "black" }}>
              <Typography variant="h5" noWrap component="div" >
                Manage Customer Details
              </Typography>
              <Typography variant="h6" noWrap component="div" style={{ position: "relative", left: "320px", top: "18px", color: "gray" }}>
                Booking Details
              </Typography>
              <Typography variant="h6" noWrap component="div" style={{ position: "relative", left: "-320px", top: "-20px", color: "gray" }}>
                Customer Information
              </Typography>
            </div>
            <Input placeholder="Search" inputProps={ariaLabel} style={{ position: "absolute", left: "70%", top: "110px", width: "25%" }} />
            <img src={Search} style={{ position: "absolute", left: "1230px", top: "110px", width: "2%" }} />

            <TableContainer component={Paper} style={{ width: "45%", left: "30px", position: "relative", top: "130px" }}>
              <Table sx={{ minWidth: 100 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>NicNumber</StyledTableCell>
                    <StyledTableCell align="right">LicenseId</StyledTableCell>
                    <StyledTableCell align="right">CusName</StyledTableCell>
                    <StyledTableCell align="right">Address</StyledTableCell>
                    <StyledTableCell align="right">ContactNo</StyledTableCell>
                    <StyledTableCell align="right">Email</StyledTableCell>
                    <StyledTableCell align="right">Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>


                  {
                    this.state.data.map((row) => (
                      <TableRow>
                        <TableCell>{row.nic_Number}</TableCell>
                        <StyledTableCell align="right">{row.license_Id}</StyledTableCell>
                        <StyledTableCell align="right">{row.cus_Name}</StyledTableCell>

                        <StyledTableCell align="right">{row.address}</StyledTableCell>
                        <StyledTableCell align="right">{row.contact_No}</StyledTableCell>
                        <StyledTableCell align="right">{row.email}</StyledTableCell>


                        <StyledTableCell align="right">

                          <Tooltip title="Delete"><IconButton
                            onClick={() => {
                              this.deleteCustomer(row.nic_Number)
                            }}
                          ><DeleteIcon color="error" /></IconButton>
                          </Tooltip>


                        </StyledTableCell>
                      </TableRow>
                    ))


                  }



                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </section>




        {/* ------------------------Booking Details table-------------------------------------- */}
        <section>
          <div>

            <div style={{ position: "absolute", left: "9250px", top: "-100px", zIndex: "2", color: "black" }}>
              <Typography variant="h5" noWrap component="div" style={{ position: "relative", left: "2px", top: "5px", zIndex: "5" }}>
                Booking Details
              </Typography>
            </div>

            <TableContainer component={Paper} style={{ width: "40%", left: "660px", position: "relative", top: "60px" }}>
              <Table sx={{ minWidth: 100 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>BookingId</StyledTableCell>
                    <StyledTableCell align="right">RegisterNo</StyledTableCell>
                    {/* <StyledTableCell align="right">Date</StyledTableCell>
                    <StyledTableCell align="right">Time</StyledTableCell> */}
                    <StyledTableCell align="right">Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>


                {
                    this.state.data.map((row) => (
                      <TableRow>
                        <TableCell>{row.booking_Id}</TableCell>
                        <StyledTableCell align="right">{row.register_No}</StyledTableCell>
                        {/* <StyledTableCell align="right">{row.cus_Name}</StyledTableCell> */}
{/* 
                        <StyledTableCell align="right">{row.address}</StyledTableCell>
                        <StyledTableCell align="right">{row.contact_No}</StyledTableCell>
                        <StyledTableCell align="right">{row.email}</StyledTableCell> */}


                        <StyledTableCell align="right">

                          <Tooltip title="Delete"><IconButton
                            onClick={() => {
                              this.deleteCustomer(row.booking_Id)
                            }}
                          ><DeleteIcon color="error" /></IconButton>
                          </Tooltip>


                        </StyledTableCell>
                      </TableRow>
                    ))


                  }


                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </section>



      </>
    );

  }
}
export default ManageCustomerBooking;