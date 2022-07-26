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


class ManageDriver extends Component{
        constructor(props){
          super(props);
        }
        
      render(){
        return (  
              <>
              
              <section>
    <div>
    <Typography variant="h5" noWrap component="div" style={{position: "absolute",left:"600px",top:"118px",zIndex:"2",color:"black"}}>
           Manage Driver Details
          </Typography>
          <Input placeholder="Search" inputProps={ariaLabel} style={{position: "absolute",left:"986px",top:"110px",width:"30%"}}/>
          <img src={Search}style={{position: "absolute",left:"1386px",top:"110px",width:"2%"}}/>
    
    <TableContainer component={Paper} style={{width:"94%",left:"30px",top:"20px",position:"relative",top:"90px"}}>
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow>
              <StyledTableCell>Driver NIC</StyledTableCell>
              <StyledTableCell align="right"> Date</StyledTableCell>
              <StyledTableCell align="right"> Time</StyledTableCell>
              <StyledTableCell align="right">Licence</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Address</StyledTableCell>
              <StyledTableCell align="right">Contact Number</StyledTableCell>
              <StyledTableCell align="right">Salary</StyledTableCell>
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
 export default ManageDriver;
