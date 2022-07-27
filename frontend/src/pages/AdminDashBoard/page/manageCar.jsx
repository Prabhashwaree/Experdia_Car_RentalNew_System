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


import carService from '../../../service/car';

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


class ManageCar extends Component {
  constructor(props){
    super(props)
    this.state = {
      CarFormData:{
        register_No:'',
        brand:'',
        type:'',
        no_Passenger:'',
        transmission_Type:'',
        fuel:'',
        colour:'',
        lossDamagePrice:'',

        rentalRate:{
                r_Id:'',
                brand:'',
                type:'',
                daily_Rate:'',
                free_KM_Day:'',
                free_KM_Month:'',
                monthly_Rate:'',
                pricePerExtraKM:''
              }
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
    let res =await carService.GetCar();
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
         <div style={{position: "absolute",left:"120px",top:"118px",zIndex:"2",color:"black"}}>
       <Typography variant="h5" noWrap component="div" >
              Manage Car Details
             </Typography>
             </div>
             <Input placeholder="Search" inputProps={ariaLabel} style={{position: "absolute",left:"880px",top:"110px",width:"30%"}}/>
            <img src={Search}style={{position: "absolute",left:"1230px",top:"110px",width:"2%"}}/>
    
       <TableContainer component={Paper} style={{width:"94%",left:"30px",top:"20px",position:"relative",top:"90px"}}>
       <Table sx={{ minWidth: 700 }} aria-label="customized table">
         <TableHead>
           <TableRow>
             <StyledTableCell>RegisterNo</StyledTableCell>
             <StyledTableCell align="right">Brand</StyledTableCell>
             <StyledTableCell align="right">Type</StyledTableCell>
   
             <StyledTableCell align="right">NoPassenger</StyledTableCell>
             <StyledTableCell align="right">TransmissionType</StyledTableCell>
             <StyledTableCell align="right">Fuel</StyledTableCell>
             <StyledTableCell align="right">Colour</StyledTableCell>
             <StyledTableCell align="right">LossDamagePrice</StyledTableCell>
             <StyledTableCell align="right">RateId</StyledTableCell>
             <StyledTableCell align="right">Action</StyledTableCell>
           </TableRow>
         </TableHead>
         <TableBody>
          

         {
                  this.state.data.map((row) => (
                    <TableRow>
                    <TableCell>{row.register_No}</TableCell>
                    <StyledTableCell align="right">{row.brand}</StyledTableCell>
                    <StyledTableCell align="right">{row.type}</StyledTableCell>
    
                    <StyledTableCell align="right">{row.no_Passenger}</StyledTableCell>
                    <StyledTableCell align="right">{row.transmission_Type}</StyledTableCell>
                    <StyledTableCell align="right">{row.fuel}</StyledTableCell>
                    <StyledTableCell align="right">{row.colour}</StyledTableCell>
                    <StyledTableCell align="right">{row.lossDamagePrice}</StyledTableCell>
                    <StyledTableCell align="right">{row.rentalRate.r_Id}</StyledTableCell>
                    
                     <StyledTableCell align="right">

                     <Tooltip title="Delete"><IconButton
                                        onClick={() => {
                                            this.deleteCar(row.register_No)
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
export default ManageCar;
