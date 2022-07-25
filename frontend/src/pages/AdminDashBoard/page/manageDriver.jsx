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

function createData(DriverNIC,Date, Time, LicenceNumber,Name,Address,ContactNumber,Salary) {
  return { DriverNIC,Date, Time, LicenceNumber,Name,Address,ContactNumber,Salary };
}

const rows = [
  createData('8995487V','7/24/2022','12.30','8444545','Gayathree','Panadura','077497485','5000.00'),
  createData('5995487V','7/24/2022','12.30','8444545','silva','Panadura','077497485','5000.00'),
  createData('8995487V','7/24/2022','12.30','8444545','nethmini','Panadura','077497485','5000.00'),
  createData('6995487V','7/24/2022','12.30','8444545','Prabha','Panadura','077497485','5000.00'),
  createData('8995487V','7/24/2022','12.30','8444545','silva','Panadura','077497485','5000.00'),
  createData('6995487V','7/24/2022','12.30','8444545','nethu','Panadura','077497485','5000.00'),
  createData('8995487V','7/24/2022','12.30','8444545','nelu','Panadura','077497485','5000.00'),
  createData('9995487V','7/24/2022','12.30','8444545','siman','Panadura','077497485','5000.00'),
  
];

const ariaLabel = { 'aria-label': 'description' };


export default function ManagePayment() {
  return (
    <section>
    <div>
    <Typography variant="h5" noWrap component="div" style={{position: "absolute",left:"120px",top:"118px",zIndex:"2",color:"black"}}>
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
              <StyledTableCell align="right">Licence Number</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Address</StyledTableCell>
              <StyledTableCell align="right">Contact Number</StyledTableCell>
              <StyledTableCell align="right">Salary</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <StyledTableRow key={row.name}>
            <StyledTableCell component="th" scope="row">
              {row.DriverNIC}
            </StyledTableCell>
          
                <TableCell align="right">{row.Date}</TableCell>
                <TableCell align="right">{row.Time}</TableCell>
                <TableCell align="right">{row.LicenceNumber}</TableCell>
                <TableCell align="right">{row.Name}</TableCell>
                <TableCell align="right">{row.Address}</TableCell>
                <TableCell align="right">{row.ContactNumber}</TableCell>
                <TableCell align="right">{row.Salary}</TableCell>
      
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
          </div>
      </section>
        );
      }
