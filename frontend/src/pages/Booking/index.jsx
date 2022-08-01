import { styleSheet } from "./style";
import { Component } from "react";
import { withStyles } from "@mui/styles";
import './booking.css';
import carLogo from '../../assets/img/carLogo.png';
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
    super(props);
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
            <div id="bookingTextSection">


              <TextField id="outlined-helperText" variant="filled" label="Booking ID" defaultValue="B-" style={{ position: "relative", top: "70px", backgroundColor: "white", color: "white", left: "320px", zIndex: "1", borderRadius: "7px", width: "8%" }} />
              <Typography variant="h4" noWrap component="div" style={{ position: "absolute", left: "30px", top: "75px", zIndex: "5", color: "white" }}>
                Booking Now
              </Typography>
              <Autocomplete
                disablePortal
                id="combo-box-demo"

                options={booking}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} variant="filled" label="Customer NIC" />}
                style={{ position: "relative", top: "13px", backgroundColor: "white", color: "white", left: "645px", zIndex: "1", width: "15%", borderRadius: "7px" }} />

              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={driver}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} variant="filled" label="Payment ID" />}
                style={{ position: "relative", borderRadius: "7px", top: "-43px", backgroundColor: "white", color: "white", left: "440px", zIndex: "1", width: "15%" }} />

              <TextField
                label="PicUp Date"
                id="date"
                variant="filled"
                type="date"

                InputLabelProps={{
                  shrink: true,
                }}

                style={{ position: "relative", top: "-35px", backgroundColor: "white", color: "white", left: "20px", borderRadius: "7px", zIndex: "1", width: "25%" }} />
              <TextField
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
                style={{ position: "relative", top: "-35px", backgroundColor: "white", color: "white", left: "25px", borderRadius: "7px", zIndex: "1", width: "25%" }} />
              <Button variant="contained" color="success" style={{ position: "relative", top: "-25px", left: "35px", width: "10%", backgroundColor: "Green" }}>Save</Button><br />
              <TextField

                label="Drop Date"
                id="date"
                variant="filled"
                type="date"

                InputLabelProps={{
                  shrink: true,
                }}

                style={{ position: "relative", top: "-31px", backgroundColor: "white", color: "white", left: "20px", borderRadius: "7px", zIndex: "1", width: "25%" }} />
              <TextField
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
                style={{ position: "relative", top: "-31px", backgroundColor: "white", color: "white", left: "25px", borderRadius: "7px", zIndex: "1", width: "25%" }} />
              <Button variant="contained" color="success" style={{ position: "relative", top: "-25px", backgroundColor: "Blue", left: "35px", width: "10%", zIndex: "1" }}>Update</Button><br />
              <TextField id="outlined-basic" label="Booking Status" variant="filled" style={{ position: "relative", top: "-27px", backgroundColor: "white", color: "white", left: "20px", borderRadius: "7px", zIndex: "1", width: "25%" }} />
              <TextField id="outlined-basic" label="Driver Status" variant="filled" style={{ position: "relative", top: "-27px", backgroundColor: "white", color: "white", left: "25px", borderRadius: "7px", zIndex: "1", width: "25%" }} />
              <Button variant="contained" color="success" style={{ position: "relative", top: "-25px", backgroundColor: "red", left: "35px", width: "10%" }}>Delete</Button><br />
              <TextField id="outlined-basic" label="PicUp Location" variant="filled" style={{ position: "relative", top: "-23px", backgroundColor: "white", color: "white", left: "20px", borderRadius: "7px", zIndex: "1", width: "25%" }} />
              <TextField id="outlined-basic" label="Rent Duration" variant="filled" style={{ position: "relative", top: "-23px", backgroundColor: "white", color: "white", left: "25px", borderRadius: "7px", zIndex: "1", width: "25%" }} /><br />
              <TextField id="outlined-basic" label="Car Count" variant="filled" style={{ position: "relative", top: "-20px", backgroundColor: "white", color: "white", left: "20px", borderRadius: "7px", zIndex: "1", width: "25%" }} />
              <TextField id="outlined-basic" label="Loss Damage Price" variant="filled" style={{ position: "relative", top: "-20px", backgroundColor: "white", color: "white", left: "25px", borderRadius: "7px", zIndex: "1", width: "25%" }} />

              <Button variant="contained" component="label" style={{ position: "relative", top: "-25px", backgroundColor: "gray", left: "35px", width: "10%" }}> Upload pay Slip <input hidden accept="image/*" multiple type="file" /> </Button>

            </div>
          </section>


          <div>
            <img id="sliderImg" src={carSlide} style={{ width: "35%", height: "55%" }} />
          </div>





          <section>
            <div className="BookingTable">

              <TableContainer component={Paper} style={{ width: "94%", left: "30px", position: "relative", top: "-440px" }}>
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