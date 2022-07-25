import {styleSheet} from  "./style";
import { Component } from "react";
import {withStyles} from "@mui/styles";
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

function createData(BookingId, DriverNIC, Date, Time, Status) {
  return {BookingId, DriverNIC, Date, Time, Status};
}

const rows = [
        createData('B-0001','998674584V','7/25/2022/','8.00','Pending'),
         createData('B-0002','998674584V','7/25/2022/','8.00','Pending'),
         createData('B-0003','998674584V','7/25/2022/','8.00','Pending'),
         createData('B-0004','998674584V','7/25/2022/','8.00','Pending'),
         createData('B-0005','998674584V','7/25/2022/','8.00','Pending'),
         createData('B-0006','998674584V','7/25/2022/','8.00','Pending'),
  
  
];

const ariaLabel = { 'aria-label': 'description' };




const booking = [
    { label: 'Empty' },
    ];
  
    const driver = [
      { label: 'Empty' },
      ];


export default function DriverShedulePage(){

    
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
            <Input placeholder="Search" inputProps={ariaLabel} style={{position: "absolute",left:"886px",top:"10px",width:"30%",zIndex:"2"}}/>
          <img src={Search}style={{position: "absolute",left:"1295px",top:"10px",width:"2%"}}/>

            <section>
        <div id="driverSection">
        <Typography variant="h4" noWrap component="div" style={{position: "absolute",left:"30px",top:"80px"}}>
           Driver Shedule
          </Typography>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={booking}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Booking ID" />}
              style={{position: "relative",top:"13px",backgroundColor:"transparent",color:"white",left:"1000px",zIndex:"1",width:"25%"}}/>

        <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={driver}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Driver NIC" />}
              style={{position: "relative",top:"-43px",backgroundColor:"transparent",color:"white",left:"610px",zIndex:"1",width:"25%"}}/>

                <TextField disabled id="outlined-disabled" label="PicUp Location" defaultValue="" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"38%"}}/>
                <TextField disabled id="outlined-disabled" label="PicUp Date" defaultValue="" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"38px",zIndex:"1",width:"38%"}}/>
              <Button variant="contained" color="success" style={{position: "relative",top:"-25px",left:"48px",width:"10%",backgroundColor:"Green"}}>Save</Button>
              <TextField disabled id="outlined-disabled" label="PicUp Time" defaultValue="" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"38%"}}/>
              <TextField id="outlined-basic" label="Date" variant="outlined" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"38px",zIndex:"1",width:"38%"}}/>
              <Button variant="contained" color="success"style={{position: "relative",top:"-25px",backgroundColor:"Blue",left:"48px",width:"10%",zIndex:"1"}}>Update</Button>
              <TextField id="outlined-basic" label="Time" variant="outlined" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"38%"}}/>
              <TextField id="outlined-basic" label="Status" variant="outlined" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"38px",zIndex:"1",width:"38%"}}/>
              <Button variant="contained" color="success"style={{position: "relative",top:"-25px",backgroundColor:"red",left:"48px",width:"10%"}}>Delete</Button>
        
       
        </div>
  </section>



{/* -------table--------- */}
  <section>
            <div>

            <div style={{position: "absolute",left:"600px",top:"118px",zIndex:"2",color:"black"}}>
   
          </div>
          
    
    <TableContainer component={Paper} style={{width:"94%",left:"30px",top:"20px",position:"relative",top:"90px"}}>
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>BookingId</StyledTableCell>
          <StyledTableCell align="right">DriverNIC</StyledTableCell>
          <StyledTableCell align="right">Date</StyledTableCell>
          <StyledTableCell align="right">Time</StyledTableCell>
          <StyledTableCell align="right">Status</StyledTableCell>

        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <StyledTableRow key={row.BookingId}>
            <StyledTableCell component="th" scope="row">
              {row.BookingId}
            </StyledTableCell>
          
            <StyledTableCell align="right">{row. DriverNIC}</StyledTableCell>
            <StyledTableCell align="right">{row.Date}</StyledTableCell>
            <StyledTableCell align="right">{row.Time}</StyledTableCell>
            <StyledTableCell align="right">{row.Status}</StyledTableCell>
           
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
            </div>
        </section>





        </section>

       
        </>

    );



}
