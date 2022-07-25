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

function createData(UserId, Type, UserName, Password) {
  return {UserId, Type, UserName, Password};
}

const rows = [
  createData('U0001','Admin','Nethmini','neth'),
  createData('U0002','Driver','Nethmini','neth'),
  createData('U0003','Admin','Nethmini','neth'),
  createData('U0004','Driver','Nethmini','neth'),
  createData('U0005','Admin','Nethmini','neth'),
  createData('U0006','Driver','Nethmini','neth'),
  createData('U0007','Admin','Nethmini','neth'),
  
  
];


function createData1(AdminId,AdminName,AdminContact, UserId) {
  return {AdminId,AdminName,AdminContact, UserId};
}

const row = [
  createData1('A-0001','Nethmini','077845870','U0001'),
  createData1('A-0002','Nethmini','077845870','U0002'),
  createData1('A-0003','Nethmini','077845870','U0003'),
  createData1('A-0004','Nethmini','077845870','U0004'),
  createData1('A-0005','Nethmini','077845870','U0005'),
  createData1('A-0006','Nethmini','077845870','U0006'),
  createData1('A-0007','Nethmini','077845870','U0007'),
  
  
  
];

const ariaLabel = { 'aria-label': 'description' };


export default function Managemant() {
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
          <Input placeholder="Search" inputProps={ariaLabel} style={{position: "absolute",left:"986px",top:"110px",width:"30%"}}/>
          <img src={Search}style={{position: "absolute",left:"1386px",top:"110px",width:"2%"}}/>
    
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
        {rows.map((row) => (
          <StyledTableRow key={row.UserId}>
            <StyledTableCell component="th" scope="row">
              {row.UserId}
            </StyledTableCell>
          
                  <StyledTableCell align="right">{row.Type}</StyledTableCell>
                  <StyledTableCell align="right">{row.UserName}</StyledTableCell>
                  <StyledTableCell align="right">{row.Password}</StyledTableCell>
                  
                  
          </StyledTableRow>
        ))}
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
              <Input placeholder="Search" inputProps={ariaLabel} style={{position: "absolute",left:"986px",top:"110px",width:"30%"}}/>
              <img src={Search}style={{position: "absolute",left:"1386px",top:"110px",width:"2%"}}/>

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
            {row.map((row) => (
              <StyledTableRow key={row.AdminId}>
                <StyledTableCell component="th" scope="row">
                  {row.AdminId}
                </StyledTableCell>
              
                        <StyledTableCell align="right">{row.AdminName}</StyledTableCell>
                          <StyledTableCell align="right">{row.AdminContact}</StyledTableCell>
                          <StyledTableCell align="right">{row.UserId}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
            </TableContainer>
                  </div>
              </section>



  </>
  

        );
      }
