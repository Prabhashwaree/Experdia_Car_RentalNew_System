import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(booking_Id, picUp_Date, drop_Date, picUp_Time, drop_Time,bookingStatus,driverStatus,picUpLocation,lossDamagePrice,rent_Duration,car_Count,customerID,paymentID) {
  return { booking_Id, picUp_Date, drop_Date, picUp_Time, drop_Time,bookingStatus,driverStatus,picUpLocation,lossDamagePrice,rent_Duration ,car_Count,customerID,paymentID};
}

const rows = [
 
];   



export default function ManageCar() {
  return (
    <section>
    <div>

    <TableContainer component={Paper} style={{width:"94%",left:"40px",top:"30px",position:"relative"}} >
<Table  aria-label="simple table">
<TableHead>
  <TableRow>
    <TableCell>Register No</TableCell>
    <TableCell align="right">Date</TableCell>
    <TableCell align="right">Time</TableCell>
    <TableCell>Brand</TableCell>
    <TableCell align="right">Type</TableCell>
    <TableCell align="right">No Passenger</TableCell>
    <TableCell align="right">Transmission Type</TableCell>
    <TableCell>Fuel</TableCell>
    <TableCell align="right">Colour</TableCell>
    <TableCell align="right">LossDamage Price</TableCell>
    
    <TableCell align="right">Rental Rate</TableCell>
   
    
  </TableRow>
</TableHead>
<TableBody>
  {rows.map((row) => (
    <TableRow
      key={row.booking_Id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {row.booking_Id}
      </TableCell>
      <TableCell align="right">{row.booking_Id}</TableCell>
      <TableCell align="right">{row.picUp_Date}</TableCell>
      <TableCell align="right">{row.drop_Date}</TableCell>
      <TableCell align="right">{row.picUp_Time}</TableCell>
      <TableCell align="right">{row.drop_Time}</TableCell>
      <TableCell align="right">{row.bookingStatus}</TableCell>
      <TableCell align="right">{row.picUpLocation}</TableCell>
      <TableCell align="right">{row.lossDamagePrice}</TableCell>
      <TableCell align="right">{row.rent_Duration}</TableCell>
      <TableCell align="right">{row.car_Count}</TableCell>
      <TableCell align="right">{row.customerID}</TableCell>
      <TableCell align="right">{row.paymentID}</TableCell>
     
    </TableRow>
  ))}
</TableBody>
</Table>
</TableContainer>

    </div>
</section>
  );
}
