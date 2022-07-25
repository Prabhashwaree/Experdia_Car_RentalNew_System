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

function createData(NicNumber, LicenseId, CusName, Address,ContactNo,Email,Date,Time) {
  return {NicNumber, LicenseId, CusName, Address,ContactNo,Email,Date,Time};
}

const rows = [
  createData('890424252V','8955567','Nethmini','Panadura','0774914870','nethmini@gmail.com','2020/20/12','12.33'),
  createData('890424252V','8955567','Nethmini','Panadura','0774914870','nethmini@gmail.com','2020/20/12','12.33'),
  createData('890424252V','8955567','Nethmini','Panadura','0774914870','nethmini@gmail.com','2020/20/12','12.33'),
  createData('890424252V','8955567','Nethmini','Panadura','0774914870','nethmini@gmail.com','2020/20/12','12.33'),
  createData('890424252V','8955567','Nethmini','Panadura','0774914870','nethmini@gmail.com','2020/20/12','12.33'),
  createData('890424252V','8955567','Nethmini','Panadura','0774914870','nethmini@gmail.com','2020/20/12','12.33'),
  createData('890424252V','8955567','Nethmini','Panadura','0774914870','nethmini@gmail.com','2020/20/12','12.33'),
  createData('890424252V','8955567','Nethmini','Panadura','0774914870','nethmini@gmail.com','2020/20/12','12.33'),
  
  
];


function createData1(BookingId,RegisterNo, Date, Time) {
  return {BookingId,RegisterNo, Date, Time};
}

const row = [
  createData1('B0001','EO578','2020/20/12','12.33'),
  createData1('B0001','EO578','2020/20/12','12.33'),
  createData1('B0001','EO578','2020/20/12','12.33'),
  createData1('B0001','EO578','2020/20/12','12.33'),
  createData1('B0001','EO578','2020/20/12','12.33'),
  createData1('B0001','EO578','2020/20/12','12.33'),
  createData1('B0001','EO578','2020/20/12','12.33'),
  createData1('B0001','EO578','2020/20/12','12.33'),
  
  
  
];

const ariaLabel = { 'aria-label': 'description' };


export default function ManageCustomerBooking() {
  return (
    <>

{/* ------------------------Booking -------------------------------------- */}

    <section>
    <div>
      <div style={{position: "absolute",left:"600px",top:"118px",zIndex:"2",color:"black"}}>
    <Typography variant="h5" noWrap component="div" >
           Manage Customer Details
          </Typography>
          <Typography variant="h6" noWrap component="div" style={{position: "relative",left:"430px",top:"18px",color:"gray"}}>
           Booking Details
          </Typography>
          <Typography variant="h6" noWrap component="div" style={{position: "relative",left:"-480px",top:"-20px",color:"gray"}}>
           Booking Information
          </Typography>
          </div>
          <Input placeholder="Search" inputProps={ariaLabel} style={{position: "absolute",left:"986px",top:"110px",width:"30%"}}/>
          <img src={Search}style={{position: "absolute",left:"1386px",top:"110px",width:"2%"}}/>
    
    <TableContainer component={Paper} style={{width:"63%",left:"30px",position:"relative",top:"130px"}}>
    <Table sx={{ minWidth: 100 }} aria-label="customized table">
      <TableHead>
        <TableRow>
            <StyledTableCell>NicNumber</StyledTableCell>
            <StyledTableCell align="right">LicenseId</StyledTableCell>
            <StyledTableCell align="right">CusName</StyledTableCell>
            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell  align="right">ContactNo</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Time</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <StyledTableRow key={row.name}>
            <StyledTableCell component="th" scope="row">
              {row.NicNumber}
            </StyledTableCell>
          
                  <StyledTableCell align="right">{row.LicenseId}</StyledTableCell>
                  <StyledTableCell align="right">{row.CusName}</StyledTableCell>
                  <StyledTableCell align="right">{row.Address}</StyledTableCell>
                  <StyledTableCell align="right">{row.ContactNo}</StyledTableCell>
                  <StyledTableCell align="right">{row.Email}</StyledTableCell>
                  <StyledTableCell align="right">{row.Date}</StyledTableCell>
                  <StyledTableCell align="right">{row.Time}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
          </div>
      </section>




{/* ------------------------Booking Details table-------------------------------------- */}
        <section>
        <div>
        
          <div style={{position: "absolute",left:"9250px",top:"-500px",zIndex:"2",color:"black"}}>
        <Typography variant="h5" noWrap component="div" style={{position: "relative",left:"2px",top:"5px",zIndex:"5"}}>
              Booking Details
              </Typography>
              </div>
              <Input placeholder="Search" inputProps={ariaLabel} style={{position: "absolute",left:"986px",top:"110px",width:"30%"}}/>
              <img src={Search}style={{position: "absolute",left:"1386px",top:"110px",width:"2%"}}/>

        <TableContainer component={Paper} style={{width:"30%",left:"925px",position:"relative",top:"-350px"}}>
        <Table sx={{ minWidth: 300 }} aria-label="customized table">
          <TableHead>
            <TableRow>
                  <StyledTableCell>BookingId</StyledTableCell>
                    <StyledTableCell align="right">RegisterNo</StyledTableCell>
                    <StyledTableCell align="right">Date</StyledTableCell>
                    <StyledTableCell align="right">Time</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {row.map((row) => (
              <StyledTableRow key={row.BookingId}>
                <StyledTableCell component="th" scope="row">
                  {row.BookingId}
                </StyledTableCell>
              
                        <StyledTableCell align="right">{row.RegisterNo}</StyledTableCell>
                          <StyledTableCell align="right">{row.Date}</StyledTableCell>
                          <StyledTableCell align="right">{row.Time}</StyledTableCell>
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