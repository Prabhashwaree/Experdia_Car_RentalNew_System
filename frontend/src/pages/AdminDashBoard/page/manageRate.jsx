// import * as React from 'react';
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
import rentalRateService from '../../../service/rentalRate';

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


class ManageRate extends Component {
          constructor(props){
            super(props)
            this.state = {
              FormData:{
                rate_Id:'',
                brand:'',
                type:'',
                daily_Rate:'',
                free_KM_Day:'',
                free_KM_Month:'',
                monthly_Rate:'',
                pricePerExtraKM:''
              },
              data: [],
             
            }
            
          }

          
          deleteRentalRate  = async (id) => { 
            let params = {
              rate_Id: id
            }
             let res = await rentalRateService.deleteRates(params);

             if(res.status === 200) {
              this.setState({
                  alert: true,
                  message: res.data.message,
                  severity: 'success'
              });
              this.loadData();
           } else {
              this.setState({
                  alert: true,
                  message: res.data.message,
                  severity: 'error'
              });
           }
        
           }; 
        


                exampleForMap = () =>{
          this.state.data.map((value,index) =>{
            console.log(value.index)
          });
        }

        loadData = async () =>{
          console.log("load method Calling")
          let res =await rentalRateService.GetRentalRates();
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
                
      <section>
          <div>
          <Typography variant="h5" noWrap component="div" style={{position: "absolute",left:"120px",top:"118px",zIndex:"2",color:"black"}}>
                Manage Rental Rate Details
                </Typography>
                <Input placeholder="Search" inputProps={ariaLabel} style={{position: "absolute",left:"880px",top:"110px",width:"30%"}}/>
          <img src={Search}style={{position: "absolute",left:"1230px",top:"110px",width:"2%"}}/>
    
          <TableContainer component={Paper} style={{width:"94%",left:"30px",top:"20px",position:"relative",top:"90px"}}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>RateId</StyledTableCell>
                <StyledTableCell align="right">Brand</StyledTableCell>
                <StyledTableCell align="right">Type</StyledTableCell>

                <StyledTableCell align="right">FreeKMDay</StyledTableCell>
                <StyledTableCell align="right">FreeKMMonth</StyledTableCell>
                <StyledTableCell align="right">MonthlyRate</StyledTableCell>
                <StyledTableCell align="right">PricePerExtraKM</StyledTableCell>
                 <StyledTableCell align="right">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                {
                  this.state.data.map((row) => (
                    <TableRow>
                    <TableCell>{row.rate_Id}</TableCell>
                    <StyledTableCell align="right">{row.brand}</StyledTableCell>
                    <StyledTableCell align="right">{row.type}</StyledTableCell>
    
                    <StyledTableCell align="right">{row.free_KM_Day}</StyledTableCell>
                    <StyledTableCell align="right">{row.free_KM_Month}</StyledTableCell>
                    <StyledTableCell align="right">{row.monthly_Rate}</StyledTableCell>
                    <StyledTableCell align="right">{row.pricePerExtraKM}</StyledTableCell>
                     <StyledTableCell align="right">

                     <Tooltip title="Delete"><IconButton
                                        onClick={() => {
                                            this.deleteRentalRate(row.rate_Id)
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
                
         </>
       );

     }
}
      export default ManageRate;