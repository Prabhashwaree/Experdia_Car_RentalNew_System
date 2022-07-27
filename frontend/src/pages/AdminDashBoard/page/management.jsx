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


class Managemant extends  Component{
        constructor(props){
          super(props);
        }
        
      render(){
        return (  
          <>

          {/* ------------------------User -------------------------------------- */}
          
              <section>
              <div>
                <div style={{position: "absolute",left:"600px",top:"118px",zIndex:"2",color:"black"}}>
              <Typography variant="h5" noWrap component="div" >
                     Management Information
                    </Typography>
                    <Typography variant="h6" noWrap component="div" style={{position: "relative",left:"380px",top:"18px",color:"gray"}}>
                     Admin Details
                    </Typography>
                    <Typography variant="h6" noWrap component="div" style={{position: "relative",left:"-250px",top:"-20px",color:"gray"}}>
                     User Details
                    </Typography>
                    </div>
                    <Input placeholder="Search" inputProps={ariaLabel} style={{position: "absolute",left:"70%",top:"110px",width:"25%"}}/>
                    <img src={Search}style={{position: "absolute",left:"1230px",top:"110px",width:"2%"}}/>
    
              <TableContainer component={Paper} style={{width:"40%",left:"30px",position:"relative",top:"130px"}}>
              <Table sx={{ minWidth: 100 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                      <StyledTableCell>UserId</StyledTableCell>
                      <StyledTableCell align="right">Type</StyledTableCell>
                      <StyledTableCell align="right">UserName</StyledTableCell>
                      <StyledTableCell align="right">Password</StyledTableCell>
                      
                  </TableRow>
                </TableHead>
                <TableBody>
                  
                </TableBody>
              </Table>
            </TableContainer>
                    </div>
                </section>
          
          
          
          
          {/* ------------------------Admin-------------------------------------- */}
                  <section>
                  <div>
                  
                    <div style={{position: "absolute",left:"9250px",top:"-500px",zIndex:"2",color:"black"}}>
                  <Typography variant="h5" noWrap component="div" style={{position: "relative",left:"2px",top:"5px",zIndex:"5"}}>
                        Admin Details
                        </Typography>
                        </div>
                        
                  <TableContainer component={Paper} style={{width:"40%",left:"665px",position:"relative",top:"-298px"}}>
                  <Table sx={{ minWidth: 300 }} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                            <StyledTableCell>AdminId</StyledTableCell>
                              <StyledTableCell align="right">AdminName</StyledTableCell>
                              <StyledTableCell align="right">AdminContact</StyledTableCell>
                              <StyledTableCell align="right">UserId</StyledTableCell>
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
  export default Managemant;
