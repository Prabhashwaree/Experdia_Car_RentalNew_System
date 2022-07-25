import {styleSheet} from  "./style";
import { Component } from "react";
import {withStyles} from "@mui/styles";
import './driverShedule.css';
import carLogo from '../../assets/img/carLogo.png';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const booking = [
    { label: 'Empty' },
    ];
  
    const driver = [
      { label: 'Empty' },
      ];



      function createData(bookingId, driverNIC, date, time, status) {
        return { bookingId, driverNIC, date, time, status};
      }
      
      const rows = [
         createData('B-0001','998674584V','7/25/2022/','8.00','Pending'),
        //  createData('B-0002','998674584V','7/25/2022/','8.00','Pending'),
        //  createData('B-0003','998674584V','7/25/2022/','8.00','Pending'),
        //  createData('B-0004','998674584V','7/25/2022/','8.00','Pending'),
        //  createData('B-0005','998674584V','7/25/2022/','8.00','Pending'),
        //  createData('B-0006','998674584V','7/25/2022/','8.00','Pending'),
        //  createData('B-0007','998674584V','7/25/2022/','8.00','Pending'),
        //  createData('B-0008','998674584V','7/25/2022/','8.00','Pending'),
        //  createData('B-0009','998674584V','7/25/2022/','8.00','Pending'),
        //  createData('B-00010','998674584V','7/25/2022/','8.00','Pending'),
        //  createData('B-0001','998674584V','7/25/2022/','8.00','Pending'),
        //  createData('B-0001','998674584V','7/25/2022/','8.00','Pending'),
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
              style={{position: "relative",top:"13px",backgroundColor:"transparent",color:"white",left:"630px",zIndex:"1",width:"25%"}}/>

        <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={driver}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Driver NIC" />}
              style={{position: "relative",top:"-43px",backgroundColor:"transparent",color:"white",left:"395px",zIndex:"1",width:"25%"}}/>

                <TextField disabled id="outlined-disabled" label="PicUp Location" defaultValue="" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}/>
                <TextField disabled id="outlined-disabled" label="PicUp Date" defaultValue="" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"24px",zIndex:"1",width:"35%"}}/>
              <Button variant="contained" color="success" style={{position: "relative",top:"-25px",left:"35px",width:"20%",backgroundColor:"Green"}}>Save</Button>
              <TextField disabled id="outlined-disabled" label="PicUp Time" defaultValue="" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}/>
              <TextField id="outlined-basic" label="Date" variant="outlined" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"25px",zIndex:"1",width:"35%"}}/>
              <Button variant="contained" color="success"style={{position: "relative",top:"-25px",backgroundColor:"Blue",left:"35px",width:"20%",zIndex:"1"}}>Update</Button>
              <TextField id="outlined-basic" label="Time" variant="outlined" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}/>
              <TextField id="outlined-basic" label="Status" variant="outlined" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"25px",zIndex:"1",width:"35%"}}/>
              <Button variant="contained" color="success"style={{position: "relative",top:"-25px",backgroundColor:"red",left:"35px",width:"20%"}}>Delete</Button>
        
       
        </div>
  </section>



{/* -------table--------- */}
  <section>
            <div>

            <TableContainer component={Paper} style={{width:"94%",left:"30px",position:"relative",top:"30px"}}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell>BookingId</TableCell>
            <TableCell align="right">DriverNIC</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell>Status</TableCell> */}
            
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>bookingId</TableCell>
            <TableCell align="right">driverNIC</TableCell>
            <TableCell align="right">date</TableCell>
            <TableCell align="right">time</TableCell>
            <TableCell>status</TableCell> 
            </TableRow> 
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
