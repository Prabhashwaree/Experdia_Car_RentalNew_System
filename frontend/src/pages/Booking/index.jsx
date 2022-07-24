import {styleSheet} from  "./style";
import { Component } from "react";
import {withStyles} from "@mui/styles";
import './booking.css';
import carLogo from '../../assets/img/carLogo.png';
import carSlide from '../../assets/img/carSlide.png';
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



      function createData(booking_Id, picUp_Date, drop_Date, picUp_Time, drop_Time,bookingStatus,driverStatus,picUpLocation,lossDamagePrice,rent_Duration,car_Count,customerID,paymentID) {
        return { booking_Id, picUp_Date, drop_Date, picUp_Time, drop_Time,bookingStatus,driverStatus,picUpLocation,lossDamagePrice,rent_Duration ,car_Count,customerID,paymentID};
      }
      
      const rows = [
        createData('B-0001','7/24/2022','7/25/2022/','8.00','10.00','Pending','Active','Panadura',10000,'1','1','995876485V','P-0001'),
        createData('B-0002','7/24/2022','7/25/2022/','8.00','10.00','Pending','Active','Panadura',10000,'1','1','995876485V','P-0002'),
        createData('B-0003','7/24/2022','7/25/2022/','8.00','10.00','Pending','Active','Panadura',10000,'1','1','995876485V','P-0003'),
        createData('B-0004','7/24/2022','7/25/2022/','8.00','10.00','Pending','Active','Panadura',10000,'1','1','995876485V','P-0004'),
        createData('B-0005','7/24/2022','7/25/2022/','8.00','10.00','Pending','Active','Panadura',10000,'1','1','995876485V','P-0005'),
        createData('B-0006','7/24/2022','7/25/2022/','8.00','10.00','Pending','Active','Panadura',10000,'1','1','995876485V','P-0006'),
        createData('B-0007','7/24/2022','7/25/2022/','8.00','10.00','Pending','Active','Panadura',10000,'1','1','995876485V','P-0007'),
        createData('B-0008','7/24/2022','7/25/2022/','8.00','10.00','Pending','Active','Panadura',10000,'1','1','995876485V','P-0008'),
        createData('B-0009','7/24/2022','7/25/2022/','8.00','10.00','Pending','Active','Panadura',10000,'1','1','995876485V','P-0009'),
      ];   


export default function BookingPage(){

    
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
            
        <TextField id="outlined-helperText" label="Booking ID" defaultValue="B-" style={{position: "relative",top:"70px",backgroundColor:"white",color:"white",left:"300px",zIndex:"1",width:"10%"}}/>  
        <Typography variant="h4" noWrap component="div" style={{position: "absolute",left:"30px",top:"130px"}}>
           Booking Now
          </Typography>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={booking}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Customer NIC" />}
              style={{position: "relative",top:"13px",backgroundColor:"transparent",color:"white",left:"630px",zIndex:"1",width:"25%"}}/>

        <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={driver}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Payment ID" />}
              style={{position: "relative",top:"-43px",backgroundColor:"transparent",color:"white",left:"395px",zIndex:"1",width:"25%"}}/>

              <TextField id="outlined-basic" label="PicUp Date" variant="outlined" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}/>
              <TextField id="outlined-basic" label="PicUp Time" variant="outlined" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"25px",zIndex:"1",width:"35%"}}/>
              <Button variant="contained" color="success" style={{position: "relative",top:"-25px",left:"35px",width:"20%",backgroundColor:"Green"}}>Save</Button>
              <TextField id="outlined-basic" label="Drop Date" variant="outlined" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}/>
              <TextField id="outlined-basic" label="Drop Time" variant="outlined" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"25px",zIndex:"1",width:"35%"}}/>
              <Button variant="contained" color="success"style={{position: "relative",top:"-25px",backgroundColor:"Blue",left:"35px",width:"20%",zIndex:"1"}}>Update</Button>
              <TextField id="outlined-basic" label="Booking Status" variant="outlined" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}/>
              <TextField id="outlined-basic" label="Driver Status" variant="outlined" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"25px",zIndex:"1",width:"35%"}}/>
              <Button variant="contained" color="success"style={{position: "relative",top:"-25px",backgroundColor:"red",left:"35px",width:"20%"}}>Delete</Button>
              <TextField id="outlined-basic" label="PicUp Location" variant="outlined" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}/>
              <TextField id="outlined-basic" label="Rent Duration" variant="outlined" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"25px",zIndex:"1",width:"35%"}}/>
              <TextField id="outlined-basic" label="Car Count" variant="outlined" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}/>
              <TextField id="outlined-basic" label="Loss Damage Price" variant="outlined" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"25px",zIndex:"1",width:"35%"}}/>
              <Button variant="contained" color="success"style={{position: "relative",top:"-36px",backgroundColor:"gray",left:"35px",width:"15%"}}>Upload pay Slip</Button>
       
        </div>
  </section>


        <section id="sliderImg">
            <div>
                <img src={carSlide} style={{width:"30%",height:"30%"}}/> 
            </div>
        </section>




        <section>
            <div>

            <TableContainer component={Paper} style={{width:"94%",left:"30px",top:"20px",position:"relative",top:"-330px"}}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Booking_Id</TableCell>
            <TableCell align="right">PicUp Date</TableCell>
            <TableCell align="right">Drop Date</TableCell>
            <TableCell align="right">PicUp Time</TableCell>
            <TableCell>Drop Time</TableCell>
            <TableCell align="right">Booking Status</TableCell>
            <TableCell align="right">Driver Status</TableCell>
            <TableCell align="right">PicUpLocation</TableCell>
            <TableCell>Loss Damage Price</TableCell>
            <TableCell align="right">Rent Duration</TableCell>
            <TableCell align="right">Car Count</TableCell>
            <TableCell align="right">PicUpLocation</TableCell>
            <TableCell align="right">Customer NIC</TableCell>
            <TableCell align="right">Payment ID</TableCell>
            
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
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
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
