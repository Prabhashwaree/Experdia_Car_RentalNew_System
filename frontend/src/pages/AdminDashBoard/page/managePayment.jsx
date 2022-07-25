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

function createData(PaymentId, Date,Time,CurrentlyRunKM,RideAKM,TotalKM,Status,TotalPrice) {
  return { PaymentId, Date,Time,CurrentlyRunKM,RideAKM,TotalKM,Status,TotalPrice };
}

const rows = [
  createData('P-0001','7/24/2022','8.23','8 KM','10 KM','18 KM','Pending',10000),
  createData('P-0002','7/24/2022','8.23','8 KM','10 KM','18 KM','Pending',10000),
  createData('P-0003','7/24/2022','8.23','8 KM','10 KM','18 KM','Pending',10000),
  createData('P-0004','7/24/2022','8.23','8 KM','10 KM','18 KM','Pending',10000),
  createData('P-0005','7/24/2022','8.23','8 KM','10 KM','18 KM','Pending',10000),
  createData('P-0006','7/24/2022','8.23','8 KM','10 KM','18 KM','Pending',10000),
  createData('P-0007','7/24/2022','8.23','8 KM','10 KM','18 KM','Pending',10000),
  
];

const ariaLabel = { 'aria-label': 'description' };


export default function ManagePayment() {
  return (
    <section>
    <div>
    <Typography variant="h5" noWrap component="div" style={{position: "absolute",left:"600px",top:"118px",zIndex:"2",color:"black"}}>
           Manage Payment Details
          </Typography>
          <Input placeholder="Search" inputProps={ariaLabel} style={{position: "absolute",left:"986px",top:"110px",width:"30%"}}/>
          <img src={Search}style={{position: "absolute",left:"1386px",top:"110px",width:"2%"}}/>
    
    <TableContainer component={Paper} style={{width:"94%",left:"30px",top:"20px",position:"relative",top:"90px"}}>
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>Payment Id</StyledTableCell>
          <StyledTableCell align="right"> Date</StyledTableCell>
          <StyledTableCell align="right">Time</StyledTableCell>
          <StyledTableCell align="right">Currently Run KM</StyledTableCell>
          <StyledTableCell align="right">Ride A KM</StyledTableCell>

          <StyledTableCell align="right">Total KM</StyledTableCell>
          <StyledTableCell align="right">Status</StyledTableCell>
          <StyledTableCell align="right">Total Price</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <StyledTableRow key={row.name}>
            <StyledTableCell component="th" scope="row">
              {row.PaymentId}
            </StyledTableCell>
          
            <StyledTableCell align="right">{row.Date}</StyledTableCell>
            <StyledTableCell align="right">{row.Time}</StyledTableCell>
            <StyledTableCell align="right">{row.CurrentlyRunKM}</StyledTableCell>
            <StyledTableCell align="right">{row.RideAKM}</StyledTableCell>
            <StyledTableCell align="right">{row.TotalKM}</StyledTableCell>
            <StyledTableCell align="right">{row.Status}</StyledTableCell>
            <StyledTableCell align="right">{row.TotalPrice}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
          </div>
      </section>
        );
      }
