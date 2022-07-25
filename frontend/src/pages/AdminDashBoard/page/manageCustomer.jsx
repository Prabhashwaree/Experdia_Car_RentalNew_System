import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(nic_Number, license_Id, cus_Name, address,contact_No,email,date,time) {
  return { nic_Number, license_Id, cus_Name, address,contact_No,email,date,time};
}

const rows = [
  createData('890424252V','8955567','Nethmini','Panadura','0774914870','nethmini@gmail.com','2020/20/12',12.33)
];   



export default function ManageCustomer() {
  return (
    <section>
    <div>

    <TableContainer component={Paper} style={{width:"94%",left:"30px",top:"20px",position:"relative",top:"30px"}}>
<Table  aria-label="simple table">
<TableHead>
  <TableRow>
    <TableCell>Nic Number</TableCell>
    <TableCell align="right">license Id</TableCell>
    <TableCell align="right">cus Name</TableCell>
    <TableCell align="right">Address</TableCell>
    <TableCell  align="right">Contact No</TableCell>
    <TableCell align="right">Email</TableCell>
    <TableCell align="right">Date</TableCell>
    <TableCell align="right">Time</TableCell>
    
   
    
  </TableRow>
</TableHead>
<TableBody>
  {rows.map((row) => (
    <TableRow
      key={row.nic_Number}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {row.nic_Number}
      </TableCell>
      
      <TableCell align="right">{row.license_Id}</TableCell>
      <TableCell align="right">{row.cus_Name}</TableCell>
      <TableCell align="right">{row.address}</TableCell>
      <TableCell align="right">{row.contact_No}</TableCell>
      <TableCell align="right">{row.email}</TableCell>
      <TableCell align="right">{row.date}</TableCell>
      <TableCell align="right">{row.time}</TableCell>
    
      
    </TableRow>
  ))}
</TableBody>
</Table>
</TableContainer>

    </div>
</section>
  );
}
