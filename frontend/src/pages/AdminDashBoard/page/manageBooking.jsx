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


class ManageBooking extends Component{
        constructor(props){
          super(props);
        }
        
      render(){
        return (  
              <>
              
              <section>
    <div>
    <Typography variant="h5" noWrap component="div" style={{position: "absolute",left:"600px",top:"118px",zIndex:"2",color:"black"}}>
           Manage Booking Information
          </Typography>
          <Input placeholder="Search" inputProps={ariaLabel} style={{position: "absolute",left:"70%",top:"110px",width:"25%"}}/>
                    <img src={Search}style={{position: "absolute",left:"1230px",top:"110px",width:"2%"}}/>
    
    <TableContainer component={Paper} style={{width:"79%",left:"30px",top:"20px",position:"relative",top:"90px"}}>
    <Table sx={{ minWidth: 300 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>booking_Id</StyledTableCell>
          <StyledTableCell align="right">picUp_Date</StyledTableCell>
          <StyledTableCell align="right">picUp_Time</StyledTableCell>
          <StyledTableCell align="right">drop_Date</StyledTableCell>
          <StyledTableCell align="right">drop_Time</StyledTableCell>

          <StyledTableCell align="right">bookingStatus</StyledTableCell>
          <StyledTableCell align="right">driverStatus</StyledTableCell>
          <StyledTableCell align="right">picUpLocation</StyledTableCell>
          <StyledTableCell align="right">lossDamagePrice</StyledTableCell>
          <StyledTableCell align="right">rent_Duration</StyledTableCell>
          <StyledTableCell align="right">car_Count</StyledTableCell>

          <StyledTableCell align="right">nic_Number</StyledTableCell>
          <StyledTableCell align="right">payment_Id</StyledTableCell>
          
        </TableRow>
      </TableHead>
      <TableBody>
        
      </TableBody>
    </Table>
  </TableContainer>
          </div>
      </section>

              </>

           
        );

      }
  }
  export default ManageBooking;