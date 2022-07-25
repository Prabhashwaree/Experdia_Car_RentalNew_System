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

function createData(RateId, Date,Time,Brand,Type,DailyRate,FreeKMDay,FreeKMMonth,MonthlyRate,PricePerExtraKM) {
  return {RateId, Date,Time,Brand,Type,DailyRate,FreeKMDay,FreeKMMonth,MonthlyRate,PricePerExtraKM};
}

const rows = [
  createData('R-0001','7/24/2022','8.23','Alto prime','Genaral','150','200 KM','1000 KM','3000','500'),
  createData('R-0001','7/24/2022','8.23','Alto prime','Genaral','150','200 KM','1000 KM','3000','500'),
  createData('R-0001','7/24/2022','8.23','Alto prime','Genaral','150','200 KM','1000 KM','3000','500'),
  createData('R-0001','7/24/2022','8.23','Alto prime','Genaral','150','200 KM','1000 KM','3000','500'),
  createData('R-0001','7/24/2022','8.23','Alto prime','Genaral','150','200 KM','1000 KM','3000','500'),
  createData('R-0001','7/24/2022','8.23','Alto prime','Genaral','150','200 KM','1000 KM','3000','500'),
  createData('R-0001','7/24/2022','8.23','Alto prime','Genaral','150','200 KM','1000 KM','3000','500'),
  createData('R-0001','7/24/2022','8.23','Alto prime','Genaral','150','200 KM','1000 KM','3000','500'),
  
];

const ariaLabel = { 'aria-label': 'description' };


export default function ManageRate() {
  return (
    <section>
    <div>
    <Typography variant="h5" noWrap component="div" style={{position: "absolute",left:"600px",top:"118px",zIndex:"2",color:"black"}}>
           Manage Rental Rate Details
          </Typography>
          <Input placeholder="Search" inputProps={ariaLabel} style={{position: "absolute",left:"986px",top:"110px",width:"30%"}}/>
          <img src={Search}style={{position: "absolute",left:"1386px",top:"110px",width:"2%"}}/>
    
    <TableContainer component={Paper} style={{width:"94%",left:"30px",top:"20px",position:"relative",top:"90px"}}>
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>RateId</StyledTableCell>
          <StyledTableCell align="right"> Date</StyledTableCell>
          <StyledTableCell align="right">Time</StyledTableCell>
          <StyledTableCell align="right">Brand</StyledTableCell>
          <StyledTableCell align="right">Type</StyledTableCell>

          <StyledTableCell align="right">FreeKMDay</StyledTableCell>
          <StyledTableCell align="right">FreeKMMonth</StyledTableCell>
          <StyledTableCell align="right">MonthlyRate</StyledTableCell>
          <StyledTableCell align="right">PricePerExtraKM</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <StyledTableRow key={row.name}>
            <StyledTableCell component="th" scope="row">
              {row.RateId}
            </StyledTableCell>
          
            <StyledTableCell align="right">{row.Date}</StyledTableCell>
            <StyledTableCell align="right">{row.Time}</StyledTableCell>
            <StyledTableCell align="right">{row.Brand}</StyledTableCell>
            <StyledTableCell align="right">{row.Type}</StyledTableCell>
            <StyledTableCell align="right">{row.FreeKMDay}</StyledTableCell>
            <StyledTableCell align="right">{row.FreeKMMonth}</StyledTableCell>
            <StyledTableCell align="right">{row.MonthlyRate}</StyledTableCell>
            <StyledTableCell align="right">{row.PricePerExtraKM}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
          </div>
      </section>
        );
      }