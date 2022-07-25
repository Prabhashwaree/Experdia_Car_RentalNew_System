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

function createData(RegisterNo, Date,Time,Brand,Type,NoPassenger,TransmissionType,Fuel,Colour,LossDamagePrice,RateId) {
  return {RegisterNo, Date,Time,Brand,Type,NoPassenger,TransmissionType,Fuel,Colour,LossDamagePrice,RateId};
}

const rows = [
  createData('C-0001','7/24/2022','8.23','Alto prime','Genaral','5','Auto','Petrol','Red','10000','R-0001'),
  createData('C-0002','7/24/2022','8.23','Alto prime','Genaral','5','Auto','Petrol','Red','10000','R-0002'),
  createData('C-0003','7/24/2022','8.23','Alto prime','Genaral','5','Auto','Petrol','Red','10000','R-0003'),
  createData('C-0004','7/24/2022','8.23','Alto prime','Genaral','5','Auto','Petrol','Red','10000','R-0004'),
  createData('C-0005','7/24/2022','8.23','Alto prime','Genaral','5','Auto','Petrol','Red','10000','R-0005'),
  createData('C-0006','7/24/2022','8.23','Alto prime','Genaral','5','Auto','Petrol','Red','10000','R-0006'),
  createData('C-0007','7/24/2022','8.23','Alto prime','Genaral','5','Auto','Petrol','Red','10000','R-0007'),
  
  
];

const ariaLabel = { 'aria-label': 'description' };


export default function ManageCar() {
  return (
    <section>
    <div>
      <div style={{position: "absolute",left:"600px",top:"118px",zIndex:"2",color:"black"}}>
    <Typography variant="h5" noWrap component="div" >
           Manage Car Details
          </Typography>
          </div>
          <Input placeholder="Search" inputProps={ariaLabel} style={{position: "absolute",left:"986px",top:"110px",width:"30%"}}/>
          <img src={Search}style={{position: "absolute",left:"1386px",top:"110px",width:"2%"}}/>
    
    <TableContainer component={Paper} style={{width:"94%",left:"30px",top:"20px",position:"relative",top:"90px"}}>
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>RegisterNo</StyledTableCell>
          <StyledTableCell align="right"> Date</StyledTableCell>
          <StyledTableCell align="right">Time</StyledTableCell>
          <StyledTableCell align="right">Brand</StyledTableCell>
          <StyledTableCell align="right">Type</StyledTableCell>

          <StyledTableCell align="right">NoPassenger</StyledTableCell>
          <StyledTableCell align="right">TransmissionType</StyledTableCell>
          <StyledTableCell align="right">Fuel</StyledTableCell>
          <StyledTableCell align="right">Colour</StyledTableCell>
          <StyledTableCell align="right">LossDamagePrice</StyledTableCell>
          <StyledTableCell align="right">RateId</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <StyledTableRow key={row.name}>
            <StyledTableCell component="th" scope="row">
              {row.RegisterNo}
            </StyledTableCell>
          
            <StyledTableCell align="right">{row.Date}</StyledTableCell>
            <StyledTableCell align="right">{row.Time}</StyledTableCell>
            <StyledTableCell align="right">{row.Brand}</StyledTableCell>
            <StyledTableCell align="right">{row.Type}</StyledTableCell>
            <StyledTableCell align="right">{row.NoPassenger}</StyledTableCell>
            <StyledTableCell align="right">{row.TransmissionType}</StyledTableCell>
            <StyledTableCell align="right">{row.Fuel}</StyledTableCell>
            <StyledTableCell align="right">{row.Colour}</StyledTableCell>
            <StyledTableCell align="right">{row.LossDamagePrice}</StyledTableCell>
            <StyledTableCell align="right">{row.RateId}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
          </div>
      </section>
        );
      }
