import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




function createData(booking_Id, picUp_Date, drop_Date, picUp_Time, drop_Time,bookingStatus,driverStatus,picUpLocation,lossDamagePrice,rent_Duration,car_Count,customerID,paymentID) {
  return { booking_Id, picUp_Date, drop_Date, picUp_Time, drop_Time,bookingStatus,driverStatus,picUpLocation,lossDamagePrice,rent_Duration ,car_Count,customerID,paymentID};
}

const rows = [
  createData('B-0001','7/24/2022','7/25/2022/','8.00','10.00','Pending','Active','Panadura',10000,'1','1','995876485V','P-0001'),
  createData('B-0002','7/24/2022','7/25/2022/','8.00','10.00','Pending','Active','Panadura',10000,'1','1','995876485V','P-0002'),
  createData('B-0003','7/24/2022','7/25/2022/','8.00','10.00','Pending','Active','Panadura',10000,'1','1','995876485V','P-0003'),
  createData('B-0004','7/24/2022','7/25/2022/','8.00','10.00','Pending','Active','Panadura',10000,'1','1','995876485V','P-0004'),
  createData('B-0005','7/24/2022','7/25/2022/','8.00','10.00','Pending','Active','Panadura',10000,'1','1','995876485V','P-0005'),
  createData('B-0006','7/24/2022','7/25/2022/','8.00','10.00','Pending','Active','Panadura',10000,'1','1','995876485V','P-0006'),
  createData('B-0007','7/24/2022','7/25/2022/','8.00','10.00','Pending','Active','Panadura',10000,'1','1','995876485V','P-0007'),
  createData('B-0008','7/24/2022','7/25/2022/','8.00','10.00','Pending','Active','Panadura',10000,'1','1','995876485V','P-0008'),
  createData('B-0009','7/24/2022','7/25/2022/','8.00','10.00','Pending','Active','Panadura',10000,'1','1','995876485V','P-0009'),
];   



export default function ManagePayment() {
  return (
    <section>
    <div>

    <TableContainer component={Paper} style={{width:"94%",left:"30px",top:"20px",position:"relative",top:"-330px"}}>
<Table  aria-label="simple table">
<TableHead>
  <TableRow>
    <TableCell>Booking_Id</TableCell>
    <TableCell align="right">PicUp Date</TableCell>
    <TableCell align="right">Drop Date</TableCell>
    <TableCell align="right">PicUp Time</TableCell>
    <TableCell>Drop Time</TableCell>
    <TableCell align="right">Booking Status</TableCell>
    <TableCell align="right">Driver Status</TableCell>
    <TableCell align="right">PicUpLocation</TableCell>
    <TableCell>Loss Damage Price</TableCell>
    <TableCell align="right">Rent Duration</TableCell>
    <TableCell align="right">Car Count</TableCell>
    <TableCell align="right">PicUpLocation</TableCell>
    <TableCell align="right">Customer NIC</TableCell>
    <TableCell align="right">Payment ID</TableCell>
    
  </TableRow>
</TableHead>
<TableBody>
  {rows.map((row) => (
    <TableRow
      key={row.name}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {row.name}
      </TableCell>
      <TableCell align="right">{row.calories}</TableCell>
      <TableCell align="right">{row.fat}</TableCell>
      <TableCell align="right">{row.carbs}</TableCell>
      <TableCell align="right">{row.protein}</TableCell>
    </TableRow>
  ))}
</TableBody>
</Table>
</TableContainer>

    </div>
</section>
  );
}
