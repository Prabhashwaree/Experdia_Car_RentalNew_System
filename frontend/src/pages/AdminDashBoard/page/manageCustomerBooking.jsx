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


import customerService from '../../../service/customer';

import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';



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


class ManageCustomerBooking extends Component {
        constructor(props){
          super(props)
          this.state = {
            CustomerFormData:{
              nic_Number:'',
              license_Id:'',
              cus_Name:'',
              address:'',
              contact_No:'',
              email:'',
              userName:'',
              password:'',  
            },
            data:[]
    
          }
        }


        exampleForMap = () =>{
          this.state.data.map((value,index) =>{
            console.log(value.index)
          });
        }

        loadData = async () =>{
          console.log("load method Calling")
          let res =await  customerService.GetCustomer();
          console.log("rental data " + res.data.data);
        
          if(res.status === 200){
             this.setState({
            data :res.data.data
            });
          }
          console.log(this.state.data);

          this.exampleForMap();
         }

         componentDidMount() { 
          this.loadData();
       }



        
      render(){
        return (  
          <>

          {/* ------------------------Customer -------------------------------------- */}
          
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
                     Customer Information
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
                      <StyledTableCell align="right">UserName</StyledTableCell>
                      <StyledTableCell align="right">Password</StyledTableCell>
                      <StyledTableCell align="right">Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  

                {
                  this.state.data.map((row) => (
                    <TableRow>
                    <TableCell>{row.nic_Number}</TableCell>
                    <StyledTableCell align="right">{row.license_Id}</StyledTableCell>
                    <StyledTableCell align="right">{row.cus_Name}</StyledTableCell>
    
                    <StyledTableCell align="right">{row.address}</StyledTableCell>
                    <StyledTableCell align="right">{row.contact_No}</StyledTableCell>
                    <StyledTableCell align="right">{row.email}</StyledTableCell>
                    <StyledTableCell align="right">{row.userName}</StyledTableCell>
                    <StyledTableCell align="right">{row.password}</StyledTableCell>
                    
                     <StyledTableCell align="right">

                     <Tooltip title="Delete"><IconButton
                                        onClick={() => {
                                            this.deleteCustomer(row.nic_Number)
                                        }}
                                    ><DeleteIcon color="error" /></IconButton>
                                    </Tooltip>

                                    {/* <Tooltip title="Edit"><IconButton
                                        onClick={() => {
                                            console.log("edit icon clicked!")
                                            this.updateRentalRate(row);
                                        }}
                                    ><EditIcon color='primary'/></IconButton>
                                    </Tooltip> */}
                     </StyledTableCell>
                  </TableRow>
                  ))

                 
                }


                
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
                      
                        </TableBody>
                      </Table>
                      </TableContainer>
                            </div>
                        </section>
          
          
          
            </>
        );

      }
}
 export default ManageCustomerBooking;